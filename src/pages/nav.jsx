import {Link } from 'react-router-dom'
import { useState, useEffect, useRef } from "react"
import logo from '../assets/logo.png'
function Nav(){

    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)
     // Close menu when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

   const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" }
  ]
    return(
        <>
          {/* Progress Bar  */}
    <div id="progress-bar" className="fixed top-0 left-0 h-1 bg-brand-accent z-[100] transition-all duration-150" style={{ width: "0%" }}></div>

         <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="w-40 h-15 object-contain rounded-lg "
            />
            <div className="leading-tight">
                <h1 className="font-bold text-lg text-white tracking-tight">
                  SALMAN AL ASKARI
                </h1>
                <p className="text-amber-500 text-[10px] uppercase tracking-widest font-bold">
                  Civil Contracting SPC
                </p>
              </div>
          </div>

          {/* Desktop Menu */}
           <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

          {/* Mobile Toggle */}
          <button
              className="md:hidden text-white p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
        </div>
      </div>

      {/* Mobile Menu */}

        <div
        ref={menuRef}
          className={`md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-slate-700/50 shadow-2xl transform transition-all duration-300 ease-in-out ${
            open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
            <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
    </nav>
      </>
    )
}

export default Nav