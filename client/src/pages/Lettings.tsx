import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Check } from 'lucide-react';

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(e => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('kre-revealed'); }), { threshold: 0.12 });
    document.querySelectorAll('[data-kre]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const plans = [
  {
    name: 'Tenant Find', price: "1 Week's Rent", desc: 'We find and vet the tenant. You take it from there.',
    features: ['Portal marketing (Rightmove, Zoopla)', 'Accompanied viewings', 'Full referencing', 'Tenancy agreement', 'Move-in coordination', 'Deposit registration'],
  },
  {
    name: 'Rent Collection', price: '8% + VAT', desc: 'Tenant find plus monthly rent management.', featured: true,
    features: ['Everything in Tenant Find', 'Monthly rent collection', 'Arrears chasing', 'Annual rent review', 'Monthly statements', 'End-of-tenancy handover'],
  },
  {
    name: 'Full Management', price: '12% + VAT', desc: 'We handle everything. You just receive the rent.',
    features: ['Everything in Rent Collection', 'Maintenance coordination', 'Tenant queries handled', 'Regular inspections', 'Contractor liaison', '24/7 emergency line'],
  },
];

export default function Lettings() {
  useReveal();
  return (
    <div className="bg-white overflow-x-hidden">
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #04055e, #060870)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link><span>›</span><span className="text-white">Lettings</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Lettings & Property Management</h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">Renting out a London property takes more time and judgement than most people expect. We handle the workload — finding the right tenant, vetting them properly, and managing the relationship throughout.</p>
              <div className="flex gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded hover:opacity-90 transition-opacity" style={{ background: '#E8703A' }}>
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80" alt="Lettings" className="w-full h-72 object-cover opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20" style={{ background: '#f8f9ff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14" data-kre>
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#E8703A' }}>Pricing</p>
            <h2 className="text-3xl font-bold mb-3" style={{ color: '#04055e', fontFamily: 'Inter, sans-serif' }}>Three packages, clearly priced</h2>
            <p className="text-gray-600">All prices fixed and agreed upfront — nothing added on later.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((p, i) => (
              <div key={p.name} className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${p.featured ? 'shadow-2xl' : 'shadow-md'}`}
                style={{ background: p.featured ? '#04055e' : 'white', border: p.featured ? '2px solid #E8703A' : '1px solid #e5e7eb' }}
                data-kre data-delay={String(i * 150)}>
                {p.featured && <div className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 text-white" style={{ background: '#E8703A' }}>Most Popular</div>}
                <h3 className="text-xl font-bold mb-1" style={{ color: p.featured ? 'white' : '#04055e' }}>{p.name}</h3>
                <p className="text-3xl font-bold mb-2" style={{ color: p.featured ? '#E8703A' : '#04055e' }}>{p.price}</p>
                <p className="text-sm mb-6" style={{ color: p.featured ? 'rgba(255,255,255,0.6)' : '#6b7280' }}>{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-3">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#E8703A' }} />
                      <span className="text-sm" style={{ color: p.featured ? 'rgba(255,255,255,0.8)' : '#374151' }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block text-center py-3 rounded font-bold text-sm transition-all"
                  style={{ background: p.featured ? '#E8703A' : 'transparent', color: p.featured ? 'white' : '#04055e', border: p.featured ? 'none' : '2px solid #04055e' }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#E8703A' }}>
        <div className="max-w-4xl mx-auto px-6 text-center" data-kre>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Want to discuss your property?</h2>
          <p className="text-white/80 mb-8">We'll give you an honest assessment and recommend the right package for your situation.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-[#04055e] bg-white rounded hover:bg-gray-50 transition-colors">
            Talk to Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}