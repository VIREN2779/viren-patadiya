
import { useEffect } from 'react';
import Hero from '@/components/Hero';

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
        <Hero />
    </div>
  );
};

export default Index;
