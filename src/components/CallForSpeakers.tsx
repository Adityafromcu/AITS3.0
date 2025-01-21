import React from 'react';
import { Mic, Send, Award, Users } from 'lucide-react';

const CallForSpeakers = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-gray-900/95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            Join the Leaders Driving Tomorrow's Technology
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Submit your proposal and inspire the brightest minds in technology
            at IEEE AITS 2025
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Share Your Expertise</h3>
            <p className="text-gray-300">
              Present your research, innovations, and insights to a global
              audience
            </p>
          </div>

          <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Network with Leaders</h3>
            <p className="text-gray-300">
              Connect with industry experts, researchers, and innovators
            </p>
          </div>

          <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Gain Recognition</h3>
            <p className="text-gray-300">
              Showcase your work at one of India's premier technology summits
            </p>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Submit Your Proposal
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-blue-900/30 border border-blue-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-blue-900/30 border border-blue-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Talk Title
                </label>
                <input
                  type="text"
                  className="w-full bg-blue-900/30 border border-blue-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your talk title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Abstract
                </label>
                <textarea
                  className="w-full bg-blue-900/30 border border-blue-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Brief description of your talk"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Submit Proposal</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForSpeakers;
