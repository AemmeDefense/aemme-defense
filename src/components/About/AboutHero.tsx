import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import aboutVideo from '../../assets/about.mp4';
import posterImg from '../../assets/poster-about.jpg';

export function AboutHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div ref={containerRef} className="relative min-h-screen bg-black pb-32">
            {/* 1. Video Frame Section */}
            {/* Full Width Video - No Padding ("Senza riduzioni") */}
            {/* Removed h-[80vh] which was cropping - now uses aspect-video for full frame */}
            <div className="relative w-full aspect-video">

                {/* Full Width Container - No Border/Rounding */}
                <div className="relative w-full h-full overflow-hidden shadow-2xl">

                    {/* Video Background */}
                    <motion.div style={{ opacity }} className="absolute inset-0 z-0">
                        <video
                            className="w-full h-full object-cover brightness-110"
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={posterImg}
                        >
                            <source src={aboutVideo} type="video/mp4" />
                        </video>



                        {/* Gradient for Title Readability - Shifted to Left Side */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                    </motion.div>

                    {/* Title Content - Left Aligned, Mid Height, Two Lines */}
                    <motion.div
                        className="absolute top-1/2 -translate-y-1/2 left-0 z-20 pl-8 md:pl-24 text-left pointer-events-none"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-1 bg-blue-500 mb-4 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                        />
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-xl"
                        >
                            Un progetto costruito <br />
                            sull’<span className="text-blue-500">esperienza operativa</span>
                        </motion.h1>
                    </motion.div>
                </div>
            </div>

            {/* 2. Text Content Section (Below Video) */}
            {/* Increased margin-top and padding to push it down further */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12 md:mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-12"
                >
                    <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed max-w-3xl mx-auto">
                        <span className="text-blue-400">AEMME Defense</span> è un progetto costruito a partire dai feedback reali del campo.
                    </p>

                    <div className="space-y-8">
                        <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
                            Le richieste, le criticità operative e le esigenze emerse durante missioni, test e attività svolte con operatori istituzionali ci hanno spinto a creare un portale verticale, focalizzato esclusivamente su soluzioni affidabili, testate e coerenti con gli scenari di difesa moderna.
                        </p>
                        <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
                            Il nostro obiettivo è selezionare, integrare e proporre solo tecnologie <br className="hidden md:block" />
                            in cui crediamo realmente, capaci di offrire vantaggi concreti.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
