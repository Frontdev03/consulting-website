import TeamSection from '../../components/TeamSection';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-base sm:text-lg text-center mb-8 sm:mb-10 text-gray-600">
        We are a team of passionate consultants dedicated to helping businesses grow and succeed. Our mission is to deliver tailored solutions that drive measurable results for our clients.
      </p>
      <TeamSection />
    </div>
  );
} 