import { motion } from 'framer-motion';

interface TetherSectionProps {
    tetherImg: string;
}

export function TetherSection({ tetherImg }: TetherSectionProps) {
    return (
        <div className="relative bg-black pt-32 pb-40 overflow-hidden min-h-[140vh]">
            {/* Minimal Soft Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-80">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
                            Tether <span className="text-blue-500/80">Station</span>
                        </h2>
                        <p className="text-slate-400 font-light text-xl md:text-2xl max-w-6xl mx-auto leading-relaxed whitespace-nowrap">
                            Potenza e dati senza limiti per missioni ISR persistenti e sorveglianza continua.
                        </p>
                    </motion.div>
                </div>

                <div className="relative min-h-[900px] flex items-center justify-center">

                    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.7, opacity: 0 }}
                            whileInView={{ scale: 1.05, opacity: 1 }}
                            whileHover={{ scale: 1.15 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="relative flex items-center justify-center cursor-pointer"
                        >
                            <img
                                src={tetherImg}
                                alt="Tether Station"
                                className="w-full h-auto object-contain max-w-[660px] drop-shadow-[0_0_80px_rgba(59,130,246,0.15)]"
                            />
                        </motion.div>
                    </div>

                    {/* STAGGERED TEXT BLOCKS - NO BOXES, MORE SPACE */}
                    <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-40 lg:gap-y-64 z-10 py-20 px-4">

                        {/* Block 1 - Left Top */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="md:justify-self-start max-w-sm translate-y-[35px] translate-x-[80px]"
                        >
                            <div className="pl-6 border-l border-blue-500/30">
                                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-blue-400/90">Autosufficienza Energetica</h3>
                                <p className="text-slate-400 leading-relaxed font-light text-lg">
                                    2 batterie integrate garantiscono fino a <strong className="text-white font-medium">4 ore</strong> di volo continuo. Hot-swap perpetuo senza atterraggio.
                                </p>
                            </div>
                        </motion.div>

                        {/* Block 2 - Right Mid-Top (staggered lower) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="md:justify-self-end md:mt-32 max-w-sm translate-y-[40px] -translate-x-[75px]"
                        >
                            <div className="pr-6 border-r border-blue-500/30 text-right">
                                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-blue-400/90">Potenza Illimitata</h3>
                                <p className="text-slate-400 leading-relaxed font-light text-lg">
                                    Supporto rete esterna (120V/220V) per energia continua e ricarica simultanea delle batterie.
                                </p>
                            </div>
                        </motion.div>

                        {/* Block 3 - Left Mid-Bottom (even lower) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="md:justify-self-start md:mt-4 max-w-sm -translate-y-[70px] translate-x-[75px]"
                        >
                            <div className="pl-6 border-l border-blue-500/30">
                                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-blue-400/90">Adattabilità Immediata</h3>
                                <p className="text-slate-400 leading-relaxed font-light text-lg">
                                    Conversione rapida da volo libero a tethered tramite modulo <strong className="text-white font-medium">Arestelle Air</strong> installabile in pochi secondi.
                                </p>
                            </div>
                        </motion.div>

                        {/* Block 4 - Right Bottom */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="md:justify-self-end md:mt-40 max-w-sm -translate-y-[110px] -translate-x-[75px]"
                        >
                            <div className="pr-6 border-r border-blue-500/30 text-right">
                                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-blue-400/90">Interoperabilità</h3>
                                <p className="text-slate-400 leading-relaxed font-light text-lg">
                                    Sistema agnostico e architettura aperta compatibile con l'ecosistema ANAFI USA e ANAFI UKR.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
}
