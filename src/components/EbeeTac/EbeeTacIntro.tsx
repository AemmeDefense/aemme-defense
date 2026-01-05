import { motion } from 'framer-motion';

export function EbeeTacIntro() {
    return (
        <>
            <div className="relative py-32 bg-[#050505] z-10 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight"
                    >
                        <span className="text-[#5c8cc7] drop-shadow-[0_0_15px_rgba(92,140,199,0.5)]">eBee TAC:</span> Drone cartografico<br />
                        tattico e <span className="text-[#5c8cc7]">governativo, cyber-sicuro</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative max-w-4xl mx-auto"
                    >
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                            Progettato per operare in ambienti disconnessi, garantisce precisione operativa in ogni scenario.
                            <strong className="text-white font-semibold"> eBee TAC</strong> è utilizzabile da un singolo operatore e può essere dispiegato in soli <span className="text-[#5c8cc7] font-bold">3 minuti</span>.
                            Consente la generazione di modelli 3D, mappe termiche e ortomosaici, condivisibili in locale in totale sicurezza.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="relative py-24 bg-[#050505] z-10 overflow-hidden text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative max-w-4xl mx-auto px-6"
                >
                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                        <strong className="text-white font-semibold">eBee TAC</strong> ridefinisce gli standard della mappatura aerea, trasformando ogni missione in un ecosistema di dati ad alta precisione.
                        Grazie alla sua architettura avanzata e ai sensori intercambiabili, il sistema permette di generare una gamma completa di output georeferenziati:
                    </p>
                </motion.div>
            </div>
        </>
    );
}
