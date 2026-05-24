import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVideoOpen]);

  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center pt-20 pb-12 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 lg:gap-24">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-text-main leading-[1.1] mb-6"
          >
            A Arte Milenar de <br className="hidden md:block" />
            <span className="text-accent-gold italic relative inline-block">
              Curar Pelas Mãos
              {/* Sutil glow effect behind the text */}
              <span className="absolute inset-0 bg-accent-gold/20 blur-xl -z-10 rounded-full"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-text-main/80 mb-10 max-w-lg mx-auto md:mx-0 font-light leading-relaxed"
          >
            Descubra o Curso Chi Kung com o Professor Laércio e desperte o poder da energia vital (Qi) para transformar sua saúde e equilíbrio espiritual.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6"
          >
            {/* Primary CTA Button */}
            <a href="#garantia" className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-accent-green to-accent-gold rounded-full hover:glow-green hover:-translate-y-1">
              <span className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-accent-gold to-accent-green blur-md -z-10"></span>
              Garantir Minha Vaga
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Video/Play Button Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex-1 flex justify-center items-center w-full"
        >
          <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Organic Shape / Abstract representation of energy */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-green/30 to-accent-gold/30 rounded-full mix-blend-multiply filter blur-2xl animate-float opacity-80"></div>
            
            {/* Play Button Container */}
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="relative z-10 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white/40 backdrop-blur-md rounded-full border border-white/50 shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-transform duration-300 hover:scale-110 group"
            >
              {/* Ripple Effect Circles */}
              <div className="absolute inset-0 rounded-full border-2 border-accent-gold/40 animate-ripple"></div>
              <div className="absolute inset-0 rounded-full border border-accent-green/30 animate-ripple" style={{ animationDelay: '0.5s' }}></div>
              
              <Play className="w-10 h-10 md:w-12 md:h-12 text-accent-blue ml-2 group-hover:text-accent-gold transition-colors duration-300" fill="currentColor" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-10 h-10" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 glow-gold"
            >
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/iWFxHTGr_IA?autoplay=1" 
                title="Apresentação Chi Kung" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
