import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AdvantagesSection from './components/AdvantagesSection';
import ModulesAccordion from './components/ModulesAccordion';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background blobs / floating elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-green/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <main className="relative z-10 flex flex-col items-center">
        <HeroSection />
        <AboutSection />
        <AdvantagesSection />
        <ModulesAccordion />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
