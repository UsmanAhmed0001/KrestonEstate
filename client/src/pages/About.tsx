/**
 * About Page Component
 * Design: Company story and team bios with professional imagery
 */
export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#04055e] to-[#FF8B7B] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-100">
            Learn about our story, mission, and the team behind Kreston Estates.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#04055e] mb-8">Our Story</h2>
          
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              <span className="font-bold text-[#04055e]">Kreston Estates</span> is your trusted partner in real estate, built on passion, experience, and a genuine commitment to deliver higher level of service at a more affordable price. Founded by landlords with a genuine belief that there had to be a better way to manage property — so why not do it themselves!
            </p>

            <p>
              Over the past decade, we have successfully managed and renovated properties for family and friends, building a wealth of experience in the property sector. We are in a unique position to support landlords with our hands-on, personal approach.
            </p>

            <p>
              <span className="font-bold text-[#04055e]">Kreston Estates</span> proudly serves South West London with a personal touch that large agencies simply can't match. Our reputation is built on trust and positive feedback from both landlords and tenants — something we value immensely. That's why we carefully select the landlords we work with, partnering only with those who share our commitment to well-maintained properties.
            </p>

            <p>
              Once a landlord is on board, <span className="font-bold text-[#04055e]">Kreston Estates</span> treats each property as if it were our own. From routine maintenance to prompt issue resolution, we ensure every property is well cared for and every tenant is happy. By managing the day-to-day details and keeping everything running smoothly, <span className="font-bold text-[#04055e]">Kreston Estates</span> takes the stress out of letting your property.
            </p>

            <p>
              Our friendly and approachable team are always easy to contact and ready to help with any questions or concerns you might have. It's not just about business — it's about building lasting relationships with landlords like you. With years of experience and a passion for what we do, we take pride in offering a tailored service that works for you and your property.
            </p>

            <p>
              We understand that every property and landlord is unique, which is why we work closely with you to create a management plan that fits your specific needs. From maximising your rental income to handling day-to-day matters, we've got you covered. Whether you have one property or an entire portfolio, you can count on <span className="font-bold text-[#04055e]">Kreston Estates</span> to manage your investment with integrity, care and a personal, hands-on approach.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-[#04055e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-3 text-[#FFF]">HONEST</h3>
              <p className="text-gray-200">
                We believe in transparent communication and honest dealings with all our clients and partners.
              </p>
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-3 text-[#FFF]">RELIABLE</h3>
              <p className="text-gray-200">
                You can count on us to deliver on our promises and manage your property with care and professionalism.
              </p>
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-3 text-[#FFF]">FRIENDLY</h3>
              <p className="text-gray-200">
                We treat our clients like friends, building lasting relationships based on mutual respect and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1B4D5C] mb-6">Ready to work with us?</h2>
          <p className="text-xl text-gray-700 mb-8">
            We can provide you with an insight as to how we manage our personal portfolios so you can attain the best result from yours.
          </p>
          <a href="/contact" className="inline-block">
            <button className="bg-[#04055e] hover:bg-[#E55B4B] text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors">
              GET IN TOUCH
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
