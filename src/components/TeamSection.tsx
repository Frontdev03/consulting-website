const team = [
  {
    name: 'Alex Morgan',
    role: 'Founder & Principal Consultant',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Alex specializes in business strategy and digital transformation with 15+ years of experience.'
  },
  {
    name: 'Jamie Lee',
    role: 'Senior Consultant',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Jamie brings expertise in market analysis and operational excellence.'
  },
  {
    name: 'Taylor Smith',
    role: 'Consultant',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    bio: 'Taylor helps clients modernize their processes and adopt new technologies.'
  },
];

export default function TeamSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8 text-center">Meet the Team</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {team.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center border border-gray-100 hover:shadow-2xl transition-transform duration-200 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-blue-700 font-medium mb-2">{member.role}</p>
            <p className="text-gray-600 text-center text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 