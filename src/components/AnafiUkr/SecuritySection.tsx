import { motion } from 'framer-motion';

interface SecuritySectionProps {
    blueUasImg: string;
}

export function SecuritySection({ blueUasImg }: SecuritySectionProps) {
    return (
        <div className="py-32 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Ghost Mode Visualization */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 blur-[50px] rounded-full"></div>
                        <div className="relative border border-white/10 bg-[#0a0a0a] p-8 rounded-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 p-4">
                                <div className="flex items-center gap-2 text-xs font-mono text-red-500 animate-pulse">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    RADIO SILENCE
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-6">Ghost Mode</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/10 text-slate-500">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">Zero Emissioni</div>
                                        <div className="text-sm text-slate-500">Nessun segnale RF tracciabile</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/10 text-slate-500">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">Stealth Visivo</div>
                                        <div className="text-sm text-slate-500">Luci spente per operazioni notturne</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Security Certs */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sicurezza Certificata</h2>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed border-l-4 border-slate-700 pl-6">
                            Anafi UKR non è solo performante, è fidato. Costruito seguendo rigorosi standard di sicurezza per garantire la sovranità dei dati e l'integrità della missione.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors group">
                                <h4 className="text-blue-400 font-mono text-sm uppercase mb-2 group-hover:text-blue-300">Encryption</h4>
                                <p className="text-xl font-bold text-white">AES-XTS 512</p>
                                <p className="text-xs text-slate-500 mt-2">Protezione dati completa su SD Card</p>
                            </div>
                            <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors group">
                                <h4 className="text-blue-400 font-mono text-sm uppercase mb-2 group-hover:text-blue-300">Link</h4>
                                <p className="text-xl font-bold text-white">WPA2 Auth</p>
                                <p className="text-xs text-slate-500 mt-2">Connessione sicura drone-controller</p>
                            </div>
                        </div>

                        <div className="inline-block">
                            <img src={blueUasImg} alt="Blue UAS Cleared" className="h-24 opacity-80 hover:opacity-100 transition-opacity" />
                            <p className="text-xs text-slate-500 mt-2 font-mono uppercase tracking-widest text-center">NDAA Compliant • Blue UAS</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
