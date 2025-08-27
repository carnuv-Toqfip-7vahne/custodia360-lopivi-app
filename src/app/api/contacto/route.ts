import { NextResponse } from 'next/server'
import { resend, FROM_EMAIL, emailTemplates } from '@/lib/resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, empresa, mensaje } = body

    // Validaciones básicas
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son obligatorios' },
        { status: 400 }
      )
    }

    // Email al administrador
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ['rsuneo1971@gmail.com'],
      subject: emailTemplates.contacto.subject,
      html: emailTemplates.contacto.toAdmin({
        nombre,
        email,
        telefono,
        empresa,
        mensaje
      })
    })

    // Email de confirmación al usuario (en modo sandbox va a la dirección verificada)
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ['rsuneo1971@gmail.com'], // Sandbox mode: cambiar por [email] en producción
      subject: 'Gracias por contactar con Custodia360',
      html: emailTemplates.contacto.toUser({
        nombre,
        mensaje
      })
    })

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error enviando email:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
