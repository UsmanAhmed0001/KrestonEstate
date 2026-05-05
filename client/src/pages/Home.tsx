import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Home Page Component
 * Design: Modern boutique real estate with asymmetrical layouts
 * Sections: Hero, Why Choose Us, Services, Testimonial, Contact CTA
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#04055e] py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-white rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493251197/FfCQuaqMk7kEEqghL7wv8V/hero-townhouses-PVze8eApHTJjfaeZyGZF7y.webp"
                    alt="Colorful London townhouses"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                We don't just manage your property, we treat it as if it were our own.
              </h1>
              <p className="text-lg mb-8 text-gray-100">
                Looking for a better alternative to high-street agents?
              </p>
              <p className="text-base mb-8 text-gray-100 leading-relaxed">
                At <span className="font-bold">Kreston Estates</span>, we're landlords too — so we genuinely understand what great property management should feel like.
              </p>
              <p className="text-base mb-8 text-gray-100 leading-relaxed">
                We provide a personal, hands-on service across South West London, taking care of your property and tenants as if they were our own. No slow responses. No inflated fees. Just reliable, stress-free management.
              </p>
              <a href="/about" className="inline-block">
                <Button className="bg-[#FFF] text-[#04055e] hover:bg-[#04055e] hover:text-[#FFF] px-8 py-3 rounded-full font-semibold flex items-center gap-2">
                  LEARN MORE
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#04055e]">Why choose us?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            <b>Kreston Estates </b>- Thoughtful property management, done properly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1: Trusted */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#1B4D5C] mb-4">TRUSTED AND ACCREDITED</h3>
              <p className="text-gray-700 mb-4">
                As a Propertymark accredited agency, we give you complete confidence that you're working with qualified professionals.
              </p>
              <p className="text-gray-700">
                Our accreditation means we've voluntarily committed to the highest standards in the industry - from professional training and ongoing development to strict ethical conduct and membership in recognised redress schemes.
              </p>
            </div>

            {/* Feature 2: Peace of Mind */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#1B4D5C] mb-4">PEACE OF MIND</h3>
              <p className="text-gray-700">
                We're confident you will be happy with our service, and for complete peace of mind, we include a one month notice period, during which you're free to end your contract with us if you choose.
              </p>
            </div>

            {/* Feature 3: Competitive Rates */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#1B4D5C] mb-4">COMPETITIVE RATES</h3>
              <p className="text-gray-700 mb-4">
                We know that being a landlord in London is becoming more challenging, with rising inflation, new government licensing fees, and increasing costs all eating into income.
              </p>
              <p className="text-gray-700">
                That's why we work hard to keep our property management rates competitive, fair, and transparent, with no hidden fees or unnecessary extras.
              </p>
            </div>

            {/* Feature 4: Experience */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#1B4D5C] mb-4">EXPERIENCE</h3>
              <p className="text-gray-700 mb-4">
                As landlords ourselves, we understand the challenges of managing a property in London.
              </p>
              <p className="text-gray-700">
                With experience overseeing over 50 properties, we offer a friendly, personal service tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1B4D5C]">Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Lettings */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-gradient-to-br from-[#04055e] to-[#FF8B7B] flex items-center justify-center">
                <span className="text-white text-4xl font-bold">📋</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#1B4D5C] mb-3">LETTINGS</h3>
                <p className="text-gray-700 mb-4">
                  Whether you are struggling to find a decent tenant or simply don't have time to manage a tenancy - we are here to help. Let us take the stress out of tenant finding and management.
                </p>
                <a href="/lettings" className="text-[#04055e] font-semibold hover:text-[#7B5BA3] transition-colors mt-auto">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Sales */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-gradient-to-br from-[#7B5BA3] to-[#9B7BC3] flex items-center justify-center">
                <span className="text-white text-4xl font-bold">🏠</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#1B4D5C] mb-3">SALES</h3>
                <p className="text-gray-700 mb-4">
                  You know us for lettings - trust us with your sale! We've got the skills and local knowledge to get the job done quickly and efficiently. Find out more about this service and book your free property valuation.
                </p>
                <a href="/sales" className="text-[#04055e] font-semibold hover:text-[#7B5BA3] transition-colors mt-auto">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Property Management */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-gradient-to-br from-[#1B4D5C] to-[#2B6D7C] flex items-center justify-center">
                <span className="text-white text-4xl font-bold">🔑</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#1B4D5C] mb-3">GUARANTEED RENT</h3>
                <p className="text-gray-700 mb-4">
                  We guarantee your rent every month — whether your property is occupied or not. No voids, no stress. A fixed monthly income straight to your account.
                </p>
                <a href="/services" className="text-[#04055e] font-semibold hover:text-[#7B5BA3] transition-colors mt-auto">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-gradient-to-br from-[#2C3E50] to-[#4A6278] flex items-center justify-center">
                <span className="text-white text-4xl font-bold">🏢</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#1B4D5C] mb-3">COMMERCIAL</h3>
                <p className="text-gray-700 mb-4">
                  Expert management for commercial properties — offices, retail units, and mixed-use spaces. We handle everything from tenant sourcing to compliance.
                </p>
                <a href="/contact" className="text-[#04055e] font-semibold hover:text-[#7B5BA3] transition-colors mt-auto">
                  Learn More →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-[#1B4D5C] mb-6 italic">
            "I highly recommend Kreston Estates to anyone looking for a smooth and positive experience on the rental market"
          </blockquote>
          <p className="text-xl font-semibold text-[#04055e]">Charles Smith</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#04055e] to-[#FF8B7B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Book in for a cup of tea and a chat to get the ball rolling.
          </p>
          <a href="/contact">
            <Button className="bg-[#FFF] hover:bg-[#04055e] hover:text-[#FFF] text-[#04055e] px-8 py-3 rounded-full font-semibold text-lg">
              GET IN TOUCH
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
