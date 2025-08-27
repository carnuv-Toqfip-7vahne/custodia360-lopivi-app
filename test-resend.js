// Test directo de Resend
const { Resend } = require('resend')

const resend = new Resend('re_ceW6KiH4_HGs21ba2gCaaZ5Zsba7JKRSB')

async function testEmail() {
  console.log('🧪 Probando Resend...')

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['rsuneo1971@gmail.com'],
      subject: 'Test desde Custodia360',
      html: '<h1>¡Hola!</h1><p>Este es un email de prueba desde Custodia360.</p><p>Si recibes este mensaje, ¡el sistema funciona!</p>'
    })

    if (error) {
      console.error('❌ Error de Resend:', error)
      return false
    }

    console.log('✅ Email enviado correctamente!')
    console.log('📧 ID del email:', data.id)
    console.log('🎯 Revisa tu email: info@custodia360.es')
    return true

  } catch (error) {
    console.error('❌ Error general:', error.message)
    return false
  }
}

testEmail()
