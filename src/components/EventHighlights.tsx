import React, { useState } from 'react';
import { 
  BookOpen, 
  Code, 
  Users, 
  Mic, 
  MessageSquare,
  Brain
} from 'lucide-react';

interface Event {
  title: string;
  icon: React.ReactNode;
  description: string;
  details: {
    time: string;
    venue: string;
    expectations: string;
  };
}

const events: Event[] = [
  {
    title: 'Technical Bootcamps',
    icon: <Brain className="w-8 h-8" />,
    description: 'Intensive hands-on training programs in cutting-edge technologies',
    details: {
      time: 'All Days - Multiple Sessions',
      venue: 'Training Labs',
      expectations: 'Basic programming knowledge required. Laptops mandatory. Limited seats available.'
    }
  },
  {
    title: 'Expert Workshops',
    icon: <Users className="w-8 h-8" />,
    description: 'Interactive sessions led by industry experts',
    details: {
      time: 'Throughout the event',
      venue: 'Workshop Rooms',
      expectations: 'Hands-on practical sessions. Prior registration required. Materials provided.'
    }
  },
  {
    title: 'Expert Talks',
    icon: <Mic className="w-8 h-8" />,
    description: 'Insights from industry leaders and innovators',
    details: {
      time: 'All Days',
      venue: 'Main Auditorium',
      expectations: 'Open to all attendees. Q&A sessions included.'
    }
  },
  {
    title: 'Panel Discussions',
    icon: <MessageSquare className="w-8 h-8" />,
    description: 'Engaging debates on emerging tech trends',
    details: {
      time: 'Day 2 & 3',
      venue: 'Conference Hall',
      expectations: 'Interactive sessions with industry experts. Submit questions in advance.'
    }
  },
  {
    title: 'Coding Challenges',
    icon: <Code className="w-8 h-8" />,
    description: 'Competitive programming contests',
    details: {
      time: 'All Days',
      venue: 'Computer Labs',
      expectations: 'Individual and team categories. Multiple difficulty levels.'
    }
  },
  {
    title: 'Technical Workshops',
    icon: <BookOpen className="w-8 h-8" />,
    description: 'Deep-dive technical sessions',
    details: {
      time: 'Multiple Sessions Daily',
      venue: 'Workshop Rooms',
      expectations: 'Limited seats. Basic knowledge prerequisites may apply.'
    }
  }
];

const EventHighlights = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <section id="events" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Event Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="group bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 hover:bg-blue-800/30 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  {event.icon}
                </div>
                <h3 className="text-xl font-bold">{event.title}</h3>
              </div>
              <p className="text-gray-300">{event.description}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-blue-400 hover:text-blue-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-900/90 rounded-xl p-8 max-w-lg w-full mx-4">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  {selectedEvent.icon}
                </div>
                <h3 className="text-2xl font-bold">{selectedEvent.title}</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-300">{selectedEvent.description}</p>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="font-semibold mb-2">Time</h4>
                  <p className="text-gray-300">{selectedEvent.details.time}</p>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="font-semibold mb-2">Venue</h4>
                  <p className="text-gray-300">{selectedEvent.details.venue}</p>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="font-semibold mb-2">What to Expect</h4>
                  <p className="text-gray-300">{selectedEvent.details.expectations}</p>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedEvent(null)}
                className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg transition-colors"
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

export default EventHighlights;