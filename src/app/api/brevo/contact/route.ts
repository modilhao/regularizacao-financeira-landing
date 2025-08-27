import { NextRequest, NextResponse } from 'next/server';
import { BrevoContact } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: BrevoContact = await request.json();
    
    // Validate required fields
    if (!body.email || !body.attributes.NOME) {
      return NextResponse.json(
        { error: 'Email e nome são obrigatórios' },
        { status: 400 }
      );
    }

    // Prepare Brevo API request
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || ''
      },
      body: JSON.stringify({
        email: body.email,
        attributes: body.attributes,
        listIds: body.listIds,
        updateEnabled: body.updateEnabled
      })
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();
      console.error('Erro na API Brevo:', errorData);
      
      // Handle specific Brevo errors
      if (brevoResponse.status === 400 && errorData.code === 'duplicate_parameter') {
        // Contact already exists, try to update
        const updateResponse = await updateBrevoContact(body);
        if (updateResponse.ok) {
          return NextResponse.json({ success: true, updated: true });
        }
      }
      
      return NextResponse.json(
        { error: 'Erro ao processar solicitação' },
        { status: 500 }
      );
    }

    const result = await brevoResponse.json();
    
    return NextResponse.json({
      success: true,
      id: result.id,
      message: 'Contato criado com sucesso'
    });
    
  } catch (error) {
    console.error('Erro na API de contato:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// Update existing contact
async function updateBrevoContact(contact: BrevoContact) {
  return fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(contact.email)}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY || ''
    },
    body: JSON.stringify({
      attributes: contact.attributes,
      listIds: contact.listIds
    })
  });
}