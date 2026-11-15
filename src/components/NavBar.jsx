import { useState } from "react"

function NavBar({ tab, setTab, dark, setDark }) {
  const darken = document.documentElement
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  function selectTab(value) {
    setTab(value)
    setIsMenuOpen(false)
  }

  function darkMode() {
    darken.classList.toggle('dark')
    setDark(!dark)
  }
    

  return (
    <header className="w-full border-b border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/20 backdrop-blur-lg">
      <div className="max-w-275 mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight test_white">
          Movie<span className="text-brand-500">Find</span>
        </span>
        <nav className="hidden md:flex items-center gap-8">
          <button 
            className={`text-sm font-semibold transition-colors cursor-pointer ${
            tab === "all"
              ? "text-brand-500"
              : "text-neutral-500 dark:text-white/70 dark:hover:text-white"
            }`}
            onClick={() => selectTab("all")}
          >
            All Movies
          </button>
          <button 
            className={`text-sm font-semibold transition-colors cursor-pointer ${
            tab === "favorites"
              ? "text-brand-500"
              : "text-neutral-500 dark:text-white/70 dark:hover:text-white"
            }`}
            onClick={() => selectTab("favorites")}
          >
            Favorites
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white cursor-pointer" onClick={() => darkMode()}>
            {dark ? "☾" : "☀"}
          </button>
        </nav>
        <button className="md:hidden w-10 h-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-4">
          <button 
            className={`text-left py-2 text-sm font-semibold transition-colors cursor-pointer ${
            tab === "all"
              ? "text-brand-500"
              : "text-neutral-500 dark:text-white/70 dark:hover:text-white"
            }`}
            onClick={() => selectTab("all")}
          >
            All Movies
          </button>
          <button 
            className={`text-left py-2 text-sm font-semibold transition-colors cursor-pointer ${
            tab === "favorites"
              ? "text-brand-500"
              : "text-neutral-500 dark:text-white/70 dark:hover:text-white"
            }`}
            onClick={() => selectTab("favorites")}
          >
            Favorites
          </button>
          <button className="text-left text-sm font-semibold py-2 text-neutral-500 dark:text-white/70" onClick={() => darkMode()}>
            {dark ? "☾ Dark mode" : "☀ Light mode"}
          </button>
        </div>
      )}
    </header>
  )
}

export default NavBar
