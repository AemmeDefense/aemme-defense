import { motion } from 'framer-motion';
import featureImg1 from '../../assets/ebeevision2.png';
import featureImg2 from '../../assets/ebeevision3.png';
import featureImg3 from '../../assets/ebeevision4.png';
import featureImg4 from '../../assets/ebeevision5.png';

// Define complex text as JSX to handle breaks
const features = [
    {
        img: featureImg1,
        text: (
            <>
                Peso ridotto: 1,5 kg
            </>
        )
    },
    {
        img: featureImg2,
        text: (
            <>
                Portatile e operabile<br />da un singolo operatore
            </>
        )
    },
    {
        img: featureImg3,
        text: (
            <>
                Pronto a operare in 3 minuti
            </>
        )
    },
    {
        img: featureImg4,
        text: (
            <>
                Autonomia di volo<br />fino a 90 minuti
            </>
        )
    }
];

export function EbeeVisionFeatures() {
    return (
        <section className="bg-black pb-14 px-4 overflow-hidden">
            {/* Wider container to accommodate text */}
            <div className="max-w-[95rem] mx-auto relative pt-0">

                {/* 1. The Beam - Replays every time (viewport={{ once: false }}) */}
                <motion.div
                    initial={{ height: 0, opacity: 1 }}
                    whileInView={{ height: 100, opacity: 0 }}
                    viewport={{ once: false, margin: "0px 0px -100px 0px" }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeIn" }}
                    className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] z-20 pointer-events-none"
                />

                {/* Explosion removed as requested */}

                {/* 3. The Features - Reveal after explosion */}
                {/* Added 'relative z-30' to ensure content is interactive and above the explosion layer */}
                <div className="relative z-30 grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center text-center mt-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.5 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{
                                duration: 0.5,
                                delay: 0.8 + (index * 0.1), // Starts after explosion
                                type: "spring",
                                stiffness: 200
                            }}
                            className="flex flex-col items-center gap-4 group w-full px-2"
                        >
                            {/* Image Container - Reduced Size (w-32 -> w-24) */}
                            <div className="relative w-24 h-24 flex items-center justify-center">
                                <motion.img
                                    src={feature.img}
                                    alt={`Feature ${index + 1}`}
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: 0.3 }}
                                />
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 blur-xl rounded-full transition-all duration-500" />
                            </div>

                            {/* Text - Robust group-hover line & Line Breaks */}
                            <div className="space-y-2 w-full flex flex-col items-center">
                                <motion.p
                                    className="text-base md:text-lg text-white font-medium tracking-wide whitespace-nowrap leading-tight"
                                >
                                    {feature.text}
                                </motion.p>
                                <div className="h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
