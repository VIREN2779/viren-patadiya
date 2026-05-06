
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
import SKills from '@/components/Skills';
import GetInTouch from '@/components/GetInTouch';
import Projects from '@/components/Projects';

const Index = () => {
  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SKills />
        <GetInTouch />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
