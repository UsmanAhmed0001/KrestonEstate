import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Lettings', href: '/lettings' },
  { label: 'Sales', href: '/sales' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-sm' : 'bg-white'
        }`}
      >
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/images/logo-project.png" alt="Kreston Estates" className="h-10 w-auto" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[#04055e] leading-none">
                  Kreston
                </p>
                <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FF8B7B] leading-none mt-0.5">
                  Estates
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors pb-0.5 ${
                    location === link.href
                      ? 'text-[#FF8B7B] border-b border-[#FF8B7B]'
                      : 'text-gray-600 hover:text-[#04055e] border-b border-transparent hover:border-[#04055e]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-[#04055e]"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col justify-center transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="px-10 space-y-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-4xl font-serif font-light text-[#04055e] hover:text-[#FF8B7B] transition-colors"
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-10 mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">+44 7577 561103</p>
          <p className="text-sm text-gray-500">info@krestonestates.com</p>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}