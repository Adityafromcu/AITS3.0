import React, { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Event {
  time: string;
  title: string;
  speaker?: string;
  venue: string;
  type: 'keynote' | 'talk' | 'workshop' | 'break' | 'panel';
}

interface DaySchedule {
  date: string;
  events: Event[];
}

const schedule: DaySchedule[] = [
  {
    date: 'March 24, 2025',
    events: [
      {
        time: '09:00 AM',
        title: 'Registration & Welcome Kit Distribution',
        venue: 'Main Hall',
        type: 'break'
      },
      {
        time: '10:00 AM',
        title: 'The Future of AI: Beyond Neural Networks',
        speaker: 'Dr. Sarah Chen',
        venue: 'Auditorium A',
        type: 'keynote'
      },
      {
        time: '11:30 AM',
        title: 'Coffee Break & Networking',
        venue: 'Exhibition Area',
        type: 'break'
      },
      {
        time: '12:00 PM',
        title: 'Quantum Computing Workshop',
        speaker: 'Dr. Emily Rodriguez',
        venue: 'Workshop Room 1',
        type: 'workshop'
      }
    ]
  },
  {
    date: 'March 25, 2025',
    events: [
      {
        time: '09:30 AM',
        title: 'Cloud Computing: The Next Decade',
        speaker: 'Raj Patel',
        venue: 'Auditorium A',
        type: 'keynote'
      },
      {
        time: '11:00 AM',
        title: 'Future of Technology Panel Discussion',
        venue: 'Conference Hall',
        type: 'panel'
      }
    ]
  },
  {
    date: 'March 26, 2025',
    events: [
      {
        time: '10:00 AM',
        title: 'Emerging Technologies Showcase',
        venue: 'Exhibition Hall',
        type: 'talk'
      },
      {
        time: '02:00 PM',
        title: 'Closing Ceremony & Awards',
        venue: 'Main Auditorium',
        type: 'keynote'
      }
    ]
  }
];

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  const getEventTypeStyles = (type: Event['type']) => {
    const baseStyles = 'rounded-full px-3 py-1 text-sm font-medium';
    switch (type) {
      case 'keynote':
        return `${baseStyles} bg-blue-500/20 text-blue-300`;
      case 'talk':
        return `${baseStyles} bg-purple-500/20 text-purple-300`;
      case 'workshop':
        return `${baseStyles} bg-green-500/20 text-green-300`;
      case 'break':
        return `${baseStyles} bg-gray-500/20 text-gray-300`;
      case 'panel':
        return `${baseStyles} bg-orange-500/20 text-orange-300`;
      default:
        return baseStyles;
    }
  };

  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Event Schedule</h2>
        
        <div className="flex justify-center mb-8 space-x-4">
          {schedule.map((day, index) => (
            <button
              key={day.date}
              onClick={() => setActiveDay(index)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeDay === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-900/20 hover:bg-blue-900/40'
              }`}
            >
              Day {index + 1}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center mb-6">
              <Calendar className="w-6 h-6 mr-2 text-blue-400" />
              <h3 className="text-xl font-semibold">{schedule[activeDay].date}</h3>
            </div>

            <div className="space-y-6">
              {schedule[activeDay].events.map((event, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 last:pb-0 border-l-2 border-blue-500/30 last:border-l-0"
                >
                  <div className="absolute left-0 top-0 -translate-x-[17px] w-8 h-8 rounded-full bg-blue-900/50 border-2 border-blue-500 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-blue-400" />
                  </div>

                  <div className="bg-blue-900/30 rounded-lg p-4 ml-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-lg">{event.title}</h4>
                        {event.speaker && (
                          <p className="text-blue-400">{event.speaker}</p>
                        )}
                      </div>
                      <span className={getEventTypeStyles(event.type)}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-300 space-x-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.venue}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition-all transform hover:scale-105 inline-flex items-center">
            Download Full Schedule
            <Calendar className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;