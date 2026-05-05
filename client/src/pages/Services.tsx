import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Services Page Component
 * Design: Showcases the three main service offerings with imagery
 */
export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#04055e] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-100">
            More than just an agent, we're also landlords and property investors ourselves. We truly understand what matters most to you.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Lettings */}
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493251197/FfCQuaqMk7kEEqghL7wv8V/modern-interior-CuC9jXoNyrjmvFYtd4nU5c.webp"
                alt="Modern interior design"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1B4D5C] mb-6">LETTINGS</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether you are struggling to find a decent tenant or simply don't have time to manage a tenancy - we are here to help. Let us take the stress out of tenant finding and management.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our comprehensive lettings service includes tenant sourcing, referencing, contract management, rent collection, and ongoing property maintenance coordination. We handle all the details so you can enjoy the returns.
              </p>
              <a href="/lettings">
                <Button className="text-[#04055e] font-semibold text-white transform transition-transform duration-300 hover:scale-110 px-8 py-3 rounded-full font-semibold flex items-center gap-2">
                  LEARN MORE
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Sales */}
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-[#1B4D5C] mb-6">SALES</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                You know us for lettings - trust us with your sale! We've got the skills and local knowledge to get the job done quickly and efficiently.
              </p>
              <p className="text-lg font-semibold text-[#04055e] mb-2">
                We only take <span className="text-[#FF8B7B]">0.5% commission</span> of the final sale price.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With our extensive network of buyers and deep understanding of the South West London market, we can help you achieve the best possible price for your property. Book your free property valuation today.
              </p>
              <a href="/sales">
                <Button className="text-[#04055e] font-semibold text-white transform transition-transform duration-300 hover:scale-110 px-8 py-3 rounded-full font-semibold flex items-center gap-2">
                  LEARN MORE
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493251197/FfCQuaqMk7kEEqghL7wv8V/elegant-entrance-YciGLot9sNg3iggRt2ruPs.webp"
                alt="Elegant London entrance"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Property management"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1B4D5C] mb-6">GUARANTEED RENT</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We guarantee your rent every month — whether your property is occupied or not. No void periods, no chasing tenants. A fixed monthly income paid straight to your account.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We take full management responsibility for the property from start to finish, so you can sit back and enjoy completely stress-free, guaranteed income every single month.
              </p>
              <a href="/contact">
                <Button className="text-[#04055e] font-semibold text-white transform transition-transform duration-300 hover:scale-110 px-8 py-3 rounded-full font-semibold flex items-center gap-2">
                  GET IN TOUCH
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Commercial property"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1B4D5C] mb-6">COMMERCIAL</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Expanding beyond residential, Kreston Estates offers professional management for commercial properties — including offices, retail units, and mixed-use spaces across South West London.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We take care of tenant sourcing, lease management, compliance, and day-to-day operations so your commercial investment is fully protected and always performing.
              </p>
              <a href="/contact">
                <Button className="text-[#04055e] font-semibold text-white transform transition-transform duration-300 hover:scale-110 px-8 py-3 rounded-full font-semibold flex items-center gap-2">
                  GET IN TOUCH
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1B4D5C] mb-6">Want to know more?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Get in touch with our team to discuss how we can help with your property needs.
          </p>
          <a href="/contact">
            <Button className="bg-[#04055e] hover:bg-[#E55B4B] text-white px-8 py-3 rounded-full font-semibold text-lg">
              CONTACT US
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
