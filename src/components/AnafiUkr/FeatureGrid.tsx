import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Feature {
    id: string;
    title: string;
    description: string;
    detail: string;
    video: string;
    poster?: string;
}

interface FeatureGridProps {
    features: Feature[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [enlargedVideo, setEnlargedVideo] = useState<string | null>(null);

    return (
        <div className="relative">
            {/* VERTICAL COMPACT LIST - DYNAMIC WIDTH EXPANSION */}
            <div className="flex flex-col gap-2 w-full px-6">
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
                                ? 'bg-blue-900/10 border-blue-500 my-8 max-w-7xl shadow-[0_0_50px_rgba(59,130,246,0.15)]' // Expanded
                                : 'bg-transparent border-transparent hover:bg-white/5 border-b-white/10 rounded-none max-w-4xl'} // Collapsed
                        `}
                    >
                        {/* Compact Header */}
                        <motion.div
                            className={`flex items-center justify-between p-5 transition-all duration-500 ${selectedId === feature.id ? 'bg-blue-500/10' : ''}`}
                            layoutId={`card-header-${feature.id}`}
                        >
                            <div className="flex items-center gap-4">
                                {/* Number */}
                                <motion.div
                                    animate={{ color: selectedId === feature.id ? '#3B82F6' : ['#475569', '#94a3b8', '#475569'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className={`
                                    text-sm font-mono font-bold transition-colors duration-300
                                    ${selectedId === feature.id ? 'text-blue-500' : 'text-slate-600 group-hover:text-slate-400'}
                                `}>
                                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                </motion.div>

                                {/* Title */}
                                <div>
                                    <h3 className={`text-lg font-medium transition-colors duration-300 ${selectedId === feature.id ? 'text-blue-400 text-3xl' : 'text-slate-300 group-hover:text-blue-500'}`}>
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Arrow Indicator */}
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
                                    className="overflow-hidden bg-[#050505]"
                                >
                                    <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-blue-500/20">
                                        <div className="text-slate-300 leading-relaxed font-light">
                                            <motion.p
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="text-xl md:text-2xl mb-8 font-light text-white"
                                            >
                                                {feature.description}
                                            </motion.p>
                                            <motion.div
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                                className="pl-6 border-l-2 border-blue-500/50"
                                            >
                                                <span className="text-base text-slate-400 italic block">{feature.detail}</span>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            initial={{ scale: 0.95, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.1, duration: 0.5 }}
                                            className="relative rounded-lg overflow-hidden bg-black border border-white/10 shadow-lg"
                                        >
                                            <div className="aspect-video relative">
                                                <video
                                                    src={feature.video}
                                                    poster={feature.poster}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="w-full h-full object-cover opacity-90"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                                                <div className="absolute top-3 right-3 flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                                                    <span className="text-[9px] font-mono text-white/70 tracking-widest">LIVE FEED</span>
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
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
                            onClick={(e) => e.stopPropagation()}
                        >
                            <video
                                src={enlargedVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
