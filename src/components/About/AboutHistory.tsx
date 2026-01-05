import { motion } from 'framer-motion';
import aboutImg from '../../assets/about3.png';

export function AboutHistory() {
    return (
        <section className="relative z-10 py-32 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Text Column */}
                    <div className="relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tight"
                        >
                            About Us
                            <span className="block text-blue-500 text-2xl md:text-3xl mt-2 font-mono font-normal tracking-widest">
                                // AEMME DEFENSE
                            </span>
                        </motion.h2>

                        <div className="space-y-8 text-lg text-slate-300 leading-relaxed font-light">
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <strong className="text-white font-semibold">AEMME Defense</strong> nasce come divisione specializzata di
                                <span className="text-white"> AEMME Surveying</span>, azienda italiana che dal 1988 opera nel settore della geomatica,
                                del rilievo avanzato e delle tecnologie di acquisizione dati ad alta precisione.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                In oltre trent’anni di attività, AEMME Surveying ha supportato enti pubblici, aziende strategiche e operatori
                                istituzionali attraverso soluzioni tecnologiche affidabili, evolute e orientate all’operatività sul campo.
                                L’esperienza maturata in contesti complessi, spesso in collaborazione con forze di polizia, unità militari,
                                protezione civile e operatori governativi ha evidenziato un’esigenza chiara: disporre di un polo dedicato
                                esclusivamente alle tecnologie per la difesa, la sicurezza e l’intelligence tattica.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="pl-6 border-l-2 border-blue-500 italic text-white/80"
                            >
                                Da questa esigenza nasce AEMME Defense.
                            </motion.div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg opacity-20 blur-xl animate-pulse" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-lg overflow-hidden border border-white/10 aspect-[4/5]"
                        >
                            <img
                                src={aboutImg}
                                alt="AEMME History"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
