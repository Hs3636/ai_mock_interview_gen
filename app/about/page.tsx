import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      {/* Dark Gradient Background Box */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl w-full p-10 rounded-lg shadow-xl bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
        
        {/* Image Section with Button on Top */}
        <div className="relative w-full md:w-1/2 flex flex-col items-left">
          {/* Back to Home Button - Positioned on Top of the Image */}
          <div className="absolute top-0 transform -translate-y-1/2">
            <Link href="/">
              <button className="btn-primary max-sm:w-full">
                ← Back to Home
              </button>
            </Link>
          </div>
          
          <Image 
            src="/about.png" 
            alt="About HireGenie" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-4xl font-bold">About HireGenie</h1>
          <p>
            HireGenie is an AI-powered interview preparation platform that helps candidates practice 
            and improve their interviewing skills through realistic mock interviews.
          </p>
          <p>
            Our platform uses advanced AI technology to simulate real interview scenarios, providing 
            instant feedback and personalized recommendations to help you succeed in your next interview.
          </p>
          <p>
            Whether you're preparing for technical interviews, behavioral questions, or both, 
            HireGenie is here to help you build confidence and ace your interviews.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
