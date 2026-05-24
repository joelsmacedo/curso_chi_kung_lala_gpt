import { motion } from 'framer-motion';
import { ShieldCheck, Award, Smartphone, Clock, Lock } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="w-full relative bg-white border-t border-accent-gold/20 pt-20 pb-10 overflow-hidden" id="garantia">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent-green/5 to-transparent pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Badges Area */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20">
          <div className="flex flex-col items-center text-center max-w-[120px]">
            <Award className="w-10 h-10 text-accent-gold mb-3" strokeWidth={1.5} />
            <span className="text-sm font-medium text-text-main">Certificado Digital</span>
          </div>
          <div className="flex flex-col items-center text-center max-w-[120px]">
            <Smartphone className="w-10 h-10 text-accent-blue mb-3" strokeWidth={1.5} />
            <span className="text-sm font-medium text-text-main">Estude em Qualquer Dispositivo</span>
          </div>
          <div className="flex flex-col items-center text-center max-w-[120px]">
            <Clock className="w-10 h-10 text-accent-green mb-3" strokeWidth={1.5} />
            <span className="text-sm font-medium text-text-main">10 Aulas Práticas (15h)</span>
          </div>
        </div>

        {/* Guarantee Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto relative rounded-3xl p-[2px] bg-gradient-to-br from-accent-gold via-accent-green to-accent-blue shadow-2xl mb-24"
        >
          <div className="bg-white rounded-[22px] p-8 md:p-12 text-center flex flex-col items-center relative overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-accent-gold/5 blur-2xl"></div>
            
            <ShieldCheck className="w-16 h-16 text-accent-gold mb-6 relative z-10" />
            <h3 className="text-2xl md:text-4xl font-serif text-text-main mb-4 relative z-10">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="text-text-main/80 font-light leading-relaxed max-w-xl relative z-10">
              Seu risco é zero. Se nos primeiros 7 dias de acesso ao curso você sentir que as práticas de Chi Kung não estão ajudando a transformar sua energia, basta solicitar o reembolso. Devolveremos 100% do seu investimento, sem burocracia.
            </p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-text-main mb-8">
            Comece Sua Jornada de Cura <span className="italic text-accent-green">Hoje</span>
          </h2>
          
          <div className="flex flex-col items-center justify-center gap-4">
            <a href="#" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white text-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-accent-blue via-accent-green to-accent-gold rounded-full hover:shadow-[0_0_30px_rgba(156,175,136,0.6)] hover:-translate-y-1 w-full max-w-sm">
              <span className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[length:200%_auto] animate-[gradient_2s_linear_infinite] bg-gradient-to-r from-accent-gold via-accent-green to-accent-blue blur-md -z-10"></span>
              QUERO ME INSCREVER AGORA
            </a>
            
            <div className="flex items-center gap-2 text-sm text-text-main/60 mt-4">
              <Lock className="w-4 h-4" />
              <span>Pagamento 100% Seguro e Criptografado</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-text-main/10 pt-8 text-center text-sm text-text-main/50 font-light">
          <p>© {new Date().getFullYear()} Curso Chi Kung Cura Pelas Mãos - Professor Laércio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
