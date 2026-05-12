import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle } from 'lucide-react';

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(e => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('kre-revealed'); }), { threshold: 0.12 });
    document.querySelectorAll('[data-kre]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const included = [
  'Free, honest market valuation', 'Professional photography & floor plans',
  'Rightmove, Zoopla & PrimeLocation listing', 'Targeted social media marketing',
  'Accompanied viewings', 'Buyer qualification & negotiation',
  'Sale progression through to exchange', 'Regular vendor updates throughout',
];

export default function Sales() {
  useReveal();
  return (
    <div className="bg-white overflow-x-hidden">
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #04055e, #060870)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link><span>›</span><span className="text-white">Sales</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-sm font-bold" style={{ background: 'rgba(232,112,58,0.15)', color: '#E8703A', border: '1px solid rgba(232,112,58,0.3)' }}>
                Only 0.5% Commission
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Sell your property for less, without compromise.</h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">A full sales service at 0.5% commission — roughly a third of what most high-street agents charge, with absolutely no reduction in quality of service.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded hover:opacity-90 transition-opacity" style={{ background: '#E8703A' }}>
                Book Free Valuation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden img-zoom">
                <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80" alt="Sales" className="w-full h-72 object-cover opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div data-kre="left">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#E8703A' }}>What's Included</p>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#04055e', fontFamily: 'Inter, sans-serif' }}>Everything. No extras.</h2>
            <p className="text-gray-600 leading-relaxed mb-8">Our 0.5% fee covers the full sales service from valuation to completion. There are no additional marketing charges, no admin fees, nothing hidden.</p>
            <div className="grid grid-cols-1 gap-3">
              {included.map(item => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-lg" style={{ background: '#f8f9ff' }}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#E8703A' }} />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div data-kre="right">
            <div className="rounded-2xl overflow-hidden shadow-xl img-zoom mb-8">
              <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80" alt="London street" className="w-full h-80 object-cover" />
            </div>
            <div className="p-8 rounded-2xl" style={{ background: '#04055e' }}>
              <p className="text-white/60 text-sm mb-2">Our commission</p>
              <p className="text-6xl font-bold text-white mb-2">0.5%</p>
              <p className="text-white/60 text-sm mb-4">of your final sale price. That's it.</p>
              <p className="text-white/40 text-xs">On a £400,000 property, that's £2,000 vs the typical £6,000–£8,000 at other agencies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#E8703A' }}>
        <div className="max-w-4xl mx-auto px-6 text-center" data-kre>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Ready to sell?</h2>
          <p className="text-white/80 mb-8">Book a free valuation. We'll give you an honest figure and talk through your options — no obligation.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-[#04055e] bg-white rounded hover:bg-gray-50 transition-colors">
            Book a Valuation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}