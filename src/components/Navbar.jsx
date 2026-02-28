export default function Navbar() {
  const links = ['Home', 'Solution', 'Technology', 'Contact']

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path d="M4 6L8 14L12 8L16 14L20 6" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white font-bold text-lg tracking-wide">Magicare</span>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className={`text-sm font-medium transition-colors ${
                link === 'Home'
                  ? 'text-white'
                  : 'text-purple-200 hover:text-white'
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <button className="hidden md:flex items-center px-6 py-2 border border-white/60 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors">
        Login
      </button>
    </nav>
  )
}
