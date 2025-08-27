import { Resend } from 'resend'
import { professionalEmailTemplates } from './email-templates'

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is required')
}

export const resend = new Resend(process.env.RESEND_API_KEY)

export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'noreply@custodia360.com'

// Templates básicos (mantenemos para contacto)
export const emailTemplates = {
  contacto: {
    subject: 'Nueva consulta desde Custodia360',
    toAdmin: (data: any) => `
      <h2>Nueva consulta recibida</h2>
      <p><strong>Nombre:</strong> ${data.nombre}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Teléfono:</strong> ${data.telefono || 'No proporcionado'}</p>
      <p><strong>Empresa:</strong> ${data.empresa || 'No proporcionada'}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${data.mensaje}</p>
      <hr>
      <p><small>Enviado desde custodia360.com</small></p>
    `,
    toUser: (data: any) => `
      <h2>Gracias por contactar con Custodia360</h2>
      <p>Hola ${data.nombre},</p>
      <p>Hemos recibido tu consulta y nos pondremos en contacto contigo en un plazo máximo de 24 horas.</p>
      <p><strong>Tu consulta:</strong></p>
      <p>${data.mensaje}</p>
      <hr>
      <p>Mientras tanto, puedes:</p>
      <ul>
        <li><a href="https://custodia360.com/planes">Ver nuestros planes</a></li>
        <li><a href="https://custodia360.com/guia">Consultar nuestra guía</a></li>
        <li><a href="https://custodia360.com/demo">Solicitar una demo</a></li>
      </ul>
      <p>Gracias por confiar en nosotros.</p>
      <p><strong>Equipo Custodia360</strong></p>
    `
  }
}

// Función para enviar secuencia completa de emails de contratación
export async function enviarSecuenciaContratacion(datosContratacion: any) {
  try {
    // Generar códigos únicos para accesos
    const codigoAcceso = Math.random().toString(36).substring(2, 8).toUpperCase()
    const codigoCurso = Math.random().toString(36).substring(2, 6).toUpperCase()
    const codigo2FA = Math.random().toString(36).substring(2, 8).toUpperCase()
    const codigoEncuesta = Math.random().toString(36).substring(2, 10)
    const codigoReunion = Math.random().toString(36).substring(2, 10)

    // Preparar datos completos
    const emailData = {
      ...datosContratacion,
      codigoAcceso,
      codigoCurso,
      codigo2FA,
      codigoEncuesta,
      codigoReunion,
      passwordFormacion: 'Form' + Math.random().toString(36).substring(2, 8)
    }

    // EMAIL INMEDIATO - Bienvenida al contratante
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ['rsuneo1971@gmail.com'], // Sandbox: cambiar por emailData.emailContratante en producción
      subject: professionalEmailTemplates.bienvenidaContratante.subject(emailData),
      html: professionalEmailTemplates.bienvenidaContratante.html(emailData)
    })

    // EMAIL INMEDIATO - Notificación al admin (interno)
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ['rsuneo1971@gmail.com'],
      subject: `🎉 Nueva contratación profesional - ${emailData.empresa}`,
      html: `
        <h2>🎉 Nueva contratación recibida</h2>
        <p><strong>Plan:</strong> ${emailData.plan}</p>
        <p><strong>Empresa:</strong> ${emailData.empresa}</p>
        <p><strong>CIF:</strong> ${emailData.cif}</p>
        <p><strong>Contacto:</strong> ${emailData.nombre}</p>
        <p><strong>Email:</strong> ${emailData.emailContratante}</p>
        <p><strong>Teléfono:</strong> ${emailData.telefono}</p>
        <p><strong>Menores:</strong> ${emailData.menores}</p>
        <p><strong>Delegado:</strong> ${emailData.nombreDelegado} (${emailData.emailDelegado})</p>
        ${emailData.suplente ? `<p><strong>Suplente:</strong> ${emailData.nombreSuplente} (${emailData.emailSuplente})</p>` : ''}
        <hr>
        <p><strong>Códigos generados:</strong></p>
        <ul>
          <li>Acceso docs: DOC-${codigoAcceso}</li>
          <li>Curso: LOPIVI-${codigoCurso}</li>
          <li>2FA: ${codigo2FA}</li>
        </ul>
      `
    })

    console.log('✅ Emails inmediatos enviados')

    // Programar emails +1 hora (simulación inmediata para demo)
    // En producción, estos se enviarían con un scheduler como cron jobs
    setTimeout(async () => {
      try {
        // EMAIL 1: Asignación del delegado
        await resend.emails.send({
          from: FROM_EMAIL,
          to: ['rsuneo1971@gmail.com'], // Sandbox: cambiar por emailData.emailDelegado en producción
          subject: professionalEmailTemplates.asignacionDelegado.subject(emailData),
          html: professionalEmailTemplates.asignacionDelegado.html(emailData)
        })

        // EMAIL 2: Documentación personalizada
        await resend.emails.send({
          from: FROM_EMAIL,
          to: ['rsuneo1971@gmail.com'], // Sandbox: cambiar por emailData.emailDelegado en producción
          subject: professionalEmailTemplates.documentacionLista.subject(emailData),
          html: professionalEmailTemplates.documentacionLista.html(emailData)
        })

        // EMAIL 3: Credenciales de acceso
        await resend.emails.send({
          from: FROM_EMAIL,
          to: ['rsuneo1971@gmail.com'], // Sandbox: cambiar por emailData.emailDelegado en producción
          subject: professionalEmailTemplates.credencialesAcceso.subject(emailData),
          html: professionalEmailTemplates.credencialesAcceso.html(emailData)
        })

        // Si hay suplente, enviar los mismos emails
        if (emailData.suplente && emailData.emailSuplente) {
          const suplenteData = { ...emailData, nombreDelegado: emailData.nombreSuplente, emailDelegado: emailData.emailSuplente }

          await resend.emails.send({
            from: FROM_EMAIL,
            to: ['rsuneo1971@gmail.com'], // Sandbox: cambiar por emailData.emailSuplente en producción
            subject: professionalEmailTemplates.asignacionDelegado.subject(suplenteData),
            html: professionalEmailTemplates.asignacionDelegado.html(suplenteData)
          })

          await resend.emails.send({
            from: FROM_EMAIL,
            to: ['rsuneo1971@gmail.com'], // Sandbox: cambiar por emailData.emailSuplente en producción
            subject: professionalEmailTemplates.documentacionLista.subject(suplenteData),
            html: professionalEmailTemplates.documentacionLista.html(suplenteData)
          })

          await resend.emails.send({
            from: FROM_EMAIL,
            to: ['rsuneo1971@gmail.com'], // Sandbox: cambiar por emailData.emailSuplente en producción
            subject: professionalEmailTemplates.credencialesAcceso.subject(suplenteData),
            html: professionalEmailTemplates.credencialesAcceso.html(suplenteData)
          })
        }

        console.log('✅ Emails +1 hora enviados')
      } catch (error) {
        console.error('❌ Error enviando emails +1 hora:', error)
      }
    }, 5000) // 5 segundos para demo (1 hora = 3600000ms en producción)

    // Programar email de check-up +1 semana (simulación para demo)
    setTimeout(async () => {
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: ['rsuneo1971@gmail.com'], // Sandbox: cambiar por emailData.emailContratante en producción
          subject: professionalEmailTemplates.checkupSatisfaccion.subject(emailData),
          html: professionalEmailTemplates.checkupSatisfaccion.html({
            ...emailData,
            accesos: 12,
            personalFormado: '85%',
            documentosRevisados: 8,
            tiempoOperativo: '168h'
          })
        })

        console.log('✅ Email check-up semanal enviado')
      } catch (error) {
        console.error('❌ Error enviando email check-up:', error)
      }
    }, 10000) // 10 segundos para demo (1 semana = 604800000ms en producción)

    return { success: true, message: 'Secuencia de emails iniciada correctamente' }

  } catch (error) {
    console.error('❌ Error en secuencia de emails:', error)
    return { success: false, error: error.message }
  }
}
