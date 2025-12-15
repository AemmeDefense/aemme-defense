import { useState, useEffect, useRef } from 'react';
import logo from './assets/logoaemme1.png';
import headerBg from './assets/Headeraemme.png';
import visualLogo from './assets/visuallogo.png';
import partner1 from './assets/1.png';
import partner2 from './assets/2.png';
import partner3 from './assets/3.png';
import partner4 from './assets/4.png';
import partner5 from './assets/5.png';
import partner6 from './assets/6.png';
import partner7 from './assets/7.png';
import ebeeTacImg from './assets/ebeetac.jpg';
import ebeeVisionImg from './assets/ebeevision.jpg';
import imsiImg from './assets/imsi.jpg';
import anafiUkrImg from './assets/ukr.jpg';

function App() {
  const [activeTab, setActiveTab] = useState('home');
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
      id: 'ebee-tac',
      name: 'eBee TAC',
      tag: 'Drone ad ala fissa',
      tagColor: 'text-blue-200 border-blue-200/30 bg-blue-900/50',
      desc: 'High-accuracy tactical mapping drone designed for disconnected environments. Blue UAS approved.',
      img: ebeeTacImg,
      specs: [{ l: 'Flight', v: '90 MIN' }, { l: 'Range', v: '30 KM' }, { l: 'Weight', v: '1.6 KG' }, { l: 'Sec', v: 'AES-256' }]
    },
    {
      id: 'ebee-vision',
      name: 'eBee Vision',
      tag: 'Drone ad ala fissa',
      tagColor: 'text-blue-200 border-blue-200/30 bg-blue-900/50',
      desc: 'Real-time situational awareness with 32x zoom and thermal capabilities for day/night operations.',
      img: ebeeVisionImg,
      specs: [{ l: 'Deploy', v: '90 SEC' }, { l: 'Video', v: '4K/IR' }]
    },
    {
      id: 'anafi-ukr',
      name: 'Parrot ANAFI UKR',
      tag: 'Quadrirotore',
      tagColor: 'text-sky-300 border-sky-300/30 bg-sky-900/50',
      desc: 'Combat-proven micro-drone configured for modern electronic warfare environments.',
      img: anafiUkrImg,
      specs: [{ l: 'Sig', v: 'LOW DB' }, { l: 'Deploy', v: 'RAPID' }]
    },
    {
      id: 'imsi-catcher',
      name: 'IMSI Catcher Payload',
      tag: 'Sistema di intelligence',
      tagColor: 'text-indigo-300 border-indigo-300/30 bg-indigo-900/50',
      desc: 'Airborne intelligence gathering module for mobile device location and identification.',
      img: imsiImg,
      specs: [{ l: 'Compat', v: 'MULTI' }, { l: 'Range', v: 'EXTENDED' }]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#152d50]/30 selection:text-blue-400">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo Container - Relative to maintain layout position, but allows image overflow */}
            <div className="relative w-48 h-full flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
              <img src={logo} alt="AEMME DEFENSE" className="absolute top-1/2 left-0 -translate-y-1/2 h-40 w-auto object-contain filter drop-shadow-lg max-w-none" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Soluzioni', 'Settori', 'Servizi', 'About'].map((item) => (
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#152d50]/30 border border-[#152d50]/50 text-blue-300 text-xs font-medium tracking-wide uppercase mb-4 mt-[70px] animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#152d50] animate-pulse shadow-[0_0_10px_#152d50]" />
            Mission Ready Systems
          </div>
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
            <button className="px-8 py-4 bg-[#152d50] hover:bg-[#1e3a63] text-white font-bold rounded text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(21,45,80,0.4)] hover:shadow-[0_0_30px_rgba(21,45,80,0.6)]">
              View Capabilities
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white font-bold rounded text-sm uppercase tracking-widest transition-all">
              Request Briefing
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/5">
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

        {/* Holographic Partners Grid */}
        <div className="mt-20 pt-10 relative overflow-hidden group/section">
          <div className="absolute inset-0 bg-[#152d50]/5 opacity-0 group-hover/section:opacity-100 transition-opacity duration-700" style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, #050505 100%)' }}></div>

          <h3 className="text-center text-white text-2xl font-bold tracking-[0.2em] uppercase mb-12 relative z-10 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-blue-500/50"></span>
            Settori serviti
            <span className="h-px w-8 bg-blue-500/50"></span>
          </h3>

          {/* Scanner Beam */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent shadow-[0_0_20px_#60a5fa] z-0 animate-scan-line opacity-50 blur-[1px]"></div>

          <div className="w-full overflow-hidden relative z-10">
            {/* Fade Gradients at edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20" />

            <div className="flex gap-32 animate-infinite-scroll w-max items-center py-10">
              {/* Triplicate the array to ensure seamless infinite scroll with 7 items */}
              {[
                partner1, partner2, partner3, partner4, partner5, partner6, partner7,
                partner1, partner2, partner3, partner4, partner5, partner6, partner7,
                partner1, partner2, partner3, partner4, partner5, partner6, partner7
              ].map((logo, i) => (
                <div key={i} className="group relative w-40 h-40 flex-shrink-0 flex items-center justify-center perspective-1000">
                  {/* Hover Glow Background */}
                  <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100"></div>

                  {/* Logo with 3D Effect */}
                  <div className="relative w-full h-full flex items-center justify-center transition-all duration-500 transform preserve-3d group-hover:rotate-x-12 group-hover:scale-110">
                    <img
                      src={logo}
                      alt="Partner"
                      className="max-w-full max-h-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 filter drop-shadow-[0_0_5px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                    />
                    {/* Reflection Effect */}
                    <div className="absolute -bottom-8 left-0 right-0 h-8 opacity-0 group-hover:opacity-40 transition-all duration-500 transform scale-y-[-0.5] bg-gradient-to-t from-transparent to-white/20 blur-sm pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Section - Horizontal Scroll */}
      <div ref={scrollRef} className="relative h-[300vh] bg-[#050505]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-12 flex-shrink-0 z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Tactical Systems</h2>
            <p className="text-slate-400 text-xl">Field-proven hardware for critical missions.</p>
          </div>

          <div
            className="flex gap-8 px-[10vw] w-max transition-transform duration-100 ease-out"
            style={{ transform: `translateX(-${scrollProgress * 0.8}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-[85vw] md:w-[600px] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 group hover:border-blue-500/50 transition-all duration-300">
                {/* Image Area */}
                <div className="h-64 md:h-80 relative overflow-hidden">
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 backdrop-blur-md text-xs font-mono font-bold uppercase border rounded ${product.tagColor}`}>
                      {product.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>

                {/* Content */}
                <div className="p-8 relative z-20 -mt-10">
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{product.name}</h3>
                  <p className="text-slate-400 mb-8 text-lg line-clamp-2">{product.desc}</p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {product.specs.map((spec, i) => (
                      <div key={i}>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">{spec.l}</p>
                        <p className="text-sm font-mono text-white">{spec.v}</p>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 border border-white/10 bg-white/5 hover:bg-[#152d50] rounded-lg text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                    System Specs
                  </button>
                </div>
              </div>
            ))}

            {/* End Spacer */}
            <div className="w-[10vw]"></div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Mission Deployment?</h2>
          <p className="text-slate-400 mb-8">Contact our defense specialists for procurement and technical consultation.</p>
          <button className="bg-[#152d50] hover:bg-[#1e3a63] text-white px-8 py-3 rounded font-bold uppercase tracking-widest transition-colors shadow-lg shadow-[#152d50]/30">
            Contact Secure Line
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center opacity-50">
          <p className="text-xs text-slate-500">© 2025 AEMME SURVEYING - DEFENSE DIVISION. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-slate-500 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white">Terms of Use</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white">CAGE Code: XXXXX</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
