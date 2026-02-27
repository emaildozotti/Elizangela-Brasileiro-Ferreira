import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ChevronDown, PlayCircle } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-charcoal/10 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left focus:outline-none"
      >
        <h4 className="font-serif text-lg md:text-xl font-medium text-charcoal pr-4">{question}</h4>
        <ChevronDown className={`w-5 h-5 text-teal transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-charcoal/80 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-offwhite text-charcoal font-sans selection:bg-teal/20">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-offwhite">
        {/* Subtle premium background details */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-terracotta/5 blur-[120px]"></div>
          <div className="absolute bottom-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-teal/5 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:min-h-screen px-6">

          {/* Left Column: Text */}
          <div className="w-full lg:w-1/2 min-h-[100dvh] lg:min-h-0 flex flex-col justify-center pt-8 pb-16 lg:py-0">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-[1.1] mb-8 text-charcoal">
                Para a mulher que se perdeu cuidando de todos:<br />
                <span className="italic text-terracotta block mt-4">É hora de voltar a existir.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-12 text-charcoal/70">
                Você passou anos sendo "a mãe de...", "a esposa de...", "a filha de...". Chegou o momento de descobrir <strong className="font-medium text-charcoal">quem é VOCÊ</strong>. Um processo terapêutico profundo que une <strong className="font-medium text-charcoal">Análise Corporal, Consciência Emocional e Espiritualidade</strong>.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <button
                  onClick={() => document.getElementById('pain-points')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-teal hover:bg-charcoal text-white px-10 py-5 rounded-full font-medium tracking-[0.15em] transition-all duration-500 shadow-[0_8px_30px_rgb(13,22,35,0.2)] hover:shadow-[0_8px_30px_rgb(193,155,108,0.3)] hover:-translate-y-1 w-full sm:w-auto text-xs md:text-sm border border-teal hover:border-terracotta"
                >
                  QUERO RESGATAR MINHA IDENTIDADE
                </button>
              </div>
              <p className="mt-6 text-xs text-charcoal/50 font-medium tracking-[0.2em] uppercase text-center sm:text-left">
                Sessão de Diagnóstico Online e Individual
              </p>
            </FadeIn>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2 pb-24 lg:pb-0">
            <FadeIn delay={0.3} className="relative max-w-md mx-auto lg:max-w-none">
              {/* Decorative border */}
              <div className="absolute inset-0 border border-terracotta/20 rounded-[2.5rem] transform translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6"></div>
              {/* Actual image */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] aspect-[4/5] bg-sage/20 border border-white/50 group">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                  alt="Mulher serena e confiante"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent"></div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* Pain Points Section */}
      <section id="pain-points" className="py-24 md:py-32 bg-beige px-6 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent"></div>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 italic text-charcoal">
              "Por fora, tudo parece bem.<br />Por dentro, o cinza domina."
            </h2>
            <p className="text-xl text-charcoal/60 font-light leading-relaxed max-w-2xl mx-auto">
              Talvez você tenha a casa, os filhos, o casamento... a vida que "deveria" te fazer feliz. Mas, ao colocar a cabeça no travesseiro, o que sente é um vazio que não sabe explicar.
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 mb-20">
            {[
              { title: "Exaustão Inexplicável", desc: <>Você dorme, mas acorda cansada. <strong className="font-medium text-charcoal/80">Dores no corpo, fibromialgia ou enxaquecas</strong> tornaram-se rotina.</> },
              { title: "Síndrome da Salvadora", desc: <>Você resolve a vida de todo mundo, carrega a família nas costas, mas <strong className="font-medium text-charcoal/80">sente que ninguém faria o mesmo por você.</strong></> },
              { title: "Silêncio Interior", desc: <>Você engole sapos e guarda suas dores para não "incomodar", enquanto <strong className="font-medium text-charcoal/80">adoece em silêncio.</strong></> },
              { title: "Busca por Validação", desc: <>Você sente que <strong className="font-medium text-charcoal/80">precisa estar sempre servindo ou performando</strong> para merecer ser amada.</> }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-white">
                <h3 className="font-serif text-2xl mb-4 text-terracotta">{item.title}</h3>
                <p className="text-charcoal/70 font-light leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="text-center">
            <div className="inline-block p-px bg-gradient-to-r from-transparent via-terracotta/30 to-transparent rounded-2xl">
              <div className="bg-beige/80 backdrop-blur-sm p-10 rounded-2xl">
                <p className="text-2xl md:text-3xl font-serif italic text-charcoal/80">
                  "Isso não é ingratidão. Isso é desconexão. Você se desconectou de si mesma para caber na vida dos outros."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-offwhite px-6 -mt-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-charcoal">
              Um recado muito importante para você
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="aspect-video bg-gradient-to-br from-charcoal/5 to-sage/10 rounded-[2rem] overflow-hidden flex flex-col items-center justify-center border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative group cursor-pointer transition-transform duration-700 hover:scale-[1.01]">
              <div className="absolute inset-0 bg-teal/5 group-hover:bg-teal/0 transition-colors duration-500"></div>
              <div className="w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-500 z-10">
                <PlayCircle className="w-10 h-10 text-terracotta" strokeWidth={1.5} />
              </div>
              <p className="mt-8 font-medium text-charcoal/40 tracking-[0.2em] uppercase text-xs relative z-10">Assista ao vídeo</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About the Mentor */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <FadeIn className="w-full md:w-5/12">
            <div className="relative">
              <div className="absolute inset-0 border border-terracotta/30 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-sage rounded-[2rem] transform -translate-x-2 -translate-y-2 opacity-10 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                alt="Elizângela Brasileiro"
                className="relative rounded-[2rem] w-full object-cover shadow-2xl aspect-[3/4]"
              />
            </div>
          </FadeIn>

          <div className="w-full md:w-7/12">
            <FadeIn>
              <h2 className="text-4xl lg:text-5xl font-serif font-light mb-10 leading-tight">
                Eu não falo de dor porque li nos livros. <br /><span className="italic text-terracotta">Eu falo porque atravessei o deserto.</span>
              </h2>
              <div className="space-y-6 text-charcoal/70 font-light text-lg leading-relaxed">
                <p className="font-medium text-charcoal tracking-wide">Muito prazer, eu sou Elizângela Brasileiro.</p>
                <p>Antes de ser terapeuta e analista corporal, eu sou mulher e mãe de quatro filhos. Eu conheço o <strong className="font-medium text-charcoal">peso de tentar ser perfeita.</strong></p>
                <p>Eu já estive no fundo do poço emocional. Vivi relacionamentos abusivos, enfrentei a viuvez, atravessei a depressão e senti <strong className="font-medium text-charcoal">meu corpo paralisar</strong> (literalmente) por carregar pesos que não eram meus. Eu sei o que é olhar no espelho e não reconhecer a mulher refletida ali.</p>
                <p className="font-medium text-charcoal tracking-wide pt-2">Mas eu também sei o caminho de volta.</p>
                <p>Minha jornada de cura me ensinou que <strong className="font-medium text-charcoal">não existe transformação sem consciência</strong>. Hoje, dedico minha vida a guiar outras mulheres a saírem desse lugar de apagamento. Não com fórmulas mágicas, mas com acolhimento real, técnica e verdade.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-12 pl-8 border-l border-terracotta/30">
              <p className="text-2xl font-serif italic text-charcoal/80 leading-relaxed">
                "Meu propósito é te mostrar que existe vida além da dor — e que você tem força para acessá-la."
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 md:py-40 bg-teal text-offwhite px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-white/5 to-transparent blur-3xl rounded-full opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 pt-4">
              O Caminho do Reencontro:<br /><span className="italic text-terracotta">Como vamos trabalhar juntas</span>
            </h2>
            <p className="text-offwhite/60 text-lg font-light leading-relaxed">
              Minha abordagem foge da terapia tradicional onde você apenas "desabafa" sem sair do lugar. Nós vamos à raiz do problema usando três pilares:
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "01.", title: "Análise Corporal", desc: <>Seu corpo explica como sua mente funciona. Através do formato do seu corpo, <strong className="font-medium text-offwhite/90">entendemos seus traços de caráter, seus medos e suas forças</strong>. Você vai parar de lutar contra si mesma e começar a usar seus recursos naturais.</> },
              { icon: "02.", title: "Consciência Emocional", desc: <>Vamos <strong className="font-medium text-offwhite/90">identificar os padrões de dependência e autonegligência</strong> que você repete há anos. Você aprenderá a colocar limites sem culpa e a desenvolver a autorresponsabilidade.</> },
              { icon: "03.", title: "Espiritualidade Prática", desc: <>Uma visão espiritual baseada no Amor e no Livre Arbítrio, não na culpa religiosa. Vamos <strong className="font-medium text-offwhite/90">ressignificar sua fé</strong> para que ela seja fonte de força, e não de peso.</> }
            ].map((pillar, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white/[0.03] backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-terracotta/30 transition-colors duration-500 group">
                <div className="text-terracotta/50 font-serif italic text-3xl mb-8 group-hover:text-terracotta transition-colors">{pillar.icon}</div>
                <h3 className="font-serif text-2xl mb-4">{pillar.title}</h3>
                <p className="text-offwhite/60 font-light leading-relaxed">{pillar.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifier */}
      <section className="py-24 md:py-32 px-6 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-charcoal">Este processo é para você?</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn delay={0.1} className="bg-beige p-10 md:p-12 rounded-[2.5rem] border border-charcoal/5 shadow-sm">
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-charcoal/10">
                <div className="bg-charcoal p-3 rounded-full">
                  <Check className="w-5 h-5 text-offwhite" />
                </div>
                <h3 className="text-sm font-semibold tracking-[0.2em] text-charcoal">SIM, É PARA VOCÊ SE:</h3>
              </div>
              <ul className="space-y-8">
                {[
                  <><strong className="font-medium text-charcoal/80">Você está decidida a parar</strong> de viver no automático.</>,
                  <>Você entende que a cura é um processo e <strong className="font-medium text-charcoal/80">exige sua participação ativa.</strong></>,
                  <>Você quer resgatar sua <strong className="font-medium text-charcoal/80">autoestima e seu brilho no olhar.</strong></>
                ].map((text, i) => (
                  <li key={i} className="flex gap-5 group">
                    <Check className="w-5 h-5 text-terracotta shrink-0 mt-1 transition-transform group-hover:scale-110" />
                    <span className="text-charcoal/70 font-light leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-charcoal/5 shadow-sm">
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-charcoal/10">
                <div className="bg-sage/20 p-3 rounded-full">
                  <X className="w-5 h-5 text-sage" />
                </div>
                <h3 className="text-sm font-semibold tracking-[0.2em] text-charcoal/70">NÃO É PARA VOCÊ SE:</h3>
              </div>
              <ul className="space-y-8">
                {[
                  <>Você busca uma <strong className="font-medium text-charcoal/80">"pílula mágica" ou solução instantânea.</strong></>,
                  <>Você quer apenas reclamar <strong className="font-medium text-charcoal/80">sem mudar suas próprias atitudes.</strong></>,
                  <>Você <strong className="font-medium text-charcoal/80">não está disposta a investir</strong> tempo e energia em si mesma.</>
                ].map((text, i) => (
                  <li key={i} className="flex gap-5 group">
                    <X className="w-5 h-5 text-sage shrink-0 mt-1 transition-transform group-hover:scale-110" />
                    <span className="text-charcoal/70 font-light leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="min-h-screen flex flex-col justify-center py-24 md:py-32 px-6 bg-beige relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent"></div>
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] h-[70%] bg-offwhite/50 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center justify-center">
          <FadeIn className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 text-charcoal">
              O primeiro passo para<br className="hidden lg:block" /> <span className="italic text-terracotta">sua nova vida</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-charcoal/60 max-w-2xl mx-auto">
              Como meu atendimento é profundo e personalizado, eu não consigo atender a todas imediatamente. O processo funciona assim:
            </p>
          </FadeIn>

          {/* Timeline Process */}
          <div className="w-full max-w-5xl flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-20 relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block absolute top-[2.5rem] left-[15%] w-[70%] h-px bg-gradient-to-r from-terracotta/10 via-terracotta/30 to-terracotta/10"></div>

            {[
              { step: "01", title: "Agendamento", desc: <>Você clica no botão e <strong className="font-medium text-charcoal/80">escolhe o melhor horário</strong> na minha agenda.</> },
              { step: "02", title: "Diagnóstico", desc: <>Teremos um encontro online para nos conhecermos, eu entender o seu momento e avaliarmos se <strong className="font-medium text-charcoal/80">minha metodologia é o ideal</strong> para o seu caso.</> },
              { step: "03", title: "A Jornada", desc: <>Se houver conexão e disponibilidade, <strong className="font-medium text-charcoal/80">iniciamos seu processo de reconstrução.</strong></> }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15} className="flex-1 relative group">
                {/* Mobile Vertical Line */}
                {i !== 2 && (
                  <div className="lg:hidden absolute left-8 md:left-10 top-20 bottom-[-2rem] w-px bg-gradient-to-b from-terracotta/30 to-transparent -z-10"></div>
                )}

                <div className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-8">
                  {/* Step Number Circle */}
                  <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-terracotta/20 flex items-center justify-center relative z-10 group-hover:border-terracotta/40 group-hover:shadow-[0_8px_30px_rgb(193,155,108,0.2)] transition-all duration-500 lg:group-hover:-translate-y-2">
                    <span className="font-serif italic text-2xl md:text-3xl font-light text-terracotta">{item.step}</span>
                  </div>

                  {/* Content Container (Card on Mobile, Transparent on Desktop) */}
                  <div className="flex-1 lg:flex-none mt-1 lg:mt-0 bg-white/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 md:p-8 lg:p-0 rounded-[2rem] lg:rounded-none border border-white/60 lg:border-none shadow-[0_8px_30px_rgb(0,0,0,0.02)] lg:shadow-none transition-all duration-300 group-hover:bg-white/60 lg:group-hover:bg-transparent">
                    <h3 className="font-serif text-2xl mb-3 text-charcoal">{item.title}</h3>
                    <p className="text-charcoal/70 font-light leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="flex justify-center w-full">
            <button
              onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-teal hover:bg-charcoal text-white px-10 py-5 rounded-full font-medium tracking-[0.15em] transition-all duration-500 shadow-[0_8px_30px_rgb(13,22,35,0.2)] hover:shadow-[0_8px_30px_rgb(193,155,108,0.3)] hover:-translate-y-1 w-full sm:w-auto text-xs md:text-sm border border-teal hover:border-terracotta"
            >
              VERIFICAR HORÁRIOS DISPONÍVEIS AGORA
            </button>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 bg-offwhite px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-charcoal">Dúvidas Frequentes</h2>
          </FadeIn>

          <div className="space-y-2">
            {[
              { q: "O atendimento é online? Funciona mesmo?", a: "Sim, 100% online por vídeo. A eficácia é a mesma (ou maior) que o presencial, pois você está no conforto e segurança do seu ambiente, otimizando seu tempo." },
              { q: "Preciso ter conhecimento sobre Análise Corporal?", a: "Não. Eu serei sua guia técnica. Você só precisa trazer sua história e abertura para ouvir." },
              { q: "E se meu marido não apoiar?", a: "Muitas vezes, a resistência da família é reflexo da nossa própria insegurança. Quando você se prioriza, a dinâmica da casa muda. Cuidar de você é o melhor investimento que você pode fazer pela sua família." },
              { q: "Aceita plano de saúde?", a: "Trabalho com atendimento particular para garantir a liberdade e profundidade que a metodologia exige, sem as limitações de tempo e burocracia dos convênios." }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <AccordionItem question={faq.q} answer={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA Final */}
      <footer className="bg-charcoal text-offwhite min-h-screen flex flex-col justify-between px-6 text-center relative overflow-hidden">
        {/* Decorative subtle glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl aspect-square bg-gradient-to-tr from-teal/10 to-terracotta/5 blur-3xl rounded-full opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/30 to-transparent"></div>

        {/* Top spacer for flex balance */}
        <div className="flex-1"></div>

        {/* Main CTA Content */}
        <div className="w-full max-w-5xl mx-auto relative z-10 py-20 flex flex-col items-center justify-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-16 leading-[1.2] text-offwhite px-4">
              "Você não precisa continuar carregando esse peso sozinha. <br className="hidden md:block" />
              <span className="italic text-terracotta">A vida pode ser mais leve, digna e verdadeira.</span>"
            </h2>
            <button
              onClick={() => window.open('https://wa.me/554797479921?text=Ol%C3%A1%2C%20Eliz%C3%A2ngela!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20conversar.', '_blank')}
              className="bg-terracotta hover:bg-white text-white hover:text-charcoal px-12 py-6 rounded-full font-medium tracking-[0.2em] transition-all duration-500 shadow-[0_8px_30px_rgb(193,155,108,0.25)] hover:shadow-[0_8px_40px_rgb(255,255,255,0.4)] hover:-translate-y-2 w-full sm:w-auto text-xs md:text-sm border border-terracotta hover:border-white"
            >
              QUERO FALAR COM A ELIZÂNGELA
            </button>
          </FadeIn>
        </div>

        {/* Bottom Credits & Spacer */}
        <div className="flex-1 flex flex-col justify-end w-full max-w-4xl mx-auto pb-10 z-10">
          <FadeIn delay={0.4}>
            <div className="border-t border-white/10 pt-10 flex flex-col items-center">
              <p className="text-offwhite/40 text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
                Elizângela Brasileiro
              </p>
              <p className="text-offwhite/30 text-xs font-light">
                © 2026 - Todos os direitos reservados.
              </p>
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
}
