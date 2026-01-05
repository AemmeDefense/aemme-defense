import { motion } from 'framer-motion';
import zoomVideo from '../../assets/zoomvision.mp4';
import rgbVideo from '../../assets/rgbvision.mp4';

export function EbeeVisionSpecs() {
    return (
        <section className="bg-black py-24 px-4 md:px-8 relative">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10">

                {/* Block 1: Zoom Vision */}
                <div className="flex flex-col">
                    {/* Video Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-8"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto aspect-video object-cover"
                        >
                            <source src={zoomVideo} type="video/mp4" />
                        </video>
                        {/* Subtle gradient overlay for polish */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Text Content - Outside Video */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                Portata wireless fino a 12 mi / 20 km
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Connessione stabile e sicura a lungo raggio.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                Autonomia di volo fino a 90 minuti
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Operatività estesa per missioni complesse.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Block 2: RGB Vision */}
                <div className="flex flex-col">
                    {/* Video Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-8"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto aspect-video object-cover"
                        >
                            <source src={rgbVideo} type="video/mp4" />
                        </video>
                        {/* Subtle gradient overlay for polish */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Text Content - Outside Video */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                Bassa firma acustica
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Progettato per essere silenzioso e non rilevabile.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                Bassa riflessione speculare
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Materiali e design ottimizzati per la minima rilevabilità.
                            </p>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
