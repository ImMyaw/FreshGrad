import { useState } from 'react';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { Stats } from '../components/stats';
import { TrackCards } from '../components/track-cards';
import { About } from '../components/about';
import { Footer } from '../components/footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen">
      <Header 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
      />
      
      <main className="mt-[70px]">
        <Hero />
        <Stats />
        
        <TrackCards />
        <About />
      </main>
      
      <Footer />
    </div>
  );
}
