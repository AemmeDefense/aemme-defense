import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollRevealSectionProps {
    overviewImg: string;
}

export function ScrollRevealSection({ overviewImg }: ScrollRevealSectionProps) {
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
                        <strong className="text-white font-medium">ANAFI UKR</strong> è un micro-UAV tattico progettato per missioni <span className="text-blue-400">ISR</span>. Combina autonomia, sensori stabilizzati e sicurezza dei dati per operare anche in scenari <span className="text-blue-400 font-medium decoration-blue-500/50 underline decoration-2 underline-offset-4">GNSS-denied</span>.
                    </p>
                </motion.div>

                <motion.div
                    style={{ scale: imgScale, opacity: imgOpacity, borderRadius: imgRadius }}
                    className="absolute z-10 w-full h-full"
                >
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img
                        src={overviewImg}
                        alt="Anafi UKR Vision"
                        className="w-full h-full object-cover"
                    />
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
