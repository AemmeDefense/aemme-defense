import { motion } from 'framer-motion';
import flightModesImage from '../../assets/ebeevision9.png';

const modes = [
    {
        title: "Piano di volo",
        desc: "Definisci un piano di volo e lo adatti durante la missione alle tue esigenze."
    },
    {
        title: "Modalità di osservazione",
        desc: "Mantiene l'osservazione a distanza di sicurezza."
    },
    {
        title: "Modalità esplorazione",
        desc: "Esplora e traccia i bersagli in movimento."
    },
    {
        title: "Cursore sul bersaglio",
        desc: "Individua i bersagli usando le coordinate dell'immagine."
    },
    {
        title: "Volo manuale",
        desc: "Puoi gestire il drone in base alle tue specifiche necessità di volo."
    }
];

export function EbeeVisionFlightModes() {
    return (
        <section className="bg-black py-16 relative overflow-hidden">

            <div className="flex flex-col lg:flex-row items-center">

                {/* Left: Image (Bleed to Edge) */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 relative"
                >
                    {/* The image container extends to the left edge naturally in this flex layout */}
                    <div className="relative rounded-r-3xl overflow-hidden">
                        <img
                            src={flightModesImage}
                            alt="Piano di Volo e Modalità"
                            className="w-full h-auto object-cover max-h-[700px] brightness-125"
                        />
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                    </div>
                </motion.div>

                {/* Right: Content */}
                <div className="w-full lg:w-1/2 px-4 md:px-12 lg:pl-16 lg:pr-8 py-12">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-12"
                        >
                            <span className="text-blue-500">Modalità</span> Operative
                        </motion.h2>

                        <div className="space-y-10">
                            {modes.map((mode, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-6 group"
                                >
                                    {/* Left Border Line */}
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 group-hover:bg-blue-500 transition-colors duration-300 rounded-full" />

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                        {mode.title}
                                    </h3>
                                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                        {mode.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Background decorative glow */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

        </section>
    );
}
