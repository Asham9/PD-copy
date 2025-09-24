import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Feedback', href: '#feedback' },
  { label: 'Blog', href: '#blog' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Contact Us', to: '/contact-us' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavLinkClick = (event, item) => {
    if (!item.href || !item.href.startsWith('#')) {
      closeMenu();
      return;
    }

    event.preventDefault();
    closeMenu();

    if (location.pathname !== '/' && location.pathname !== '/home') {
      navigate({ pathname: '/', hash: item.href });
      return;
    }

    const target = document.querySelector(item.href);
    if (target) {
      const offset = 96;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      if (window.location.hash !== item.href) {
        window.history.replaceState(null, '', `${location.pathname}${item.href}`);
      }
    } else {
      navigate({ pathname: '/', hash: item.href });
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 transition-all sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-2xl font-semibold text-slate-900"
          onClick={closeMenu}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-lg font-bold text-white shadow-md">
            AI
          </span>
          <span className="tracking-tight">Solutions</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full bg-white/40 p-1 shadow-inner shadow-white/20 backdrop-blur md:flex">
          {navLinks.map((item) => {
            if (item.href) {
              const isActive = location.hash === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleNavLinkClick(event, item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:bg-white/80 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            }

            const isRouteActive = location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeMenu}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isRouteActive
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:bg-white/80 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/admin"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Sign in
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(16,185,129,0.7)] transition hover:bg-emerald-600"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-3 text-xl text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => {
                if (item.href) {
                  const isActive = location.hash === item.href;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(event) => handleNavLinkClick(event, item)}
                      className={`rounded-2xl border px-4 py-3 text-base font-medium shadow-sm transition ${
                        isActive
                          ? 'border-emerald-400/60 bg-emerald-50 text-emerald-700'
                          : 'border-transparent bg-slate-100/70 text-slate-700 hover:border-emerald-400/50 hover:bg-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                }

                const isRouteActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={closeMenu}
                    className={`rounded-2xl border px-4 py-3 text-base font-medium shadow-sm transition ${
                      isRouteActive
                        ? 'border-emerald-400/60 bg-emerald-50 text-emerald-700'
                        : 'border-transparent bg-slate-100/70 text-slate-700 hover:border-emerald-400/50 hover:bg-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  to="/admin"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600"
                >
                  Sign in
                </Link>
                <Link
                  to="/contact-us"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
