import { motion } from 'framer-motion';
import imsi4 from '../../assets/imsi4.png';

const components = [
    { title: "4 RadioSDR", detail: "5G / 4G / 3G / 2G" },
    { title: "Antenna BTS", detail: "Alta potenza" },
    { title: "Antenna GPS", detail: "Scansione reti e sincronizzazione" },
    { title: "Finder direzionale", detail: "Localizzazione precisa del target" }
];

export function IMSICatcherComponents() {
    return (
        <section className="bg-black py-24 px-4 overflow-hidden relative">

            {/* Ambient Background Glow */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10">

                {/* Left: Image (Raw with Glow) */}
                <div className="w-full md:w-1/2 relative flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <img
                            src={imsi4}
                            alt="IMSI Catcher Components"
                            className="w-full h-auto max-w-[500px] object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                        />

                        {/* Specific subtle glow behind the image device */}
                        <div className="absolute inset-0 bg-blue-500/10 blur-[50px] -z-10 rounded-full" />
                    </motion.div>
                </div>

                {/* Right: Technical Specs in Rectangles */}
                <div className="w-full md:w-1/2">
                    <div className="space-y-4">
                        {components.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                                className="group relative bg-white/5 border border-white/10 hover:border-blue-500/50 p-6 rounded-lg transition-colors duration-300"
                            >
                                {/* Decorative Blue Detail (Corner) */}
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-blue-500/30 group-hover:border-r-blue-500 transition-colors duration-300" />

                                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                                    {item.title}
                                </h4>
                                <p className="text-gray-400 font-mono text-sm tracking-wide">
                                    {item.detail}
                                </p>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
