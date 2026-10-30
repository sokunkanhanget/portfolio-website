import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Activities', href: '#activities' },
  { label: 'About Me', href: '#about' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-10 bg-[#fffaf1]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between px-6 py-3 lg:px-12"
      >
        <a
          className="font-serif text-xl font-semibold tracking-tight"
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          Sokunkanha NGET
        </a>

        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {links.map((link, index) => (
            <a
              key={link.href}
              className={`text-base transition-colors hover:text-[#bd5434] ${
                index === 0 ? 'font-semibold' : 'font-medium'
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex size-10 items-center justify-center rounded-md border border-[#d9c8b3] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="absolute inset-x-0 top-full border-t border-[#eadfce] bg-[#fffaf1] px-6 py-4 shadow-lg md:hidden"
          id="mobile-navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                className="border-b border-[#eadfce] py-3 font-medium last:border-b-0"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
