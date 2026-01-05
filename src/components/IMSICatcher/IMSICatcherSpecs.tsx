import { motion } from 'framer-motion';

const specs = [
    { label: "Frequenza Bande", value: "700-2690MHz, 3300-3800MHz" },
    { label: "Standard reti", value: "2G, 3G, 4G, 5G SA&NSA, FDD&TDD" },
    { label: "Canali Radio", value: "4 (simultanei)" },
    { label: "Radio Potenza/Canale", value: "2W" },
    { label: "Altezza di volo max nella ricerca", value: "Fino a 300m" },
    { label: "Range di ricerca", value: "Fino a 450m diametro sotto al drone" },
    { label: "Max Distanza operativa", value: "Fino a 5 Km in ambiente reale" },
    { label: "Numero di apparati rilevabili", value: "800 terminali al minuto" },
    { label: "Autonomia con DJI M350", value: "Fino a 26' per volo (M350)" },
    { label: "Peso", value: "2.5 Kg" },
    { label: "Drone per integrazione standard", value: "DJI Matrice 350RTK e 400" },
    { label: "Collegamento al centro di comando", value: "Si, roadmap supportata" },
    { label: "Temperatura operativa", value: "-10/+50°C" }
];

export function IMSICatcherSpecs() {
    return (
        <section className="bg-black py-24 px-4 overflow-hidden relative">

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Principali dati tecnici <span className="text-blue-500">IMSI Catcher</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
                </motion.div>

                <div className="flex flex-col gap-2">
                    {/* Header Row */}
                    <div className="flex justify-between items-center py-4 px-6 bg-blue-900/40 rounded-t-lg border border-blue-500/30">
                        <span className="text-blue-300 font-mono uppercase tracking-widest text-sm text-left w-1/2">Elemento</span>
                        <span className="text-blue-300 font-mono uppercase tracking-widest text-sm text-right w-1/2">Parametri</span>
                    </div>

                    {/* Data Rows */}
                    {specs.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`flex justify-between items-center py-4 px-6 border-l-2 border-r-2 border-blue-500/20 hover:border-blue-500/50 transition-colors duration-300
                                ${index % 2 === 0 ? 'bg-blue-900/10' : 'bg-blue-900/5'}
                                ${index === specs.length - 1 ? 'rounded-b-lg border-b-2' : ''}
                            `}
                        >
                            {/* Label on Left (Elemento) */}
                            <span className="text-blue-400 font-medium w-1/2 text-left pr-4">
                                {spec.label}
                            </span>

                            {/* Value on Right (Parametri) */}
                            <span className="text-gray-200 font-light w-1/2 text-right pl-4">
                                {spec.value}
                            </span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
