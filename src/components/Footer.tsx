import logo from '@/assets/Logo.svg'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-4 py-10 sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 select-none">
          <img src={logo} alt="Veil" className="pointer-events-none size-6" />
          <span className="font-bold">Veil</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
          <a href="#overview" className="transition-colors hover:text-zinc-300">
            Overview
          </a>
          <a href="#features" className="transition-colors hover:text-zinc-300">
            Features
          </a>
          <a href="#pricing" className="transition-colors hover:text-zinc-300">
            Pricing
          </a>
          <a href="#faq" className="transition-colors hover:text-zinc-300">
            FAQ
          </a>
          <a href="#contact" className="transition-colors hover:text-zinc-300">
            Contact
          </a>
        </nav>
        <p className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} Veil</p>
      </div>
    </footer>
  )
}
