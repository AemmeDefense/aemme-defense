// import { motion } from 'framer-motion';

interface SafeOpsSectionProps {
    safeOpsImg: string;
}

export function SafeOpsSection({ safeOpsImg }: SafeOpsSectionProps) {
    const opsFeatures = [
        { title: "BVLOS approvato", desc: "I droni eBee hanno ottenuto l’autorizzazione per operazioni Beyond Visual Line of Sight (BVLOS) in Brasile." },
        { title: "Voli sopra le persone", desc: "Approvato per operazioni sopra le persone (Operations Over People – OOP) in Canada e negli Stati Uniti." },
        { title: "Processo SORA", desc: "I droni eBee sono i primi ad aver ottenuto la verifica M2 di Mitigazione del Design per il processo SORA da parte dell’EASA." }
    ];

    return (
        <div className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative group w-[85%] mx-auto">
                    <div className="absolute inset-0 bg-[#27437d]/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                    <img
                        src={safeOpsImg}
                        alt="Operazioni Sicure"
                        className="relative w-full rounded-2xl shadow-2xl border border-white/10 group-hover:border-[#27437d]/50 transition-all duration-500"
                    />
                    <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-[#27437d] rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-[#27437d] rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Operazioni sicure</h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-12 border-l-4 border-[#27437d] pl-6">
                        Il drone eBee TAC soddisfa i più elevati standard possibili di qualità e sicurezza del rischio a terra e ha dimostrato un’elevata sicurezza operativa anche in prossimità delle persone.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {opsFeatures.map((item, i) => (
                            <div key={i} className="group">
                                <div className="h-[2px] w-8 bg-[#27437d] mb-4 group-hover:w-full transition-all duration-500"></div>
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
