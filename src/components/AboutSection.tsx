import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto relative z-10 overflow-hidden" id="sobre">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-text-main mb-8 leading-tight">
            Compreenda a Essência da <span className="text-accent-green italic">Cura Energética</span>
          </h2>
          
          <div className="space-y-6 text-lg text-text-main/80 font-light leading-relaxed">
            <p>
              O Chi Kung (ou Qi Gong) é uma prática milenar chinesa que combina movimentos suaves, respiração consciente e foco mental para cultivar e equilibrar o "Qi", a energia vital que flui em tudo.
            </p>
            <p>
              Neste curso, o Professor Laércio desmistifica a capacidade de cura que todos possuímos. Você aprenderá técnicas profundas para canalizar essa energia, não apenas para o seu próprio bem-estar físico e emocional, mas também para auxiliar na harmonização de outras pessoas.
            </p>
            <p className="font-medium text-accent-blue pt-4 border-t border-accent-blue/10">
              A verdadeira cura acontece quando nos reconectamos com o fluxo natural do universo.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Image/Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 relative flex justify-center items-center w-full min-h-[400px]"
        >
          {/* Abstract representation of hands/energy since we don't have a specific image yet */}
          <div className="relative w-full max-w-md aspect-square">
            {/* Background glowing orb */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/40 to-accent-blue/30 rounded-full filter blur-3xl mix-blend-multiply opacity-60 animate-float" style={{ animationDuration: '6s' }}></div>
            
            {/* Glassmorphism card framing the concept */}
            <div className="absolute inset-4 glass rounded-3xl overflow-hidden flex items-center justify-center border border-white/40 shadow-2xl">
              <div className="relative w-full h-full bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center p-8 text-center">
                 <div className="w-32 h-32 rounded-full bg-white/20 blur-xl absolute"></div>
                 <div className="w-24 h-24 rounded-full border border-accent-gold/50 absolute animate-ping" style={{ animationDuration: '3s' }}></div>
                 <p className="font-serif text-2xl text-accent-blue z-10 opacity-80 italic">Energia Vital em Movimento</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
