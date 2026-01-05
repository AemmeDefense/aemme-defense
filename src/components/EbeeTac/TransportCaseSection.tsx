import { motion } from 'framer-motion';

interface TransportCaseSectionProps {
    transportCaseImg: string;
}

export function TransportCaseSection({ transportCaseImg }: TransportCaseSectionProps) {
    return (
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
    );
}
