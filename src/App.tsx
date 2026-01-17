import { useState, useEffect } from 'react';

// Page Imports
import EbeeTac from './pages/EbeeTac';
import { EbeeVision } from './pages/EbeeVision';
import AnafiUkr from './pages/AnafiUkr';
import IMSICatcher from './pages/IMSICatcher';
import { Solutions } from './pages/Solutions';
import { Contacts } from './pages/Contacts';
import { Privacy } from './pages/Privacy';
import { CookiePolicy } from './pages/CookiePolicy';
import About from './pages/About';

// Common Component Imports
import { Navbar } from './components/Common/Navbar';
import { Footer } from './components/Common/Footer';
import { CTASection } from './components/Common/CTASection';

// Home Component Imports
import { HomeHero } from './components/Home/HomeHero';
import { HomeIntro } from './components/Home/HomeIntro';
import { ProductSlider } from './components/Home/ProductSlider';

import { PartnersSection } from './components/Home/PartnersSection';

// Asset Imports
import headerBg from './assets/Headeraemme.jpg';
import headerMobileBg from './assets/headerhomemobile.jpg';
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
    description: "Piattaforma UAS ad ala fissa per gestione del quadro tattico in tempo reale. Soluzione dedicata a operazioni ISR e pubblica sicurezza.",
    image: ebeeVisionImg,
    specs: [
      { label: "Flight", value: "90 min", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
      { label: "Weight", value: "1.8 kg", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> },
      { label: "Range", value: "20 km", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg> },
      { label: "SEC", value: "AES 256", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> }
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
      { label: "Flight", value: "38 min", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
      { label: "Weight", value: "0.8 kg", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> },
      { label: "Range", value: "23 km", icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg> },
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


const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7];

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname;
    if (path === '/anafi-ukr') return 'anafi-ukr';
    if (path === '/ebee-tac') return 'ebee-tac';
    if (path === '/ebee-vision') return 'ebee-vision';
    if (path === '/imsi-catcher') return 'imsi-catcher';
    if (path === '/solutions') return 'solutions';
    if (path === '/contacts') return 'contacts';
    if (path === '/privacy') return 'privacy';
    if (path === '/cookie-policy') return 'cookie-policy';
    if (path === '/about') return 'about';
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/anafi-ukr') setCurrentPage('anafi-ukr');
      else if (path === '/ebee-tac') setCurrentPage('ebee-tac');
      else if (path === '/ebee-vision') setCurrentPage('ebee-vision');
      else if (path === '/imsi-catcher') setCurrentPage('imsi-catcher');
      else if (path === '/solutions') setCurrentPage('solutions');
      else if (path === '/contacts') setCurrentPage('contacts');
      else if (path === '/privacy') setCurrentPage('privacy');
      else if (path === '/cookie-policy') setCurrentPage('cookie-policy');
      else if (path === '/about') setCurrentPage('about');
      else setCurrentPage('home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const path = currentPage === 'home' ? '/' : `/${currentPage}`;
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'ebee-tac':
        return <EbeeTac onContactClick={() => setCurrentPage('contacts')} />;
      case 'anafi-ukr':
        return <AnafiUkr onContactClick={() => setCurrentPage('contacts')} />;
      case 'ebee-vision':
        return <EbeeVision onContactClick={() => setCurrentPage('contacts')} />;
      case 'imsi-catcher':
        return <IMSICatcher onContactClick={() => setCurrentPage('contacts')} />;
      case 'solutions':
        return <Solutions
          onProductClick={(id) => {
            if (id === 1) setCurrentPage('ebee-tac');
            else if (id === 2) setCurrentPage('ebee-vision');
            else if (id === 3) setCurrentPage('anafi-ukr');
            else if (id === 4) setCurrentPage('imsi-catcher');
          }}
          onContactClick={() => setCurrentPage('contacts')}
        />;
      case 'contacts':
        return <Contacts />;
      case 'privacy':
        return <Privacy />;
      case 'cookie-policy':
        return <CookiePolicy />;
      case 'about':
        return <About onContactClick={() => setCurrentPage('contacts')} />;
      default:
        return (
          <>
            <HomeHero
              headerBg={headerBg}
              headerMobileBg={headerMobileBg}
              onSolutionsClick={() => setCurrentPage('solutions')}
              onContactClick={() => setCurrentPage('contacts')}
            />

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

            <HomeIntro onAboutClick={() => setCurrentPage('about')} />
            <ProductSlider
              products={products}
              onProductClick={(id) => {
                if (id === 1) setCurrentPage('ebee-tac');
                else if (id === 2) setCurrentPage('ebee-vision');
                else if (id === 3) setCurrentPage('anafi-ukr');
                else if (id === 4) setCurrentPage('imsi-catcher');
              }}
            />
            <PartnersSection partners={partners} />
            <CTASection mappaItaliaImg={mappaItaliaImg} onContactClick={() => setCurrentPage('contacts')} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#152d50]/30 selection:text-blue-400">
      <Navbar
        onHomeClick={() => setCurrentPage('home')}
        onNavigate={(page) => setCurrentPage(page)}
      />
      {renderPage()}
      <Footer onNavigate={(page) => setCurrentPage(page)} />
    </div>
  );
}

// Revision: Round 34 - Force Rebuild for Assets
export default App;
