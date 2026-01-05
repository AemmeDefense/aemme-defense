import { motion } from 'framer-motion';

interface ReliabilitySectionProps {
    reliabilityImg: string;
}

export function ReliabilitySection({ reliabilityImg }: ReliabilitySectionProps) {
    const stats = [
        { value: "12", label: "Anni Esperienza", suffix: "" },
        { value: "173.600", label: "Voli Cumulativi", suffix: "+" },
        { value: "90.490", label: "Ore di Volo", suffix: "+" },
        { value: "1 / 1.750", label: "Probabilità di fly-away", suffix: " ore" }
    ];

    return (
        <div className="py-32 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-[0_0_15px_#3b82f6]"></span>
                            <span className="text-blue-400 font-mono tracking-widest text-sm uppercase shadow-blue-500/50 drop-shadow-md">Mission Proven</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Affidabilità <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">comprovata</span>
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-12 border-l-2 border-white/10 pl-6">
                            eBee TAC è progettato specificamente per le esigenze di mappatura tattica in ambito difesa, al fine di migliorare l’efficacia operativa della missione in una vasta gamma di scenari e tipologie di terreno.
                            <br /><br />
                            L’hardware, il software, la cybersecurity e l’affidabilità del sistema sono stati valutati dalla <strong className="text-white">U.S. Defense Innovation Unit</strong>.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="relative group">
                                    <div className="absolute top-0 left-0 w-8 h-[1px] bg-[#5c8cc7] transition-all duration-500 group-hover:w-full"></div>
                                    <div className="pt-4">
                                        <h4 className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-[#5c8cc7] transition-colors font-mono">
                                            {stat.value}<span className="text-lg text-[#5c8cc7]">{stat.suffix}</span>
                                        </h4>
                                        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="order-1 lg:order-2 relative lg:h-[600px] flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-full"
                    >
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#5c8cc7] rounded-tr-3xl z-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#5c8cc7] rounded-bl-3xl z-20"></div>
                        <div className="relative w-full h-full overflow-hidden rounded-lg border border-white/10 group">
                            <div className="absolute inset-0 bg-blue-900/20 z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
                            <img
                                src={reliabilityImg}
                                alt="eBee TAC Reliability"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
