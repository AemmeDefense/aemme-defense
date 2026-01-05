import { motion } from 'framer-motion';
import imsi3 from '../../assets/imsi3.jpg';

const points = [
    "Supporta 4 canali radio, definiti dal software per diverse reti",
    "Rilevamento e configurazione automatica della rete per un funzionamento semplice",
    "Blacklist & whitelist",
    "Altezza di ricerca fino a 300 m, profondità sotterranea fino a 8 m",
    "La precisione di posizionamento raggiunge i 10 m in modo indipendente",
    "Il tempo di volo è di 26 minuti con carico utile per una singola coppia di batterie."
];

export function IMSICatcherPoints() {
    return (
        <section className="bg-black pb-24 px-4 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden h-[600px] group shadow-2xl shadow-blue-900/10"
            >
                {/* Background Image */}
                <img
                    src={imsi3}
                    alt="IMSI Catcher Features"
                    className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Gradient Overlay - Stronger on the right for text */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/60 to-black/90" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-end px-8 md:px-16">
                    <div className="w-full md:w-1/2 lg:w-5/12">
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-4xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4"
                        >
                            Punti Chiave
                        </motion.h3>

                        <ul className="space-y-4">
                            {points.map((point, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className="flex items-start gap-3 text-gray-200"
                                >
                                    <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                    <span className="text-base md:text-lg font-light leading-snug">
                                        {point}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Decorative scanning line vertical on the right */}
                <motion.div
                    animate={{ top: ['-10%', '110%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    className="absolute right-[5%] w-[1px] h-32 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50"
                />

            </motion.div>
        </section>
    );
}
