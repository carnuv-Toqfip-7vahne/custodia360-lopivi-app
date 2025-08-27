export const emailBranding = {
  colors: {
    primary: '#EA580C', // Orange-600
    secondary: '#DC2626', // Red-600
    success: '#059669', // Green-600
    background: '#F9FAFB', // Gray-50
    text: '#111827', // Gray-900
    textLight: '#6B7280' // Gray-500
  },
  logo: 'https://custodia360.com/logo.png' // Placeholder
}

// Template base con branding
const emailWrapper = (content: string, title: string) => `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body { margin: 0; padding: 0; background-color: ${emailBranding.colors.background}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .container { max-width: 600px; margin: 0 auto; background-color: white; }
    .header { background: linear-gradient(135deg, ${emailBranding.colors.primary} 0%, ${emailBranding.colors.secondary} 100%); padding: 30px 20px; text-align: center; }
    .logo { display: flex; align-items: center; justify-content: center; color: white; }
    .logo-icon { width: 40px; height: 40px; background-color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: ${emailBranding.colors.primary}; font-weight: bold; font-size: 20px; margin-right: 12px; }
    .content { padding: 40px 30px; }
    .footer { background-color: #1F2937; color: white; padding: 30px; text-align: center; font-size: 14px; }
    .btn { display: inline-block; padding: 12px 24px; background-color: ${emailBranding.colors.primary}; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
    .btn:hover { background-color: #C2410C; }
    .alert { background-color: #FEF3C7; border: 1px solid #F59E0B; border-radius: 8px; padding: 16px; margin: 20px 0; }
    .success { background-color: #D1FAE5; border: 1px solid ${emailBranding.colors.success}; }
    h1 { color: ${emailBranding.colors.text}; font-size: 24px; margin-bottom: 16px; }
    h2 { color: ${emailBranding.colors.primary}; font-size: 20px; margin: 24px 0 12px 0; }
    h3 { color: ${emailBranding.colors.text}; font-size: 16px; margin: 20px 0 8px 0; }
    p { color: ${emailBranding.colors.text}; line-height: 1.6; margin-bottom: 16px; }
    .text-light { color: ${emailBranding.colors.textLight}; }
    ul { padding-left: 20px; }
    li { margin-bottom: 8px; color: ${emailBranding.colors.text}; }
    .timeline { border-left: 3px solid ${emailBranding.colors.primary}; padding-left: 20px; margin: 20px 0; }
    .timeline-item { margin-bottom: 20px; }
    .timeline-time { color: ${emailBranding.colors.primary}; font-weight: 600; }
    .credentials-box { background-color: #F3F4F6; border: 2px solid ${emailBranding.colors.primary}; border-radius: 8px; padding: 20px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">
        <div class="logo-icon">C</div>
        <div>
          <h1 style="color: white; margin: 0; font-size: 28px;">Custodia360</h1>
          <p style="color: white; margin: 0; opacity: 0.9;">Protección LOPIVI Integral</p>
        </div>
      </div>
    </div>
    <div class="content">
      ${content}
    </div>
    <div class="footer">
      <p><strong>Custodia360</strong> - Primera empresa automatizada de España especializada en cumplimiento LOPIVI</p>
      <p>📧 info@custodia360.com | 📞 +34 900 123 456 | 🌐 custodia360.com</p>
      <p>© 2025 Sportsmotherland, S.L. - Todos los derechos reservados.</p>
    </div>
  </div>
</body>
</html>
`

export const professionalEmailTemplates = {
  // EMAIL INMEDIATO - Para el contratante
  bienvenidaContratante: {
    subject: (data: any) => `Bienvenido a Custodia360 - Contratación confirmada (${data.plan})`,
    html: (data: any) => emailWrapper(`
      <h1>¡Bienvenido a Custodia360! 🎉</h1>

      <p>Estimado/a ${data.nombre},</p>

      <p>Gracias por contratar nuestros servicios. Hemos recibido y confirmado su contratación del <strong>${data.plan}</strong> para <strong>${data.empresa}</strong>.</p>

      <div class="alert success">
        <h3>✅ Contratación Confirmada</h3>
        <p><strong>Plan:</strong> ${data.plan}<br>
        <strong>Empresa:</strong> ${data.empresa}<br>
        <strong>Número de menores:</strong> ${data.menores}<br>
        <strong>Fecha:</strong> ${new Date().toLocaleDateString('es-ES')}</p>
      </div>

      <h2>📋 Próximos Pasos Automatizados</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-time">Próxima 1 hora</div>
          <p>Su delegado recibirá toda la información, documentación y credenciales de acceso.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-time">24-48 horas</div>
          <p>Formación del delegado completada y sistema certificado.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-time">72 horas máximo</div>
          <p><strong>Sistema 100% operativo</strong> - Su entidad estará completamente protegida.</p>
        </div>
      </div>

      <h2>📞 Soporte Inmediato</h2>
      <p>Nuestro equipo estará disponible durante todo el proceso:</p>
      <ul>
        <li><strong>WhatsApp:</strong> +34 600 123 456</li>
        <li><strong>Email:</strong> soporte@custodia360.com</li>
        <li><strong>Teléfono:</strong> +34 900 123 456</li>
      </ul>

      <div class="alert">
        <p><strong>🔒 Tranquilidad Total:</strong> A partir de ahora, su entidad está oficialmente en proceso de cumplimiento LOPIVI. No tiene que preocuparse de nada más.</p>
      </div>

      <p>Gracias por confiar en nosotros para proteger a los menores de su entidad.</p>

      <p>Atentamente,<br>
      <strong>Equipo Custodia360</strong></p>
    `, 'Bienvenido a Custodia360')
  },

  // EMAIL +1H - Asignación del delegado
  asignacionDelegado: {
    subject: (data: any) => `Su asignación como Delegado de Protección - ${data.empresa}`,
    html: (data: any) => emailWrapper(`
      <h1>Bienvenido, ${data.nombreDelegado} 👨‍💼</h1>

      <div class="alert success">
        <h3>🎯 Ha sido asignado como Delegado de Protección</h3>
        <p><strong>Entidad:</strong> ${data.empresa}<br>
        <strong>Plan:</strong> ${data.plan}<br>
        <strong>Número de menores:</strong> ${data.menores}</p>
      </div>

      <h2>📋 Sus Responsabilidades Inmediatas</h2>
      <ol>
        <li><strong>Revisar la documentación</strong> que recibirá en el siguiente email</li>
        <li><strong>Completar la formación online</strong> (6h 30min - disponible 24/7)</li>
        <li><strong>Acceder al dashboard</strong> con las credenciales que recibirá</li>
        <li><strong>Realizar el test de certificación</strong> (disponible tras la formación)</li>
      </ol>

      <h2>⏰ Timeline de Implementación</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-time">Próximos minutos</div>
          <p>Recibirá 2 emails adicionales con documentación y credenciales</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-time">Primeras 24h</div>
          <p>Complete la formación LOPIVI (puede hacerla a su ritmo)</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-time">24-48h</div>
          <p>Realice el test de certificación y active el sistema</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-time">72h máximo</div>
          <p><strong>Sistema operativo</strong> - La entidad estará protegida</p>
        </div>
      </div>

      <h2>🆘 Soporte Especializado</h2>
      <p>Como delegado, tiene acceso prioritario a nuestro soporte:</p>
      <ul>
        <li><strong>WhatsApp Delegados:</strong> +34 611 234 567</li>
        <li><strong>Email Técnico:</strong> delegados@custodia360.com</li>
        <li><strong>Línea Emergencias:</strong> +34 900 LOPIVI (24/7)</li>
      </ul>

      <div class="alert">
        <p><strong>⚡ Importante:</strong> En caso de emergencia o incidente, contacte inmediatamente a la línea de emergencias. Está operativa 24/7/365.</p>
      </div>

      <p>Bienvenido al equipo de protección infantil.</p>

      <p>Cordialmente,<br>
      <strong>Departamento de Formación<br>Custodia360</strong></p>
    `, 'Asignación como Delegado de Protección')
  },

  // EMAIL +1H - Documentación personalizada
  documentacionLista: {
    subject: (data: any) => `Documentación LOPIVI personalizada - ${data.empresa}`,
    html: (data: any) => emailWrapper(`
      <h1>📄 Documentación Personalizada Lista</h1>

      <p>Estimado/a ${data.nombreDelegado},</p>

      <p>Su documentación LOPIVI personalizada para <strong>${data.empresa}</strong> ha sido generada y está lista para su revisión.</p>

      <h2>📋 Documentos Incluidos</h2>
      <ul>
        <li><strong>Plan de Protección Personalizado</strong> - Específico para ${data.tipoEntidad}</li>
        <li><strong>Protocolos de Actuación</strong> - Procedimientos paso a paso</li>
        <li><strong>Código de Conducta Profesional</strong> - Adaptado a su sector</li>
        <li><strong>Formularios de Comunicación</strong> - Para familias y autoridades</li>
        <li><strong>Manual del Delegado</strong> - Guía completa de funciones</li>
        <li><strong>Certificados Base</strong> - Templates listos para usar</li>
      </ul>

      <div class="credentials-box">
        <h3>📁 Acceso a Documentación</h3>
        <p><strong>Portal:</strong> <a href="https://docs.custodia360.com">docs.custodia360.com</a><br>
        <strong>Usuario:</strong> ${data.emailDelegado}<br>
        <strong>Código de acceso:</strong> DOC-${data.codigoAcceso}</p>
        <p class="text-light">Las credenciales completas llegarán en el siguiente email</p>
      </div>

      <h2>✅ Próximas Acciones</h2>
      <ol>
        <li><strong>Revisar cada documento</strong> - Especialmente el Plan de Protección</li>
        <li><strong>Familiarizarse con los protocolos</strong> - Son específicos de su entidad</li>
        <li><strong>Preparar la comunicación</strong> - Templates para familias incluidos</li>
        <li><strong>Descargar certificados</strong> - Para exposición en las instalaciones</li>
      </ol>

      <div class="alert">
        <p><strong>🔐 Confidencial:</strong> Esta documentación contiene información sensible. Manténgala segura y accesible solo para personal autorizado.</p>
      </div>

      <h2>📞 ¿Dudas sobre la Documentación?</h2>
      <p>Nuestro equipo legal está disponible para resolver cualquier consulta:</p>
      <ul>
        <li><strong>Email Legal:</strong> legal@custodia360.com</li>
        <li><strong>WhatsApp:</strong> +34 611 234 567</li>
        <li><strong>Videoconferencia:</strong> Disponible con cita previa</li>
      </ul>

      <p>Toda la documentación cumple estrictamente con la normativa LOPIVI vigente.</p>

      <p>Cordialmente,<br>
      <strong>Departamento Legal<br>Custodia360</strong></p>
    `, 'Documentación LOPIVI Personalizada')
  },

  // EMAIL +1H - Credenciales de acceso
  credencialesAcceso: {
    subject: (data: any) => `Credenciales de acceso al Dashboard - ${data.empresa}`,
    html: (data: any) => emailWrapper(`
      <h1>🔑 Credenciales de Acceso</h1>

      <p>Estimado/a ${data.nombreDelegado},</p>

      <p>Sus credenciales para el Dashboard de Gestión LOPIVI están listas. Desde aquí controlará todo el sistema de protección de <strong>${data.empresa}</strong>.</p>

      <div class="credentials-box">
        <h3>🖥️ Acceso Principal - Dashboard</h3>
        <p><strong>URL:</strong> <a href="https://app.custodia360.com">app.custodia360.com</a><br>
        <strong>Usuario:</strong> ${data.emailDelegado}<br>
        <strong>Contraseña:</strong> ${data.passwordDelegado}<br>
        <strong>Código 2FA:</strong> ${data.codigo2FA}</p>
      </div>

      <div class="credentials-box">
        <h3>📚 Acceso Formación</h3>
        <p><strong>URL:</strong> <a href="https://formacion.custodia360.com">formacion.custodia360.com</a><br>
        <strong>Usuario:</strong> ${data.emailDelegado}<br>
        <strong>Contraseña:</strong> ${data.passwordFormacion}<br>
        <strong>Curso asignado:</strong> LOPIVI-${data.codigoCurso}</p>
      </div>

      ${data.suplente ? `
      <div class="alert">
        <h3>👥 Delegado Suplente</h3>
        <p>Su delegado suplente <strong>${data.nombreSuplente}</strong> recibirá credenciales separadas en breve.</p>
      </div>
      ` : ''}

      <h2>🎯 ¿Qué encontrará en el Dashboard?</h2>
      <ul>
        <li><strong>Panel de Control</strong> - Estado del cumplimiento en tiempo real</li>
        <li><strong>Registro de Incidentes</strong> - Sistema de comunicación seguro</li>
        <li><strong>Formación del Personal</strong> - Tracking y certificados</li>
        <li><strong>Comunicaciones</strong> - Con familias y autoridades</li>
        <li><strong>Documentación</strong> - Todos sus archivos organizados</li>
        <li><strong>Reportes</strong> - Informes automáticos para inspecciones</li>
      </ul>

      <h2>📱 App Móvil (Opcional)</h2>
      <p>Descargue la app "Custodia360 Delegados" para acceso desde cualquier lugar:</p>
      <ul>
        <li><strong>iOS:</strong> Buscar "Custodia360" en App Store</li>
        <li><strong>Android:</strong> Buscar "Custodia360" en Google Play</li>
        <li><strong>Login:</strong> Use las mismas credenciales</li>
      </ul>

      <div class="alert">
        <p><strong>🔒 Seguridad:</strong> Cambie su contraseña tras el primer acceso. Active la autenticación en dos factores para máxima seguridad.</p>
      </div>

      <a href="https://app.custodia360.com" class="btn">Acceder al Dashboard</a>

      <h2>🆘 Soporte Técnico</h2>
      <ul>
        <li><strong>Chat en vivo:</strong> Disponible en el dashboard</li>
        <li><strong>Email:</strong> soporte@custodia360.com</li>
        <li><strong>WhatsApp:</strong> +34 611 234 567</li>
        <li><strong>Videollamada:</strong> Disponible 9:00-18:00</li>
      </ul>

      <p>¡Bienvenido al sistema más avanzado de protección infantil de España!</p>

      <p>Cordialmente,<br>
      <strong>Departamento Técnico<br>Custodia360</strong></p>
    `, 'Credenciales de Acceso Dashboard')
  },

  // EMAIL +1 SEMANA - Check-up y satisfacción
  checkupSatisfaccion: {
    subject: (data: any) => `Check-up semanal - ¿Cómo va todo? - ${data.empresa}`,
    html: (data: any) => emailWrapper(`
      <h1>📊 Check-up Semanal</h1>

      <p>Estimado/a ${data.nombre},</p>

      <p>Ha pasado una semana desde que implementamos el sistema Custodia360 en <strong>${data.empresa}</strong>. ¿Cómo está funcionando todo?</p>

      <div class="alert success">
        <h3>✅ Estado del Sistema</h3>
        <p><strong>Sistema:</strong> ✅ Operativo<br>
        <strong>Delegado:</strong> ✅ Certificado y activo<br>
        <strong>Documentación:</strong> ✅ Completa y actualizada<br>
        <strong>Cumplimiento:</strong> ✅ 100% LOPIVI</p>
      </div>

      <h2>📈 Métricas de la Semana</h2>
      <ul>
        <li><strong>Accesos al dashboard:</strong> ${data.accesos || 12} veces</li>
        <li><strong>Personal formado:</strong> ${data.personalFormado || '85%'} completado</li>
        <li><strong>Documentos revisados:</strong> ${data.documentosRevisados || 8} de 10</li>
        <li><strong>Sistema operativo:</strong> ${data.tiempoOperativo || '168h'} sin interrupciones</li>
      </ul>

      <h2>💬 Su Opinión es Importante</h2>
      <p>Nos gustaría conocer su experiencia para seguir mejorando:</p>

      <a href="https://feedback.custodia360.com/${data.codigoEncuesta}" class="btn">Completar Encuesta (2 minutos)</a>

      <h2>🔧 ¿Necesita Optimizaciones?</h2>
      <p>Nuestro equipo puede ayudarle con:</p>
      <ul>
        <li><strong>Formación adicional</strong> del personal</li>
        <li><strong>Personalización</strong> de protocolos</li>
        <li><strong>Integración</strong> con otros sistemas</li>
        <li><strong>Comunicación</strong> con familias</li>
      </ul>

      <h2>📞 Reunión de Seguimiento (Opcional)</h2>
      <p>¿Le gustaría una reunión de 15 minutos para revisar el sistema?</p>
      <a href="https://cal.custodia360.com/${data.codigoReunion}" class="btn">Agendar Reunión</a>

      <div class="alert">
        <h3>🎉 ¡Enhorabuena!</h3>
        <p>Su entidad está oficialmente protegida bajo LOPIVI. Puede estar tranquilo/a sabiendo que los menores están seguros.</p>
      </div>

      <h2>🆘 Soporte Continuo</h2>
      <p>Recuerde que nuestro soporte está disponible 24/7:</p>
      <ul>
        <li><strong>Emergencias:</strong> +34 900 LOPIVI</li>
        <li><strong>WhatsApp:</strong> +34 611 234 567</li>
        <li><strong>Email:</strong> soporte@custodia360.com</li>
      </ul>

      <p>Gracias por confiar en Custodia360 para proteger a los menores.</p>

      <p>Cordialmente,<br>
      <strong>Equipo de Atención al Cliente<br>Custodia360</strong></p>
    `, 'Check-up Semanal Custodia360')
  },

  // EMAIL CERTIFICACIÓN COMPLETADA - Para el delegado
  certificacionCompletada: {
    subject: (data: any) => `🎉 ¡Felicitaciones! Certificación LOPIVI completada - ${data.empresa}`,
    html: (data: any) => emailWrapper(`
      <h1>🎉 ¡Felicitaciones, ${data.nombreDelegado}!</h1>

      <div class="alert success">
        <h3>✅ Certificación LOPIVI Completada</h3>
        <p><strong>Delegado:</strong> ${data.nombreDelegado}<br>
        <strong>Entidad:</strong> ${data.empresa}<br>
        <strong>Puntuación del test:</strong> ${data.puntuacionTest || '95/100'}<br>
        <strong>Fecha certificación:</strong> ${new Date().toLocaleDateString('es-ES')}<br>
        <strong>Número de certificado:</strong> LOPIVI-${data.numeroCertificado || data.codigoCurso}-2025</p>
      </div>

      <p>Ha completado exitosamente la formación y certificación como <strong>Delegado de Protección LOPIVI</strong> para ${data.empresa}.</p>

      <h2>📜 Su Certificado Oficial</h2>
      <p>Su certificado digital está disponible para descarga:</p>
      <div class="credentials-box">
        <h3>📁 Descarga de Certificado</h3>
        <p><strong>Portal:</strong> <a href="https://certificados.custodia360.com">certificados.custodia360.com</a><br>
        <strong>Código descarga:</strong> CERT-${data.codigoCertificado || data.codigoAcceso}<br>
        <strong>Formato:</strong> PDF oficial con firma digital</p>
        <a href="https://certificados.custodia360.com/download/${data.codigoCertificado || data.codigoAcceso}" class="btn">Descargar Certificado</a>
      </div>

      <h2>🛡️ Sistema Ahora Operativo</h2>
      <p>Con su certificación completada, el sistema de protección de <strong>${data.empresa}</strong> está ahora:</p>
      <ul>
        <li>✅ <strong>100% operativo</strong> bajo normativa LOPIVI</li>
        <li>✅ <strong>Completamente protegido</strong> ante inspecciones</li>
        <li>✅ <strong>Delegado certificado</strong> oficialmente asignado</li>
        <li>✅ <strong>Dashboard activo</strong> para gestión diaria</li>
      </ul>

      <h2>📋 Sus Responsabilidades Como Delegado Certificado</h2>
      <ol>
        <li><strong>Gestión diaria:</strong> Supervisar el cumplimiento LOPIVI</li>
        <li><strong>Comunicación:</strong> Canal entre familias, personal y autoridades</li>
        <li><strong>Formación:</strong> Asegurar que el personal reciba formación continua</li>
        <li><strong>Incidentes:</strong> Gestionar y comunicar cualquier incidente</li>
        <li><strong>Actualizaciones:</strong> Mantener documentación al día</li>
      </ol>

      <h2>📱 Herramientas Disponibles</h2>
      <ul>
        <li><strong>Dashboard principal:</strong> <a href="https://app.custodia360.com">app.custodia360.com</a></li>
        <li><strong>App móvil:</strong> "Custodia360 Delegados" (iOS/Android)</li>
        <li><strong>Centro de documentos:</strong> <a href="https://docs.custodia360.com">docs.custodia360.com</a></li>
        <li><strong>Formación continua:</strong> <a href="https://formacion.custodia360.com">formacion.custodia360.com</a></li>
      </ul>

      <div class="alert">
        <h3>🔄 Recordatorio Importante</h3>
        <p><strong>Renovación:</strong> Su certificación es válida por 2 años. Le notificaremos 3 meses antes del vencimiento para la renovación.</p>
      </div>

      <h2>🆘 Soporte Especializado para Delegados</h2>
      <p>Como delegado certificado, tiene acceso prioritario:</p>
      <ul>
        <li><strong>Línea directa:</strong> +34 900 LOPIVI (24/7)</li>
        <li><strong>WhatsApp Delegados:</strong> +34 611 234 567</li>
        <li><strong>Email prioritario:</strong> delegados@custodia360.com</li>
        <li><strong>Consultas legales:</strong> legal@custodia360.com</li>
      </ul>

      <p>¡Gracias por su compromiso con la protección infantil!</p>

      <p>Cordialmente,<br>
      <strong>Departamento de Certificación<br>Custodia360</strong></p>
    `, 'Certificación LOPIVI Completada')
  },

  // EMAIL CERTIFICACIÓN COMPLETADA - Para el contratante (notificación)
  notificacionCertificacionContratante: {
    subject: (data: any) => `✅ Su delegado está certificado - Sistema LOPIVI operativo en ${data.empresa}`,
    html: (data: any) => emailWrapper(`
      <h1>🎉 ¡Excelentes Noticias!</h1>

      <p>Estimado/a ${data.nombre},</p>

      <p>Nos complace informarle que <strong>${data.nombreDelegado}</strong> ha completado exitosamente la certificación como Delegado de Protección LOPIVI para <strong>${data.empresa}</strong>.</p>

      <div class="alert success">
        <h3>✅ Sistema 100% Operativo</h3>
        <p><strong>Delegado certificado:</strong> ${data.nombreDelegado}<br>
        <strong>Fecha certificación:</strong> ${new Date().toLocaleDateString('es-ES')}<br>
        <strong>Número certificado:</strong> LOPIVI-${data.numeroCertificado || data.codigoCurso}-2025<br>
        <strong>Estado LOPIVI:</strong> ✅ Cumplimiento completo</p>
      </div>

      <h2>🛡️ Su Entidad Está Protegida</h2>
      <p>A partir de este momento, <strong>${data.empresa}</strong> cuenta con:</p>
      <ul>
        <li>✅ <strong>Delegado de Protección certificado</strong> oficialmente</li>
        <li>✅ <strong>Plan de protección personalizado</strong> implementado</li>
        <li>✅ <strong>Protocolos de actuación</strong> específicos</li>
        <li>✅ <strong>Documentación completa</strong> LOPIVI</li>
        <li>✅ <strong>Sistema de gestión</strong> operativo 24/7</li>
      </ul>

      <h2>📊 Acceso para Administradores</h2>
      <p>Como contratante, usted tiene acceso al panel de supervisión:</p>
      <div class="credentials-box">
        <h3>🖥️ Panel de Administración</h3>
        <p><strong>URL:</strong> <a href="https://admin.custodia360.com">admin.custodia360.com</a><br>
        <strong>Usuario:</strong> ${data.emailDashboard || data.emailContratante}<br>
        <strong>Ver:</strong> Reportes, estado del sistema, certificados</p>
        <a href="https://admin.custodia360.com" class="btn">Acceder al Panel</a>
      </div>

      <h2>📋 ¿Qué Puede Esperar Ahora?</h2>
      <ul>
        <li><strong>Tranquilidad total:</strong> Su entidad cumple 100% con LOPIVI</li>
        <li><strong>Protección ante inspecciones:</strong> Documentación siempre actualizada</li>
        <li><strong>Comunicación fluida:</strong> Con familias y autoridades</li>
        <li><strong>Gestión profesional:</strong> De cualquier incidente</li>
        <li><strong>Formación continua:</strong> Del personal que trabaja con menores</li>
      </ul>

      <h2>📜 Certificado para Exposición</h2>
      <p>Puede descargar el certificado oficial para exhibir en sus instalaciones:</p>
      <a href="https://certificados.custodia360.com/entidad/${data.codigoEntidad || data.codigoAcceso}" class="btn">Descargar Certificado de Entidad</a>

      <div class="alert">
        <h3>🔔 Próximos Pasos Automáticos</h3>
        <p>Nuestro sistema se encargará automáticamente de:</p>
        <ul>
          <li>Mantener la documentación actualizada</li>
          <li>Recordatorios de formación del personal</li>
          <li>Notificaciones de renovaciones</li>
          <li>Reportes mensuales de cumplimiento</li>
        </ul>
      </div>

      <h2>🆘 Soporte Siempre Disponible</h2>
      <p>Nuestro equipo sigue a su disposición:</p>
      <ul>
        <li><strong>Para usted:</strong> soporte@custodia360.com</li>
        <li><strong>Para su delegado:</strong> delegados@custodia360.com</li>
        <li><strong>Emergencias:</strong> +34 900 LOPIVI (24/7)</li>
        <li><strong>WhatsApp:</strong> +34 611 234 567</li>
      </ul>

      <h2>📞 ¿Le Gustaría una Llamada de Confirmación?</h2>
      <p>Nuestro equipo puede llamarle para confirmar que todo está perfecto:</p>
      <a href="https://cal.custodia360.com/confirmacion/${data.codigoReunion || data.codigoAcceso}" class="btn">Solicitar Llamada</a>

      <p>¡Gracias por confiar en Custodia360 para proteger a los menores de su entidad!</p>

      <p>Cordialmente,<br>
      <strong>Equipo Custodia360</strong><br>
      <em>Primera empresa automatizada de España especializada en cumplimiento LOPIVI</em></p>
    `, 'Sistema LOPIVI Operativo')
  }
}
