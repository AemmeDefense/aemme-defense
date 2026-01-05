import { motion } from 'framer-motion';
import imsi1 from '../../assets/imsi1.jpg';

export function IMSICatcherCapabilities() {
    return (
        <section className="bg-black pb-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Left: Image with WOW Animation */}
                <div className="w-full md:w-1/2 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: "brightness(0)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "brightness(1.1)" }}
                        viewport={{ once: false, amount: 0.3 }} // Replays on scroll
                        transition={{ duration: 0.8, ease: "backOut" }}
                        className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.3)] border border-blue-500/30 group"
                    >
                        <img
                            src={imsi1}
                            alt="IMSI Catcher Drone Deployment"
                            className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />

                        <div className="absolute inset-0 border-2 border-blue-500/30 rounded-2xl z-10" />

                        {/* Static Blue Gradient Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-900/60 to-transparent mix-blend-overlay" />
                        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
                    </motion.div>
                </div>

                {/* Right: Text Content */}
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Sorveglianza <span className="text-blue-500">Tattica Avanzata</span>
                        </h3>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Gli IMSI Catcher sono dispositivi usati sempre più frequentemente nelle operazioni anticrimine per intercettare e monitorare comunicazioni mobili ed il loro impiego su droni ne aumenta incredibilmente l’efficacia, offrendo maggiore mobilità e copertura rapida e minore visibilità operativa per azioni più discrete.
                        </p>

                        <div className="flex items-start gap-4 p-4 bg-blue-900/10 rounded-lg border-l-4 border-blue-500">
                            <div className="mt-1 min-w-[20px]">
                                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <p className="text-gray-200 text-base">
                                La soluzione consente di monitorare la posizione approssimativa degli utenti ed in alcuni casi di intercettare chiamate o messaggi (a seconda del livello di cifratura della rete).
                            </p>
                        </div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}
