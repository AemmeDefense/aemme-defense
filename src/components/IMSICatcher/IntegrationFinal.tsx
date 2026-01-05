import { motion } from 'framer-motion';
import imsivideo from '../../assets/imsivideo.mp4';

const integrationFeatures = [
    {
        title: "Alimentato dal drone",
        description: "ed integrato con il suo datalink"
    },
    {
        title: "Alimentazione & datalink",
        description: "tramite una porta Type-C"
    },
    {
        title: "Installazione Standard",
        description: "DJI M350 RTK e DJI M400"
    },
    {
        title: "Integrazione Flessibile",
        description: "Possibilità di integrazione con altri tipi di drone"
    }
];

export function IntegrationFinal() {
    return (
        <section className="bg-black py-24 px-4 overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative z-10">

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">

                    {/* LEFT: Text List (Fills remaining space) */}
                    <div className="flex-1 space-y-10">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-white mb-12"
                        >
                            Integrazione <span className="text-blue-500">Totale</span>
                        </motion.h3>

                        <div className="space-y-8">
                            {integrationFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="group pl-6 border-l-2 border-white/10 hover:border-blue-500 transition-colors duration-300"
                                >
                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-400 font-light text-lg">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Video (Fixed Width 300px) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            opacity: { duration: 0.8 },
                            scale: { duration: 0.8 },
                            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                        }}
                        viewport={{ once: true }}
                        className="w-[300px] relative flex-shrink-0 mx-auto"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.15)] border border-white/10 group">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay z-10" />

                            <video
                                src={imsivideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000"
                            />

                            {/* Overlay Gradient for cinematics - Subtle */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>

                        {/* Background Blur Element */}
                        <div className="absolute -inset-4 bg-blue-500/10 blur-[50px] -z-10 rounded-full opacity-50" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
