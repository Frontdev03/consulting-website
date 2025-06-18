import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Business Strategy',
    description: 'Comprehensive planning and execution to help your business thrive.'
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize your business processes and technology.'
  },
  {
    title: 'Market Analysis',
    description: 'In-depth research and insights for your business.'
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center py-24 px-4 bg-gradient-to-br from-blue-50 to-white animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-blue-900">Elevate Your Business<br />with Expert Consulting</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">Unlock your company's potential with tailored strategies, digital transformation, and actionable insights from our experienced consultants.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#services" scroll={false} className="bg-blue-700 text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition-transform duration-200 transform hover:scale-105 shadow-lg">Our Services</Link>
          <Link href="/contact" className="border border-blue-700 text-blue-700 px-8 py-3 rounded font-semibold hover:bg-blue-50 transition-transform duration-200 transform hover:scale-105 shadow">Contact Us</Link>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 px-4 bg-white animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">What We Offer</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="bg-blue-50 rounded-lg shadow p-6 border border-blue-100 hover:shadow-2xl transition-transform duration-200 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="mb-8 text-lg">Contact us today for a free consultation and discover how we can help you achieve your goals.</p>
        <Link href="/contact" className="bg-white text-blue-700 px-8 py-3 rounded font-semibold hover:bg-blue-100 transition-transform duration-200 transform hover:scale-105 shadow">Get in Touch</Link>
      </section>
    </div>
  );
}
