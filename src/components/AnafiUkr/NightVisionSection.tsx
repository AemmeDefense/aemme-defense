import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface NightVisionSectionProps {
    nightVisionImg: string;
}

export function NightVisionSection({ nightVisionImg }: NightVisionSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xImage = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "-25%"]);
    const opacityText = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
    const xText = useTransform(scrollYProgress, [0.3, 0.5], ["100px", "0px"]);

    return (
        <div ref={containerRef} className="relative h-[200vh] bg-black">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-50"></div>
                <div className="relative w-full max-w-7xl px-6 flex flex-col-reverse md:flex-row items-center justify-center">
                    {/* Image Layer */}
                    <motion.div
                        style={{ x: xImage }} // Note: In a robust app we'd conditionally disable this on mobile, but CSS overflow hidden handles it.
                        className="relative z-10 w-full max-w-4xl mb-8 md:mb-0"
                    >
                        <img
                            src={nightVisionImg}
                            alt="Night Vision Module"
                            className="w-full h-auto object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.1)]"
                        />
                    </motion.div>

                    {/* Text Layer */}
                    <motion.div
                        style={{ opacity: opacityText, x: xText }}
                        className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 max-w-md z-20 text-center md:text-right px-4 md:pr-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            Modulo termico LWIR <br />
                            <span className="text-slate-500 text-xl md:text-2xl font-light">Navigazione GNSS-denied</span>
                        </h2>

                        <p className="text-slate-300 mb-8 leading-relaxed font-light text-sm md:text-base">
                            Questo modulo termico esterno, compatibile con <strong className="text-white">Parrot ANAFI UKR</strong> e <strong className="text-white">CHUCK 3.0</strong>, consente la navigazione e il volo basati su sensori ottici anche in ambienti GNSS-denied, garantendo piena operatività sia in condizioni diurne sia notturne.
                        </p>

                        <div className="space-y-4 border-t border-white/10 pt-6">
                            <div className="flex items-center justify-center md:justify-end gap-3">
                                <span className="text-slate-400 text-sm uppercase tracking-wider">Sensore LWIR</span>
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-center md:justify-end gap-3">
                                <span className="text-slate-400 text-sm uppercase tracking-wider">IMU Integrata</span>
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-center md:justify-end gap-3">
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
