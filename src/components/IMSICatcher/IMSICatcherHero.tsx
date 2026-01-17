import { motion } from 'framer-motion';
import headerImg from '../../assets/imsiheader.jpg';

export function IMSICatcherHero() {
    return (
        <section className="relative w-full h-auto aspect-video md:h-screen overflow-hidden flex flex-col justify-end">
            {/* Background Image & Gradient */}
            <div className="absolute inset-0 z-0">
                <img
                    src={headerImg}
                    alt="IMSI Catcher per droni"
                    className="w-full h-full object-cover object-center"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto w-full px-6 pb-16 lg:pb-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="max-w-4xl -ml-[15px]"
                >
                    {/* Optional Top Ornament if needed, following Anafi style */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[2px] w-12 bg-blue-500"></div>
                        <span className="text-blue-400 font-mono text-xs uppercase tracking-[0.3em]">
                            Sorveglianza Aerea Avanzata
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl">
                        IMSI Catcher <br className="hidden md:block" />
                        per droni
                    </h1>

                    <p className="text-xl md:text-3xl text-gray-200 font-light max-w-2xl leading-relaxed mb-4 drop-shadow-md">
                        La rivoluzione della sorveglianza aerea
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
            </motion.div>
        </section>
    );
}
