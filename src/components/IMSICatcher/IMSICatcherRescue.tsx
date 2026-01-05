import { motion } from 'framer-motion';
import imsi2 from '../../assets/imsi2.jpg';

export function IMSICatcherRescue() {
    return (
        <section className="bg-black pb-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">

                {/* Left: Text Content */}
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Ricerca e Soccorso <br />
                            <span className="text-blue-500">in Scenari Critici</span>
                        </h3>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Gli IMSI catcher montati su droni non vengono utilizzati solo in ambito di sicurezza o operazioni anticrimine: trovano un impiego sempre più prezioso anche nelle <strong className="text-white">operazioni di soccorso</strong>, soprattutto in situazioni critiche dove la comunicazione è compromessa.
                            </p>
                            <p>
                                In scenari di emergenza come <span className="text-white">terremoti, frane, alluvioni o incidenti in aree remote</span> nelle quali la rete cellulare può essere collassata ed inaccessibile.
                            </p>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <p className="mb-4">
                                    <strong className="text-blue-400 block mb-2">Nell’individuazione di persone disperse</strong>
                                    Il sistema può rilevare la presenza di telefoni cellulari attivi anche senza copertura di rete. Le tecnologie su drone che abbiamo adottato garantiscono la migliore <span className="text-white font-medium">Rapidità di dispiegamento</span>, offrendo maggiore velocità rispetto a qualsiasi operazione terrestre.
                                </p>
                                <p className="text-sm text-gray-400 border-t border-white/10 pt-4 mt-4">
                                    Le nostre soluzioni prevedono l’integrazione su droni multirotore o VTOL per copertura su larga scala in aree impervie o pericolose e l’impiego di <span className="text-blue-300">Telecamere termiche</span> per identificare e tracciare soggetti anche fuori dallo spettro del visibile.
                                </p>
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "backOut" }}
                        className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.2)] border border-white/10 group aspect-square h-full"
                    >
                        <img
                            src={imsi2}
                            alt="IMSI Catcher Rescue Operation"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Decorative HUD Elements */}
                        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-blue-500 rounded-tr-lg opacity-60" />
                        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-blue-500 rounded-bl-lg opacity-60" />

                        {/* Signal Waves Animation */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
                            <motion.div
                                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                className="w-24 h-24 border border-blue-500/30 rounded-full"
                            />
                            <motion.div
                                animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                                className="w-24 h-24 border border-blue-500/20 rounded-full absolute"
                            />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
