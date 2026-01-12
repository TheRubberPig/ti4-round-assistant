import { Modal } from './components/Modal'
import { useState } from 'react'

function App() {
  const [isHowToUseOpen, setIsHowToUseOpen] = useState(false)

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
        <MenuButton label="How to use" onClick={() => setIsHowToUseOpen(true)} />
        <MenuButton label="Statistics" />
      </nav>

      {/* Modal */}
      <Modal
        isOpen={isHowToUseOpen}
        onClose={() => setIsHowToUseOpen(false)}
        title="How to Use"
      >
        <div className="space-y-4">
          <p>Welcome to the Twilight Imperium Round Assistant. This tool is designed to to be used on a screen that is visible to all players. This can be any device that has a large enough screen e.g: TV, Projector, Monitor, Tablet, Smartphone etc.</p>
          <p>Players can also join the active game session from a mobile device to view public information about the game.</p>
          <p>This assistant will support all official expansions and rules, including Thunder's Edge. However there is no plans to support Discordant Stars</p>
          <p>This assistant helps with the following for flow and speed:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Strategy Phase</li>
            <li>Iniative Tracker</li>
            <li>Victory Points</li>
            <li>Public and Secret Objectives</li>
            <li>Laws</li>
            <li>Galactic Events</li>
          </ul>
          <p className="text-sm italic text-slate-500 mt-4">Click outside or close to return.</p>
        </div>
      </Modal>

    </div>
  )
}

function MenuButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="
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
