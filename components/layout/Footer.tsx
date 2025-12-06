import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:idris@pm.dev' },
  ]

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500" />
            <div>
              <p className="text-sm font-semibold text-gray-900">PM System</p>
              <p className="text-xs text-gray-500">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Terms
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}