'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Custodia360</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Inicio
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Servicios
            </Link>
            <Link href="/planes" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Planes
            </Link>
            <Link href="/guia" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Guía
            </Link>
            <Link href="/demo" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Demo
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Contacto
            </Link>
            <Link
              href="/login"
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition-colors"
            >
              Acceso Delegados
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/planes"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Planes
              </Link>
              <Link
                href="/guia"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Guía
              </Link>
              <Link
                href="/demo"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demo
              </Link>
              <Link
                href="/contacto"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link
                href="/login"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Acceso Delegados
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
