function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 p-4 text-white overflow-hidden relative">

      {/* Header */}
      <header className="mb-16 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase 
                       bg-gradient-to-b from-orange-400 via-orange-600 to-red-700 
                       bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                       font-[Impact,sans-serif]">
          Twilight Imperium
        </h1>
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-orange-600 to-transparent mt-2 opacity-80"></div>
      </header>

      {/* Menu Buttons */}
      <nav className="flex flex-col gap-6 w-full max-w-sm z-10">
        <MenuButton label="New game" />
        <MenuButton label="Continue game" />
        <MenuButton label="How to use" />
        <MenuButton label="Statistics" />
      </nav>

    </div>
  )
}

function MenuButton({ label }: { label: string }) {
  return (
    <button className="
      group relative w-full py-4 px-6 
      bg-slate-900/40 backdrop-blur-md 
      border border-white/10 border-l-orange-500/50 border-r-orange-500/50
      rounded-lg overflow-hidden
      text-lg font-medium tracking-wide uppercase text-slate-200
      transition-all duration-300 ease-out
      hover:bg-slate-800/60 hover:border-orange-400 hover:text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]
      active:scale-98
    ">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <span className="relative z-10">{label}</span>
    </button>
  )
}

export default App
