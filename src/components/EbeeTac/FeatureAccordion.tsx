import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Feature {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    video: string;
}

interface FeatureAccordionProps {
    features: Feature[];
}

export function FeatureAccordion({ features }: FeatureAccordionProps) {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
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

                                {/* Vertical Title - Desktop Only Rotation */}
                                <motion.h3
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-2xl font-bold text-white whitespace-nowrap drop-shadow-md origin-bottom-left absolute bottom-8 left-8 md:rotate-[-90deg] md:translate-x-[2rem] md:translate-y-0"
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

                                    {/* Horizontal Title */}
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
    );
}
