import logo from '@/assets/Logo.svg'

export default function Navbar() {
  return (
    <div className="fixed inset-x-2 top-2 z-10 flex items-center justify-between rounded-sm px-4 py-2">
      <div className="flex items-center gap-2 select-none">
        <img src={logo} alt="logo" className="pointer-events-none size-8" />
        <span className="text-lg font-bold">Veil</span>
      </div>
      <div/>
      {/* <a href="https://app.veil.in.th">
        <button className="rounded-sm border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm transition-all hover:bg-zinc-700">
          Open App <span className="font-bold text-orange-500">(in dev)</span>
        </button>
      </a> */}
    </div>
  )
}
