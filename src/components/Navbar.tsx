import { useState } from 'react'
import logo from '@/assets/Logo.svg'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/60 bg-[#111111]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-2.5">
        <a href="#" className="flex items-center gap-2 select-none">
          <img src={logo} alt="logo" className="pointer-events-none size-7" />
          <span className="text-lg font-bold">Veil</span>
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="https://app.veil.in.th">
            <button className="rounded-sm border border-zinc-700 bg-zinc-800 px-4 py-1.5 text-sm transition-all hover:bg-zinc-700">
              Open App <span className="font-bold text-orange-500">(in dev)</span>
            </button>
          </a>
        </div>

        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-zinc-800 px-4 pb-4 sm:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a href="https://app.veil.in.th" className="mt-2 block">
            <button className="w-full rounded-sm border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm transition-all hover:bg-zinc-700">
              Open App <span className="font-bold text-orange-500">(in dev)</span>
            </button>
          </a>
        </div>
      )}
    </nav>
  )
}
