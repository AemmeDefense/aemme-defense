import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ebeeTacVideo from '../assets/ebeetacvideo.mp4';
import orthoVideo from '../assets/orthomosaic.mp4';
import pointCloudVideo from '../assets/3dpointcloud.mp4';
import thermalVideo from '../assets/thermalmap.mp4';
import surfaceVideo from '../assets/digitalsurface.mp4';
import modelVideo from '../assets/3dmodels.mp4';
import transportCaseImg from '../assets/ebeetaczaino.png';
import deployImg from '../assets/ebeetac2.jpg';
import operatorImg from '../assets/ebeetac3.png';
import certImg from '../assets/APPROVED.png';
import emotionImg from '../assets/emotion.png';
import reliabilityImg from '../assets/ebeetac4.jpg';
import safeOpsImg from '../assets/ebeetac10.jpg';

function EbeeTac() {
    const [activeFeature, setActiveFeature] = useState(0);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        };

        observerRef.current = new IntersectionObserver(handleIntersection, {
            threshold: 0.2
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, []);

    const features = [
        {
            id: 0,
            title: "3D Models",
            subtitle: "Digital Twin",
            description: "Trasforma i dati grezzi in modelli 3D georeferenziati. Grazie alla risoluzione centimetrica dei sensori integrati ogni dettaglio viene ricostruito fedelmente.",
            video: modelVideo,
        },
        {
            id: 1,
            title: "Orthomosaic map",
            subtitle: "2D Mapping",
            description: "Trasforma centinaia di scatti aerei in un’unica mappa georeferenziata dalla precisione millimetrica. Ogni pixel riflette la sua reale posizione geografica, eliminando le distorsioni della lente e i dislivelli del terreno.",
            video: orthoVideo,
        },
        {
            id: 2,
            title: "3D Point Cloud",
            subtitle: "Spatial Data",
            description: "Ogni nuvola è composta da milioni di punti georeferenziati che definiscono una mappatura del territorio rapida, scalabile e pronta per essere integrata in sistemi GIS o software CAD.",
            video: pointCloudVideo,
        },
        {
            id: 3,
            title: "Thermal Map",
            subtitle: "Heat Signature",
            description: "La Mappatura Termica ad alta risoluzione realizzata permette di visualizzare l'impronta calorifica del territorio e delle infrastrutture con estrema precisione. È una risorsa cruciale per la ricerca e soccorso.",
            video: thermalVideo,
        },
        {
            id: 4,
            title: "Digital Surface Model",
            subtitle: "Elevation Data",
            description: "La ricostruzione altimetrica totale, questo output permette di mappare con precisione chiome degli alberi, tetti di edifici e infrastrutture complesse, garantendo una base dati ad alta fedeltà.",
            video: surfaceVideo,
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans">
            {/* HERO SECTION - CLEAN & TACTICAL */}
            <div className="relative h-screen w-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={ebeeTacVideo} type="video/mp4" />
                </video>
                {/* Tech Grid Overlay */}
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid-pixel.png')] opacity-20 mix-blend-overlay"></div>
                {/* Gradient: Solid black safe zone at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-80% to-[#050505]"></div>

                {/* NO TEXT CONTENT - VIDEO ONLY */}

                {/* Scroll Indicator - Anchored in the black zone */}
                <div
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80 animate-bounce cursor-pointer p-2"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
                    </svg>
                </div>
            </div>

            {/* INTRO TEXT */}
            <div className="relative py-32 bg-[#050505] z-10 overflow-hidden">
                {/* Visual Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight"
                    >
                        <span className="text-[#5c8cc7] drop-shadow-[0_0_15px_rgba(92,140,199,0.5)]">eBee TAC:</span> Drone cartografico<br />
                        tattico e <span className="text-[#5c8cc7]">governativo, cyber-sicuro</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative max-w-4xl mx-auto"
                    >
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                            Progettato per operare in ambienti disconnessi, garantisce precisione operativa in ogni scenario.
                            <strong className="text-white font-semibold"> eBee TAC</strong> è utilizzabile da un singolo operatore e può essere dispiegato in soli <span className="text-[#5c8cc7] font-bold">3 minuti</span>.
                            Consente la generazione di modelli 3D, mappe termiche e ortomosaici, condivisibili in locale in totale sicurezza.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* TECHNICAL SPECS (Moved) */}
            <div className="py-32 bg-[#050505] relative border-t border-blue-900/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e3a8a_0%,_transparent_70%)] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl font-bold mb-4">Prestazioni del sistema</h2>
                        <div className="w-24 h-1 bg-[#5c8cc7] mx-auto shadow-[0_0_15px_rgba(92,140,199,0.5)]"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative"
                    >
                        {/* 1. Accuracy */}
                        <div className="p-8 flex flex-col items-center text-center group relative">
                            {/* Vertical Divider (Desktop) */}
                            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>

                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-[#5c8cc7]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="w-20 h-20 rounded-full bg-[#0a0a0a] border border-[#5c8cc7]/30 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:border-[#5c8cc7]">
                                    <svg className="w-8 h-8 text-[#5c8cc7] drop-shadow-[0_0_8px_rgba(92,140,199,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z" opacity="0.5" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v2m0 8v2m-6-6h2m8 0h2" />
                                        <circle cx="12" cy="12" r="1.5" fill="currentColor" className="text-white" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#5c8cc7] transition-colors">Accuratezza</h3>
                            <p className="text-slate-400 text-sm font-medium">di mappatura fino a <br /><span className="text-white text-lg font-bold">1,5 cm</span></p>
                        </div>

                        {/* 2. Flight Time */}
                        <div className="p-8 flex flex-col items-center text-center group relative">
                            {/* Vertical Divider (Desktop) */}
                            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>

                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-[#5c8cc7]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="w-20 h-20 rounded-full bg-[#0a0a0a] border border-[#5c8cc7]/30 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:border-[#5c8cc7]">
                                    <svg className="w-8 h-8 text-[#5c8cc7] drop-shadow-[0_0_8px_rgba(92,140,199,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#5c8cc7] transition-colors">Autonomia</h3>
                            <p className="text-slate-400 text-sm font-medium">di volo fino a <br /><span className="text-white text-lg font-bold">90 minuti</span></p>
                        </div>

                        {/* 3. Coverage */}
                        <div className="p-8 flex flex-col items-center text-center group relative">
                            {/* Vertical Divider (Desktop) */}
                            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>

                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-[#5c8cc7]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="w-20 h-20 rounded-full bg-[#0a0a0a] border border-[#5c8cc7]/30 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:border-[#5c8cc7]">
                                    <svg className="w-8 h-8 text-[#5c8cc7] drop-shadow-[0_0_8px_rgba(92,140,199,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#5c8cc7] transition-colors">Copertura</h3>
                            <p className="text-slate-400 text-sm font-medium">fino a <br /><span className="text-white text-lg font-bold">500 ha</span> in un singolo volo</p>
                        </div>

                        {/* 4. Weight */}
                        <div className="p-8 flex flex-col items-center text-center group relative">
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-[#5c8cc7]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="w-20 h-20 rounded-full bg-[#0a0a0a] border border-[#5c8cc7]/30 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:border-[#5c8cc7]">
                                    <svg className="w-8 h-8 text-[#5c8cc7] drop-shadow-[0_0_8px_rgba(92,140,199,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#5c8cc7] transition-colors">Peso</h3>
                            <p className="text-slate-400 text-sm font-medium"><span className="text-white text-lg font-bold">1,6 kg</span> <br />(3,5 lb)</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* NEW DESCRIPTION PARAGRAPH */}
            <div className="relative py-24 bg-[#050505] z-10 overflow-hidden text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative max-w-4xl mx-auto px-6"
                >
                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                        <strong className="text-white font-semibold">eBee TAC</strong> ridefinisce gli standard della mappatura aerea, trasformando ogni missione in un ecosistema di dati ad alta precisione.
                        Grazie alla sua architettura avanzata e ai sensori intercambiabili, il sistema permette di generare una gamma completa di output georeferenziati:
                    </p>
                </motion.div>
            </div>

            {/* VIDEO ACCORDION FEATURE SECTION */}
            <div className="w-full h-[600px] md:h-[70vh] bg-[#050505] flex flex-col md:flex-row overflow-hidden border-y border-white/5">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        layout // This animates the container resize (flex change)
                        onClick={() => setActiveFeature(index)}
                        className={`relative cursor-pointer overflow-hidden group border-b md:border-b-0 md:border-r border-white/5
                            ${activeFeature === index ? 'grayscale-0' : 'grayscale hover:grayscale-0'}
                        `}
                        animate={{ flex: activeFeature === index ? 3 : 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth apple-like spring curve
                    >
                        {/* Background Video */}
                        <div className="absolute inset-0 w-full h-full">
                            <motion.div layout className="w-full h-full relative">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                                        ${activeFeature === index ? 'opacity-100' : 'opacity-60'}
                                    `}
                                >
                                    <source src={feature.video} type="video/mp4" />
                                </video>

                                {/* Base Overlay */}
                                <div className={`absolute inset-0 transition-all duration-500
                                    ${activeFeature === index ? 'bg-transparent' : 'bg-black/70 group-hover:bg-black/50'}
                                `}></div>

                                {/* Text Protection Gradient */}
                                <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black via-black/80 to-transparent"></div>

                                {/* Side Gradient for Title */}
                                <div className={`absolute bottom-0 left-0 w-[40%] h-full bg-gradient-to-r from-black/60 to-transparent transition-opacity duration-500 ${activeFeature === index ? 'opacity-0' : 'opacity-100'}`}></div>
                            </motion.div>
                        </div>

                        {/* Content Container */}
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">

                            {/* VERTICAL STATE (COLLAPSED) */}
                            {activeFeature !== index && (
                                <div className="absolute inset-0 p-8">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-5xl font-bold text-white/20 font-mono absolute top-8 left-8"
                                    >
                                        0{index + 1}
                                    </motion.div>

                                    {/* Vertical Title - Standard Fade In */}
                                    <motion.h3
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="text-2xl font-bold text-white whitespace-nowrap drop-shadow-md origin-bottom-left absolute bottom-8 left-8"
                                        style={{ transform: 'rotate(-90deg) translateX(2rem)' }}
                                    >
                                        {feature.title}
                                    </motion.h3>
                                </div>
                            )}

                            {/* EXPANDED STATE */}
                            <AnimatePresence>
                                {activeFeature === index && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="relative w-full"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="h-[1px] w-8 bg-[#5c8cc7] shadow-[0_0_10px_#5c8cc7]"></div>
                                            <span className="text-[#5c8cc7] font-mono text-sm tracking-widest uppercase shadow-black drop-shadow-md">{feature.subtitle}</span>
                                        </div>

                                        {/* Horizontal Title - Standard Slide Up */}
                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.1 }}
                                            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-none drop-shadow-lg shadow-black origin-bottom-left block"
                                        >
                                            {feature.title}
                                        </motion.h3>

                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-slate-200 text-lg max-w-lg leading-relaxed border-l-2 border-[#5c8cc7]/50 pl-4 bg-black/30 backdrop-blur-sm p-4 rounded-r-lg"
                                        >
                                            {feature.description}
                                        </motion.p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Active Indicator Line */}
                            {activeFeature === index && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="absolute top-0 left-0 w-full h-1 bg-[#5c8cc7] shadow-[0_0_20px_rgba(92,140,199,0.5)] z-20"
                                />
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>



            {/* TRANSPORT CASE SECTION (Holographic/Floating) */}
            <div className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-12 h-[2px] bg-[#5c8cc7]"></div>
                            <span className="text-[#5c8cc7] font-mono tracking-widest text-sm uppercase">Logistica & Protezione</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Valigetta di trasporto <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5c8cc7] to-blue-600">militare IP67</span>
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
                            Il sistema è fornito con una valigetta rigida di grado militare, certificata <strong className="text-white">STANAG</strong>, progettata per garantire la massima protezione durante il trasporto e lo stoccaggio.
                            La custodia assicura resistenza totale a polvere e immersione temporanea in acqua (IP67), oltre a un’elevata protezione contro urti, vibrazioni e condizioni ambientali estreme.
                        </p>
                        <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                            <span className="w-3 h-3 rounded-full bg-[#5c8cc7] animate-pulse"></span>
                            <span className="text-sm font-mono text-[#5c8cc7] uppercase">Ready for Deployment</span>
                        </div>
                    </motion.div>

                    {/* Floating Image */}
                    <div className="relative group perspective-1000">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full opacity-50"></div>

                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotateZ: [0, 1, 0, -1, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10"
                        >
                            <img
                                src={transportCaseImg}
                                alt="Valigetta IP67 eBee TAC"
                                className="w-full max-w-lg mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* FIELD OPERATIONS SECTION (Tactical Cards) */}
            <div className="py-32 bg-[#020202] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Card 1: Deployment - 3D Tilt & Scan */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img src={deployImg} alt="Dispiegamento Rapido" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                            </div>

                            {/* Scan Line Effect */}
                            <motion.div
                                className="absolute top-0 left-0 right-0 h-1 bg-blue-400 shadow-[0_0_20px_#3b82f6] z-20 opacity-0 group-hover:opacity-100"
                                initial={{ top: "0%" }}
                                whileHover={{ top: ["0%", "100%", "0%"], transition: { duration: 2, repeat: Infinity, ease: "linear" } }}
                            />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">


                                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all">Dispiegamento rapido <br /> in 3 minuti</h3>
                                <div className="h-1 w-12 bg-[#27437d] mb-4 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#27437d]"></div>
                                <p className="text-slate-300 leading-relaxed max-w-md text-sm md:text-base">
                                    eBee TAC è progettato per un impiego immediato sul campo: il dispiegamento in modalità standalone e PPK richiede solo 3 minuti. In configurazione RTK, il sistema è operativo in 10 minuti.
                                </p>
                            </div>

                            {/* Border Glow */}
                            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-[#27437d] group-hover:shadow-[0_0_30px_rgba(39,67,125,0.6)] transition-all duration-500"></div>
                        </motion.div>

                        {/* Card 2: Single Operator - 3D Tilt & Scan */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img src={operatorImg} alt="Operatore Singolo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                            </div>

                            {/* Scan Line Effect */}
                            <motion.div
                                className="absolute top-0 left-0 right-0 h-1 bg-[#27437d] shadow-[0_0_20px_#27437d] z-20 opacity-0 group-hover:opacity-100"
                                initial={{ top: "0%" }}
                                whileHover={{ top: ["0%", "100%", "0%"], transition: { duration: 2, repeat: Infinity, ease: "linear" } }}
                            />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">


                                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all">Utilizzabile da un <br /> solo operatore</h3>
                                <div className="h-1 w-12 bg-[#27437d] mb-4 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#27437d]"></div>
                                <p className="text-slate-300 leading-relaxed max-w-md text-sm md:text-base">
                                    Progettato per la massima semplicità operativa, eBee TAC è intuitivo da utilizzare e rapido da apprendere, consentendo l’impiego completo del sistema da parte di un singolo operatore.
                                </p>
                            </div>

                            {/* Border Glow */}
                            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-[#27437d] group-hover:shadow-[0_0_30px_rgba(39,67,125,0.6)] transition-all duration-500"></div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* BLUE UAS CERTIFICATION SECTION */}
            <div className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Floating Image (Left) */}
                    <div className="relative group perspective-1000 order-2 lg:order-1">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full opacity-50"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 flex justify-center"
                        >
                            <img
                                src={certImg}
                                alt="Certificazione Blue UAS"
                                className="w-full max-w-md md:max-w-lg drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                            />
                        </motion.div>
                    </div>

                    {/* Text Content (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 order-1 lg:order-2"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-12 h-[2px] bg-[#5c8cc7]"></div>
                            <span className="text-[#5c8cc7] font-mono tracking-widest text-sm uppercase">Compliance & Sicurezza</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Certificazione <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#5c8cc7]">Blue UAS</span>
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
                            Questa certificazione rende il drone <strong className="text-white">EagleNXT</strong> idoneo all’approvvigionamento da parte del Dipartimento della Difesa degli Stati Uniti (DoD) e di altre agenzie federali, attestando la conformità ai requisiti di sicurezza e prestazioni richiesti dal DoD.
                        </p>

                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 font-mono text-sm">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            DOD APPROVED
                        </div>
                    </motion.div>

                </div>
            </div>



            {/* EMOTION SOFTWARE SECTION */}
            <div className="py-32 bg-[#080808] relative overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-50"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* Main Intro */}
                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, rotateX: 20, z: -100 }}
                            whileInView={{ opacity: 1, rotateX: 0, z: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:w-1/2 perspective-1000"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                                <img
                                    src={emotionImg}
                                    alt="Interfaccia eMotion"
                                    className="relative rounded-xl shadow-2xl border border-white/10 w-full"
                                />
                                {/* Tech overlay lines */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50"></div>
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-6xl font-bold text-white mb-2 tracking-tighter">
                                eMotion
                            </h2>
                            <h3 className="text-2xl text-[#5c8cc7] font-light mb-6 tracking-wide uppercase">Software di gestione del volo</h3>
                            <p className="text-xl text-slate-300 leading-relaxed border-l-4 border-[#5c8cc7]/50 pl-6">
                                Intuitivo da utilizzare ma dotato di funzionalità avanzate, eMotion offre tutti gli strumenti necessari per la raccolta e la gestione dei dati geospaziali, consentendo di operare con la massima precisione.
                            </p>
                        </motion.div>
                    </div>

                    {/* Features Grid - 6 Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Pianificazione del volo 3D",
                                desc: "Pianifica, simula e controlla missioni avanzate su qualsiasi tipo di terreno, incluse aree montuose. Volo e atterraggio completamente automatizzati."
                            },
                            {
                                title: "Missioni covert",
                                desc: "La modalità covert consente di eseguire missioni radio silenziose con comunicazioni non rilevabili."
                            },
                            {
                                title: "Modifica del piano di volo in tempo reale",
                                desc: "Permette di mantenere il drone in posizione, modificare la traiettoria di volo e/o il punto di atterraggio durante la missione."
                            },
                            {
                                title: "Operazioni multi-drone",
                                desc: "Gestione simultanea fino a 4 droni, controllati da un’unica stazione di controllo a terra."
                            },
                            {
                                title: "Pianificazione offline",
                                desc: "Operatività garantita anche in ambienti disconnessi grazie a mappe di sfondo e dati altimetrici disponibili offline."
                            },
                            {
                                title: "Modalità di missione ottimizzate",
                                desc: "Modalità orizzontale, corridoio, punto di interesse (POI), missioni multiple o completamente personalizzate."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors duration-300"
                            >
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5c8cc7]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#5c8cc7] transition-colors">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* RELIABILITY SECTION - NEW & COOL */}
            <div className="py-32 bg-[#050505] relative overflow-hidden">
                {/* Tech Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content & Stats */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-[0_0_15px_#3b82f6]"></span>
                                <span className="text-blue-400 font-mono tracking-widest text-sm uppercase shadow-blue-500/50 drop-shadow-md">Mission Proven</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Affidabilità <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">comprovata</span>
                            </h2>

                            <p className="text-slate-300 text-lg leading-relaxed mb-12 border-l-2 border-white/10 pl-6">
                                eBee TAC è progettato specificamente per le esigenze di mappatura tattica in ambito difesa, al fine di migliorare l’efficacia operativa della missione in una vasta gamma di scenari e tipologie di terreno.
                                <br /><br />
                                L’hardware, il software, la cybersecurity e l’affidabilità del sistema sono stati valutati dalla <strong className="text-white">U.S. Defense Innovation Unit</strong>.
                            </p>

                            {/* Stats Grid - HUD Style */}
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { value: "12", label: "Anni Esperienza", suffix: "" },
                                    { value: "173.600", label: "Voli Cumulativi", suffix: "+" },
                                    { value: "90.490", label: "Ore di Volo", suffix: "+" },
                                    { value: "1 / 1.750", label: "Probabilità di fly-away", suffix: " ore" }
                                ].map((stat, i) => (
                                    <div key={i} className="relative group">
                                        <div className="absolute top-0 left-0 w-8 h-[1px] bg-[#5c8cc7] transition-all duration-500 group-hover:w-full"></div>
                                        <div className="pt-4">
                                            <h4 className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-[#5c8cc7] transition-colors font-mono">
                                                {stat.value}<span className="text-lg text-[#5c8cc7]">{stat.suffix}</span>
                                            </h4>
                                            <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Image with Tech Frame */}
                    <div className="order-1 lg:order-2 relative lg:h-[600px] flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full h-full"
                        >
                            {/* Decorative HUD Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#5c8cc7] rounded-tr-3xl z-20"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#5c8cc7] rounded-bl-3xl z-20"></div>

                            {/* Image Container with Clip Path */}
                            <div className="relative w-full h-full overflow-hidden rounded-lg border border-white/10 group">
                                <div className="absolute inset-0 bg-blue-900/20 z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
                                <img
                                    src={reliabilityImg}
                                    alt="eBee TAC Reliability"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                />

                                {/* Scrolling Scan Line Removed */}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* SAFE OPERATIONS SECTION */}
            <div className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image */}
                    <div className="relative group w-[85%] mx-auto">
                        <div className="absolute inset-0 bg-[#27437d]/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                        <img
                            src={safeOpsImg}
                            alt="Operazioni Sicure"
                            className="relative w-full rounded-2xl shadow-2xl border border-white/10 group-hover:border-[#27437d]/50 transition-all duration-500"
                        />
                        {/* Corner Accents */}
                        <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-[#27437d] rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-[#27437d] rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Operazioni sicure</h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-12 border-l-4 border-[#27437d] pl-6">
                            Il drone eBee TAC soddisfa i più elevati standard possibili di qualità e sicurezza del rischio a terra e ha dimostrato un’elevata sicurezza operativa anche in prossimità delle persone.
                        </p>

                        {/* 3-Column Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "BVLOS approvato", desc: "I droni eBee hanno ottenuto l’autorizzazione per operazioni Beyond Visual Line of Sight (BVLOS) in Brasile." },
                                { title: "Voli sopra le persone", desc: "Approvato per operazioni sopra le persone (Operations Over People – OOP) in Canada e negli Stati Uniti." },
                                { title: "Processo SORA", desc: "I droni eBee sono i primi ad aver ottenuto la verifica M2 di Mitigazione del Design per il processo SORA da parte dell’EASA." }
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <div className="h-[2px] w-8 bg-[#27437d] mb-4 group-hover:w-full transition-all duration-500"></div>
                                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* CTA FOOTER */}
            <div className="bg-blue-900 py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Deploy?</h2>
                    <button className="px-12 py-5 bg-[#050505] hover:bg-white hover:text-[#050505] text-white font-bold uppercase tracking-widest border border-white/20 transition-all duration-300">
                        Contatta un Esperto
                    </button>
                </div>
            </div>
        </div >
    );
}

export default EbeeTac;
