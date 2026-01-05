import { motion } from 'framer-motion';

interface FieldOpsSectionProps {
    deployImg: string;
    operatorImg: string;
}

export function FieldOpsSection({ deployImg, operatorImg }: FieldOpsSectionProps) {
    return (
        <div className="py-32 bg-[#020202] relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Card 1: Deployment */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0">
                            <img src={deployImg} alt="Dispiegamento Rapido" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                        </div>
                        <motion.div
                            className="absolute top-0 left-0 right-0 h-1 bg-blue-400 shadow-[0_0_20px_#3b82f6] z-20 opacity-0 group-hover:opacity-100"
                            initial={{ top: "0%" }}
                            whileHover={{ top: ["0%", "100%", "0%"], transition: { duration: 2, repeat: Infinity, ease: "linear" } }}
                        />
                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
                            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all">Dispiegamento rapido <br /> in 3 minuti</h3>
                            <div className="h-1 w-12 bg-[#27437d] mb-4 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#27437d]"></div>
                            <p className="text-slate-300 leading-relaxed max-w-md text-sm md:text-base">
                                eBee TAC è progettato per un impiego immediato sul campo: il dispiegamento in modalità standalone e PPK richiede solo 3 minuti. In configurazione RTK, il sistema è operativo in 10 minuti.
                            </p>
                        </div>
                        <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-[#27437d] group-hover:shadow-[0_0_30px_rgba(39,67,125,0.6)] transition-all duration-500"></div>
                    </motion.div>

                    {/* Card 2: Single Operator */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0">
                            <img src={operatorImg} alt="Operatore Singolo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                        </div>
                        <motion.div
                            className="absolute top-0 left-0 right-0 h-1 bg-[#27437d] shadow-[0_0_20px_#27437d] z-20 opacity-0 group-hover:opacity-100"
                            initial={{ top: "0%" }}
                            whileHover={{ top: ["0%", "100%", "0%"], transition: { duration: 2, repeat: Infinity, ease: "linear" } }}
                        />
                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
                            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all">Utilizzabile da un <br /> solo operatore</h3>
                            <div className="h-1 w-12 bg-[#27437d] mb-4 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#27437d]"></div>
                            <p className="text-slate-300 leading-relaxed max-w-md text-sm md:text-base">
                                Progettato per la massima semplicità operativa, eBee TAC è intuitivo da utilizzare e rapido da apprendere, consentendo l’impiego completo del sistema da parte di un singolo operatore.
                            </p>
                        </div>
                        <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-[#27437d] group-hover:shadow-[0_0_30px_rgba(39,67,125,0.6)] transition-all duration-500"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
