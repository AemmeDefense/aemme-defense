import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import headerImg from '../assets/anafiukrheader.svg';
import overviewImg from '../assets/ukr1.jpg';
import performanceImg from '../assets/prestazioni.jpg';
import nightVisionImg from '../assets/ukrnightvision.png';
import blueUasImg from '../assets/blueuas.png';
import gnssVideo from '../assets/gnssdenied.mp4';
import radioVideo from '../assets/radio.mp4';
import zoomVideo from '../assets/ottichezoom.mp4';
import cursorVideo from '../assets/cursorontarget.mp4';
import thermalVideo from '../assets/termocamera.mp4';
import antennaVideo from '../assets/antennaremota.mp4';
import obstacleVideo from '../assets/evitamentoostacoli.mp4';

function AnafiUkr() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">

            {/* HERO SECTION - CINEMATIC FULL SCREEN */}
            <div className="relative h-screen w-full overflow-hidden flex flex-col justify-end">
                {/* Full Screen Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={headerImg}
                        alt="Parrot ANAFI UKR"
                        className="w-full h-full object-cover md:object-center opacity-90"
                    />
                    {/* Cinematic Scrim (Gradient from bottom) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10"></div>
                </div>

                {/* Content - Bottom Left (Unobtrusive) */}
                <div className="relative z-20 max-w-7xl mx-auto w-full px-6 pb-20 lg:pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="max-w-3xl"
                    >
                        {/* Minimal Badge */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[2px] w-12 bg-blue-500"></div>
                            <span className="text-blue-400 font-mono text-xs uppercase tracking-[0.3em]">
                                Tactical ISR System
                            </span>
                        </div>

                        {/* Title - Clean & Sharp */}
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-white drop-shadow-2xl">
                            ANAFI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B7] to-[#FFDD00]">UKR</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-xl leading-relaxed mb-10 drop-shadow-md">
                            Micro-UAV tattico sovrano per ISR e operazioni critiche.
                            <br /> La massima sicurezza in 800g.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
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

            {/* OVERVIEW SECTION - SCROLL REVEAL (Replica Detector Group style) */}
            <div className="relative h-[250vh]" style={{ zIndex: 10 }}> {/* High Height for Scroll Space */}
                <ScrollRevealSection />
            </div>

            {/* KEY FEATURES - INTERACTIVE GRID */}
            <div className="py-32 bg-[#080808] relative">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                            ANAFI UKR – Caratteristiche principali
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
                    </motion.div>

                    <FeatureGrid />
                </div>
            </div>

            {/* PERFORMANCE SECTION - NEW */}
            <PerformanceSection />

            {/* NIGHT VISION SECTION - SCROLL REVEAL */}
            <NightVisionSection />

            {/* SECURITY & STEALTH - DARK MODE */}
            <div className="py-32 bg-black relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left: Ghost Mode Visualization */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 blur-[50px] rounded-full"></div>
                            {/* Stealth Badge */}
                            <div className="relative border border-white/10 bg-[#0a0a0a] p-8 rounded-2xl overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="flex items-center gap-2 text-xs font-mono text-red-500 animate-pulse">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        RADIO SILENCE
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-6">Ghost Mode</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/10 text-slate-500">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">Zero Emissioni</div>
                                            <div className="text-sm text-slate-500">Nessun segnale RF tracciabile</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/10 text-slate-500">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">Stealth Visivo</div>
                                            <div className="text-sm text-slate-500">Luci spente per operazioni notturne</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Security Certs */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sicurezza Certificata</h2>
                            <p className="text-lg text-slate-300 mb-10 leading-relaxed border-l-4 border-slate-700 pl-6">
                                Anafi UKR non è solo performante, è fidato. Costruito seguendo rigorosi standard di sicurezza per garantire la sovranità dei dati e l'integrità della missione.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors group">
                                    <h4 className="text-blue-400 font-mono text-sm uppercase mb-2 group-hover:text-blue-300">Encryption</h4>
                                    <p className="text-xl font-bold text-white">AES-XTS 512</p>
                                    <p className="text-xs text-slate-500 mt-2">Protezione dati completa su SD Card</p>
                                </div>
                                <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors group">
                                    <h4 className="text-blue-400 font-mono text-sm uppercase mb-2 group-hover:text-blue-300">Link</h4>
                                    <p className="text-xl font-bold text-white">WPA2 Auth</p>
                                    <p className="text-xs text-slate-500 mt-2">Connessione sicura drone-controller</p>
                                </div>
                            </div>

                            <div className="inline-block">
                                <img src={blueUasImg} alt="Blue UAS Cleared" className="h-24 opacity-80 hover:opacity-100 transition-opacity" />
                                <p className="text-xs text-slate-500 mt-2 font-mono uppercase tracking-widest text-center">NDAA Compliant • Blue UAS</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
    );
}

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

function FeatureGrid() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [enlargedVideo, setEnlargedVideo] = useState<string | null>(null);

    return (
        <div className="relative">
            {/* VERTICAL COMPACT LIST - DYNAMIC WIDTH EXPANSION */}
            <div className="flex flex-col gap-2 w-full px-6"> {/* Parent is full width with padding, children control their own max-width */}
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.id}
                        layoutId={`card-container-${feature.id}`}
                        onClick={() => setSelectedId(selectedId === feature.id ? null : feature.id)}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.5, ease: "circOut" }}
                        className={`
                            relative overflow-hidden rounded-lg cursor-pointer group mx-auto w-full
                            border transition-all duration-500
                            ${selectedId === feature.id
                                ? 'bg-blue-900/10 border-blue-500 my-8 max-w-7xl shadow-[0_0_50px_rgba(59,130,246,0.15)]' // Expanded: Wider, more vertical space, glow
                                : 'bg-transparent border-transparent hover:bg-white/5 border-b-white/10 rounded-none max-w-4xl'} // Collapsed: Compact, standardized width
                        `}
                    >
                        {/* Compact Header */}
                        <motion.div
                            className={`flex items-center justify-between p-5 transition-all duration-500 ${selectedId === feature.id ? 'bg-blue-500/10' : ''}`}
                            layoutId={`card-header-${feature.id}`}
                        >
                            <div className="flex items-center gap-4">
                                {/* Number - Subtle Animated */}
                                <motion.div
                                    animate={{ color: selectedId === feature.id ? '#3B82F6' : ['#475569', '#94a3b8', '#475569'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className={`
                                    text-sm font-mono font-bold transition-colors duration-300
                                    ${selectedId === feature.id ? 'text-blue-500' : 'text-slate-600 group-hover:text-slate-400'}
                                `}>
                                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                </motion.div>

                                {/* Title - Clean */}
                                <div>
                                    <h3 className={`text-lg font-medium transition-colors duration-300 ${selectedId === feature.id ? 'text-blue-400 text-3xl' : 'text-slate-300 group-hover:text-white'}`}>
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Arrow Indicator - Minimal */}
                            <div className={`transform transition-transform duration-300 opacity-0 group-hover:opacity-100 ${selectedId === feature.id ? 'opacity-100 rotate-90 text-blue-500' : 'text-slate-500'}`}>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* Expanded Content */}
                        <AnimatePresence>
                            {selectedId === feature.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "circOut" }}
                                    className="overflow-hidden bg-[#050505]" // Darker background for expanded
                                >
                                    <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-blue-500/20">

                                        {/* Left: Text Details - Larger in expanded view */}
                                        <div className="text-slate-300 leading-relaxed font-light">
                                            <motion.p
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="text-xl md:text-2xl mb-8 font-light text-white" // Larger text
                                            >
                                                {feature.description}
                                            </motion.p>

                                            <motion.div
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                                className="pl-6 border-l-2 border-blue-500/50"
                                            >
                                                {/* Removed Title, just the detail text */}
                                                <span className="text-base text-slate-400 italic block">{feature.detail}</span>
                                            </motion.div>
                                        </div>

                                        {/* Right: Video Feed */}
                                        <motion.div
                                            initial={{ scale: 0.95, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.1, duration: 0.5 }}
                                            className="relative rounded-lg overflow-hidden bg-black border border-white/10 shadow-lg"
                                        >
                                            <div className="aspect-video relative">
                                                <video
                                                    src={feature.video}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="w-full h-full object-cover opacity-90"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>

                                                {/* Minimal Overlay */}
                                                <div className="absolute top-3 right-3 flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                                                    <span className="text-[9px] font-mono text-white/70 tracking-widest">LIVE FEED</span>
                                                </div>

                                                {/* Expand Button */}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation(); // Prevent card toggle
                                                        setEnlargedVideo(feature.video);
                                                    }}
                                                    className="absolute bottom-3 right-3 p-2 bg-black/50 hover:bg-blue-500 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-sm group/btn"
                                                    title="Ingrandisci Video"
                                                >
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {/* Background Blur Effect when something is selected (Optional, affects page background) */}
            {/* We could add a fixed overlay here if we wanted to dim the rest of the page, but inline expansion usually feels better without full page dimming for a list. Let's keep it clean. */}

            {/* Video Modal */}
            <AnimatePresence>
                {enlargedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
                        onClick={() => setEnlargedVideo(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors z-[101]"
                            onClick={() => setEnlargedVideo(null)}
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                        >
                            <video
                                src={enlargedVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls // Allow user controls in full screen
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function ScrollRevealSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.2]);
    const imgScale = useTransform(scrollYProgress, [0.3, 1], [0.6, 1]);
    const imgOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
    const imgRadius = useTransform(scrollYProgress, [0.8, 1], ["40px", "0px"]);

    return (
        <div ref={containerRef} className="absolute inset-0">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-[#050505]">

                {/* Text Layer (Fades Out) */}
                <motion.div
                    style={{ opacity: textOpacity, scale: textScale }}
                    className="absolute z-20 max-w-4xl px-6 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
                        Dominio Tattico <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                            in Ogni Scenario.
                        </span>
                    </h2>
                    <p className="text-xl md:text-3xl text-slate-300 leading-relaxed font-light">
                        <strong className="text-white font-medium">ANAFI UKR</strong> è un micro-UAV tattico progettato per missioni <span className="text-blue-400">ISR</span>. Combina autonomia, sensori stabilizzati e sicurezza dei dati per operare anche in scenari <span className="text-slate-100 font-medium decoration-blue-500/50 underline decoration-2 underline-offset-4">GNSS-denied</span>.
                    </p>
                </motion.div>

                {/* Image Layer (Scales Up from Behind) */}
                <motion.div
                    style={{ scale: imgScale, opacity: imgOpacity, borderRadius: imgRadius }}
                    className="absolute z-10 w-full h-full"
                >
                    <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Dimmer */}
                    <img
                        src={overviewImg}
                        alt="Anafi UKR Vision"
                        className="w-full h-full object-cover"
                    />
                    {/* Integrated Specs Overlay (Visible only at full scale) */}
                    <div className="absolute bottom-10 left-10 z-20">
                        <div className="bg-black/80 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10">
                            <div className="text-blue-400 text-xs font-mono mb-1">DEPLOYMENT TIME</div>
                            <div className="text-2xl font-bold text-white">&lt; 2 MIN</div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

function PerformanceSection() {
    return (
        <div className="relative py-32 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Stats & Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Prestazioni <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Operative Superiori</span>
                        </h2>
                        <p className="text-lg text-slate-300 mb-12 font-light max-w-lg">
                            Progettato per missioni a lungo raggio e bassa osservabilità. L'Anafi UKR ridefinisce gli standard di categoria per resistenza e furtività.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {/* Stat 1 */}
                            <StatCard
                                icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                value="70"
                                suffix=" min"
                                label="Autonomia di Volo"
                                color="text-blue-400"
                            />
                            {/* Stat 2 */}
                            <StatCard
                                icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} // Placeholder for Range/Signal
                                value="40"
                                suffix=" km"
                                label="Range Operativo"
                                color="text-white"
                            />
                            {/* Stat 3 */}
                            <StatCard
                                icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>} // Ear/Sound icon representation
                                value="77"
                                suffix=" dB"
                                label="Low Acoustic Signature"
                                color="text-emerald-400"
                            />
                            {/* Stat 4 */}
                            <StatCard
                                icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                                value="53"
                                prefix="IP"
                                label="Resistenza Certificata"
                                color="text-slate-200"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Image - Balanced height */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="relative h-auto max-h-[450px] w-full flex items-center justify-center" // Removed min-h, added max-h constraint
                    >
                        <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full"></div>
                        <div className="relative rounded-2xl overflow-hidden h-full w-full">
                            <img
                                src={performanceImg}
                                alt="Anafi UKR Performance"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" // Interactive flair
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, value, suffix = "", prefix = "", label, color }: { icon: any, value: string, suffix?: string, prefix?: string, label: string, color: string }) {
    return (
        <div className="group cursor-default">
            {/* Icon - Animate Color on Hover */}
            <div className={`mb-3 p-0 transition-colors duration-300 text-slate-500 group-hover:${color}`}>
                {icon}
            </div>

            {/* Value - Animate Color on Hover */}
            <div className={`flex items-baseline gap-1 transition-colors duration-300 text-white group-hover:${color}`}>
                {prefix && <span className="text-2xl font-bold">{prefix}</span>}
                <Counter value={parseInt(value)} />
                {suffix && <span className="text-xl font-medium text-slate-500 group-hover:text-slate-300 transition-colors">{suffix}</span>}
            </div>

            {/* Label - Subtle */}
            <p className="text-sm text-slate-500 mt-1 font-light group-hover:text-white transition-colors">{label}</p>
        </div>
    );
}

function Counter({ value }: { value: number }) {
    // Simple animated counter wrapper

    // We could use useInView from framer-motion but for simplicity in this snippet:
    // A real animated counter needs a ref and effect.
    // Let's rely on standard text for now to avoid complexity in this huge file editor, 
    // OR just render the number. 
    // Wait, user asked for "stupiscimi" (wow me). I should make it count.

    return (
        <span className="text-4xl font-bold text-white">
            <CountUp end={value} duration={2} />
        </span>
    );
}

// Minimal CountUp Component
function CountUp({ end, duration }: { end: number, duration: number }) {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [end, duration, isInView]);

    return <span ref={nodeRef}>{count}</span>;
}



function NightVisionSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Animation Logic:
    // As we scroll into the container, the image centers.
    // As we continue scrolling, the image slides left and text enters.

    // We want the section to pin for a while.
    // Let's use a known height for the scroll duration.

    const xImage = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "-25%"]);
    const opacityText = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
    const xText = useTransform(scrollYProgress, [0.3, 0.5], ["100px", "0px"]);

    return (
        <div ref={containerRef} className="relative h-[200vh] bg-black">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Background Glow */}
                <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-50"></div>

                <div className="relative w-full max-w-7xl px-6 flex items-center justify-center">

                    {/* Image Layer */}
                    <motion.div
                        style={{ x: xImage }}
                        className="relative z-10 w-full max-w-4xl"
                    >
                        <img
                            src={nightVisionImg}
                            alt="Night Vision Module"
                            className="w-full h-auto object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.1)]"
                        />
                    </motion.div>

                    {/* Text Layer - Absolute positioned to the right */}
                    <motion.div
                        style={{ opacity: opacityText, x: xText }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 max-w-md z-20 text-right pr-6 md:pr-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                            Modulo termico LWIR <br />
                            <span className="text-slate-500 text-2xl font-light">Navigazione GNSS-denied</span>
                        </h2>

                        <p className="text-slate-300 mb-8 leading-relaxed font-light">
                            Questo modulo termico esterno, compatibile con <strong className="text-white">Parrot ANAFI UKR</strong> e <strong className="text-white">CHUCK 3.0</strong>, consente la navigazione e il volo basati su sensori ottici anche in ambienti GNSS-denied, garantendo piena operatività sia in condizioni diurne sia notturne.
                        </p>

                        <div className="space-y-4 border-t border-white/10 pt-6">
                            <div className="flex items-center justify-end gap-3">
                                <span className="text-slate-400 text-sm uppercase tracking-wider">Sensore LWIR</span>
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-end gap-3">
                                <span className="text-slate-400 text-sm uppercase tracking-wider">IMU Integrata</span>
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-end gap-3">
                                <span className="text-slate-400 text-sm uppercase tracking-wider">Interfaccia USB-C</span>
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </div>
    );
}

export default AnafiUkr;
