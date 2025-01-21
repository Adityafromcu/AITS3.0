import React from 'react';

const sponsors = [
  {
    name: 'IEEE',
    tier: 'platinum',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg',
  },

  {
    name: 'Chandigarh University',
    tier: 'platinum',
    logo: 'https://www.cuchd.in/about/assets/images/cu-logo.png',
  },
  {
    name: 'IMPunjab',
    tier: 'gold',
    logo: 'https://www.impunjab.org/wp-content/uploads/2022/08/PIM_Logo_Guideline_Artfile.PNG-2048x1011-1.png',
  },
  {
    name: 'IEEE DELHI SECTION ',
    tier: 'gold',
    logo: 'https://th.bing.com/th/id/OIP.OTbeIPr6ok33eKw5s-Ze2gHaBN?rs=1&pid=ImgDetMain',
  },
  {
    name: 'IBM',
    tier: 'gold',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  },
];

const Sponsors = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-xl text-gray-300">
            Supported by Global Leaders in Technology and Innovation
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Platinum Sponsors */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-300">
              Platinum Partners
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {sponsors
                .filter((sponsor) => sponsor.tier === 'platinum')
                .map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center transform hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-24 w-auto filter brightness-0 invert"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-yellow-300">
              Gold Partners
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {sponsors
                .filter((sponsor) => sponsor.tier === 'gold')
                .map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center transform hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-16 w-auto filter brightness-0 invert"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">Become a Sponsor</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join us in shaping the future of technology. Partner with IEEE AITS
            2025 and connect with industry leaders and innovators.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full transition-all transform hover:scale-105">
            Download Sponsorship Prospectus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
