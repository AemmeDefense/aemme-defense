import { motion } from 'framer-motion';
import img1 from '../../assets/ebeevision11.jpg';
import img2 from '../../assets/ebeevision12.jpg';
import img3 from '../../assets/ebeevision13.jpg';
import img4 from '../../assets/ebeevision14.jpg';
import img5 from '../../assets/ebeevision15.jpg';

const compliances = [
    { img: img1, text: "Certificato come cyber-sicuro" },
    { img: img2, text: "Crittografia AES-256 del collegamento dati radio" },
    { img: img3, text: "Soppressione dei file di log del drone" },
    { img: img4, text: "Protezione tramite secure element" },
    { img: img5, text: "Scheda SD crittografata" }
];

export function EbeeVisionNDAA() {
    return (
        <section className="bg-black pt-16 pb-32 px-4 relative overflow-hidden">
            {/* Gradient Separator */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Centered Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        eBee VISION è <span className="text-blue-500">NDAA-compliant</span>
                    </h2>
                    <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                {/* 5-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                    {compliances.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Image Container */}
                            <div className="w-full aspect-square max-w-[200px] mb-6 relative p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-blue-500/50 transition-colors duration-300 flex items-center justify-center">
                                <img
                                    src={item.img}
                                    alt={item.text}
                                    className="w-full h-full object-contain drop-shadow-lg"
                                />
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-2xl transition-all duration-300" />
                            </div>

                            {/* Text */}
                            <p className="text-white font-medium text-sm md:text-base leading-snug px-2 group-hover:text-blue-400 transition-colors duration-300">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
