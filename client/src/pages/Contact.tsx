import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(e => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('kre-revealed'); }), { threshold: 0.12 });
    document.querySelectorAll('[data-kre]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      setStatus(res.ok ? 'sent' : 'error');
      if (res.ok) setForm({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
    } catch { setStatus('error'); }
  };

  return (
    <div className="bg-white overflow-x-hidden">
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #04055e, #060870)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link><span>›</span><span className="text-white">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Get In Touch</h1>
          <p className="text-white/70 text-lg">We'll get back to you the same working day. No automated responses, no call centres.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact info */}
          <div data-kre="left">
            <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: '#E8703A' }}>Contact Details</p>
            <div className="space-y-6">
              {[
                { icon: <MapPin className="w-5 h-5" />, label: 'Address', value: '163 Tooting High Street\nLondon SW17 0SY' },
                { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+44 7577 561103', href: 'tel:+447577561103' },
                { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'info@krestonestates.com', href: 'mailto:info@krestonestates.com' },
                { icon: <Clock className="w-5 h-5" />, label: 'Hours', value: 'Mon–Fri: 9:00–18:00\nSaturday: 10:00–16:00' },
              ].map(c => (
                <div key={c.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(4,5,94,0.08)', color: '#04055e' }}>{c.icon}</div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-gray-700 text-sm hover:text-[#E8703A] transition-colors whitespace-pre-line">{c.value}</a>
                    ) : (
                      <p className="text-gray-700 text-sm whitespace-pre-line">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-xl" style={{ background: '#f8f9ff', border: '1px solid #e5e7eb' }}>
              <p className="font-bold text-sm mb-3" style={{ color: '#04055e' }}>WhatsApp Us</p>
              <p className="text-gray-600 text-sm mb-3">Send us a message directly on WhatsApp for a quicker response.</p>
              <a href="https://wa.me/447577561103" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white rounded transition-opacity hover:opacity-90" style={{ background: '#25D366' }}>
                Open WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2" data-kre="right">
            <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: '#E8703A' }}>Send a Message</p>
            {status === 'sent' ? (
              <div className="p-8 rounded-2xl text-center" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">We'll be in touch within one working day.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all focus:ring-2" placeholder="John Smith"
                      style={{ border: '1px solid #e5e7eb', focusRingColor: '#E8703A' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none" placeholder="john@email.com"
                      style={{ border: '1px solid #e5e7eb' }} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none" placeholder="+44 7700 000000"
                      style={{ border: '1px solid #e5e7eb' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                    <select value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none bg-white"
                      style={{ border: '1px solid #e5e7eb' }}>
                      {['General Enquiry','Lettings Enquiry','Sales / Valuation','Property Management','Commercial Property'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message *</label>
                  <textarea required rows={6} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" placeholder="Tell us about your property and what you need..."
                    style={{ border: '1px solid #e5e7eb' }} />
                </div>
                {status === 'error' && <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly.</p>}
                <button type="submit" disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{ background: '#04055e' }}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'} <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.47!2d-0.1677!3d51.4274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876059b08daa7f5%3A0x8b65f3d6fa8dbce0!2sTooting%20High%20St%2C%20London!5e0!3m2!1sen!2suk!4v1700000000000"
          width="100%" height="380" style={{ border: 0 }} loading="lazy" title="Kreston Estates office location" />
      </section>
    </div>
  );
}