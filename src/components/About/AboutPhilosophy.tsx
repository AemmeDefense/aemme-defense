import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import interniImg from '../../assets/interni.jpg';

export function AboutPhilosophy() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={sectionRef} className="relative h-screen bg-black overflow-hidden flex items-center">

            {/* Background Image with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={interniImg}
                    alt="Operational Experience"
                    className="w-full h-[120%] object-cover"
                />
            </motion.div>

            {/* Gradient Overlay - Replaces the 'Giga Box' */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/80 to-transparent" />

            {/* Simpler Content Layout */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                >
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Un progetto costruito sull’<span className="text-blue-500">esperienza operativa</span>
                    </h3>

                    <div className="space-y-6 text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                        <p>
                            AEMME Defense è un progetto costruito a partire dai feedback reali del campo.
                        </p>
                        <p>
                            Le richieste, le criticità operative e le esigenze emerse durante missioni, test e attività svolte con operatori istituzionali ci hanno spinto a creare un portale verticale, focalizzato esclusivamente su soluzioni affidabili, testate e coerenti con gli scenari di difesa moderna.
                        </p>
                        <p>
                            Il nostro obiettivo è selezionare, integrare e proporre solo tecnologie in cui crediamo realmente, capaci di offrire vantaggi concreti.
                        </p>
                    </div>

                    <div className="mt-12">
                        <div className="h-1 w-24 bg-blue-600" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
