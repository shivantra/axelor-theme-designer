import { Link } from 'react-router-dom';

import LogoLight from '../../images/light.svg';
import LogoDark from '../../images/dark.svg';
import { NAV_LINKS } from '@/constants';
import { useState } from 'react';
import { i18n } from '@/services/i18n';
import LanguageDropdown from '../LanguageDropdown';
import { GitHubIcon } from '../icons/gitIcon';

const createLanguageMenu = (i18n: any) => ({
  key: 'lang',
  iconOnly: true,
  description: 'Language',
  items: [
    {
      key: 'en',
      text: 'English',
      onClick: () => i18n.change('en'),
    },
    {
      key: 'fr',
      text: 'French',
      onClick: () => i18n.change('fr'),
    },
  ],
});

export function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const languageMenu = createLanguageMenu(i18n);

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 !bg-transparent !backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4" aria-label="Main navigation">
        <div className="flex !h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="w-52 h-12 overflow-hidden flex items-center gap-2 relative">
            <img
              src={LogoLight}
              alt="Theme Builder Logo"
              className=" absolute -left-4 w-full h-full object-cover display-light"
            />
            <img
              src={LogoDark}
              alt="Theme Builder Logo"
              className="absolute -left-4 w-full h-full object-cover display-dark"
            />
          </Link>

          <div className=" flex items-center justify-end gap-2 md:gap-5">
            {/* Desktop Menu */}
            <ul className=" hidden md:flex items-end lg:items-center gap-4 !mb-0 !px-0">
              {NAV_LINKS.map(({ to, label, state }) => {
                return (
                  <li key={label}>
                    <Link
                      to={to}
                      state={state}
                      className="!text-sm !font-medium transition-colors menu-item"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Mobile Dropdown (Absolute + Smooth) */}
            <ul
              id="mobile-menu"
              role="menu"
              className={`absolute left-0 right-0 top-full mt-3 w-[90%] mx-auto rounded-2xl
    border border-gray-200/60 backdrop-blur-3xl
    px-5 py-3 shadow-xl shadow-black/5
    transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden menu-background
    ${
      open
        ? 'opacity-100 translate-y-0 scale-100 blur-0 pointer-events-auto'
        : 'opacity-0 -translate-y-3 scale-[0.98] blur-[2px] pointer-events-none'
    }`}
            >
              {NAV_LINKS.map(({ to, label, state }) => (
                <li key={label} role="none">
                  <Link
                    to={to}
                    state={state}
                    onClick={() => setOpen(false)}
                    role="menuitem"
                    className="block py-2 !text-sm !font-medium menu-item"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Translator */}
            <LanguageDropdown menu={languageMenu} />

            <Link
              to="https://github.com/shivantra/axelor-theme-designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn menu-item"
            >
              <GitHubIcon />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
