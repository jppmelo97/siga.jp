/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Globe, 
  TrendingUp, 
  Settings, 
  MessageSquare, 
  Award, 
  Smartphone, 
  Cpu, 
  Users, 
  Zap,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Mail,
  Phone,
  CheckCircle2,
  MapPin,
  BarChart3,
  ShieldCheck,
  Rocket,
  LineChart,
  Brain,
  Share2,
  Fingerprint,
  Target,
  PlayCircle,
  Quote
} from 'lucide-react';

type Logo = { name: string; domain?: string; image?: string };

const LOGOS: Logo[] = [
  { name: "SEBRAE", image: "/logos/sebrae.png" },
  { name: "Porto do Itaqui", image: "/logos/porto-itaqui.png" },
  { name: "Granorte", image: "/logos/granorte.png" },
  { name: "BULLDOG BURGUER", image: "/logos/bulldog.png" },
  { name: "NONNO GIOTTO", image: "/logos/nonno-giotto.png" },
  { name: "REVISEI", image: "/logos/revisei.png" },
  { name: "TAGUATUR", image: "/logos/taguatur.png" },
  { name: "Vila Capininga", image: "/logos/vila-capininga.png" },
  { name: "Pedro Rodrigues", image: "/logos/pedro-rodrigues.png" },
  { name: "Honda Alvorada", image: "/logos/honda-alvorada.png" },
  { name: "DR. DENTAL", image: "/logos/dr-dental.png" },
  { name: "BALUARTE", domain: "baluarte.com.br" }
];

const LogoItem: React.FC<{ logo: Logo }> = ({ logo }) => {
  const [error, setError] = useState(false);

  return (
    <div className="flex items-center justify-center px-4 py-2 bg-transparent transition-all duration-500 cursor-default h-20 md:h-24 w-40 md:w-48 shrink-0">
      {!error ? (
        <img 
          src={logo.image || `https://logo.clearbit.com/${logo.domain}`} 
          alt={`Logo da empresa ${logo.name}`} 
          className="h-full w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          onError={() => setError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <span className="text-sm md:text-base font-display font-bold text-black tracking-tighter whitespace-nowrap">
          {logo.name}
        </span>
      )}
    </div>
  );
};

const SERVICES = [
  {
    title: "Gestão Empresarial & Resultados",
    description: "Foco em OBZ, KPIs e lucratividade. Case de sucesso: redução de 20% em custos na Ambev.",
    icon: <LineChart className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Agentes de IA & Automações",
    description: "Implementação de inteligência artificial para escalar processos e eliminar tarefas manuais repetitivas.",
    icon: <Brain className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Marketing & Comunicação Estratégica",
    description: "Posicionamento de mercado focado em atrair clientes de alto ticket e fechar contratos premium.",
    icon: <Share2 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Branding & Autoridade",
    description: "Construção de uma imagem corporativa sólida, padronizada e reconhecida como líder de mercado.",
    icon: <Fingerprint className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Treinamentos de Alta Performance",
    description: "Capacitação técnica e comportamental (Soft & Hard Skills) para lideranças e equipas operacionais.",
    icon: <Target className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
  }
];

const WHATSAPP_LINK = "https://wa.me/5598981431080";
const EMAIL = "jppmelo97@gmail.com";
const INSTAGRAM = "https://instagram.com/siga.jp";

function Counter({ value, suffix = "", decimals = 0 }: { value: number, suffix?: string, decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const frameRate = 1000 / 60;
      const totalFrames = Math.round(duration / frameRate);
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = end * progress;
        
        if (frame === totalFrames) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(currentCount);
        }
      }, frameRate);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString(undefined, { 
        minimumFractionDigits: decimals, 
        maximumFractionDigits: decimals 
      })}
      {suffix}
    </span>
  );
}

export default function App() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-carbon-black selection:bg-brand-red selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-carbon-black/80 backdrop-blur-md" role="navigation" aria-label="Navegação Principal">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-display font-bold tracking-tighter">
            JOÃO<span className="text-brand-red">MELO</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-[#CCCCCC]">
            <a href="#servicos" className="hover:text-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-2">O que eu faço</a>
            <a href="#autoridade" className="hover:text-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-2">Quem sou eu</a>
            <a href="#resultados" className="hover:text-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-2">Resultados</a>
          </div>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com João Melo no WhatsApp"
            className="px-4 md:px-5 py-2 rounded-full border border-brand-red text-brand-red text-xs md:text-sm font-bold hover:bg-brand-red hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red whitespace-nowrap"
          >
            QUERO CRESCER
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-64 pb-48 px-6 overflow-hidden">
        {/* Background Accents & Premium Image */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80" 
            alt="Business Innovation Team" 
            className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,black_10%,transparent_90%)]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-red/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold text-brand-red mb-10 tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              Gestão • Comunicação • Inovação
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-10">
              Organizo sua empresa por dentro e <span className="text-brand-red italic">fortaleço como ela é vista pelo mercado.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#CCCCCC] max-w-2xl mb-12 leading-relaxed font-light">
              Uma metodologia que une o rigor da gestão à força da narrativa. Estruturo sua operação para escala real e construo sua imagem como autoridade incontestável.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar diagnóstico gratuito via WhatsApp"
                className="group px-8 md:px-10 py-5 bg-brand-red text-white font-bold text-base md:text-lg rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-none focus:outline-none focus:ring-4 focus:ring-brand-red/50"
              >
                Agendar Consultoria de Marca
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 border border-white/10">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-carbon-black bg-dark-gray overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt={`Cliente satisfeito ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-white font-bold">
                    <Counter value={200} suffix="+" /> Empresas
                  </span>
                  <p className="text-[#CCCCCC] text-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-red" /> Atendidas em todo o Brasil
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-24 border-y border-white/5 bg-carbon-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-bold text-[#CCCCCC] uppercase tracking-[0.3em] mb-12 text-center">
            Quem já confiou e aprovou o meu trabalho
          </p>
          <div className="relative group">
            <div className="flex gap-12 md:gap-24 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
              {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
                <LogoItem key={`${logo.name}-${idx}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicos" className="py-32 px-6 relative bg-carbon-black overflow-hidden">
        {/* Subtle Innovation Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80" alt="Business Data" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
                Arquitetura de <span className="text-brand-red">Negócios & Narrativa.</span>
              </h2>
              <p className="text-xl text-[#CCCCCC] font-light">
                Soluções estratégicas para quem busca escala real e uma marca que domina o mercado.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveService(idx)}
                onMouseLeave={() => setActiveService(null)}
                className="relative p-12 bg-carbon-black flex flex-col gap-8 group cursor-default transition-all duration-500 overflow-hidden"
              >
                {/* Background Image on Hover */}
                <AnimatePresence>
                  {activeService === idx && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 0.15, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      className="absolute inset-0 z-0"
                    >
                      <img src={service.image} alt="" className="w-full h-full object-cover" aria-hidden="true" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-carbon-black to-transparent" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-black transition-all duration-500 mb-8">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-red transition-colors">{service.title}</h3>
                  <p className="text-[#CCCCCC] leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section - Impact Centered Redesign */}
      <section id="autoridade" className="py-32 md:py-48 relative bg-black overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand-red/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 inline-flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-brand-red" />
              <span className="text-[10px] md:text-sm font-bold text-brand-red tracking-[0.3em] uppercase">Estrategista de Negócios</span>
              <span className="w-12 h-[1px] bg-brand-red" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-20 text-white leading-none tracking-tighter"
            >
              João Melo
            </motion.h2>

            {/* Giant Central Avatar */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative w-64 h-64 md:w-96 md:h-96 mx-auto mb-20"
            >
              <img 
                src="/joao-melo.jpg" 
                alt="João Melo" 
                className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700 shadow-[0_0_80px_rgba(238,45,45,0.15)] ring-1 ring-white/10"
                referrerPolicy="no-referrer"
              />
              
              {/* Dashed Accent Badge inspired by image reference */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max z-20">
                <div className="px-6 py-3 bg-black border border-dashed border-brand-red/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md rounded-sm">
                  <p className="text-[10px] md:text-xs font-sans font-bold tracking-[0.15em] text-brand-red uppercase text-center whitespace-nowrap">
                    Especialista em Gestão e Inovação
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Content & Credentials */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col items-center max-w-3xl mt-4"
            >
              <div className="space-y-6 text-lg md:text-2xl font-light text-[#CCCCCC] leading-relaxed mb-12 text-center">
                <p>
                  Administrador pela <span className="text-white font-medium">UEMA</span> com MBA em Gestão Empresarial pela <span className="text-white font-medium">FGV/Rio</span>. 
                  Com uma trajetória sénior forjada em gigantes como <span className="text-white font-medium">Ambev</span> e <span className="text-white font-medium">Lojas Americanas</span>.
                </p>
                <p>
                  A minha metodologia une o rigor da gestão corporativa à força do posicionamento premium. Estruturo operações para escala real e construo <span className="text-white font-medium">autoridades incontestáveis</span> no mercado.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 items-center justify-center pt-8 border-t border-white/5 w-full">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-red" />
                  <span className="text-base text-[#CCCCCC] font-medium">+<Counter value={200} /> empresas impactadas</span>
                </div>
                <div className="hidden sm:block text-[#CCCCCC]/20">•</div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-red" />
                  <span className="text-base text-[#CCCCCC] font-medium">Atuação em 6 estados</span>
                </div>
              </div>
            </motion.div>

        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section id="depoimentos" className="py-32 px-6 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-6 text-white">
              Resultados que <span className="text-[#EE2D2D] italic">falam por si.</span>
            </h2>
            <p className="text-xl text-[#CCCCCC] font-light max-w-2xl mx-auto">
              Depoimentos reais de quem já escalou operações e assumiu liderança de mercado.
            </p>
          </div>

          {/* Video Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Video 1: Vânia Costa - Solar Engenharia */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                "Saímos de commodity para premium em 6 meses"
              </h3>
              <div 
                className="relative aspect-video bg-white/5 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-[#EE2D2D]/30 transition-colors"
                onClick={() => setPlayingVideo('vania')}
              >
                {playingVideo === 'vania' ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/wx13DvHgXFY?autoplay=1&rel=0" 
                    title="Feedback Vânia Costa" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  <>
                    <img 
                      src="https://img.youtube.com/vi/wx13DvHgXFY/maxresdefault.jpg" 
                      alt="Vânia Costa" 
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 transition-all duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-[#EE2D2D] opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                    {/* Simulated Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                      <div className="h-full bg-[#EE2D2D] w-1/3" />
                    </div>
                  </>
                )}
              </div>
              <p className="text-sm font-medium text-[#EE2D2D] uppercase tracking-wider">Vânia Costa, Proprietária da Solar Engenharia</p>
            </motion.div>

            {/* Video 2: Robert e Bruno - Alfa Omega */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                "Faturamos 3x mais com o mesmo esforço"
              </h3>
              <div 
                className="relative aspect-video bg-white/5 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-[#EE2D2D]/30 transition-colors"
                onClick={() => setPlayingVideo('alfaomega')}
              >
                {playingVideo === 'alfaomega' ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/8FQhwZVDFmI?autoplay=1&rel=0" 
                    title="Feedback Alfa Omega" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  <>
                    <img 
                      src="https://img.youtube.com/vi/8FQhwZVDFmI/maxresdefault.jpg" 
                      alt="Robert e Bruno" 
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 transition-all duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-[#EE2D2D] opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                    {/* Simulated Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                      <div className="h-full bg-[#EE2D2D] w-1/4" />
                    </div>
                  </>
                )}
              </div>
              <p className="text-sm font-medium text-[#EE2D2D] uppercase tracking-wider">Robert e Bruno, Proprietários da Alfa Omega</p>
            </motion.div>

          </div>

          {/* Text Feedback Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Feedback 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#EE2D2D] mb-6 opacity-30" />
                <p className="text-[#CCCCCC] leading-relaxed font-light mb-8">
                  "O João não entregou apenas um PDF de marca. Ele reorganizou a nossa operação para suportar o crescimento que a nova autoridade nos trouxe. Saímos de um caos de gestão para uma marca que hoje fatura 3x mais com o mesmo esforço."
                </p>
              </div>
              <div>
                <p className="font-bold text-white">Diretor de Operações</p>
                <p className="text-sm font-medium text-[#EE2D2D]">Indústria Têxtil (SP)</p>
              </div>
            </motion.div>

            {/* Feedback 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#EE2D2D] mb-6 opacity-30" />
                <p className="text-[#CCCCCC] leading-relaxed font-light mb-8">
                  "A maior mudança foi no nosso posicionamento. Antes éramos vistos como 'commodity' e brigávamos por preço. Depois da consultoria, subimos o ticket médio em 40% e o cliente parou de questionar o valor. O rigor da Ambev aplicado ao nosso negócio foi o diferencial."
                </p>
              </div>
              <div>
                <p className="font-bold text-white">CEO</p>
                <p className="text-sm font-medium text-[#EE2D2D]">Grupo de Tecnologia (PR)</p>
              </div>
            </motion.div>

            {/* Feedback 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#EE2D2D] mb-6 opacity-30" />
                <p className="text-[#CCCCCC] leading-relaxed font-light mb-8">
                  "Impressionante como a metodologia se adaptou à nossa realidade regional em MG. O João traz uma bagagem internacional, mas sabe exatamente onde o calo do empresário brasileiro aperta. 200 empresas atendidas não é um número, é método comprovado."
                </p>
              </div>
              <div>
                <p className="font-bold text-white">Fundadora</p>
                <p className="text-sm font-medium text-[#EE2D2D]">Rede de Varejo (MG)</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Bento Grid Results */}
      <section id="resultados" className="py-64 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
              Impacto em <span className="text-brand-red">Números.</span>
            </h2>
            <p className="text-xl text-[#CCCCCC] font-light">Resultados mensuráveis que validam o método.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-8 md:p-16 rounded-[40px] bg-white/[0.03] border border-white/10 flex flex-col justify-between group hover:border-brand-red/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 z-0">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Data" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 blur-[80px] rounded-full -mr-20 -mt-20 z-0" />
              
              <div className="flex justify-between items-start mb-16 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-[#CCCCCC] uppercase tracking-widest">
                  Aprovado
                </div>
              </div>
              <div className="relative z-10">
                <div className="text-7xl md:text-[12rem] font-display font-bold tracking-tighter text-brand-red mb-6 leading-none">
                  <Counter value={9.2} decimals={1} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Índice de Confiança</h3>
                <p className="text-lg md:text-xl text-[#CCCCCC] font-light max-w-md">Nossos clientes não apenas aprovam, eles recomendam. Um nível de excelência que transforma a cultura da empresa.</p>
              </div>
            </motion.div>
            
            <div className="grid grid-rows-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 rounded-[40px] bg-brand-red text-white flex flex-col justify-between shadow-[0_20px_50px_rgba(255,0,0,0.15)] relative overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Tech Charts" className="w-full h-full object-cover" aria-hidden="true" referrerPolicy="no-referrer" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center relative z-10">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-display font-bold mb-2 leading-tight">Expansão Nacional</div>
                  <p className="text-white/80 text-sm font-medium leading-relaxed">Presente em todos os estados do Brasil.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 md:p-12 rounded-[40px] bg-white/[0.03] border border-white/10 flex flex-col justify-between group hover:border-brand-red/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-1000 z-0">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Corporate Team" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white relative z-10">
                  <Users className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <div className="text-5xl font-display font-bold mb-2 text-white">
                    <Counter value={200} suffix="+" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">Empresas</h3>
                  <p className="text-[#CCCCCC] text-xs font-light tracking-wider uppercase">Atendidas com sucesso</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-16 rounded-[40px] bg-white/[0.03] border border-white/10 flex flex-col justify-between group hover:border-brand-red/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-16">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                  <BarChart3 className="w-8 h-8" />
                </div>
              </div>
              <div>
                <div className="text-6xl md:text-7xl font-display font-bold mb-6 text-white">
                  <Counter value={30} suffix="%" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Agilidade Operacional</h3>
                <p className="text-[#CCCCCC] font-light">Redução imediata de gargalos através de automação inteligente e revisão de processos.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-8 md:p-16 rounded-[40px] bg-dark-gray border border-white/5 flex flex-col md:flex-row items-center gap-12 md:gap-16 group overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="Global Tech Innovation" className="w-full h-full object-cover" aria-hidden="true" referrerPolicy="no-referrer" />
              </div>
              <div className="w-full md:w-1/3 aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
                <Rocket className="w-20 h-20 text-brand-red opacity-20 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-red/5 animate-pulse" />
              </div>
              <div className="flex-1 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Inteligência Operacional</h3>
                <p className="text-lg md:text-xl text-[#CCCCCC] font-light leading-relaxed">
                  Não é apenas tecnologia, é liberdade. Implementamos agentes que trabalham enquanto você escala sua autoridade e foca no que realmente importa.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-64 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-12 leading-[0.85]">
              Sua empresa pode <span className="text-brand-red italic">render muito mais.</span>
            </h2>
            <p className="text-2xl text-[#CCCCCC] mb-16 max-w-2xl mx-auto font-light">
              O diagnóstico é o primeiro passo para você ter uma empresa organizada, eficiente e que não depende só de você.
            </p>
            <div className="flex flex-col items-center gap-8">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar Consultoria de Marca agora pelo WhatsApp"
                className="px-10 md:px-16 py-6 md:py-8 bg-brand-red text-white font-bold text-xl md:text-2xl rounded-full hover:scale-105 transition-all shadow-none focus:outline-none focus:ring-4 focus:ring-brand-red/50 text-center"
              >
                Agendar Consultoria de Marca
              </a>
              <div className="flex flex-col md:flex-row gap-8 text-[#CCCCCC] font-medium">
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-2" aria-label={`Enviar e-mail para ${EMAIL}`}>
                  <Mail className="w-5 h-5" /> {EMAIL}
                </a>
                <a href={WHATSAPP_LINK} className="flex items-center gap-2 hover:text-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-2" aria-label="Ligar ou enviar mensagem para (98) 98143-1080">
                  <Phone className="w-5 h-5" /> (98) 98143-1080
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <div className="text-3xl font-display font-bold mb-4 tracking-tighter">
                JOÃO<span className="text-brand-red">MELO</span>
              </div>
              <p className="text-white/30 text-sm max-w-xs font-light leading-relaxed mx-auto md:mx-0">
                Estrategista de Negócios. Unindo gestão, narrativa e tecnologia para escalar resultados reais em todo o Brasil.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-4">
                <a 
                  href={INSTAGRAM} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Seguir João Melo no Instagram"
                  className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all group focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  aria-label="Ver perfil no LinkedIn"
                  className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all group focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href={`mailto:${EMAIL}`} 
                  aria-label={`Enviar e-mail para ${EMAIL}`}
                  className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all group focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <div className="text-white/20 text-xs uppercase tracking-[0.2em]">
                © 2026 João Melo • São Luís, MA
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <ScrollToTop />
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com João Melo no WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        >
          <MessageSquare className="w-7 h-7 fill-current" />
        </a>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="w-14 h-14 rounded-full bg-brand-red text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-brand-red/50"
        >
          <ArrowUpRight className="w-7 h-7 -rotate-45" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
