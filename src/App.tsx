import { useState, useEffect, useRef } from 'react';
import logo from './assets/aemmelogodefense.png';
import headerBg from './assets/Headeraemme.png';
import visualLogo from './assets/visuallogo.png';
import partner1 from './assets/1.png';
import partner2 from './assets/2.png';
import partner3 from './assets/3.png';
import partner4 from './assets/4.png';
import partner5 from './assets/5.png';
import partner6 from './assets/6.png';
import partner7 from './assets/7.png';
import mappaItaliaImg from './assets/mappaitalia.png';
import ebeeTacImg from './assets/ebeetac.jpg';
import ebeeVisionImg from './assets/ebeevision.jpg';
import imsiImg from './assets/imsi.jpg';
import anafiUkrImg from './assets/ukr.jpg';
import EbeeTac from './pages/EbeeTac';
import AnafiUkr from './pages/AnafiUkr';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname;
    if (path === '/anafi-ukr') return 'anafi-ukr';
    if (path === '/ebee-tac') return 'ebee-tac';
    if (path === '/') return 'home';
    return 'ebee-tac'; // Default fallback
  });

  // Update URL history when page changes
  useEffect(() => {
    const path = currentPage === 'home' ? '/' : `/${currentPage}`;
    window.history.pushState(null, '', path);
    window.scrollTo(0, 0);
  }, [currentPage]);
  const [, setActiveTab] = useState('home');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const rect = scrollRef.current.getBoundingClientRect();
      const offsetTop = rect.top;
      const height = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate percentage of section traversed
      // Start scrolling when section hits top of viewport
      let percentage = ((-offsetTop) / (height - windowHeight)) * 100;

      // Clamp between 0 and 100
      percentage = Math.min(Math.max(percentage, 0), 100);
      setScrollProgress(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "eBee TAC",
      tag: "Drone ad ala fissa",
      tagColor: "text-blue-200 border-blue-200/20 bg-blue-900/20",
      description: "Drone tattico ad ala fissa per missioni di sorveglianza precisa. Massima autonomia e resistenza anche in condizioni difficili.",
      image: ebeeTacImg,
      specs: [
        { label: "Flight", value: "90 min", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
        { label: "Weight", value: "1.6 kg", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> },
        { label: "Range", value: "30 km", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg> },
        { label: "SEC", value: "AES 256", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> }
      ]
    },
    {
      id: 2,
      name: "eBee Vision",
      tag: "Drone ad ala fissa",
      tagColor: "text-blue-200 border-blue-200/20 bg-blue-900/20",
      description: "Drone mapping professionale con sensori avanzati integrati. Ideale per rilievi topografici e analisi ad alta risoluzione.",
      image: ebeeVisionImg,
      specs: [
        { label: "Flight", value: "50 min", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
        { label: "Weight", value: "1.8 kg", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> },
        { label: "Range", value: "15 km", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg> },
        { label: "Cam", value: "21 MP", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg> }
      ]
    },
    {
      id: 3,
      name: "Parrot ANAFI UKR",
      tag: "Quadrirotore",
      tagColor: "text-sky-300 border-sky-300/20 bg-sky-900/20",
      description: "Quadricottero leggero per ispezioni rapide e riprese aeree. Camera 4K con zoom, ideale per operazioni tattiche e civili.",
      image: anafiUkrImg,
      specs: [
        { label: "Flight", value: "32 min", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
        { label: "Weight", value: "0.8 kg", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> },
        { label: "Range", value: "4 km", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg> },
        { label: "Cam", value: "4K HDR", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg> }
      ]
    },
    {
      id: 4,
      name: "IMSI Catcher Payload",
      tag: "Sistema di intelligence",
      tagColor: "text-indigo-300 border-indigo-300/20 bg-indigo-900/20",
      description: "Sistema di intercettazione segnali per droni e telecomunicazioni. Compatibile con DJI Matrice 400 e operazioni critiche sul campo.",
      image: imsiImg,
      specs: [
        { label: "Channels", value: "4CH", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
        { label: "Weight", value: "2.0 kg", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> },
        { label: "Range", value: "5 km", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg> },
        { label: "SEC", value: "AES 128", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> }
      ]
    }
  ];

  // Route rendering
  if (currentPage === 'ebee-tac') {
    return (
      <div>
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
              <div className="relative w-48 h-full flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
                <img src={logo} alt="AEMME DEFENSE" className="absolute top-1/2 left-0 -translate-y-1/2 h-24 w-auto object-contain filter drop-shadow-lg max-w-none" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {['Soluzioni', 'Partner', 'Servizi', 'About'].map((item) => (
                    <a key={item} href="#" className="hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-semibold text-slate-400">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              <button className="bg-[#152d50] hover:bg-[#1e3a63] text-white px-6 py-2 rounded text-xs uppercase tracking-widest font-bold transition-colors">
                Contatti
              </button>
            </div>
          </div>
        </nav>
        <EbeeTac />
      </div>
    );
  }

  // Anafi UKR Route
  if (currentPage === 'anafi-ukr') {
    return (
      <div>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
              <div className="relative w-48 h-full flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
                <img src={logo} alt="AEMME DEFENSE" className="absolute top-1/2 left-0 -translate-y-1/2 h-24 w-auto object-contain filter drop-shadow-lg max-w-none" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {['Soluzioni', 'Partner', 'Servizi', 'About'].map((item) => (
                    <a key={item} href="#" className="hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-semibold text-slate-400">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              <button className="bg-[#152d50] hover:bg-[#1e3a63] text-white px-6 py-2 rounded text-xs uppercase tracking-widest font-bold transition-colors">
                Contatti
              </button>
            </div>
          </div>
        </nav>
        <AnafiUkr />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#152d50]/30 selection:text-blue-400">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo Container - Relative to maintain layout position, but allows image overflow */}
            <div className="relative w-48 h-full flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
              <img src={logo} alt="AEMME DEFENSE" className="absolute top-1/2 left-0 -translate-y-1/2 h-24 w-auto object-contain filter drop-shadow-lg max-w-none" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Soluzioni', 'Partner', 'Servizi', 'About'].map((item) => (
                  <a key={item} href="#" className="hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-semibold text-slate-400">
                    {item}
                  </a>
                ))}
                <button className="bg-white/5 hover:bg-[#152d50] hover:text-white border border-white/10 px-4 py-2 rounded text-xs uppercase tracking-widest transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={headerBg} alt="Tactical Background" className="w-full h-full object-cover brightness-110 opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mt-8"></div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 max-w-4xl mx-auto">
            Tecnologie tattiche per chi opera sul campo.
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100 font-medium leading-relaxed cursor-default">
            {"Soluzioni professionali per ricognizione, sorveglianza e superiorità informativa.".split(" ").map((word, index) => (
              <span key={`p1-${index}`} className="inline-block hover:text-blue-400 hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] transition-all duration-300 mx-[2px]">
                {word}
              </span>
            ))}
            <br className="block mb-2" />
            {"Sistemi UAV e strumenti d’intelligence progettati per supportare missioni critiche, con prestazioni certificate per ambito militare e law enforcement.".split(" ").map((word, index) => (
              <span key={`p2-${index}`} className="inline-block hover:text-blue-400 hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] transition-all duration-300 mx-[2px]">
                {word}
              </span>
            ))}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-900 to-[#152d50] hover:from-blue-800 hover:to-[#1e3a63] border border-blue-500/30 text-white font-bold rounded text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-blue-900/40 hover:scale-105">
              Soluzioni operative
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white font-bold rounded text-sm uppercase tracking-widest transition-all hover:scale-105">
              Richiedi briefing
            </button>
          </div>
        </div>
      </div>

      {/* Animated Transition Strip */}
      <div className="w-full bg-[#152d50]/10 border-y border-[#152d50]/30 overflow-hidden py-3">
        <div className="whitespace-nowrap animate-infinite-scroll flex gap-8 text-[#5c8cc7] font-mono text-sm tracking-widest uppercase">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex gap-8">
              <span>// TACTICAL DRONES</span>
              <span>// FIELD OPERATIONS</span>
              <span>// TARGET ACQUISITION</span>
              <span>// SURVEILLANCE</span>
              <span>// MILITARY-GRADE TECHNOLOGY</span>
              <span>// GEOSPATIAL INSIGHTS</span>
            </span>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#152d50]"></span>
              Esperienza che fa la differenza
            </h2>
            <p className="text-white text-lg leading-relaxed cursor-default">
              {"Da anni supportiamo i principali enti di Difesa, Forze dell’Ordine e operatori della sicurezza con tecnologie affidabili e soluzioni tattiche di alto livello. La nostra esperienza diretta e la selezione dei migliori prodotti internazionali ci permettono di garantire prestazioni solide, continuità operativa e risultati misurabili in ogni scenario.".split(" ").map((word, index) => (
                <span key={index} className="inline-block hover:text-blue-400 hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] transition-all duration-300 mx-[2px]">
                  {word}
                </span>
              ))}
            </p>

            <div className="mt-8">
              <button
                onClick={() => setActiveTab('about')}
                className="group flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-blue-300 uppercase py-3 border-b border-blue-500/30 hover:border-blue-400 transition-all duration-300"
              >
                Scopri la nostra storia
                <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-blue-400">→</span>
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-center py-8 md:py-0 relative">
            {/* Decorative glow behind the logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 blur-[80px] rounded-full"></div>
            <img src={visualLogo} alt="Aemme Experience" className="relative w-64 h-64 md:w-96 md:h-96 object-contain opacity-90 drop-shadow-[0_0_35px_rgba(37,99,235,0.4)]" />
          </div>
        </div>


      </div>

      {/* Product Section - Horizontal Scroll */}
      <div ref={scrollRef} className="relative h-[300vh] bg-[#050505]">
        <div className="sticky top-0 h-screen flex flex-col justify-start pt-0 overflow-hidden">

          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-8 flex-shrink-0 z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-4 inline-block relative">
              Sistemi Tattici
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-blue-500/50 rounded-full blur-[1px]"></div>
            </h2>
            <p className="text-slate-400 text-lg uppercase tracking-widest font-medium">Soluzioni operative per contesti critici</p>
          </div>

          <div
            className="flex gap-8 px-[10vw] w-max transition-transform duration-100 ease-out"
            style={{ transform: `translateX(-${scrollProgress * 0.55}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-[90vw] md:w-[700px] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 group hover:border-blue-500/50 transition-all duration-300 flex flex-col">
                {/* Top: Image Section (No Overlay) */}
                <div className="h-[400px] relative overflow-hidden border-b border-white/5 bg-black">
                  <div className="absolute top-6 right-6 z-20">
                    <span className={`px-4 py-2 backdrop-blur-md text-xs font-mono font-bold uppercase border rounded tracking-widest ${product.tagColor}`}>
                      {product.tag}
                    </span>
                  </div>
                  {/* Subtle vignette only, no full gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-10" />
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Bottom: Content Section - Compacted Padding */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-[#0a0a0a] relative">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{product.name}</h3>
                    <p className="text-slate-400 mb-6 text-sm leading-relaxed max-w-lg line-clamp-2">
                      {product.description}
                    </p>

                    {/* Icon Specs (Retained Style) */}
                    <div className="flex flex-wrap gap-6 mb-6 text-xs text-slate-400 border-t border-white/5 pt-4">
                      {product.specs.map((spec, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="text-blue-400">
                            {spec.icon}
                          </div>
                          <span className="font-bold text-white tracking-wider">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Full Width Button - More Visible */}
                  <button
                    onClick={() => {
                      if (product.id === 1) {
                        window.scrollTo(0, 0);
                        setCurrentPage('ebee-tac');
                      } else if (product.id === 3) {
                        window.scrollTo(0, 0);
                        setCurrentPage('anafi-ukr');
                      } else {
                        alert("Scheda tecnica completa in arrivo.");
                      }
                    }}
                    className="w-full py-4 bg-blue-900/20 border border-blue-500/30 hover:bg-blue-600 hover:border-blue-500 text-white rounded-lg text-sm font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] cursor-pointer"
                  >
                    Scopri il Sistema
                  </button>
                </div>
              </div>
            ))}

            {/* End Spacer */}
            <div className="w-[5vw]"></div>
          </div>
        </div>
      </div>

      {/* CTA Section - Advanced Command Design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Holographic Partners Grid */}
        <div className="relative overflow-hidden group/section py-10">

          <h3 className="text-center text-3xl md:text-4xl font-bold mb-20 relative z-10 flex items-center justify-center gap-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            <span className="h-[2px] w-12 bg-blue-500/50 rounded-full"></span>
            Trusted by Elite Forces
            <span className="h-[2px] w-12 bg-blue-500/50 rounded-full"></span>
          </h3>

          <div className="w-full overflow-hidden relative z-10">
            {/* Fade Gradients at edges - Clean Black */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-20" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-20" />

            <div className="flex gap-20 animate-infinite-scroll w-max items-center py-8">
              {/* Triplicate the array to ensure seamless infinite scroll */}
              {[
                partner1, partner2, partner3, partner4, partner5, partner6, partner7,
                partner1, partner2, partner3, partner4, partner5, partner6, partner7,
                partner1, partner2, partner3, partner4, partner5, partner6, partner7
              ].map((logo, i) => (
                <div key={i} className="group relative w-52 h-40 flex-shrink-0 flex items-center justify-center">

                  {/* Targeting Brackets (The "HUD" Effect) */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 translate-y-2"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 translate-y-2"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 -translate-y-2"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 -translate-y-2"></div>

                  {/* Initial Tech Scan Line (Flash) */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-white opacity-0 group-hover:animate-ping"></div>

                  {/* Logo Interaction */}
                  <div className="relative w-full h-full flex items-center justify-center p-5 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/50 transition-colors duration-300">
                    <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full scale-50 group-hover:scale-100"></div>
                    <img
                      src={logo}
                      alt="Partner"
                      className="relative z-10 max-w-full max-h-full object-contain 
                        grayscale opacity-40 blur-[0.5px] scale-90
                        group-hover:grayscale-0 group-hover:opacity-100 group-hover:blur-0 group-hover:scale-110 
                        transition-all duration-150 ease-out 
                        drop-shadow-none group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Advanced Command Design */}
      <div className="relative bg-[#050505] overflow-hidden py-32">

        {/* Abstract Tech Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(21,45,80,0.4),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden p-8 md:p-12 lg:p-20 shadow-[0_0_50px_rgba(21,45,80,0.5)]">

            {/* Tactical Corner Markers */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-blue-500/50 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-blue-500/50 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-blue-500/50 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-blue-500/50 rounded-br-2xl"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                  Pronti a operare <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#5c8cc7]">
                    ovunque sia necessario.
                  </span>
                </h2>
                <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-lg border-l-4 border-blue-900/50 pl-6">
                  Forniamo consulenza tecnica avanzata e sviluppiamo soluzioni su misura, progettate per rispondere con precisione a ogni scenario operativo. Richiedi una consulenza specializzata, disponibile su tutto il territorio nazionale.
                </p>
                <button className="group relative px-10 py-5 bg-[#152d50] hover:bg-[#1e3a63] text-white font-bold rounded-sm uppercase tracking-widest transition-all overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    Richiedi Consulenza
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                {/* Image blending container */}
                <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[60px] animate-pulse"></div>
                  {/* White glow beneath image */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/15 blur-[80px] rounded-full"></div>
                  <img
                    src={mappaItaliaImg}
                    alt="Deployment Ready"
                    className="relative w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <p className="text-xs text-blue-200/80">© 2025 AEMME SURVEYING - DEFENSE DIVISION. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>

          {/* Corporate Legal Info */}
          <div className="border-t border-white/5 pt-8 text-center">
            <div className="space-y-1 text-xs text-slate-600">
              <p className="font-bold text-slate-500">AEMME RE SRL</p>
              <p>Sede Legale: Via Lessolo 5 - 10153 TORINO</p>
              <p>P.IVA 09248140015</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
