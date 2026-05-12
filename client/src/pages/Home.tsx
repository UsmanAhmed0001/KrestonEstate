import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Shield, Users, Star, CheckCircle, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

/* ── Scroll reveal hook ── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('kre-revealed'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-kre]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── Counter ── */
function Counter({ to, suffix = '', duration = 2000 }: { to: number; suffix?: string; duration?: number }) {
  const [n, setN] = useState(0);
  const [go, setGo] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGo(true); }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!go) return;
    let cur = 0;
    const step = to / (duration / 16);
    const t = setInterval(() => {
      cur += step;
      if (cur >= to) { setN(to); clearInterval(t); } else setN(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [go, to, duration]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

const features = [
  {
    icon: <Shield className="w-10 h-10" />,
    title: 'Fully Regulated',
    desc: 'Member of The Property Ombudsman, Client Money Protect, and mydeposits. Your money and property are always protected.',
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Personal Service',
    desc: 'You deal with us directly — not a call centre. The same person handles your property from start to finish.',
  },
  {
    icon: <Star className="w-10 h-10" />,
    title: 'Local Expertise',
    desc: 'We operate exclusively in South West London. Our local market knowledge means better results for you.',
  },
];

const services = [
  { title: 'Lettings & Management', desc: 'Full tenant-find, rent collection and ongoing management. Three packages — priced clearly with nothing hidden.', href: '/lettings', icon: '🏠' },
  { title: 'Property Sales', desc: 'Sell your home at just 0.5% commission. Full service — valuation, photography, marketing, viewings and negotiation.', href: '/sales', icon: '🔑' },
  { title: 'Commercial Property', desc: 'Offices, retail and mixed-use buildings across South West London — the same care applied to commercial tenancies.', href: '/services', icon: '🏢' },
];

export default function Home() {
  useReveal();

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #04055e 0%, #060870 60%, #0a0b8a 100%)' }}>

        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #E8703A, transparent)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #E8703A, transparent)', transform: 'translate(-30%, 30%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(232,112,58,0.15)', color: '#E8703A', border: '1px solid rgba(232,112,58,0.3)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8703A] animate-pulse" />
              Independent · Tooting SW17
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Property management<br />
              <span style={{ color: '#E8703A' }}>you can actually trust.</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Kreston Estates is an independent lettings, sales and management company rooted in South West London. Clear fees, real people, no excuses.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/lettings"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ background: '#E8703A' }}>
                Explore Lettings <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded border border-white/30 hover:bg-white/10 transition-all duration-200">
                Book a Valuation
              </Link>
            </div>

            {/* Quick trust signals */}
            <div className="flex flex-wrap gap-5">
              {['Regulated & Insured', 'No Hidden Fees', '5★ Rated Service'].map(t => (
                <div key={t} className="flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle className="w-4 h-4" style={{ color: '#E8703A' }} />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: '3px solid rgba(232,112,58,0.3)' }}>
                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80"
                  alt="London property interior" className="w-full h-full object-cover" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 px-5 py-4 rounded-xl shadow-xl"
                style={{ background: '#E8703A' }}>
                <p className="text-white text-2xl font-bold">200+</p>
                <p className="text-white/80 text-xs font-medium">Properties Managed</p>
              </div>
              {/* Floating stat card 2 */}
              <div className="absolute -top-4 -right-4 px-5 py-4 rounded-xl shadow-xl"
                style={{ background: 'white' }}>
                <p className="text-[#04055e] text-2xl font-bold">98%</p>
                <p className="text-gray-500 text-xs font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L480 20L960 45L1440 0V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══ NOTICE BANNER ════════════════════════════════════ */}
      <section className="py-6 bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">!</span>
            </div>
            <p className="text-amber-900 text-sm font-medium">
              <strong>Free Property Valuations Available</strong> — Book your no-obligation valuation today. We'll tell you exactly what your property is worth.
            </p>
          </div>
          <Link href="/contact" className="whitespace-nowrap px-5 py-2 text-sm font-bold text-white rounded flex-shrink-0 transition-opacity hover:opacity-90" style={{ background: '#E8703A' }}>
            Book Now
          </Link>
        </div>
      </section>

      {/* ══ FEATURES ════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={f.title}
                className="p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ border: '1px solid #e5e7eb' }}
                data-kre data-delay={String(i * 150)}>
                <div className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(4,5,94,0.06)', color: '#04055e' }}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#04055e', fontFamily: 'Inter, sans-serif' }}>{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT WE DO ══════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#f8f9ff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div data-kre="left">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#E8703A' }}>Who We Are</p>
              <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ color: '#04055e', fontFamily: 'Inter, sans-serif' }}>
                What is Kreston Estates?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kreston Estates is a fully independent property management, lettings and sales company based in Tooting, South West London. We handle everything from finding tenants to managing ongoing maintenance — so you don't have to.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Unlike large corporate agencies, we keep our client base small by design. That means every landlord gets proper attention, every tenant gets a swift response, and every property is managed as if it were our own.
              </p>
              <div className="space-y-3 mb-8">
                {['Registered with The Property Ombudsman', 'Client Money Protection certified', 'Member of mydeposits scheme', 'GDPR & ICO compliant'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#E8703A' }} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all" style={{ color: '#E8703A' }}>
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative" data-kre="right">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80"
                  alt="South West London street" className="w-full h-[480px] object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 p-6 rounded-xl shadow-lg bg-white"
                style={{ border: '2px solid #E8703A' }}>
                <p className="text-3xl font-bold" style={{ color: '#04055e' }}>0.5%</p>
                <p className="text-gray-500 text-sm font-medium">Sales commission</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SERVICES ════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14" data-kre>
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#E8703A' }}>Our Services</p>
            <h2 className="text-4xl font-bold" style={{ color: '#04055e', fontFamily: 'Inter, sans-serif' }}>Everything you need, in one place</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Link href={s.href} key={s.title}
                className="group block p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ border: '1px solid #e5e7eb', background: 'white' }}
                data-kre data-delay={String(i * 150)}>
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#E8703A] transition-colors" style={{ color: '#04055e', fontFamily: 'Inter, sans-serif' }}>{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold transition-colors group-hover:gap-3" style={{ color: '#E8703A' }}>
                  Find out more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS ══════════════════════════════════════════ */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #04055e, #060870)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14" data-kre>
            <h2 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Kreston Estates by numbers</h2>
            <p className="text-white/60">Trusted by landlords and tenants across South West London</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { icon: '🏠', to: 200, suffix: '+', label: 'Properties managed', sub: 'Across South West London' },
              { icon: '⭐', to: 98, suffix: '%', label: 'Client satisfaction rate', sub: 'Based on client feedback' },
              { icon: '📅', to: 7, suffix: ' days', label: 'Average let time', sub: 'From listing to tenancy agreed' },
            ].map((s, i) => (
              <div key={s.label}
                className="p-10 text-center rounded-lg transition-all duration-300 hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                data-kre data-delay={String(i * 150)}>
                <div className="text-4xl mb-4">{s.icon}</div>
                <p className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="text-white font-semibold mb-1">{s.label}</p>
                <p className="text-white/40 text-sm">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIAL ════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center" data-kre>
          <div className="text-5xl mb-6 text-[#E8703A] font-serif">"</div>
          <blockquote className="text-2xl md:text-3xl font-medium text-[#04055e] leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Kreston Estates made the whole letting process completely stress-free. They found excellent tenants quickly, handled everything professionally, and have been great communicators throughout.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: '#04055e' }}>CS</div>
            <div className="text-left">
              <p className="font-bold text-[#04055e]">Charles Smith</p>
              <p className="text-gray-500 text-sm">Landlord · Tooting, SW17</p>
            </div>
          </div>
          <div className="flex justify-center gap-1 mt-4">
            {Array(5).fill(null).map((_, i) => <span key={i} className="text-[#E8703A] text-xl">★</span>)}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#E8703A' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center" data-kre>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ready to get started with Kreston Estates?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Whether you're a landlord, seller or tenant — we'd love to hear from you. No obligation, no hard sell.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-[#04055e] bg-white rounded hover:bg-gray-50 transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+447577561103"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white border-2 border-white rounded hover:bg-white/10 transition-colors">
              <Phone className="w-4 h-4" /> Call Us Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}