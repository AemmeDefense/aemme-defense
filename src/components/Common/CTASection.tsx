interface CTASectionProps {
    mappaItaliaImg: string;
    onContactClick?: () => void;
}

export function CTASection({ mappaItaliaImg, onContactClick }: CTASectionProps) {
    return (
        <div id="cta-section" className="relative bg-[#050505] overflow-hidden py-16 md:py-32">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(21,45,80,0.4),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden p-8 md:p-12 lg:p-20 shadow-[0_0_50px_rgba(21,45,80,0.5)]">
                    <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-blue-500/50 rounded-tl-2xl"></div>
                    <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-blue-500/50 rounded-tr-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-blue-500/50 rounded-bl-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-blue-500/50 rounded-br-2xl"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-left">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                                Pronti a operare <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#5c8cc7]">
                                    ovunque sia necessario.
                                </span>
                            </h2>
                            <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-lg border-l-4 border-blue-900/50 pl-6">
                                Forniamo consulenza tecnica avanzata e sviluppiamo soluzioni su misura, progettate per rispondere con precisione a ogni scenario operativo. Richiedi una consulenza specializzata, disponibile su tutto il territorio nazionale.
                            </p>
                            <button
                                onClick={onContactClick}
                                className="group relative px-10 py-5 bg-[#152d50] hover:bg-[#1e3a63] text-white font-bold rounded-sm uppercase tracking-widest transition-all overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Richiedi Consulenza
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            </button>
                        </div>

                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[60px] animate-pulse"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/15 blur-[80px] rounded-full"></div>
                                <img
                                    src={mappaItaliaImg}
                                    alt="Deployment Ready"
                                    className="relative w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
