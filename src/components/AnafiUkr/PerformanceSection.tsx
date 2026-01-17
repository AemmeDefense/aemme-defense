import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface PerformanceSectionProps {
    performanceImg: string;
}

export function PerformanceSection({ performanceImg }: PerformanceSectionProps) {
    return (
        <div className="relative py-32 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Stats & Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Prestazioni <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Operative Superiori</span>
                        </h2>
                        <p className="text-lg text-slate-300 mb-12 font-light max-w-lg">
                            Progettato per missioni a lungo raggio e bassa osservabilità. L'Anafi UKR ridefinisce gli standard di categoria per resistenza e furtività.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <StatCard
                                icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                value="38"
                                suffix=" min"
                                label="Autonomia di Volo"
                                color="text-blue-400"
                            />
                            <StatCard
                                icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                                value="40"
                                suffix=" km"
                                label="Range Operativo"
                                color="text-white"
                            />
                            <StatCard
                                icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>}
                                value="77"
                                suffix=" dB"
                                label="Low Acoustic Signature"
                                color="text-emerald-400"
                            />
                            <StatCard
                                icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                                value="53"
                                prefix="IP"
                                label="Resistenza Certificata"
                                color="text-slate-200"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Image */}
                    {/* Right: Image with Reliability Style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full flex items-center justify-center pl-4 pt-4"
                    >
                        {/* Decorative Corners (Outside) */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-blue-500/50 rounded-tr-3xl z-0"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-blue-500/50 rounded-bl-3xl z-0"></div>

                        {/* Image Container */}
                        <div className="relative overflow-hidden rounded-xl border border-white/10 group z-10 bg-[#0a0a0a] w-full max-w-[90%]">
                            {/* Blue Overlay */}
                            <div className="absolute inset-0 bg-blue-900/20 z-20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <img
                                src={performanceImg}
                                alt="Anafi UKR Performance"
                                className="w-full h-auto object-cover grayscale-0 group-hover:grayscale transition-all duration-700 scale-100 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, value, suffix = "", prefix = "", label, color }: { icon: any, value: string, suffix?: string, prefix?: string, label: string, color: string }) {
    return (
        <div className="group cursor-default">
            <div className={`mb-3 p-0 transition-colors duration-300 text-slate-500 group-hover:${color}`}>
                {icon}
            </div>
            <div className={`flex items-baseline gap-1 transition-colors duration-300 text-white group-hover:${color}`}>
                {prefix && <span className="text-2xl font-bold">{prefix}</span>}
                <Counter value={parseInt(value)} />
                {suffix && <span className="text-xl font-medium text-slate-500 group-hover:text-slate-300 transition-colors">{suffix}</span>}
            </div>
            <p className="text-sm text-slate-500 mt-1 font-light group-hover:text-white transition-colors">{label}</p>
        </div>
    );
}

function Counter({ value }: { value: number }) {
    return (
        <span className="text-4xl font-bold text-white">
            <CountUp end={value} duration={2} />
        </span>
    );
}

function CountUp({ end, duration }: { end: number, duration: number }) {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [end, duration, isInView]);

    return <span ref={nodeRef}>{count}</span>;
}
