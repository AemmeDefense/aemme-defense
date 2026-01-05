import { motion } from 'framer-motion';

interface CertificationSectionProps {
    certImg: string;
}

export function CertificationSection({ certImg }: CertificationSectionProps) {
    return (
        <div className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Floating Image (Left) */}
                <div className="relative group perspective-1000 order-2 lg:order-1">
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
    );
}
