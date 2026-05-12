import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Shield, Award, Users } from 'lucide-react';

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      e => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('kre-revealed'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-kre]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function About() {
  useReveal();
  return (
    <div className="bg-white overflow-x-hidden">

      {/* Page hero */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #04055e, #060870)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span><span className="text-white">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>About Kreston Estates</h1>
          <p className="text-white/70 text-lg max-w-2xl">An independent property company built on the principle that landlords deserve better.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-kre="left">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#E8703A' }}>Our Story</p>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#04055e', fontFamily: 'Inter, sans-serif' }}>Built by landlords, for landlords.</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We started as landlords ourselves. After years of dealing with agents who charged generously and communicated rarely, we decided to do things differently. Kreston Estates was born out of that frustration — and a conviction that landlords deserve better.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Based in Tooting, South West London, we focus on an area we know inside out. We keep our client base small by design so every landlord gets our full attention — not a ticket number in a queue.</p>
            <p className="text-gray-600 leading-relaxed mb-8">Our approach is straightforward: clear fees, honest communication, consistent follow-through. We don't make promises we can't keep, and we don't disappear once you've signed on.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded transition-opacity hover:opacity-90" style={{ background: '#E8703A' }}>
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative" data-kre="right">
            <div className="rounded-2xl overflow-hidden shadow-xl img-zoom">
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80" alt="Tooting" className="w-full h-[480px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: '#f8f9ff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14" data-kre>
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#E8703A' }}>What We Stand For</p>
            <h2 className="text-3xl font-bold" style={{ color: '#04055e', fontFamily: 'Inter, sans-serif' }}>Three principles, no compromise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-8 h-8" />, title: 'Straight Talking', desc: 'No jargon, no hidden fees. You always know exactly where things stand.' },
              { icon: <Users className="w-8 h-8" />, title: 'Hands On', desc: 'We handle things directly and keep you informed without needing to ask.' },
              { icon: <Award className="w-8 h-8" />, title: 'Locally Rooted', desc: 'We live and work in South West London. That local knowledge is irreplaceable.' },
            ].map((v, i) => (
              <div key={v.title} className="p-8 rounded-xl text-center" style={{ background: 'white', border: '1px solid #e5e7eb' }} data-kre data-delay={String(i * 150)}>
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(4,5,94,0.08)', color: '#04055e' }}>{v.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#04055e' }}>{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#E8703A' }}>
        <div className="max-w-4xl mx-auto px-6 text-center" data-kre>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Let's have a conversation</h2>
          <p className="text-white/80 mb-8">No obligation, no hard sell — just a chat about what we can do for your property.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-[#04055e] bg-white rounded hover:bg-gray-50 transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}