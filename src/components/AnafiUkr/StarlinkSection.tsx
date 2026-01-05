import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StarlinkSectionProps {
    starlinkImg: string;
    starlinkLogo: string;
}

export function StarlinkSection({ starlinkImg, starlinkLogo }: StarlinkSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scaleDish = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    return (
        <div ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden py-20 flex flex-col items-center justify-center">

            {/* BACKGROUND COSMIC EFFECT */}
            <div className="absolute inset-0 z-0">
                {/* Moving Stars / Particles could go here, for now a subtle gradient */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.05)_0%,_transparent_70%)]"></div>
            </div>

            {/* CONTENT CONTAINER */}
            <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">

                {/* STARLINK DISH VISUAL */}
                <div className="relative w-full max-w-4xl h-[350px] md:h-[550px] flex items-center justify-center mb-12">

                    {/* Glowing Aura Behind */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[80px]"
                    />

                    {/* Orbital Rings - The "Wow" Geometry */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {[1, 2, 3].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                                transition={{
                                    duration: 20 + i * 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.2
                                }}
                                className={`absolute rounded-full border border-blue-500/${10 + i * 5}`}
                                style={{
                                    width: `${550 + i * 140}px`,
                                    height: `${550 + i * 140}px`,
                                    borderStyle: i === 1 ? 'dashed' : 'solid'
                                }}
                            />
                        ))}
                    </div>

                    {/* The Dish Image itself */}
                    <motion.img
                        src={starlinkImg}
                        alt="Starlink Terminal"
                        style={{ y: yParallax, scale: scaleDish }}
                        className="relative z-20 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(14,165,233,0.4)]"
                    />

                    {/* Floating Connection Nodes */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-400 rounded-full box-shadow-[0_0_10px_blue]"
                            animate={{
                                x: [0, (Math.random() - 0.5) * 300],
                                y: [0, (Math.random() - 0.5) * 300],
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                                delay: Math.random() * 2
                            }}
                        />
                    ))}

                </div>

                {/* TEXT CONTENT */}
                <motion.div
                    style={{ opacity: opacityFade }}
                    className="max-w-4xl text-center relative z-20 space-y-8"
                >
                    {/* Header with Icon */}
                    <div className="flex items-center justify-center gap-4 mb-16 mt-32">
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                            Connettività avanzata e <br />
                            <span className="text-blue-500/90">compatibilità Starlink</span>
                        </h2>
                    </div>

                    {/* The Paragraph - "Gaming" with text */}
                    <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">

                        {/* Scanline Effect overlay on text container */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[100%] transition-all duration-1000 pointer-events-none"></div>

                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light text-balance">
                            Parrot ANAFI UKR è dotato di un’architettura di comunicazione <span className="text-blue-400 font-medium">multi-connettività</span> che include supporto a <strong className="text-white">Starlink</strong>, insieme a 5G, Wi-Fi, LoRa e radio MARS con salto di frequenza per resistenza alle interferenze. Questa combinazione permette operazioni in ambienti complessi e mission-critici, offrendo flessibilità di collegamento e robustezza del link radio anche in condizioni&nbsp;difficili.
                        </p>
                        <div className="w-full flex justify-center border-t border-white/5 pt-6 mt-8">
                            <p className="text-xs md:text-sm text-slate-500 uppercase tracking-widest leading-relaxed max-w-2xl mx-auto text-balance">
                                Il supporto Starlink viene offerto come parte delle opzioni di connettività avanzata disponibili su richiesta.
                            </p>
                        </div>
                    </div>

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="w-full flex justify-start pl-28 md:pl-80 mt-12 translate-x-[30px]"
                    >
                        <img
                            src={starlinkLogo}
                            alt="Starlink Logo"
                            className="h-24 md:h-40 opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </motion.div>

                </motion.div>

            </div>
        </div>
    );
}
