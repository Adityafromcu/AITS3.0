import React, { useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';

interface Speaker {
  name: string;
  designation: string;
  company: string;
  image: string;
  bio: string;
  talk: {
    title: string;
    time: string;
    description: string;
  };
  isKeynote?: boolean;
}

const allSpeakers: Speaker[] = [
  {
    name: 'Dr. Sarah Chen',
    designation: 'Director of AI Research',
    company: 'Google DeepMind',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: 'Dr. Chen leads groundbreaking research in artificial intelligence and machine learning.',
    talk: {
      title: 'The Future of AI: Beyond Neural Networks',
      time: 'Day 1 - 10:00 AM',
      description: 'Exploring next-generation AI architectures and their implications.'
    },
    isKeynote: true
  },
  {
    name: 'Raj Patel',
    designation: 'Chief Technology Officer',
    company: 'Microsoft India',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'Raj oversees technological innovation and strategic direction at Microsoft India.',
    talk: {
      title: 'Cloud Computing: The Next Decade',
      time: 'Day 2 - 9:30 AM',
      description: 'A deep dive into emerging cloud technologies.'
    }
  },
  {
    name: 'Dr. Emily Rodriguez',
    designation: 'Quantum Computing Researcher',
    company: 'IBM Research',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    bio: 'A pioneer in quantum computing research.',
    talk: {
      title: 'Quantum Computing Workshop',
      time: 'Day 2 - 2:00 PM',
      description: 'Practical applications of quantum computing.'
    }
  },
  {
    name: 'Alex Kim',
    designation: 'Blockchain Architect',
    company: 'Ethereum Foundation',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'Leading blockchain architect with expertise in Web3.',
    talk: {
      title: 'Future of Web3',
      time: 'Day 1 - 3:00 PM',
      description: 'Exploring the decentralized web ecosystem.'
    }
  }
  // Note: In a real implementation, you would have all 20 speakers listed here
];

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [showAllSpeakers, setShowAllSpeakers] = useState(false);

  const displayedSpeakers = showAllSpeakers ? allSpeakers : allSpeakers.slice(0, 4);

  return (
    <section id="speakers" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Featured Speakers</h2>
          <button 
            onClick={() => setShowAllSpeakers(!showAllSpeakers)}
            className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition-all"
          >
            <span>{showAllSpeakers ? 'Show Less' : 'View All Speakers'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedSpeakers.map((speaker) => (
            <div
              key={speaker.name}
              className="group relative bg-blue-900/20 backdrop-blur-sm rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
                  <div className="absolute bottom-0 p-4 space-y-1">
                    {speaker.isKeynote && (
                      <span className="inline-block bg-blue-500 text-xs px-2 py-1 rounded-full mb-1">
                        Keynote Speaker
                      </span>
                    )}
                    <h3 className="text-lg font-bold">{speaker.name}</h3>
                    <p className="text-sm text-gray-300">{speaker.designation}</p>
                    <p className="text-sm text-blue-400">{speaker.company}</p>
                    
                    <button
                      onClick={() => setSelectedSpeaker(speaker)}
                      className="mt-2 flex items-center space-x-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>View Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal remains the same */}
        {selectedSpeaker && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-900/90 rounded-xl p-8 max-w-2xl w-full mx-4">
              <div className="flex items-start space-x-6">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedSpeaker.name}</h3>
                  <p className="text-gray-300">{selectedSpeaker.designation}</p>
                  <p className="text-blue-400">{selectedSpeaker.company}</p>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">About</h4>
                  <p className="text-gray-300">{selectedSpeaker.bio}</p>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="font-semibold mb-2">Featured Talk</h4>
                  <h5 className="text-lg text-blue-400">{selectedSpeaker.talk.title}</h5>
                  <p className="text-gray-400 mb-2">{selectedSpeaker.talk.time}</p>
                  <p className="text-gray-300">{selectedSpeaker.talk.description}</p>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="mt-6 w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Speakers;