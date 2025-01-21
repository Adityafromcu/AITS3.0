import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">About the Summit</h2>
            <p className="text-lg text-gray-300">
              IEEE AITS 2025 is a premier 3-day event celebrating technology,
              innovation, and collaboration, hosted by Chandigarh University.
              Join us for an immersive experience featuring industry leaders,
              cutting-edge research, and networking opportunities.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-900/30 p-4 rounded-lg">
                <h3 className="text-2xl font-bold">3000+</h3>
                <p className="text-gray-300">Attendees</p>
              </div>
              <div className="bg-blue-900/30 p-4 rounded-lg">
                <h3 className="text-2xl font-bold">50+</h3>
                <p className="text-gray-300">Speakers</p>
              </div>
              <div className="bg-blue-900/30 p-4 rounded-lg">
                <h3 className="text-2xl font-bold">30+</h3>
                <p className="text-gray-300">Sessions</p>
              </div>
              <div className="bg-blue-900/30 p-4 rounded-lg">
                <h3 className="text-2xl font-bold">20+</h3>
                <p className="text-gray-300">Workshops</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://www.reviewadda.com/assets/uploads/exam_images/02.jpg"
              alt="Chandigarh University Campus"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent rounded-lg flex items-end">
              <div className="p-6">
                <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full">
                  <a
                    href="https://maps.app.goo.gl/LyqiU3RJA8v7QT3n9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Proud Host
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
