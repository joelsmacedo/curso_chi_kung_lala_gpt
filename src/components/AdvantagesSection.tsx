import { motion, type Variants } from 'framer-motion';
import { Heart, Zap, ShieldCheck, Sun, RefreshCw, Feather, Target, Sparkles } from 'lucide-react';

const advantages = [
  { icon: Heart, title: "Saúde Integral", description: "Equilibre corpo, mente e emoções através da regulação do seu Qi." },
  { icon: Zap, title: "Vitalidade Renovada", description: "Aumente sua disposição diária combatendo o cansaço e o estresse." },
  { icon: ShieldCheck, title: "Imunidade Forte", description: "Fortaleça as defesas naturais do seu organismo energeticamente." },
  { icon: Target, title: "Foco e Clareza", description: "Melhore sua concentração com técnicas de meditação em movimento." },
  { icon: Sparkles, title: "Cura Energética", description: "Aprenda a canalizar energia para si mesmo e para outras pessoas." },
  { icon: RefreshCw, title: "Rejuvenescimento", description: "Estimule a renovação celular e atrase o processo de envelhecimento." },
  { icon: Sun, title: "Paz Interior", description: "Desenvolva resiliência emocional e profunda tranquilidade espiritual." },
  { icon: Feather, title: "Prática Acessível", description: "Movimentos suaves adaptáveis a qualquer idade ou condição física." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const AdvantagesSection = () => {
  return (
    <section className="w-full relative z-10" id="vantagens">
      {/* Grid Area */}
      <div className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-text-main mb-6"
          >
            Os 8 Pilares da <span className="text-accent-gold italic drop-shadow-sm">Transformação</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-main/70 max-w-2xl mx-auto font-light"
          >
            Os benefícios da prática regular do Chi Kung se manifestam em todas as áreas da sua vida.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="antigravity-card p-8 group flex flex-col items-center text-center cursor-default"
              >
                <div className="w-16 h-16 rounded-full bg-accent-green/10 flex items-center justify-center mb-6 group-hover:bg-accent-gold/20 transition-colors duration-500 group-hover:-translate-y-2 group-hover:scale-110 ease-out">
                  <Icon className="w-8 h-8 text-accent-blue group-hover:text-accent-gold transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-text-main mb-3 font-medium">{adv.title}</h3>
                <p className="text-text-main/70 font-light text-sm leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Full-width Quote Area */}
      <div className="w-full relative py-24 overflow-hidden bg-accent-blue mt-12">
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
           <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] bg-gradient-to-b from-transparent via-accent-gold/5 to-transparent rotate-12 animate-float" style={{ animationDuration: '10s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.blockquote 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl font-serif text-accent-gold italic font-light leading-relaxed drop-shadow-lg"
          >
            "O Chi Kung não te dá superpoderes... Ele apenas te devolve o poder natural que a ansiedade e o mundo moderno te tiraram."
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
