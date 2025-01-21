import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventHighlights from './components/EventHighlights';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import CallForSpeakers from './components/CallForSpeakers';
import Sponsors from './components/Sponsors';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <EventHighlights />
        <Speakers />
        <Schedule />
        <CallForSpeakers />
        <Sponsors />
        <Registration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;