import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-03-24T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          IEEE All India Technology Summit 2025
        </h1>
        
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>March 24-26, 2025</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Chandigarh University, India</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-blue-900/50 backdrop-blur-md rounded-lg p-4">
              <div className="text-4xl font-bold">{value}</div>
              <div className="text-sm uppercase">{unit}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full transition-all transform hover:scale-105 flex items-center">
            Register Now <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="border border-blue-500 hover:bg-blue-500/20 px-8 py-3 rounded-full transition-all">
            View Schedule
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;