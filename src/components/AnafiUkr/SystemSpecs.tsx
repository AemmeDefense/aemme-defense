import { motion } from 'framer-motion';

interface SystemSpecsProps {
    specsImg: string;
}

export function SystemSpecs({ specsImg }: SystemSpecsProps) {
    const specs = [
        { label: "Dimensioni da chiuso", value: "245 × 160 × 116 mm" },
        { label: "Dimensioni da aperto", value: "350 × 665 × 116 mm" },
        { label: "Peso", value: "959 g" },
        { label: "Massa massima al decollo (MTOM)", value: "1.450 g" },
        { label: "Tempo massimo di volo", value: "38 minuti a 6 m/s di velocità aria" },
        { label: "Distanza massima di volo", value: "23,1 km a 10 m/s di velocità aria" },
        { label: "Velocità massima orizzontale (aria)", value: "17 m/s" },
        { label: "Velocità massima orizzontale (suolo)", value: "12,6 m/s" },
        { label: "Velocità massima di salita", value: "8 m/s" },
        { label: "Velocità massima di discesa", value: "8 m/s" },
        {
            label: "Resistenza massima al vento",
            subItems: [
                { label: "In volo", value: "15 m/s" },
                { label: "In decollo e atterraggio", value: "15 m/s" }
            ]
        },
        { label: "Velocità massima delle eliche", value: "8.500 rpm" },
        { label: "Volo indoor", value: "Supportato" },
        { label: "Decollo e atterraggio", value: "dalla mano dell’operatore" }
    ];

    return (
        <div className="py-24 bg-[#080808] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Title */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Caratteristiche tecniche <span className="text-blue-500">dell’aeromobile</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Image with Reliability Style (Static Professional) */}
                    <div className="relative flex items-center justify-center pl-4 pt-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-[90%]"
                        >
                            {/* Decorative Corners (Outside) */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-blue-500/50 rounded-tr-3xl z-0"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-blue-500/50 rounded-bl-3xl z-0"></div>

                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-xl border border-white/10 group z-10 bg-[#0a0a0a]">
                                {/* Blue Overlay */}
                                <div className="absolute inset-0 bg-blue-900/20 z-20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                <img
                                    src={specsImg}
                                    alt="Anafi UKR Specs"
                                    className="w-full h-auto object-contain grayscale-0 group-hover:grayscale transition-all duration-700 scale-100 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Specs List (2-Column Grid) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                        {specs.map((spec, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="border-b border-white/10 pb-4 break-inside-avoid"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-slate-400 font-light text-sm tracking-wide uppercase">{spec.label}</span>
                                    {spec.value && (
                                        <span className="text-white font-medium text-lg tracking-tight">{spec.value}</span>
                                    )}
                                </div>

                                {/* Nested Sub-items (Wind Resistance) */}
                                {spec.subItems && (
                                    <div className="mt-3 pl-4 space-y-2 border-l border-blue-500/30 ml-2">
                                        {spec.subItems.map((sub, j) => (
                                            <div key={j} className="flex justify-between items-baseline gap-4">
                                                <span className="text-slate-500 text-xs uppercase">{sub.label}</span>
                                                <span className="text-slate-300 font-medium text-sm text-right">{sub.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
