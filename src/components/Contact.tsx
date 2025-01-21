import React from 'react';
import { Phone, Mail, MessageCircle, Calendar, Users, Code } from 'lucide-react';

interface ContactInfo {
  title: string;
  icon: React.ReactNode;
  contacts: {
    name: string;
    role: string;
    email: string;
    phone: string;
  }[];
}

const contactInfo: ContactInfo[] = [
  {
    title: 'Bootcamps & Workshops',
    icon: <Users className="w-6 h-6" />,
    contacts: [
      {
        name: 'John Smith',
        role: 'Technical Training Coordinator',
        email: 'training@ieeeaits2025.org',
        phone: '+91 98765 43210'
      },
      {
        name: 'Sarah Wilson',
        role: 'Workshop Coordinator',
        email: 'workshops@ieeeaits2025.org',
        phone: '+91 98765 43211'
      }
    ]
  },
  {
    title: 'Expert Talks & Panels',
    icon: <MessageCircle className="w-6 h-6" />,
    contacts: [
      {
        name: 'Dr. Michael Lee',
        role: 'Speaker Coordination Head',
        email: 'speakers@ieeeaits2025.org',
        phone: '+91 98765 43212'
      },
      {
        name: 'Emily Chen',
        role: 'Panel Discussion Coordinator',
        email: 'panels@ieeeaits2025.org',
        phone: '+91 98765 43213'
      }
    ]
  },
  {
    title: 'Coding Challenges',
    icon: <Code className="w-6 h-6" />,
    contacts: [
      {
        name: 'Alex Kumar',
        role: 'Technical Lead',
        email: 'challenges@ieeeaits2025.org',
        phone: '+91 98765 43214'
      },
      {
        name: 'Priya Sharma',
        role: 'Competition Coordinator',
        email: 'competitions@ieeeaits2025.org',
        phone: '+91 98765 43215'
      }
    ]
  },
  {
    title: 'Registration & General Queries',
    icon: <Calendar className="w-6 h-6" />,
    contacts: [
      {
        name: 'Support Team',
        role: 'Registration Desk',
        email: 'support@ieeeaits2025.org',
        phone: '+91 98765 43216'
      },
      {
        name: 'Help Desk',
        role: 'General Information',
        email: 'info@ieeeaits2025.org',
        phone: '+91 98765 43217'
      }
    ]
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Information</h2>
          <p className="text-xl text-gray-300">
            Get in touch with our event coordinators
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((section) => (
            <div key={section.title} className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold">{section.title}</h3>
              </div>

              <div className="space-y-6">
                {section.contacts.map((contact) => (
                  <div key={contact.email} className="border-t border-blue-800/50 pt-4 first:border-0 first:pt-0">
                    <h4 className="font-medium mb-2">{contact.name}</h4>
                    <p className="text-gray-400 text-sm mb-2">{contact.role}</p>
                    <div className="space-y-2">
                      <a href={`mailto:${contact.email}`} className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                        <Mail className="w-4 h-4" />
                        <span>{contact.email}</span>
                      </a>
                      <a href={`tel:${contact.phone}`} className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                        <Phone className="w-4 h-4" />
                        <span>{contact.phone}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;