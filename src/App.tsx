import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CareDuelBanner from './components/CareDuelBanner';
import AwardsPanels from './components/AwardsPanels';
import ContentSections from './components/ContentSections';
import CulturalInsights from './components/CulturalInsights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <Hero />
      <CareDuelBanner />
      <AwardsPanels />
      <ContentSections />
      <CulturalInsights />
      <Footer />
    </div>
  );
}

export default App;