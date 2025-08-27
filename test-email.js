// Test rápido de emails
// Ejecuta: node test-email.js

const testEmail = async () => {
  console.log('🧪 Probando sistema de emails...')

  try {
    const response = await fetch('http://localhost:3000/api/contacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: 'Test Usuario',
        email: 'test@ejemplo.com',
        telefono: '600123456',
        empresa: 'Empresa Test',
        mensaje: 'Este es un email de prueba del sistema'
      })
    })

    if (response.ok) {
      console.log('✅ ¡Email enviado correctamente!')
      console.log('📧 Revisa tu bandeja de entrada')
    } else {
      console.log('❌ Error enviando email')
      console.log('Respuesta:', await response.text())
    }
  } catch (error) {
    console.log('❌ Error de conexión:', error.message)
    console.log('💡 ¿Está corriendo el servidor? (bun run dev)')
  }
}

testEmail()
