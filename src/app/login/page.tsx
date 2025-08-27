'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginDelegadosPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validaciones básicas
    if (!loginData.email || !loginData.password) {
      setError('Por favor, complete todos los campos')
      setLoading(false)
      return
    }

    // Simular autenticación (aquí integrarías con tu sistema real)
    try {
      // Demo: credenciales de prueba
      if (loginData.email === 'delegado@custodia360.com' && loginData.password === 'custodia2024') {
        // Redirigir al dashboard del delegado
        router.push('/dashboard-delegado')
      } else {
        setError('Credenciales incorrectas. Intente de nuevo.')
      }
    } catch (error) {
      setError('Error de conexión. Inténtelo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center mb-8">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">
              C
            </div>
            <span className="text-2xl font-bold text-gray-900">Custodia360</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Acceso Delegados</h2>
          <p className="text-gray-600">
            Ingrese sus credenciales para acceder al dashboard
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleLogin} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-red-600 text-xl">❌</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email del Delegado
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="delegado@mientidad.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Su contraseña"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Recordar sesión
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                ¿Olvidó su contraseña?
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Verificando...
              </div>
            ) : (
              'Iniciar Sesión'
            )}
          </button>

          {/* Demo credentials */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-800 mb-2">🧪 Demo - Credenciales de Prueba:</h3>
            <p className="text-xs text-blue-700"><strong>Email:</strong> delegado@custodia360.com</p>
            <p className="text-xs text-blue-700"><strong>Contraseña:</strong> custodia2024</p>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            ¿No tiene credenciales de delegado?{' '}
            <Link href="/contacto" className="font-medium text-orange-600 hover:text-orange-500">
              Contacte con nosotros
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
