// ─────────────────────────────────────────────────────────────────────────────
// FILE STRUCTURE (all in one file for review — split into separate files below)
//
//  src/
//    components/
//      Nav.jsx          ← updated nav with Projects dropdown
//    pages/
//      Gallery.jsx      ← empty placeholder page
//      ProjectList.jsx  ← empty placeholder page
//
// ─────────────────────────────────────────────────────────────────────────────


// ═══════════════════════════════════════════════════════════════════════════════
// src/components/Nav.jsx
// ═══════════════════════════════════════════════════════════════════════════════

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getCookieLang() {
  const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
  return match ? match[1] : "en";
}

function setLangCookie(langCode) {
  const hostname = window.location.hostname;
  const expiry = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
  if (langCode === "en") {
    document.cookie = `googtrans=; ${expiry}; path=/;`;
    document.cookie = `googtrans=; ${expiry}; path=/; domain=${hostname};`;
    document.cookie = `googtrans=; ${expiry}; path=/; domain=.${hostname};`;
  } else {
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${hostname};`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${hostname};`;
  }
}

function switchLanguage(langCode) {
  sessionStorage.setItem("scrollAfterReload", window.scrollY);
  setLangCookie(langCode);
  window.location.reload();
}

// ─── Nav Component ────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen]                     = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [projectsOpen, setProjectsOpen]     = useState(false); // desktop dropdown
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false); // mobile accordion

  const currentLang = getCookieLang();
  const isArabic    = currentLang === "ar";
  const location    = useLocation();

  const menuRef        = useRef(null);
  const buttonRef      = useRef(null);
  const dropdownRef    = useRef(null);
  const dropdownTimer  = useRef(null);

  // Restore scroll after language reload
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("scrollAfterReload");
    if (savedScroll !== null) {
      window.scrollTo(0, parseInt(savedScroll, 10));
      sessionStorage.removeItem("scrollAfterReload");
    }
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) setScrollProgress((window.scrollY / h) * 100);
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (
        menuRef.current   && !menuRef.current.contains(e.target) &&
        buttonRef.current && !buttonRef.current.contains(e.target)
      ) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  // Close dropdown on route change
  useEffect(() => {
    setProjectsOpen(false);
    setOpen(false);
    setMobileProjectsOpen(false);
  }, [location.pathname]);

  const handleLangToggle = () => switchLanguage(isArabic ? "en" : "ar");

  // Hover handlers with small delay so dropdown doesn't flicker
  const handleProjectsEnter = () => {
    clearTimeout(dropdownTimer.current);
    setProjectsOpen(true);
  };
  const handleProjectsLeave = () => {
    dropdownTimer.current = setTimeout(() => setProjectsOpen(false), 120);
  };

  // ── Nav links config ──────────────────────────────────────────────────────
  // "projects" is special — has children rendered as dropdown
  const navLinks = [
    { to: "/",         label: "Home"     },
    { to: "/about",    label: "About"    },
    { to: "/services", label: "Services" },
    {
      label: "Projects",
      isDropdown: true,
      children: [
        { to: "/projects/gallery",      label: "Gallery"       },
        { to: "/projects/project-list", label: "Project List"  },
      ],
    },
    { to: "/contact",  label: "Contact"  },
  ];

  const isProjectsActive = location.pathname.startsWith("/projects");

  // ── Language Toggle ───────────────────────────────────────────────────────
  const LangToggleBtn = ({ isMobile = false }) => {
    if (isMobile) {
      return (
        <button
          onClick={handleLangToggle}
          translate="no"
          className="notranslate relative flex items-center overflow-hidden rounded-lg border border-slate-600 hover:border-amber-500/70 transition-colors duration-200"
          style={{ height: "36px" }}
          aria-label={isArabic ? "Switch to English" : "Switch to Arabic"}
        >
          <span
            className="absolute inset-y-0 w-1/2 bg-amber-500 transition-transform duration-300 ease-in-out"
            style={{ transform: isArabic ? "translateX(100%)" : "translateX(0%)" }}
          />
          <span
            className="notranslate relative z-10 w-10 text-center text-[11px] font-bold tracking-widest transition-colors duration-300"
            style={{ color: isArabic ? "#64748b" : "#0f172a" }}
            translate="no"
          >
            EN
          </span>
          <span className="relative z-10 text-slate-600 select-none text-xs">|</span>
          <span
            className="notranslate relative z-10 w-10 text-center text-[15px] font-bold transition-colors duration-300"
            style={{ color: isArabic ? "#0f172a" : "#64748b", fontFamily: "Georgia, serif" }}
            translate="no"
          >
            ع
          </span>
        </button>
      );
    }

    return (
      <button
        onClick={handleLangToggle}
        translate="no"
        className={`notranslate flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm font-semibold transition-all duration-200
          ${isArabic
            ? "bg-amber-500 border-amber-500 text-slate-900 hover:bg-amber-400"
            : "border-slate-600 text-slate-300 hover:text-white hover:border-amber-500/60 hover:bg-slate-800/50"
          }`}
        aria-label={isArabic ? "Switch to English" : "Switch to Arabic"}
      >
        <svg
          className={`w-4 h-4 flex-shrink-0 ${isArabic ? "text-slate-900" : "text-amber-400"}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
          <path
            strokeWidth="1.8" strokeLinecap="round"
            d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
          />
        </svg>
        <span className="notranslate" translate="no">
          {isArabic ? "English" : "عربي"}
        </span>
      </button>
    );
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg">

        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-1 bg-amber-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img
                src={logo} alt="Logo"
                style={{ width: "100px", height: "50px" }}
                className="object-contain"
              />
              <div className="leading-tight">
                <h1 className="font-bold text-lg text-white tracking-tight uppercase">
                  Salman Al Askari Group
                </h1>
                <p className="text-amber-500 text-[10px] uppercase tracking-widest font-bold">
                  Civil Contracting Company
                </p>
              </div>
            </Link>

            {/* ── Desktop Nav ─────────────────────────────────────────────── */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                if (link.isDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      ref={dropdownRef}
                      onMouseEnter={handleProjectsEnter}
                      onMouseLeave={handleProjectsLeave}
                    >
                      {/* Projects trigger button */}
                      <button
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 font-medium
                          ${isProjectsActive
                            ? "text-amber-400 bg-slate-800/50"
                            : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                          }`}
                        aria-haspopup="true"
                        aria-expanded={projectsOpen}
                      >
                        {link.label}
                        {/* Chevron icon — rotates when open */}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown panel */}
                      <div
                        className={`absolute top-full left-0 mt-1.5 w-44 bg-slate-900 border border-slate-700/60 rounded-xl shadow-2xl overflow-hidden transition-all duration-200 origin-top
                          ${projectsOpen
                            ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
                          }`}
                      >
                        {/* Amber top accent line */}
                        <div className="h-0.5 w-full bg-amber-500" />

                        {link.children.map((child, i) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className={`flex items-center gap-2.5 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800/70 transition-all duration-150
                              ${i !== link.children.length - 1 ? "border-b border-slate-700/40" : ""}`}
                          >
                            {/* Small amber dot */}
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70 flex-shrink-0" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium
                      ${location.pathname === link.to
                        ? "text-amber-400 bg-slate-800/50"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="ml-3">
                <LangToggleBtn isMobile={false} />
              </div>
            </div>

            {/* ── Mobile: dual-pill + Hamburger ─────────────────────────── */}
            <div className="md:hidden flex items-center gap-2">
              <LangToggleBtn isMobile={true} />
              <button
                ref={buttonRef}
                className="text-white p-2 hover:bg-slate-800/50 rounded-lg transition-colors focus:outline-none"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* ── Mobile Slide Menu ────────────────────────────────────────────── */}
        <div
          ref={menuRef}
          className={`md:hidden bg-slate-900 border-t border-slate-700/50 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.label}>
                    {/* Accordion trigger */}
                    <button
                      onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 font-medium
                        ${isProjectsActive
                          ? "text-amber-400 bg-slate-800/50"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                        }`}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileProjectsOpen ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Accordion children */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileProjectsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-amber-500/40 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-150"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 flex-shrink-0" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium
                    ${location.pathname === link.to
                      ? "text-amber-400 bg-slate-800/50"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="h-20" />
    </>
  );
}

export default Nav;


// ═══════════════════════════════════════════════════════════════════════════════
// src/pages/Gallery.jsx
// ═══════════════════════════════════════════════════════════════════════════════

/*
export default function Gallery() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-3">Gallery</h1>
        <p className="text-slate-400">Coming soon — build your gallery here.</p>
      </div>
    </main>
  );
}
*/


// ═══════════════════════════════════════════════════════════════════════════════
// src/pages/ProjectList.jsx
// ═══════════════════════════════════════════════════════════════════════════════

/*
export default function ProjectList() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-3">Project List</h1>
        <p className="text-slate-400">Coming soon — build your project list here.</p>
      </div>
    </main>
  );
}
*/


// ═══════════════════════════════════════════════════════════════════════════════
// src/App.jsx  — add these routes inside your <Routes>
// ═══════════════════════════════════════════════════════════════════════════════

/*
import Gallery     from "./pages/Gallery";
import ProjectList from "./pages/ProjectList";

// Inside <Routes>:
<Route path="/projects/gallery"      element={<Gallery />}     />
<Route path="/projects/project-list" element={<ProjectList />} />
*/