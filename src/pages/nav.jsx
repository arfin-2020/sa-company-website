import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

// ─── Helpers ───────────────────────────────────────────────────────────────

function getCookieLang() {
  const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
  return match ? match[1] : "en";
}

function setLangCookie(langCode) {
  const hostname = window.location.hostname;
  const expiry   = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
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

// ─── Nav Component ─────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen]                     = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const currentLang = getCookieLang();
  const isArabic    = currentLang === "ar";

  const menuRef   = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const savedScroll = sessionStorage.getItem("scrollAfterReload");
    if (savedScroll !== null) {
      window.scrollTo(0, parseInt(savedScroll, 10));
      sessionStorage.removeItem("scrollAfterReload");
    }
  }, []);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) setScrollProgress((window.scrollY / h) * 100);
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  const handleToggle = () => switchLanguage(isArabic ? "en" : "ar");

  const navLinks = [
    { to: "/",         label: "Home"     },
    { to: "/about",    label: "About"    },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact",  label: "Contact"  },
  ];

  // ── Language Toggle Button ─────────────────────────────────────────────
  //
  // Desktop → globe icon + full text label
  // Mobile  → sliding dual-pill: [ EN | ع ]
  //           Amber highlight slides to the ACTIVE side.
  //           Both scripts are always visible → zero confusion.
  //
  const LangToggleBtn = ({ isMobile = false }) => {
    if (isMobile) {
      return (
        <button
          onClick={handleToggle}
          translate="no"
          className="notranslate relative flex items-center overflow-hidden rounded-lg border border-slate-600 hover:border-amber-500/70 transition-colors duration-200"
          style={{ height: "36px" }}
          aria-label={isArabic ? "Switch to English" : "Switch to Arabic"}
        >
          {/* Sliding amber background pill */}
          <span
            className="absolute inset-y-0 w-1/2 bg-amber-500 transition-transform duration-300 ease-in-out"
            style={{ transform: isArabic ? "translateX(100%)" : "translateX(0%)" }}
          />

          {/* EN label */}
          <span
            className="notranslate relative z-10 w-10 text-center text-[11px] font-bold tracking-widest transition-colors duration-300"
            style={{ color: isArabic ? "#64748b" : "#0f172a" }}
            translate="no"
          >
            EN
          </span>

          {/* Divider */}
          <span className="relative z-10 text-slate-600 select-none text-xs">|</span>

          {/* ع label */}
          <span
            className="notranslate relative z-10 w-10 text-center text-[15px] font-bold transition-colors duration-300"
            style={{
              color: isArabic ? "#0f172a" : "#64748b",
              fontFamily: "Georgia, serif",
            }}
            translate="no"
          >
            ع
          </span>
        </button>
      );
    }

    // ── Desktop: unchanged original style ──
    return (
      <button
        onClick={handleToggle}
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

            {/* ── Desktop Nav ──────────────────────────────────────── */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to}
                  className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="ml-3">
                <LangToggleBtn isMobile={false} />
              </div>
            </div>

            {/* ── Mobile: dual-pill + Hamburger ────────────────────── */}
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

        {/* Mobile Slide Menu */}
        <div
          ref={menuRef}
          className={`md:hidden bg-slate-900 border-t border-slate-700/50 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="h-20" />
    </>
  );
}

export default Nav;