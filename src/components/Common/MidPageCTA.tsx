import { motion } from 'framer-motion';

export function MidPageCTA() {
    return (
        <section className="pt-32 pb-20 bg-black relative overflow-hidden border-t border-white/5">
            {/* Background Detail */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                    {/* Text Content */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                            Esigenze specifiche?
                        </h3>
                        <p className="text-slate-400 text-lg font-light">
                            I nostri specialisti sono pronti a discutere il tuo scenario d'impiego.
                        </p>
                    </div>

                    {/* Action Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-4 bg-[#152d50] hover:bg-[#1e3a63] text-white font-bold rounded-sm uppercase tracking-widest transition-all overflow-hidden whitespace-nowrap border border-blue-500/30 hover:border-blue-400"
                        onClick={() => document.getElementById('contattaci')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="relative z-10 flex items-center gap-3 text-sm">
                            Parliamo del tuo progetto
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </motion.button>

                </div>
            </div>
        </section>
    );
}
