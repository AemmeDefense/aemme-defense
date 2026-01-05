import { motion } from 'framer-motion';

interface NFZSectionProps {
    nfzImg: string;
    noFlyZoneIcon: string;
    geoFencingIcon: string;
}

export function NFZSection({ nfzImg, noFlyZoneIcon, geoFencingIcon }: NFZSectionProps) {
    return (
        <div className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* LEFT COLUMN: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Title */}
                        <div className="mb-12 text-left">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                                No-Fly Zones, <br />
                                <span className="text-blue-500">No geofencing imposti</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
                        </div>

                        {/* Icons - Clean, No Backgrounds/Shadows */}
                        <div className="flex flex-row justify-start items-center gap-8 mb-12">
                            <img
                                src={noFlyZoneIcon}
                                alt="No Fly Zone"
                                className="w-24 md:w-28 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                            />
                            <img
                                src={geoFencingIcon}
                                alt="No Geofencing"
                                className="w-24 md:w-28 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Paragraph */}
                        <div className="max-w-xl text-left">
                            <p className="text-xl text-slate-300 leading-relaxed font-light">
                                <strong className="text-white font-medium">ANAFI UKR nasce per operare dove altri droni non possono.</strong>
                                <br /><br />
                                Per questo non integra No-Fly Zones né geofencing imposti dal produttore: nessun blocco software, nessuna limitazione automatica basata sulla posizione. Il controllo è interamente nelle mani dell’operatore autorizzato, che può impiegare il sistema anche in aree sensibili, scenari di crisi o contesti operativi&nbsp;complessi.
                            </p>
                        </div>
                    </motion.div>


                    {/* RIGHT COLUMN: Image with System Specs Style */}
                    <div className="relative flex items-center justify-center pl-4 pt-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-[90%]"
                        >
                            {/* Decorative Corners */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-blue-500/50 rounded-tr-3xl z-0"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-blue-500/50 rounded-bl-3xl z-0"></div>

                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-xl border border-white/10 group z-10 bg-[#0a0a0a]">
                                {/* Blue Overlay */}
                                <div className="absolute inset-0 bg-blue-900/20 z-20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                <img
                                    src={nfzImg}
                                    alt="Anafi UKR System"
                                    className="w-full h-auto object-cover grayscale-0 group-hover:grayscale transition-all duration-700 scale-100 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}
