import Image from "next/image"
import Link from "next/link"
import { categories } from "@/data/products"

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-12 pb-6 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and info */}
          <div className="col-span-1">
            <Link href="/">
              <Image
                src="/Logo.svg?height=40&width=120&text=Tray+Finder"
                alt="Tray Finder Logo"
                width={120}
                height={40}
                className="h-10 mb-4"
              />
            </Link>
            <p className="text-sm text-gray-600 mb-2">The biggest market of grocery products</p>
            <p className="text-sm text-gray-600 mb-4">We deliver quality products at your door</p>
            <div className="flex items-start space-x-2 text-sm text-gray-600 mb-2">
              <div className="mt-1">📍</div>
              <div>17 Great St Huntington Valley, Seatle, WA 98134, USA</div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
              <div>✉️</div>
              <div>example@traymail.com</div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <div>📞</div>
              <div>+01 234 567890</div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <span className="sr-only">Pinterest</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Institutional */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
                  Política de privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
                  Termos & Condições
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
                  Nosso contato
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
                  Centro de suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Categorias</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href={`/?category=${category.id}`} className="text-gray-600 hover:text-blue-500 text-sm">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">Inscreva-se para receber nossas ofertas e novidades</p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 border rounded-l-md py-2 px-3 focus:outline-none"
              />
              <button className="bg-blue-500 text-white px-4 rounded-r-md">Enviar</button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Tray Finder. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
