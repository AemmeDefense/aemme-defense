import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Component Imports
import { ScrollRevealSection } from '../components/AnafiUkr/ScrollRevealSection';
import { FeatureGrid } from '../components/AnafiUkr/FeatureGrid';
import { PerformanceSection } from '../components/AnafiUkr/PerformanceSection';
import { NightVisionSection } from '../components/AnafiUkr/NightVisionSection';
import { TetherSection } from '../components/AnafiUkr/TetherSection';
import { StarlinkSection } from '../components/AnafiUkr/StarlinkSection';
import { SystemSpecs } from '../components/AnafiUkr/SystemSpecs';
import { NFZSection } from '../components/AnafiUkr/NFZSection';
import { CTASection } from '../components/Common/CTASection';
import { MidPageCTA } from '../components/Common/MidPageCTA';

// Asset Imports
import headerImg from '../assets/anafiukrheader.svg';
import overviewImg from '../assets/ukr1.jpg';
import performanceImg from '../assets/prestazioni.jpg';
import nightVisionImg from '../assets/ukrnightvision.png';
import tetherImg from '../assets/tether2.png';
import starlinkImg from '../assets/starlink.png';
import starlinkLogo from '../assets/starlinklogo.png';
import specsImg from '../assets/infogeneraliukr.jpg';
import nfzImg from '../assets/informazionigeneraliukr.png';
import noFlyZoneIcon from '../assets/noflyzone.png';
import geoFencingIcon from '../assets/geofencing.png';
import mappaItaliaImg from '../assets/mappaitalia.png';
// ... existing imports ...

// ... existing code ...

// ... existing imports ...

// Video Imports
import gnssVideo from '../assets/gnssdenied.mp4';
import radioVideo from '../assets/radio.mp4';
import zoomVideo from '../assets/ottichezoom.mp4';
import cursorVideo from '../assets/cursorontarget.mp4';
import thermalVideo from '../assets/termocamera.mp4';
import antennaVideo from '../assets/antennaremota.mp4';
import obstacleVideo from '../assets/evitamentoostacoli.mp4';

const features = [
    {
        id: 'gnss',
        title: "Navigazione ottica GNSS-denied",
        description: "Autoposizionamento e operatività autonoma in condizioni elettromagnetiche ostili e contestate, dove i segnali satellitari non sono disponibili o sono compromessi.",
        detail: "Sistema di navigazione visiva ad alta precisione, completamente indipendente da segnali esterni di posizionamento.",
        video: gnssVideo
    },
    {
        id: 'radio',
        title: "Architettura Radio Multipla",
        description: "Radio militare MARS con frequency hopping e Radio di backup LoRa. Connettività 5G per raggio operativo virtualmente illimitato.",
        detail: "Wi-Fi per operazioni a corto raggio. Garanzia di link robusto in ogni condizione.",
        video: radioVideo
    },
    {
        id: 'zoom',
        title: "Ottiche con zoom 35×",
        description: "Sensore elettro-ottico ad alta risoluzione per osservazione, identificazione e verifica del target a lunga distanza.",
        detail: "Stabilizzazione avanzata per immagini nitide anche al massimo fattore di ingrandimento.",
        video: zoomVideo
    },
    {
        id: 'cot',
        title: "Cursor-on-target",
        description: "Riconoscimento e Rilevamento degli oggetti: classificazione e tracciamento in tempo reale basati su AI di veicoli, persone e animali.",
        detail: "Calcolo e trasmissione immediata delle coordinate GNSS del target selezionato.",
        video: cursorVideo
    },
    {
        id: 'thermal',
        title: "Camera termografica",
        description: "Flir Boson 640 in grado di rilevare hotspot centimetrici fino a 40 m. Misurazione delle temperature comprese tra –40 °C e +250 °C.",
        detail: "Visione notturna e capacità di ricerca e soccorso avanzate.",
        video: thermalVideo
    },
    {
        id: 'antenna',
        title: "Antenna remota",
        description: "Consente comando e controllo sicuri da posizione protetta, anche in operazioni di prima linea o da veicolo blindato.",
        detail: "Distanza operatore-antenna fino a 100 m per massima sicurezza operativa.",
        video: antennaVideo
    },
    {
        id: 'obstacle',
        title: "Evitamento Ostacoli",
        description: "Rilevamento dinamico degli ostacoli e generazione automatica del percorso di evasione ottimizzato in tempo reale.",
        detail: "Volo sicuro anche in ambienti complessi e urbani.",
        video: obstacleVideo
    }
];

interface AnafiUkrProps {
    onContactClick: () => void;
}

function AnafiUkr({ onContactClick }: AnafiUkrProps) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">

            {/* HERO SECTION */}
            <div className="relative h-screen w-full overflow-hidden flex flex-col justify-end">
                <div className="absolute inset-0 z-0">
                    <img src={headerImg} alt="Parrot ANAFI UKR" className="w-full h-full object-cover md:object-center opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10"></div>
                </div>

                <div className="relative z-20 max-w-7xl mx-auto w-full px-6 pb-20 lg:pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[2px] w-12 bg-blue-500"></div>
                            <span className="text-blue-400 font-mono text-xs uppercase tracking-[0.3em]">Tactical ISR System</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-white drop-shadow-2xl">
                            ANAFI UKR
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-xl leading-relaxed mb-10 drop-shadow-md">
                            Micro-UAV tattico sovrano per ISR e operazioni critiche.
                            <br /> La massima sicurezza in 800g.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
                </motion.div>
            </div>

            {/* OVERVIEW SECTION */}
            <div className="relative h-[250vh]" style={{ zIndex: 10 }}>
                <ScrollRevealSection overviewImg={overviewImg} />
            </div>

            {/* KEY FEATURES */}
            <div className="py-32 bg-[#080808] relative">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">ANAUKR - Funzionalità principali</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
                    </motion.div>
                    <FeatureGrid features={features} />
                </div>
            </div>

            <PerformanceSection performanceImg={performanceImg} />
            <NightVisionSection nightVisionImg={nightVisionImg} />
            <MidPageCTA />
            <TetherSection tetherImg={tetherImg} />
            <StarlinkSection starlinkImg={starlinkImg} starlinkLogo={starlinkLogo} />
            <SystemSpecs specsImg={specsImg} />
            <NFZSection nfzImg={nfzImg} noFlyZoneIcon={noFlyZoneIcon} geoFencingIcon={geoFencingIcon} />
            <CTASection mappaItaliaImg={mappaItaliaImg} onContactClick={onContactClick} />

        </div>
    );
}

export default AnafiUkr;
