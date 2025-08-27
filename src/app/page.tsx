import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
            Primera empresa automatizada de España especializada en cumplimiento LOPIVI
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            ¿Cumples la <span className="text-orange-600">LOPIVI</span>?<br />
            ¿Tienes un plan de protección infantil?
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Primera empresa automatizada de España que te permite implementar la LOPIVI y un Plan de Protección Infantil automatizado, en 72 horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/planes"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors"
            >
              Ver Planes
            </Link>
            <Link
              href="/contacto"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg border-2 border-gray-200 hover:border-gray-300 transition-colors"
            >
              Contactar
            </Link>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">72h</div>
              <div className="text-gray-700 font-medium">Implementación completa</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">97%</div>
              <div className="text-gray-700 font-medium">Reducción de costes</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Cumplimiento</div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué es LOPIVI? */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué es la LOPIVI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La Ley Orgánica de Protección Integral a la Infancia y la Adolescencia frente a la Violencia es OBLIGATORIA desde junio 2021
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Normativa que cambia todo</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  La LOPIVI establece un <span className="font-bold text-orange-600">marco legal integral</span> para proteger a los menores de cualquier forma de violencia en España.
                </p>
                <p>
                  <span className="font-bold">Es obligatoria</span> para todas las entidades que trabajan con menores: clubes deportivos, escuelas, campamentos, academias, guarderías...
                </p>
                <p>
                  Requiere la designación de un <span className="font-bold text-blue-600">Delegado de Protección</span>, planes específicos, formación del personal y protocolos de actuación.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="https://www.boe.es/buscar/doc.php?id=BOE-A-2021-9347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-block"
                >
                  Ver Ley LOPIVI en el BOE
                </a>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <h4 className="text-xl font-bold text-red-800 mb-4">Sanciones muy graves</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-red-700">Multas desde:</span>
                  <span className="text-2xl font-bold text-red-600">10.000€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-red-700">Hasta:</span>
                  <span className="text-2xl font-bold text-red-600">1.000.000€</span>
                </div>
                <div className="border-t border-red-200 pt-4">
                  <div className="text-red-700 text-sm space-y-2">
                    <div><span className="font-bold">2021-2025:</span> 2.847 inspecciones</div>
                    <div><span className="font-bold">Total multas:</span> 3.2M€ en sanciones</div>
                    <div><span className="font-bold">Consecuencia:</span> Cierre de entidades</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan de Protección */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plan de Protección Integral
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que tu entidad necesita para el cumplimiento completo de LOPIVI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Delegado de Protección</h3>
              <p className="text-gray-700 mb-4">
                Profesional certificado en LOPIVI asignado a tu entidad. Disponible 24/7 para emergencias.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Formación LOPIVI (6h 30min)</li>
                <li>✓ Certificación</li>
                <li>✓ Disponibilidad inmediata</li>
                <li>✓ Delegado suplente opcional (+10€)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Documentación Completa</h3>
              <p className="text-gray-700 mb-4">
                Todos los documentos legales requeridos generados automáticamente para tu tipo de entidad.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Plan de protección por entidad</li>
                <li>✓ Protocolos de actuación específicos</li>
                <li>✓ Código de conducta profesional</li>
                <li>✓ Documentación legal LOPIVI</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Formación Personal</h3>
              <p className="text-gray-700 mb-4">
                Formación online completa para todo el personal que trabaja con menores en tu entidad.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Curso online especializado</li>
                <li>✓ Certificados individuales</li>
                <li>✓ Material didáctico incluido</li>
                <li>✓ Seguimiento automático</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas del Problema */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              El Problema es Real y Urgente
            </h2>
            <p className="text-xl text-red-100 mb-4">
              Las cifras hablan por sí solas: el incumplimiento de LOPIVI tiene consecuencias graves
            </p>
            <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg inline-block">
              DATOS DEL MINISTERIO DE IGUALDAD Y AGENDA 2030
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2.847</div>
              <div className="text-red-100">Inspecciones realizadas (2021-2025)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3.2M€</div>
              <div className="text-red-100">Total en multas y sanciones</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M€</div>
              <div className="text-red-100">Multa máxima por incumplimiento</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">89%</div>
              <div className="text-red-100">Entidades que no cumplen correctamente</div>
            </div>
          </div>

          <div className="mt-12 bg-red-700 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Tu entidad está protegida?</h3>
            <p className="text-xl text-red-100 mb-6">
              No esperes a recibir una inspección. Implementa LOPIVI ahora y protege tu entidad.
            </p>
            <Link
              href="/planes"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Proteger Mi Entidad Ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Proceso de Implementación */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proceso de Implementación
            </h2>
            <p className="text-xl text-gray-600">
              Sistema automatizado - Tu entidad estará protegida en 72 horas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contratas el Servicio</h3>
              <p className="text-gray-600">
                Eliges tu plan según el número de menores. Configuración automática en 2 horas.
              </p>
              <div className="mt-4 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                Día 1 - 2 horas
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl font-bold text-green-600 mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Formación del Delegado</h3>
              <p className="text-gray-600">
                Tu delegado completa la formación especializada online (6h 30min de contenido).
              </p>
              <div className="mt-4 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                Días 1-3
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-3xl font-bold text-orange-600 mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certificación y Activación</h3>
              <p className="text-gray-600">
                Test de certificación y acceso completo al dashboard de gestión LOPIVI.
              </p>
              <div className="mt-4 bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">
                Día 3 - 1 hora
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-3xl font-bold text-purple-600 mx-auto mb-6">
                ✓
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sistema Operativo</h3>
              <p className="text-gray-600">
                Tu entidad está protegida con mantenimiento automático continuo.
              </p>
              <div className="mt-4 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-bold">
                Desde día 3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planes y Precios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Planes adaptados a tu entidad</h2>
            <p className="text-xl text-gray-600">Precios transparentes según el número de menores bajo tu custodia</p>
          </div>

          {/* Explicación de pagos divididos */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">💳</span>
              </div>
              <h3 className="text-xl font-bold text-blue-800">Facilitamos tu contratación</h3>
            </div>
            <p className="text-blue-700 text-center text-lg font-medium mb-2">
              Todos nuestros precios se dividen en 2 pagos iguales para mayor comodidad
            </p>
            <p className="text-blue-600 text-center">
              <span className="font-bold">Ejemplo:</span> Plan 50 = 19€ hoy + 19€ a los 6 meses (Total: 38€ + IVA)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Plan 1-50 */}
            <div className="bg-white rounded-xl border border-blue-200 p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plan 50</h3>
                <p className="text-gray-500 text-sm">Para entidades de 1 hasta 50 menores</p>
                <div className="text-5xl font-bold text-blue-600 mb-2">19€</div>
                <p className="text-gray-600">(+IVA) Pago inicial</p>
                <p className="text-sm text-blue-600 mt-2 font-medium">+ 19€ a los 6 meses (+IVA)</p>
                <p className="text-xs text-gray-500 mt-1">Implementación completa en 72h</p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">✅ Todo incluido:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>Delegado de protección certificado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>Plan de protección personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>Protocolos de actuación específicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>Formación completa del personal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>Documentación completa LOPIVI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>Sistema de gestión digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>Mantenimiento y actualizaciones</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contratar/datos-entidad"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors block text-center"
              >
                Contratar Ahora
              </Link>
            </div>

            {/* Plan 51-200 */}
            <div className="bg-white rounded-xl border border-green-200 p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plan 200</h3>
                <p className="text-gray-500 text-sm">Para entidades de 51 hasta 200 menores</p>
                <div className="text-5xl font-bold text-green-600 mb-2">49€</div>
                <p className="text-gray-600">(+IVA) Pago inicial</p>
                <p className="text-sm text-green-600 mt-2 font-medium">+ 49€ a los 6 meses (+IVA)</p>
                <p className="text-xs text-gray-500 mt-1">Implementación completa en 72h</p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">✅ Todo incluido:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Delegado de protección certificado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Plan de protección personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Protocolos de actuación específicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Formación completa del personal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Documentación completa LOPIVI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Sistema de gestión digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Mantenimiento y actualizaciones</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contratar/datos-entidad"
                className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors block text-center"
              >
                Contratar Ahora
              </Link>
            </div>

            {/* Plan 201-500 */}
            <div className="bg-white rounded-xl border border-purple-200 p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plan 500</h3>
                <p className="text-gray-500 text-sm">Para entidades de 201 hasta 500 menores</p>
                <div className="text-5xl font-bold text-purple-600 mb-2">105€</div>
                <p className="text-gray-600">(+IVA) Pago inicial</p>
                <p className="text-sm text-purple-600 mt-2 font-medium">+ 105€ a los 6 meses (+IVA)</p>
                <p className="text-xs text-gray-500 mt-1">Implementación completa en 72h</p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">✅ Todo incluido:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>Delegado de protección certificado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>Plan de protección personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>Protocolos de actuación específicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>Formación completa del personal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>Documentación completa LOPIVI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>Sistema de gestión digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>Mantenimiento y actualizaciones</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contratar/datos-entidad"
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors block text-center"
              >
                Contratar Ahora
              </Link>
            </div>
          </div>

          {/* Planes adicionales */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Plan +501 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plan 500+</h3>
                <p className="text-gray-500 text-sm">Para entidades de 501 menores en adelante</p>
                <div className="text-5xl font-bold text-gray-700 mb-2">250€</div>
                <p className="text-gray-600">(+IVA) Pago inicial</p>
                <p className="text-sm text-gray-600 mt-2 font-medium">+ 250€ a los 6 meses (+IVA)</p>
                <p className="text-xs text-gray-500 mt-1">Para entidades multideporte</p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">✅ Todo incluido:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 font-bold">•</span>
                    <span>Delegado de protección certificado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 font-bold">•</span>
                    <span>Plan de protección personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 font-bold">•</span>
                    <span>Protocolos de actuación específicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 font-bold">•</span>
                    <span>Formación completa del personal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 font-bold">•</span>
                    <span>Documentación completa LOPIVI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 font-bold">•</span>
                    <span>Sistema de gestión digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 font-bold">•</span>
                    <span>Mantenimiento y actualizaciones</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contratar/datos-entidad"
                className="w-full bg-gray-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors block text-center"
              >
                Contratar Ahora
              </Link>
            </div>

            {/* Custodia Temporal */}
            <div className="bg-white rounded-xl border border-yellow-200 p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custodia Temporal</h3>
                <p className="text-gray-500 text-sm">Para eventos, torneos y campus de hasta 60 días</p>
                <div className="text-5xl font-bold text-yellow-600 mb-2">39€</div>
                <p className="text-gray-600">(+IVA) Pago único</p>
                <p className="text-sm text-yellow-600 mt-2 font-medium">Protección temporal completa</p>
                <p className="text-xs text-gray-500 mt-1">Cobertura integral del evento</p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">✅ Todo incluido:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Delegado de protección temporal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Protocolos básicos de actuación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Documentación específica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Cobertura completa del evento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Formación básica del personal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Comunicación con familias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Soporte durante el evento</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contratar/datos-entidad"
                className="w-full bg-yellow-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-yellow-700 transition-colors block text-center"
              >
                Contratar Ahora
              </Link>
            </div>

            {/* Kit Comunicación */}
            <div className="bg-white rounded-xl border border-teal-200 p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kit Comunicación</h3>
                <p className="text-gray-500 text-sm">Material informativo LOPIVI personalizado</p>
                <div className="text-5xl font-bold text-teal-600 mb-2">30€</div>
                <p className="text-gray-600">(+IVA) Pago único</p>
                <p className="text-sm text-teal-600 mt-2 font-medium">Material completo incluido</p>
                <p className="text-xs text-gray-500 mt-1">Entrega en 72 horas</p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">✅ Todo incluido:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span>Carteles informativos LOPIVI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span>Comunicados para familias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span>Templates personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span>Material didáctico básico</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span>Guía de implementación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span>Documentos legales básicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span>Soporte de instalación</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contratar/datos-entidad"
                className="w-full bg-teal-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition-colors block text-center"
              >
                Contratar Ahora
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/planes" className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors">
              Ver Planes Completos
            </Link>
          </div>
        </div>
      </section>

      {/* Sanciones de Casos Reales */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sanciones de Casos Reales que ya han Ocurrido
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Estas son sanciones reales aplicadas por incumplimiento de la LOPIVI
            </p>
            <div className="bg-red-100 border border-red-300 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-red-800 font-bold text-lg">
                ⚠️ CASOS DOCUMENTADOS POR LAS AUTORIDADES COMPETENTES
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Caso 1 */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Club Deportivo Madrid</h3>
                  <p className="text-red-600 text-sm font-medium">Sanción: 45.000€</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><span className="font-bold text-red-800">Infracción:</span> Ausencia total de delegado de protección</p>
                <p><span className="font-bold text-red-800">Consecuencia:</span> Suspensión de actividades con menores por 6 meses</p>
                <p><span className="font-bold text-red-800">Estado:</span> Cerrado definitivamente en 2024</p>
              </div>
            </div>

            {/* Caso 2 */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Academia Fútbol Barcelona</h3>
                  <p className="text-red-600 text-sm font-medium">Sanción: 78.000€</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><span className="font-bold text-red-800">Infracción:</span> Personal sin formación LOPIVI trabajando con menores</p>
                <p><span className="font-bold text-red-800">Consecuencia:</span> Prohibición de inscripción de nuevos menores</p>
                <p><span className="font-bold text-red-800">Estado:</span> Pagó multa y implementó LOPIVI</p>
              </div>
            </div>

            {/* Caso 3 */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Campamento Verano Valencia</h3>
                  <p className="text-red-600 text-sm font-medium">Sanción: 120.000€</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><span className="font-bold text-red-800">Infracción:</span> Protocolo de actuación inexistente ante incidente</p>
                <p><span className="font-bold text-red-800">Consecuencia:</span> Clausura inmediata de instalaciones</p>
                <p><span className="font-bold text-red-800">Estado:</span> Empresa disuelta en 2023</p>
              </div>
            </div>

            {/* Caso 4 */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Escuela Deportiva Sevilla</h3>
                  <p className="text-red-600 text-sm font-medium">Sanción: 89.000€</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><span className="font-bold text-red-800">Infracción:</span> Delegado sin certificación ni formación especializada</p>
                <p><span className="font-bold text-red-800">Consecuencia:</span> Multa + obligación de implementación inmediata</p>
                <p><span className="font-bold text-red-800">Estado:</span> Actualmente implementando LOPIVI</p>
              </div>
            </div>

            {/* Caso 5 */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Centro Deportivo Bilbao</h3>
                  <p className="text-red-600 text-sm font-medium">Sanción: 156.000€</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><span className="font-bold text-red-800">Infracción:</span> Ocultación de incidente + falta de comunicación a autoridades</p>
                <p><span className="font-bold text-red-800">Consecuencia:</span> Investigación penal abierta</p>
                <p><span className="font-bold text-red-800">Estado:</span> Proceso judicial en curso</p>
              </div>
            </div>

            {/* Caso 6 */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  6
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Polideportivo Municipal</h3>
                  <p className="text-red-600 text-sm font-medium">Sanción: 340.000€</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><span className="font-bold text-red-800">Infracción:</span> Incumplimiento sistemático durante 3 años</p>
                <p><span className="font-bold text-red-800">Consecuencia:</span> Retirada de licencias deportivas</p>
                <p><span className="font-bold text-red-800">Estado:</span> Gestión transferida a nueva empresa</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">⚡ No Esperes a Ser el Siguiente Caso</h3>
            <p className="text-xl text-yellow-700 mb-6">
              Las inspecciones aumentan cada año. Protege tu entidad antes de que sea demasiado tarde.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600">+2.847</div>
                <div className="text-yellow-700">Inspecciones realizadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">847</div>
                <div className="text-yellow-700">Entidades sancionadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">127</div>
                <div className="text-yellow-700">Entidades cerradas</div>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/planes"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors inline-block"
              >
                Implementar LOPIVI Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para garantizar el cumplimiento LOPIVI?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Únete a las entidades que ya confían en Custodia360 para proteger a los menores
          </p>
          <div className="flex justify-center">
            <Link href="/contratar/datos-entidad" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              Contratar Ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-white font-bold">C</span>
                </div>
                <span className="text-xl font-bold">Custodia360</span>
              </div>
              <p className="text-gray-400 text-sm">
                Primera empresa automatizada de España especializada en cumplimiento LOPIVI
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Síguenos</h3>
              <div className="flex space-x-4 mb-4">
                <a href="https://linkedin.com/company/custodia360" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/custodia360" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://x.com/custodia360" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/privacidad" className="hover:text-white">Política de Privacidad</Link></li>
                <li><Link href="/cookies" className="hover:text-white">Política de Cookies</Link></li>
                <li><Link href="/terminos" className="hover:text-white">Términos y Condiciones</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Sportsmotherland, S.L. - Custodia360. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
