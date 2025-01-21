import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:ieeeaits2025@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    ieeeaits2025@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+91 9525544944"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    +91 9525544944
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-300">
                    Chandigarh University
                    <br />
                    NH-95 Chandigarh-Ludhiana Highway
                    <br />
                    Punjab, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#speakers"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Register
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-900/50 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-900/50 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-900/50 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-900/50 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8">
              <h4 className="font-medium mb-4">Subscribe to Our Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-blue-900/30 border border-blue-700 rounded-l-lg px-4  py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-r-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg"
                alt="IEEE Logo"
                className="h-8 filter brightness-0 invert"
              />
              <span className="text-gray-400">|</span>
              <span>Chandigarh University</span>
            </div>
            <p className="text-gray-400 text-sm text-center">
              © 2025 IEEE AITS | Chandigarh University. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
