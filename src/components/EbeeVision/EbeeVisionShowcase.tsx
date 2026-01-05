import { motion } from 'framer-motion';
import ebeeVisionImg from '../../assets/ebeevision1.png';

export function EbeeVisionShowcase() {
    return (
        <section className="bg-black py-24 flex justify-center overflow-hidden relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center"
            >
                {/* Background Glow Effect - Reduced by ~30% */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-900/40 blur-[80px] rounded-full -z-10 opacity-50" />

                {/* Large Centered Image */}
                <img
                    src={ebeeVisionImg}
                    alt="eBee Vision"
                    className="w-full h-auto object-contain drop-shadow-[0_0_80px_rgba(59,130,246,0.5)]"
                />

                {/* Beam Emitter Point */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)] animate-pulse"
                >
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" />
                </motion.div>
            </motion.div>

            {/* Background Grid Hint */}
            <div className="absolute inset-0 bg-[url('/grid-pixel.png')] opacity-10 pointer-events-none mix-blend-screen" />
        </section>
    );
}
