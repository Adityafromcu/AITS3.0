import React from 'react';
import { Menu } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-blue-900/90 backdrop-blur-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <img
            src="https://www.cuchd.in/about/assets/images/cu-logo.png"
            alt="IEEE Logo"
            className="h-12"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg"
            alt="IEEE Logo"
            className="h-12"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTiDBiqm85vI6euV-_V2snzgJ7_NmENLOEA&s"
            alt="IEEE Logo"
            className="h-12"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-blue-300 transition-colors">
            About
          </a>
          <a href="#events" className="hover:text-blue-300 transition-colors">
            Events
          </a>
          <a href="#speakers" className="hover:text-blue-300 transition-colors">
            Speakers
          </a>
          <a href="#schedule" className="hover:text-blue-300 transition-colors">
            Schedule
          </a>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition-colors">
            Register Now
          </button>
        </div>

        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
