import { motion } from 'framer-motion';

interface EMotionSectionProps {
    emotionImg: string;
}

export function EMotionSection({ emotionImg }: EMotionSectionProps) {
    const emotionFeatures = [
        {
            title: "Pianificazione del volo 3D",
            desc: "Pianifica, simula e controlla missioni avanzate su qualsiasi tipo di terreno, incluse aree montuose. Volo e atterraggio completamente automatizzati."
        },
        {
            title: "Missioni covert",
            desc: "La modalità covert consente di eseguire missioni radio silenziose con comunicazioni non rilevabili."
        },
        {
            title: "Modifica del piano di volo in tempo reale",
            desc: "Permette di mantenere il drone in posizione, modificare la traiettoria di volo e/o il punto di atterraggio durante la missione."
        },
        {
            title: "Operazioni multi-drone",
            desc: "Gestione simultanea fino a 4 droni, controllati da un’unica stazione di controllo a terra."
        },
        {
            title: "Pianificazione offline",
            desc: "Operatività garantita anche in ambienti disconnessi grazie a mappe di sfondo e dati altimetrici disponibili offline."
        },
        {
            title: "Modalità di missione ottimizzate",
            desc: "Modalità orizzontale, corridoio, punto di interesse (POI), missioni multiple o completamente personalizzate."
        }
    ];

    return (
        <div className="py-32 bg-[#080808] relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-50"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <motion.div
                        initial={{ opacity: 0, rotateX: 20, z: -100 }}
                        whileInView={{ opacity: 1, rotateX: 0, z: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:w-1/2 perspective-1000"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                            <img
                                src={emotionImg}
                                alt="Interfaccia eMotion"
                                className="relative rounded-xl shadow-2xl border border-white/10 w-full"
                            />
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50"></div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-6xl font-bold text-white mb-2 tracking-tighter">eMotion</h2>
                        <h3 className="text-2xl text-[#5c8cc7] font-light mb-6 tracking-wide uppercase">Software di gestione del volo</h3>
                        <p className="text-xl text-slate-300 leading-relaxed border-l-4 border-[#5c8cc7]/50 pl-6">
                            Intuitivo da utilizzare ma dotato di funzionalità avanzate, eMotion offre tutti gli strumenti necessari per la raccolta e la gestione dei dati geospaziali, consentendo di operare con la massima precisione.
                        </p>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {emotionFeatures.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5c8cc7]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#5c8cc7] transition-colors">{item.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
