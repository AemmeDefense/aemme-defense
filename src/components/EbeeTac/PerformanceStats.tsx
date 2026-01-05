import { motion } from 'framer-motion';

export function PerformanceStats() {
    return (
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
    );
}
