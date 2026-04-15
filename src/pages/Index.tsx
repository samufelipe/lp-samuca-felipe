import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import TargetAudience from '@/components/TargetAudience';
import Stats from '@/components/Stats';
import BackgroundElements from '@/components/BackgroundElements';
import GoogleExpertise from '@/components/GoogleExpertise';
import Methodology from '@/components/Methodology';
import Comparison from '@/components/Comparison';
import Cases from '@/components/Cases';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundElements />
      <Navbar />
      <main className="overflow-x-hidden relative z-10">
        <Hero />
        <PainPoints />
        <TargetAudience />
        <Stats />
        <GoogleExpertise />
        <Methodology />
        <Comparison />
        <Cases />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;