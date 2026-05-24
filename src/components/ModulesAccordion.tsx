import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const lessons = [
  { id: 1, title: "Aula 1: A Natureza do Qi", content: "Introdução aos conceitos fundamentais da energia vital, as polaridades Yin e Yang e como o Qi flui através dos meridianos do corpo." },
  { id: 2, title: "Aula 2: Postura e Alinhamento", content: "Aprenda a postura básica do Chi Kung (Zhan Zhuang), essencial para abrir os canais de energia e permitir o fluxo livre e desimpedido do Qi." },
  { id: 3, title: "Aula 3: Respiração Consciente", content: "Técnicas de respiração abdominal profunda para acalmar a mente, oxigenar as células e captar a energia nutritiva do ambiente." },
  { id: 4, title: "Aula 4: Os Primeiros Movimentos", content: "Série de movimentos preparatórios para soltar as articulações e ativar a circulação da energia estagnada." },
  { id: 5, title: "Aula 5: O Abraço da Árvore", content: "Uma das práticas mais poderosas para enraizamento (grounding), absorção de energia da terra e fortalecimento do sistema imunológico." },
  { id: 6, title: "Aula 6: Captando a Energia do Céu", content: "Movimentos de expansão para conectar-se com a energia cósmica sutil, trazendo clareza mental e inspiração." },
  { id: 7, title: "Aula 7: Purificação dos Órgãos", content: "Prática focada nos cinco órgãos principais (Coração, Baço, Pulmões, Rins, Fígado) utilizando sons e movimentos específicos de cura." },
  { id: 8, title: "Aula 8: Cultivando o Dan Tian", content: "Como armazenar a energia vital no seu centro de força (Dan Tian inferior) para ter reservas de vitalidade durante todo o dia." },
  { id: 9, title: "Aula 9: Emissão de Qi (Cura Externa)", content: "Princípios básicos para direcionar a energia pelas mãos, permitindo a autoaplicação e o auxílio terapêutico a outras pessoas." },
  { id: 10, title: "Aula 10: Integração e Prática Diária", content: "Como criar uma rotina sustentável de 15 minutos diários, integrando todos os aprendizados para uma vida de saúde plena." }
];

const AccordionItem = ({ lesson, isOpen, onClick }: { lesson: any, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-accent-gold/20 last:border-0">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group transition-colors hover:text-accent-blue focus:outline-none"
      >
        <h4 className="text-xl font-serif font-medium text-text-main group-hover:text-accent-blue transition-colors">
          {lesson.title}
        </h4>
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`w-8 h-8 flex items-center justify-center rounded-full ${isOpen ? 'bg-accent-blue/10 text-accent-blue' : 'bg-transparent text-text-main/50'} group-hover:bg-accent-blue/10 group-hover:text-accent-blue transition-colors`}
        >
          <Plus className="w-5 h-5" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 text-text-main/70 font-light leading-relaxed">
              {lesson.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ModulesAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto relative z-10" id="conteudo">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif text-text-main mb-6"
        >
          Conteúdo <span className="text-accent-blue italic">Programático</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-text-main/70 font-light"
        >
          Uma jornada de 10 passos estruturada para que qualquer pessoa, independente da experiência, possa despertar sua energia curativa.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
      >
        <div className="flex flex-col">
          {lessons.map((lesson, index) => (
            <AccordionItem 
              key={lesson.id} 
              lesson={lesson} 
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ModulesAccordion;
