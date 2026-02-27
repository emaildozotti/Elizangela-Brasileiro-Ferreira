import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ChevronDown, PlayCircle } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-ice/10 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left focus:outline-none group"
      >
        <h4 className="font-serif text-lg md:text-xl font-light text-ice group-hover:text-gold transition-colors">{question}</h4>
        <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-ice/70 font-light leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-petroleum text-ice font-sans selection:bg-gold/20">

      {/* Visual Identity Element (Background) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full border border-gold/5 blur-[2px] opacity-20 hidden md:block"></div>
        <div className="absolute top-[15%] -right-[5%] w-[40vw] h-[40vw] rounded-full border border-gold/10 opacity-10 hidden md:block"></div>
        {/* Organic shape / Hourglass representation */}
        <div className="absolute bottom-[5%] -left-[10%] w-[60vw] h-[60vw] bg-teal/30 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-[80px]" style={{ animation: 'morph 15s ease-in-out infinite alternate' }}></div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 50% 40% 50%; }
        }
      `}} />

      {/* Hero Section */}
      <section className="relative w-full min-h-[100dvh] flex items-center justify-center pt-10 pb-20 px-6 z-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Column: Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left pt-12 lg:pt-0">
            {/* Monogram / Logo */}
            <FadeIn className="mb-12">
              <div className="inline-flex flex-col items-center lg:items-start">
                <span className="font-['Great_Vibes'] text-6xl text-gold mb-2 leading-none">EB</span>
                <span className="text-xs uppercase tracking-[0.3em] font-light text-ice/60">Analista Corporal</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light tracking-tight leading-[1.15] mb-8 text-ice">
                Para a mulher que se perdeu cuidando de todos:<br />
                <span className="italic text-gold block mt-4">É hora de voltar a existir.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg font-light leading-relaxed mb-12 text-ice/70 max-w-xl mx-auto lg:mx-0">
                Você passou anos sendo "a mãe de...", "a esposa de...", "a filha de...". Chegou o momento de descobrir <strong className="font-medium text-ice font-serif">quem é VOCÊ</strong>. Um processo terapêutico profundo que une <strong className="font-medium text-ice font-serif">Análise Corporal, Consciência Emocional e Espiritualidade</strong>.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center lg:items-start gap-4">
                <button
                  onClick={() => document.getElementById('pain-points')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-transparent hover:bg-gold text-gold hover:text-petroleum px-10 py-5 font-sans font-light tracking-[0.2em] uppercase text-xs transition-all duration-500 border border-gold w-full sm:w-auto hover:shadow-[0_0_30px_rgba(201,166,70,0.3)] group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Quero resgatar minha identidade
                  </span>
                </button>
                <p className="text-[10px] text-ice/40 tracking-[0.15em] uppercase mt-2">
                  Sessão de Diagnóstico Online e Individual
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Graphic/Image */}
          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 flex justify-center lg:justify-end">
            <FadeIn delay={0.4} className="relative w-full max-w-md">
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Geometrical minimal frame */}
                <div className="absolute top-4 -right-4 bottom-4 w-full border border-gold/30 -z-10"></div>
                <div className="absolute -top-4 right-4 -bottom-4 w-full border border-sage/40 -z-10"></div>

                <img
                  src="https://i.imgur.com/qBbCyBm.jpeg"
                  alt="Elizângela Brasileiro"
                  className="w-full h-full object-cover grayscale-[30%] contrast-125 sepia-[20%] opacity-90"
                />

                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-petroleum via-petroleum/20 to-transparent"></div>
              </div>

              {/* Symbolic Geometric Box */}
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-teal border border-gold/20 p-6 flex flex-col justify-between hidden md:flex backdrop-blur-sm">
                <div className="w-full h-[1px] bg-gold/50"></div>
                <div className="flex justify-between items-center">
                  <div className="w-[1px] h-12 bg-gold/50"></div>
                  <div className="w-[1px] h-12 bg-gold/50"></div>
                </div>
                <div className="w-full h-[1px] bg-gold/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-gold/30"></div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* Pain Points Section */}
      <section id="pain-points" className="py-32 bg-teal px-6 relative z-10 border-t border-b border-ice/5">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-8 italic text-gold">
              "Por fora, tudo parece bem.<br />Por dentro, o cinza domina."
            </h2>
            <p className="text-lg md:text-xl text-ice/60 font-light leading-relaxed max-w-2xl mx-auto">
              Talvez você tenha a casa, os filhos, o casamento... a vida que "deveria" te fazer feliz. Mas, ao colocar a cabeça no travesseiro, o que sente é um vazio que não sabe explicar.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-px bg-ice/10 border border-ice/10">
            {[
              { title: "Exaustão Inexplicável", desc: <>Você dorme, mas acorda cansada. <span className="text-gold italic">Dores no corpo, fibromialgia ou enxaquecas</span> tornaram-se rotina.</> },
              { title: "Síndrome da Salvadora", desc: <>Você resolve a vida de todo mundo, carrega a família nas costas, mas <span className="text-gold italic">sente que ninguém faria o mesmo por você.</span></> },
              { title: "Silêncio Interior", desc: <>Você engole sapos e guarda suas dores para não "incomodar", enquanto <span className="text-gold italic">adoece em silêncio.</span></> },
              { title: "Busca por Validação", desc: <>Você sente que <span className="text-gold italic">precisa estar sempre servindo ou performando</span> para merecer ser amada.</> }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-teal p-12 md:p-16">
                <h3 className="font-serif text-2xl mb-6 text-ice font-light">{item.title}</h3>
                <p className="text-ice/60 font-light leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-20 text-center">
            <p className="text-xl md:text-3xl font-serif italic text-gold max-w-3xl mx-auto">
              "Isso não é ingratidão. Isso é desconexão. Você se desconectou de si mesma para caber na vida dos outros."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-32 bg-petroleum px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-ice uppercase tracking-widest text-sm mb-4">Apresentação</h2>
            <div className="h-px w-20 bg-gold mx-auto mb-8"></div>
            <h3 className="text-3xl md:text-5xl font-serif font-light text-ice italic">Um recado muito importante para você</h3>
          </FadeIn>

          <FadeIn className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-teal/50 border border-gold/20 flex flex-col items-center justify-center relative group cursor-pointer hover:border-gold/50 transition-colors duration-700">
              <div className="absolute inset-4 border border-ice/5 pointer-events-none"></div>

              <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500 z-10">
                <PlayCircle className="w-8 h-8 text-gold" strokeWidth={1} />
              </div>
              <p className="mt-6 font-sans font-light tracking-[0.3em] text-ice/40 uppercase text-[10px] z-10">Assistir ao Vídeo</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About the Mentor */}
      <section className="py-32 px-6 bg-teal">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <FadeIn className="w-full lg:w-5/12">
            <div className="relative aspect-[3/4] p-6 border border-gold/20">
              <img
                src="https://i.imgur.com/ya1kW9l.jpeg"
                alt="Elizângela Brasileiro"
                className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]"
              />
              <div className="absolute top-0 right-1/2 w-4 h-full border-r border-gold/30"></div>
              <div className="absolute top-1/2 left-0 w-full h-4 border-b border-gold/30"></div>
            </div>
          </FadeIn>

          <div className="w-full lg:w-7/12 relative">
            <FadeIn>
              <h2 className="text-3xl lg:text-5xl font-serif font-light mb-12 leading-tight">
                Eu não falo de dor porque li nos livros. <br /><span className="italic text-gold">Eu falo porque atravessei o deserto.</span>
              </h2>
              <div className="space-y-6 text-ice/70 font-light text-lg leading-relaxed mix-blend-plus-lighter">
                <p><span className="text-gold font-serif text-2xl mr-2">M</span>uito prazer, eu sou Elizângela Brasileiro.</p>
                <p>Antes de ser terapeuta e analista corporal, eu sou mulher e mãe de quatro filhos. Eu conheço o <strong className="font-serif text-ice font-normal">peso de tentar ser perfeita.</strong></p>
                <p>Eu já estive no fundo do poço emocional. Vivi relacionamentos abusivos, enfrentei a viuvez, atravessei a depressão e senti meu corpo paralisar por carregar pesos que não eram meus. Eu sei o que é olhar no espelho e não reconhecer a mulher refletida ali.</p>
                <p className="pt-4 pb-2 text-gold italic font-serif text-xl">Mas eu também sei o caminho de volta.</p>
                <p>Minha jornada de cura me ensinou que não existe transformação sem consciência. Hoje, dedico minha vida a guiar outras mulheres a saírem desse lugar de apagamento. Não com fórmulas mágicas, mas com acolhimento real, técnica e verdade.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-32 bg-petroleum px-6 relative border-t border-ice/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <FadeIn className="w-full lg:w-1/3">
              <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-gold mb-6 relative">
                <span className="relative z-10 bg-petroleum pr-4">O Método</span>
                <span className="absolute top-1/2 left-0 w-full h-px bg-gold/30 -z-0"></span>
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-light mb-8 italic">
                O Caminho do Reencontro
              </h3>
              <p className="text-ice/60 font-light leading-relaxed text-lg">
                Minha abordagem foge da terapia tradicional onde você apenas "desabafa" sem sair do lugar. Nós vamos à raiz do problema usando três pilares fundamentais.
              </p>
            </FadeIn>

            <div className="w-full lg:w-2/3 grid sm:grid-cols-2 gap-8">
              {[
                { num: "I", title: "Análise Corporal", desc: "Seu corpo explica como sua mente funciona. Através do formato do seu corpo, entendemos seus traços, medos e forças." },
                { num: "II", title: "Consciência Emocional", desc: "Vamos identificar os padrões de dependência e autonegligência que você repete há anos, para desenvolver autoria sobre sua vida." },
                { num: "III", title: "Espiritualidade", desc: "Uma visão baseada no Amor e no Livre Arbítrio, não na culpa religiosa. Ressignificamos sua fé como fonte de força." }
              ].map((pillar, i) => (
                <FadeIn key={i} delay={i * 0.15} className="border-l border-gold/30 pl-8 pb-8">
                  <div className="font-serif italic text-gold text-2xl mb-4">{pillar.num}.</div>
                  <h4 className="font-serif text-2xl mb-4 text-ice">{pillar.title}</h4>
                  <p className="text-ice/50 font-light leading-relaxed">{pillar.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifier */}
      <section className="py-32 px-6 bg-petroleum relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-ice italic">Para quem é este processo?</h2>
            <div className="w-24 h-px bg-gold/30 mx-auto mt-6"></div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            {/* O SIM - Highlighted Block */}
            <FadeIn delay={0.1} className="relative group flex flex-col">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gold/5 blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative flex-1 bg-teal/40 backdrop-blur-sm p-12 lg:p-16 border border-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="mb-12">
                  <span className="text-[10px] font-sans tracking-[0.4em] font-medium uppercase text-gold">A sua Jornada</span>
                  <h3 className="text-3xl font-serif text-ice mt-2 italic">O Sim</h3>
                </div>

                <ul className="space-y-10">
                  {[
                    "Você está decidida a parar de viver no automático.",
                    "Você entende que a cura exige sua participação ativa.",
                    "Você quer resgatar sua autoestima e seu brilho no olhar."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-6 items-start">
                      <div className="mt-1 w-6 h-6 rounded-full border border-gold/50 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-gold" strokeWidth={3} />
                      </div>
                      <span className="text-ice text-lg font-light leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* O NÃO - Subtle Block */}
            <FadeIn delay={0.2} className="flex flex-col opacity-60 hover:opacity-100 transition-opacity duration-700">
              <div className="flex-1 p-12 lg:p-16 border border-ice/10">
                <div className="mb-12">
                  <span className="text-[10px] font-sans tracking-[0.4em] font-light uppercase text-ice/40 tracking-[0.4em]">Fique atenta</span>
                  <h3 className="text-3xl font-serif text-ice/40 mt-2 italic">O Não</h3>
                </div>

                <ul className="space-y-10">
                  {[
                    "Você busca uma \"pílula mágica\" ou solução instantânea.",
                    "Você quer apenas reclamar sem mudar suas próprias atitudes.",
                    "Você não está disposta a investir tempo e energia em si mesma."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-6 items-start">
                      <X className="w-5 h-5 text-ice/20 shrink-0 mt-1" strokeWidth={1} />
                      <span className="text-ice/40 text-base font-light leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 px-6 bg-petroleum overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-ice">
              O primeiro passo para <span className="italic text-gold">sua nova vida</span>
            </h2>
            <p className="text-lg font-light text-ice/60 max-w-2xl mx-auto">
              Como meu atendimento é profundo e exclusivo, o processo de acompanhamento possui três etapas fundamentais.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-6 left-[15%] w-[70%] h-px bg-gold/20"></div>

            {[
              { step: "01", title: "Agendamento", desc: "Você preenche seus dados e escolhe o melhor horário em minha agenda confidencial." },
              { step: "02", title: "Diagnóstico", desc: "Encontro online de alinhamento profundo para entendermos se meu método é exato para sua dor." },
              { step: "03", title: "A Jornada", desc: "Havendo conexão mútua, daremos início à reconstrução da sua identidade e saúde emocional." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full border border-gold bg-petroleum flex items-center justify-center z-10 mb-8 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                  <span className="font-serif italic text-gold group-hover:text-petroleum transition-colors duration-500 relative z-10">{item.step}</span>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-ice">{item.title}</h3>
                <p className="text-ice/50 font-light leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-24 text-center">
            <button
              onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gold hover:bg-gold-light text-petroleum px-12 py-5 font-sans font-medium tracking-[0.15em] uppercase text-xs transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,166,70,0.4)]"
            >
              Verificar Horários Para Diagnóstico
            </button>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-teal px-6 border-t border-ice/5">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="text-xs font-sans tracking-[0.3em] font-light uppercase text-gold mb-4">Esclarecimentos</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light text-ice">Dúvidas Frequentes</h3>
          </FadeIn>

          <div className="space-y-2">
            {[
              { q: "O atendimento é online? Funciona mesmo?", a: "Sim, 100% online por vídeo. A eficácia é a mesma (ou maior) que o presencial, pois você está no conforto e segurança do seu ambiente, garantindo maior entrega emocional." },
              { q: "Preciso ter conhecimento sobre Análise Corporal?", a: "Absolutamente não. Eu serei sua guia técnica. Você só precisa trazer sua história, suas dúvidas e abertura genuína para o mergulho interior." },
              { q: "E se minha família não apoiar?", a: "Muitas vezes, a resistência da família é reflexo de dinâmicas que vamos investigar. Quando você se prioriza, a estrutura ao seu redor se reprograma. Seu autocuidado é inegociável." },
              { q: "Como agendar um horário para o diagnóstico?", a: "O diagnóstico é o nosso primeiro passo oficial. Basta clicar no botão de agendamento que direcionará você ao acompanhamento da minha equipe no WhatsApp para definir a data." }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <AccordionItem question={faq.q} answer={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA Final */}
      <footer className="bg-petroleum min-h-screen flex flex-col justify-between px-6 pt-32 pb-12 text-center relative overflow-hidden border-t border-gold/20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05]"></div>

        <div className="flex-1 w-full max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center">
          <FadeIn>
            <div className="mb-12 opacity-50">
              <span className="font-['Great_Vibes'] text-6xl text-gold">EB</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light mb-16 leading-[1.2] text-ice">
              Você não precisa continuar carregando esse peso. <br className="hidden md:block" />
              <span className="italic text-gold mt-4 block">Sua vida pode ser digna e verdadeira mais uma vez.</span>
            </h2>
            <button
              onClick={() => window.open('https://wa.me/554797479921?text=Ol%C3%A1%2C%20Eliz%C3%A2ngela!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20iniciar%20minha%20jornada.', '_blank')}
              className="bg-transparent hover:bg-gold text-gold hover:text-petroleum border border-gold px-12 py-6 font-sans font-light tracking-[0.2em] uppercase text-xs transition-all duration-700 w-full sm:w-auto mt-4 backdrop-blur-sm"
            >
              Falar com o Suporte
            </button>
          </FadeIn>
        </div>

        <div className="w-full max-w-6xl mx-auto pt-20 border-t border-gold/10 mt-20 relative z-10">
          <FadeIn delay={0.4} className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-left">
              <span className="font-['Great_Vibes'] text-3xl text-gold mr-4">Elizângela Brasileiro</span>
              <span className="text-ice/40 text-[10px] tracking-[0.2em] uppercase font-light border-l border-gold/20 pl-4">Analista Corporal</span>
            </div>

            <p className="text-ice/30 text-[10px] uppercase tracking-widest font-light">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
}
