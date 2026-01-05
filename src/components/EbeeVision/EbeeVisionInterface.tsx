import { motion } from 'framer-motion';
import detectImage from '../../assets/detectvision.webp';

export function EbeeVisionInterface() {
    return (
        <section className="bg-black py-32 px-4 md:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 max-w-full"
                >
                    <h2 className="text-sm sm:text-xl md:text-4xl lg:text-5xl font-bold text-white mb-6 whitespace-nowrap overflow-hidden text-ellipsis px-4 py-2">
                        Rileva, traccia e geolocalizza gli oggetti
                    </h2>
                    <p className="text-[10px] sm:text-xs md:text-xl text-gray-400 mx-auto leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis px-4 py-1">
                        Interfaccia facile da usare, progettata in collaborazione con le forze speciali
                    </p>
                </motion.div>

                {/* Image Container with Glow */}
                <div className="relative w-full max-w-5xl mx-auto">

                    {/* "Game of Colors" Animated Glow Background - Pure Blue/Cyan */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="w-[80%] h-[80%] bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-800 rounded-full blur-[100px]"
                        />
                        {/* Secondary pulsing pulse for depth */}
                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            className="absolute w-[90%] h-[90%] bg-blue-900/40 rounded-full blur-[120px]"
                        />
                    </div>

                    {/* The Image - Removed Box Styling */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <img
                            src={detectImage}
                            alt="Interfaccia Rilevamento"
                            className="w-full h-auto drop-shadow-2xl rounded-xl"
                        />

                        {/* Subtle reflection/shine effect on image load */}
                        <motion.div
                            initial={{ x: '-100%', opacity: 0 }}
                            whileInView={{ x: '200%', opacity: 0.1 }}
                            transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
