import logo from '@/assets/Logo.svg'

export default function Navbar() {
  return (
    <div className="fixed inset-x-2 top-2 z-10 flex items-center justify-center rounded-sm px-4 py-2 sm:justify-between">
      <div className="flex items-center gap-2 select-none">
        <img src={logo} alt="logo" className="pointer-events-none size-8" />
        <span className="text-lg font-bold">Veil</span>
      </div>
    </div>
  )
}
