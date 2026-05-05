import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

/**
 * Contact Page Component
 * EMAIL SETUP (one-time, takes 2 minutes):
 * 1. Go to https://web3forms.com/create
 * 2. Enter: info@krestonestates.com
 * 3. Check your inbox for the access key email
 * 4. Create a file called .env in the root of the project
 * 5. Add this line: VITE_WEB3FORMS_KEY=your_key_here
 * 6. Restart pnpm dev
 */

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setError('Failed to send message. Please email us directly at info@krestonestates.com');
      }
    } catch {
      setError('Unable to send message. Please email us directly at info@krestonestates.com');
    } finally {
      setLoading(false);
    }
  };

  const whatsappNumber = '447577561103';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#04055e] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-100">
            Book in for a cup of tea and a chat to get the ball rolling.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#1B4D5C] mb-8">Get In Touch</h2>

              {/* Address */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#04055e] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-[#1B4D5C] mb-2">Address</h3>
                    <p className="text-gray-700">
                      163 Tooting High Street<br />
                      London<br />
                      SW17 0SY
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#04055e] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-[#1B4D5C] mb-2">Phone</h3>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#04055e] hover:text-[#E55B4B] font-semibold"
                    >
                      07577561103
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#04055e] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-[#1B4D5C] mb-2">Email</h3>
                    <a href="mailto:info@krestonestates.com" className="text-[#04055e] hover:text-[#E55B4B] font-semibold">
                      info@krestonestates.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-[#1B4D5C] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#04055e] text-white rounded-full flex items-center justify-center hover:bg-[#E55B4B] transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@krestonestates?_r=1&_t=ZN-961yc5xD8v0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#04055e] text-white rounded-full flex items-center justify-center hover:bg-[#E55B4B] transition-colors"
                    aria-label="TikTok"
                  >
                    <TikTokIcon className="w-6 h-6" />
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/krestonestates?igsh=c2xobmtmaGxsdmFi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#04055e] text-white rounded-full flex items-center justify-center hover:bg-[#E55B4B] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#1B4D5C] mb-6">Send us a message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <p className="text-green-800 font-semibold text-lg">
                    ✅ Message sent! We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-[#1B4D5C] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04055e]"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-[#1B4D5C] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04055e]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1B4D5C] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04055e]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#1B4D5C] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04055e]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1B4D5C] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04055e]"
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm">{error}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#04055e] hover:bg-[#E55B4B] text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-60"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps?q=163+Tooting+High+Street,+London+SW17+0SY&output=embed"
        className="w-full max-w-5xl h-72 sm:h-80 md:h-96 mx-auto mb-6 sm:mb-8 md:mb-16 border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
        loading="lazy"
      ></iframe>
    </div>
  );
}
