import { motion } from 'framer-motion';

export function EbeeVisionIntro() {
    return (
        <section className="relative py-32 bg-black overflow-hidden flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight whitespace-nowrap">
                        Consapevolezza operativa in <span className="text-blue-500">tempo reale</span>
                    </h2>

                    <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                    <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                        Progettato per enti di pubblica sicurezza e missioni di <br className="hidden md:block" />
                        <span className="text-white font-medium">Intelligence, Sorveglianza e Ricognizione (ISR)</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
