import { Link } from 'wouter';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const services = [
  { label: 'Lettings', href: '/lettings' },
  { label: 'Sales', href: '/sales' },
  { label: 'Property Management', href: '/services' },
  { label: 'Commercial', href: '/services' },
  { label: 'About Us', href: '/about' },
];

const compliance = [
  { name: 'Client Money Protect', img: '/images/clientMoneyProtect-logo.png' },
  { name: 'The Property Ombudsman', img: '/images/ThePropertyOmbudsman-logo.png' },
  { name: 'mydeposits', img: '/images/Mydeposit-logo.png' },
  { name: 'ICO', img: '/images/InformationCommissioners-logo.png' },
  { name: 'Approved Code', img: '/images/ApprovedCode-logo.png' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#030440' }}>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="/images/logo-project.png" alt="Kreston Estates" className="h-12 w-auto" />
            <div>
              <p className="text-white font-bold tracking-widest text-sm">KRESTON</p>
              <p className="font-semibold tracking-widest text-xs" style={{ color: '#E8703A' }}>ESTATES</p>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            An independent property company based in Tooting, South West London. Lettings, sales and management — done properly.
          </p>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/krestonestates" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#E8703A] transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.tiktok.com/@krestonestates" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#E8703A] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/></svg>
            </a>
            <a href="https://wa.me/447577561103" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#E8703A] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 pb-3 border-b border-white/10">Our Services</h4>
          <ul className="space-y-3">
            {services.map(s => (
              <li key={s.href}>
                <Link href={s.href} className="text-white/50 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <span style={{ color: '#E8703A' }}>›</span> {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 pb-3 border-b border-white/10">Get In Touch</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#E8703A' }} />
              <span className="text-white/50 text-sm leading-relaxed">163 Tooting High Street,<br />London SW17 0SY</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#E8703A' }} />
              <a href="tel:+447577561103" className="text-white/50 text-sm hover:text-white transition-colors">+44 7577 561103</a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#E8703A' }} />
              <a href="mailto:info@krestonestates.com" className="text-white/50 text-sm hover:text-white transition-colors">info@krestonestates.com</a>
            </li>
          </ul>
          <div className="mt-6 p-4 rounded" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Office Hours</p>
            <p className="text-white/60 text-sm">Mon–Fri: 9:00 – 18:00</p>
            <p className="text-white/60 text-sm">Saturday: 10:00 – 16:00</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 pb-3 border-b border-white/10">Stay Informed</h4>
          <p className="text-white/50 text-sm leading-relaxed mb-4">Get honest market updates from South West London. No spam, ever.</p>
          <form onSubmit={e => e.preventDefault()} className="space-y-3">
            <input type="email" placeholder="your@email.com"
              className="w-full px-4 py-3 text-sm text-white rounded outline-none focus:ring-2 focus:ring-[#E8703A]"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }} />
            <button type="submit"
              className="w-full py-3 text-sm font-semibold text-white rounded transition-opacity hover:opacity-90"
              style={{ background: '#E8703A' }}>
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Compliance logos */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <p className="text-white/30 text-xs uppercase tracking-widest text-center mb-4">Registered with:</p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            {compliance.map(c => (
              <div key={c.name} className="flex-1 flex items-center justify-center min-w-[80px]" title={c.name}>
                <img src={c.img} alt={c.name}
                  className="h-10 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)', opacity: 1, maxHeight: '40px', width: 'auto' }}
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Kreston Estates Ltd. All Rights Reserved. Company registered in England & Wales.</p>
          <div className="flex gap-5">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms & Fees</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Complaints</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}