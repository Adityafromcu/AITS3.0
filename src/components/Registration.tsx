import React, { useState } from 'react';
import {
  User,
  Mail,
  Briefcase,
  Calendar,
  Building,
  Phone,
  Globe,
  GraduationCap,
  HelpCircle,
  CreditCard,
} from 'lucide-react';
import { createRegistration } from '../lib/api';
import { useAuth } from '../contexts/AuthContext';

interface FAQ {
  question: string;
  answer: string;
}

interface PaymentOption {
  type: string;
  amount: number;
  description: string;
}

const faqs: FAQ[] = [
  {
    question: 'What is included in the registration fee?',
    answer:
      'Registration includes access to all conference sessions, workshops, lunch and refreshments, conference materials, networking events, and a certificate of participation.',
  },
  {
    question: 'Is there a student discount available?',
    answer:
      'Yes, IEEE student members get special discounted rates. Valid IEEE membership ID is required.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      'Cancellations made before February 24, 2025 will receive a full refund minus processing fees. No refunds will be issued after this date.',
  },
  {
    question: 'Can I transfer my registration to someone else?',
    answer:
      'Yes, registration transfers are allowed until March 10, 2025. Please contact the organizers for the transfer process.',
  },
  {
    question: 'Will I receive a certificate?',
    answer:
      'Yes, all participants will receive a digital certificate of participation from IEEE and Chandigarh University.',
  },
];

const Registration = () => {
  const { user } = useAuth();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    organization: '',
    designation: '',
    ieeeNumber: '',
    dietary: '',
    passType: '',
    accommodationRequired: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedPaymentOption, setSelectedPaymentOption] =
    useState<string>('');

  const getPaymentOptions = (role: string): PaymentOption[] => {
    switch (role) {
      case 'student':
        return [
          {
            type: 'ieee_student',
            amount: 500,
            description: 'IEEE Student Member (₹500)',
          },
          {
            type: 'non_ieee_student',
            amount: 700,
            description: 'Non-IEEE Student (₹700)',
          },
        ];
      case 'academic':
        return [
          {
            type: 'ieee_faculty',
            amount: 1000,
            description: 'IEEE Faculty Member (₹1,000)',
          },
          {
            type: 'non_ieee_faculty',
            amount: 1500,
            description: 'Non-IEEE Faculty (₹1,500)',
          },
        ];
      case 'professional':
      case 'others':
        return [
          {
            type: 'professional',
            amount: 2000,
            description: 'Professional Registration (₹2,000)',
          },
        ];
      default:
        return [];
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const paymentOption = getPaymentOptions(formData.role).find(
        (option) => option.type === selectedPaymentOption
      );

      if (!paymentOption) {
        throw new Error('Please select a valid payment option');
      }

      await createRegistration({
        user_id: user?.id || '',
        pass_type: selectedPaymentOption as 'full' | 'student' | 'virtual',
        amount_paid: paymentOption.amount,
        payment_status: 'pending',
      });

      setSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <section id="registration" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg"
                alt="IEEE Logo"
                className="h-16 mx-auto mb-6 filter brightness-0 invert"
              />
              <h2 className="text-3xl font-bold mb-4">
                Registration Successful!
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Thank you for registering for IEEE AITS 2025. Our team will
                contact you shortly with payment details and further
                information.
              </p>
              <div className="bg-blue-500/20 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-2">What's Next?</h3>
                <ul className="text-left space-y-2">
                  <li>• Check your email for registration confirmation</li>
                  <li>• Complete the payment process</li>
                  <li>• Join our LinkedIn group for updates</li>
                  <li>• Follow us on social media</li>
                  <li>• Mark your calendar for March 24-26, 2025</li>
                </ul>
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href="#schedule"
                  className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition-colors"
                >
                  View Schedule
                </a>
                <a
                  href="#contact"
                  className="border border-blue-500 hover:bg-blue-500/20 px-6 py-2 rounded-full transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const paymentOptions = getPaymentOptions(formData.role);

  return (
    <section id="registration" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg"
              alt="IEEE Logo"
              className="h-16 filter brightness-0 invert"
            />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Register for IEEE AITS 2025
          </h2>
          <p className="text-xl text-gray-300">
            Join us at India's Premier Technology Summit
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Registration Form */}
          <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full bg-blue-900/30 border border-blue-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-blue-900/30 border border-blue-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-blue-900/30 border border-blue-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Role *</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    required
                    value={formData.role}
                    onChange={(e) => {
                      setFormData({ ...formData, role: e.target.value });
                      setSelectedPaymentOption(''); // Reset payment option when role changes
                    }}
                    className="w-full bg-blue-900/30 border border-blue-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select role</option>
                    <option value="student">Student</option>
                    <option value="academic">Faculty</option>
                    <option value="professional">Professional</option>
                    <option value="researcher">Others</option>
                  </select>
                </div>
              </div>

              {formData.role === 'student' && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    IEEE Member Number (if applicable)
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.ieeeNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, ieeeNumber: e.target.value })
                      }
                      className="w-full bg-blue-900/30 border border-blue-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Optional"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">
                  Organization/Institution *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    required
                    type="text"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="w-full bg-blue-900/30 border border-blue-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your organization"
                  />
                </div>
              </div>

              {formData.role && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Registration Type *
                  </label>
                  <div className="space-y-3">
                    {paymentOptions.map((option) => (
                      <label
                        key={option.type}
                        className="flex items-center p-3 bg-blue-900/30 rounded-lg cursor-pointer hover:bg-blue-900/40 transition-colors"
                      >
                        <input
                          type="radio"
                          name="paymentOption"
                          value={option.type}
                          checked={selectedPaymentOption === option.type}
                          onChange={(e) =>
                            setSelectedPaymentOption(e.target.value)
                          }
                          className="mr-3"
                        />
                        <div>
                          <div className="font-medium">
                            {option.description}
                          </div>
                          <div className="text-sm text-gray-300">
                            {option.type.includes('ieee') &&
                              'Valid IEEE membership required'}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.accommodationRequired}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        accommodationRequired: e.target.checked,
                      })
                    }
                    className="rounded border-blue-700 text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-sm">
                    Accommodation is available at ₹350 per day, if required.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting || !selectedPaymentOption}
                className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>
                  {submitting ? 'Processing...' : 'Proceed to Payment'}
                </span>
                {!submitting && <CreditCard className="w-5 h-5" />}
              </button>
            </form>
          </div>

          {/* FAQs and Benefits section remains the same */}
          <div>
            <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Registration Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-blue-400 mt-1" />
                  <span>
                    Access to all keynote sessions and panel discussions
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-blue-400 mt-1" />
                  <span>Participation in workshops and technical sessions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Briefcase className="w-5 h-5 text-blue-400 mt-1" />
                  <span>Networking opportunities with industry leaders</span>
                </li>
                <li className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-blue-400 mt-1" />
                  <span>Certificate of participation from IEEE</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-blue-900/20 backdrop-blur-sm rounded-xl overflow-hidden"
                >
                  <button
                    className="w-full p-4 text-left flex items-center justify-between"
                    onClick={() =>
                      setActiveAccordion(
                        activeAccordion === index ? null : index
                      )
                    }
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="font-medium">{faq.question}</span>
                    </div>
                    <span
                      className={`transform transition-transform ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {activeAccordion === index && (
                    <div className="p-4 pt-0 text-gray-300">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
