import React, { useState } from 'react';
import IntroLoader from './components/IntroLoader';
import Navbar from './components/Navbar';
import HeroSystemProfile from './components/HeroSystemProfile';
import ExecutionRootMap from './components/ExecutionRootMap';
import TechnologiesPills from './components/TechnologiesPills';
import ProjectsShowcase from './components/ProjectsShowcase';
import TechStack from './components/TechStack';
import EducationCertsSection from './components/EducationCertsSection';
import PerformanceShowcase from './components/PerformanceShowcase';
import BigFooter from './components/BigFooter';
import PortfolioLeadModal from './components/PortfolioLeadModal';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#06070a] text-slate-100 relative overflow-hidden bg-grid-pattern">
      
      {/* Intro 100% Loader Overlay */}
      {!loadingComplete && (
        <IntroLoader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Ambient Orbs */}
      <div className="glow-orb-indigo -top-20 left-1/4" />
      <div className="glow-orb-cyan top-96 right-10" />
      <div className="glow-orb-violet bottom-20 left-10" />

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-6 relative z-10">
        
        {/* HERO SYSTEM PROFILE */}
        <section id="hero">
          <HeroSystemProfile scrollToSection={scrollToSection} />
        </section>

        {/* CORE EXECUTION ROOT MAP (Reel Screenshot 1) */}
        <section>
          <ExecutionRootMap />
        </section>

        {/* TECHNOLOGIES I WORK WITH PILLS (Reel Screenshot 5) */}
        <section id="skills">
          <TechnologiesPills />
        </section>

        {/* FEATURED ENGINEERING PROJECTS (Reel Screenshot 2) */}
        <section id="projects" className="scroll-mt-24">
          <ProjectsShowcase />
        </section>

        {/* DETAILED TECHNICAL CAPABILITY MATRIX */}
        <section className="scroll-mt-24">
          <div className="flex flex-col items-center text-center space-y-3 mb-8">
            <div className="badge-pill">Detailed Competency Breakdown</div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Data Engineering & Analytics Competencies
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              In-depth breakdown of SQL, Python, Power BI, PostgreSQL, and Machine Learning.
            </p>
          </div>

          <TechStack />
        </section>

        {/* EDUCATION & CERTIFICATIONS SECTION */}
        <EducationCertsSection />

        {/* PERFORMANCE & DELIVERY SHOWCASE */}
        <section id="performance" className="scroll-mt-24">
          <PerformanceShowcase />
        </section>

      </main>

      {/* BIG FOOTER WITH WATERMARK & STATUS (Reel Screenshot 4) */}
      <BigFooter scrollToSection={scrollToSection} onOpenModal={() => setIsModalOpen(true)} />

      {/* Portfolio Plan Generator Modal */}
      <PortfolioLeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}
