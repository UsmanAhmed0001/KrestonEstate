import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useReveal, img } from '@/lib/useReveal';

const empty = { name: '', email: '', phone: '', subject: 'General enquiry', message: '' };

const details = [
  { icon: MapPin, label: 'Office', value: '163 Tooting High Street\nLondon SW17 0SY' },
  { icon: Phone, label: 'Phone', value: '07577 561103', href: 'tel:+447577561103' },
  { icon: Mail, label: 'Email', value: 'info@krestonestates.com', href: 'mailto:info@krestonestates.com' },
  { icon: Clock, label: 'Opening hours', value: 'Mon–Fri: 9:00–18:00\nSaturday: 10:00–16:00' },
];

export default function Contact() {
  useReveal();
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const set = (k: keyof typeof empty) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const [firstName, ...rest] = form.name.trim().split(' ');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName: rest.join(' '),
          email: form.email,
          phone: form.phone,
          message: `Subject: ${form.subject}\n\n${form.message}`,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
      setForm(empty);
    } catch {
      setStatus('error');
    }
  };

  const field = 'w-full px-4 py-3 rounded border border-gray-300 text-sm outline-none focus:border-[#04055e] transition-colors bg-white';
  const label = 'block text-sm font-medium text-gray-700 mb-2';

  return (
    <div className="bg-white overflow-x-hidden">
      <PageHero
        crumb="Contact"
        title="Contact us"
        text="Call, email, WhatsApp or visit the office. We reply to every enquiry the same working day."
        image={img('photo-1575335235571-2a0adbea59c6', 1800)}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Details */}
          <div data-kre="left">
            <p className="text-sm font-semibold text-[#E8703A] mb-3">Contact details</p>
            <h2 className="text-2xl font-bold text-[#04055e] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>Kreston Estates Ltd</h2>
            <div className="space-y-6">
              {details.map(({ icon: Icon, label: l, value, href }) => (
                <div key={l} className="flex gap-4 border-b border-gray-200 pb-6">
                  <Icon className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#E8703A]" />
                  <div>
                    <p className="text-sm font-semibold text-[#04055e] mb-1">{l}</p>
                    {href ? (
                      <a href={href} className="text-gray-600 text-sm hover:text-[#E8703A] transition-colors">{value}</a>
                    ) : (
                      <p className="text-gray-600 text-sm whitespace-pre-line">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <a href="https://wa.me/447577561103" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-5 py-3 text-sm font-semibold text-white rounded bg-[#25D366] hover:opacity-90 transition-opacity">
              Message us on WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2" data-kre="right">
            <p className="text-sm font-semibold text-[#E8703A] mb-3">Send a message</p>
            <h2 className="text-2xl font-bold text-[#04055e] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>How can we help?</h2>
            {status === 'sent' ? (
              <div className="p-8 rounded-lg border border-gray-200 bg-[#f7f7fb]">
                <h3 className="text-xl font-bold text-[#04055e] mb-2">Thank you, your message has been sent</h3>
                <p className="text-gray-600">We’ll be in touch within one working day.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={label}>Full name *</label>
                    <input type="text" required value={form.name} onChange={set('name')} className={field} />
                  </div>
                  <div>
                    <label className={label}>Email *</label>
                    <input type="email" required value={form.email} onChange={set('email')} className={field} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={label}>Phone</label>
                    <input type="tel" value={form.phone} onChange={set('phone')} className={field} />
                  </div>
                  <div>
                    <label className={label}>Enquiry type</label>
                    <select value={form.subject} onChange={set('subject')} className={field}>
                      {['General enquiry', 'Lettings', 'Sales / valuation', 'Property management', 'Commercial property'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className={label}>Message *</label>
                  <textarea required rows={6} value={form.message} onChange={set('message')} className={`${field} resize-none`}
                    placeholder="Tell us about your property and what you need" />
                </div>
                {status === 'error' && (
                  <p className="text-red-600 text-sm">Sorry, something went wrong. Please call 07577 561103 or email info@krestonestates.com.</p>
                )}
                <button type="submit" disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white rounded bg-[#04055e] hover:bg-[#0a0b8a] transition-colors disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Send message'} <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <iframe
          src="https://www.google.com/maps?q=163+Tooting+High+Street,+London+SW17+0SY&output=embed"
          width="100%" height="400" style={{ border: 0 }} loading="lazy" title="Kreston Estates office location" />
      </section>
    </div>
  );
}