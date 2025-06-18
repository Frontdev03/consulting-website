const services = [
  {
    title: 'Business Strategy',
    description: 'Comprehensive planning and execution to help your business thrive in a competitive market.'
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize your business processes and technology for greater efficiency and growth.'
  },
  {
    title: 'Market Analysis',
    description: 'In-depth research and insights to inform your business decisions and strategy.'
  },
  {
    title: 'Operations Consulting',
    description: 'Optimize your operations for maximum productivity and cost savings.'
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-2xl transition-transform duration-200 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
            <h2 className="text-lg sm:text-2xl font-semibold mb-2 text-blue-700">{service.title}</h2>
            <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 