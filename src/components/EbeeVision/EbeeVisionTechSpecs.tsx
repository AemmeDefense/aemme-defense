import { motion } from 'framer-motion';
import techImage from '../../assets/ebeevision10.jpg';

const specs = [
    { label: "Apertura alare", value: "118 cm" },
    { label: "Peso", value: "1,8 kg" },
    { label: "Design", value: "Modulare" },
    { label: "Tempo di dispiegamento", value: "3 minuti" }
];

export function EbeeVisionTechSpecs() {
    return (
        <section className="bg-black py-32 px-4 md:px-8 relative overflow-hidden">

            {/* Decorative Blue Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Column: Text Specs */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            Specifiche <span className="text-blue-500">Tecniche</span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent" />
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8">
                        {specs.map((spec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                className="flex items-center gap-6 group"
                            >
                                {/* Decorative Icon/Dot */}
                                <div className="relative">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
                                    {/* Connecting vertical line (except for last item) */}
                                    {index !== specs.length - 1 && (
                                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-14 bg-gradient-to-b from-blue-500/50 to-transparent -z-10" />
                                    )}
                                </div>

                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                                        {spec.label}
                                    </p>
                                    <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                        {spec.value}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.15)] bg-gray-900"
                    >
                        <img
                            src={techImage}
                            alt="eBee Vision Tech Spec"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        {/* Scanline overlay effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 pointer-events-none bg-[length:100%_4px,6px_100%] opacity-20" />
                    </motion.div>

                    {/* Decorative background elements behind image */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-blue-500/30 rounded-tr-3xl pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b-2 border-l-2 border-blue-500/30 rounded-bl-3xl pointer-events-none" />
                </div>

            </div>
        </section>
    );
}
