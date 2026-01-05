interface NDAASectionProps {
    ndaaImg: string;
}

export function NDAASection({ ndaaImg }: NDAASectionProps) {
    return (
        <div className="py-24 bg-black relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Conforme all’NDAA</h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        eBee TAC è conforme al National Defense Authorization Act (NDAA) della legislazione federale degli Stati Uniti, un requisito essenziale per prevenire intrusioni e attacchi informatici malevoli.
                    </p>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        I componenti del drone, l’hardware e il software non provengono da aziende o Paesi inseriti in blacklist, e la soluzione di connettività è stata verificata e dimostrata come cyber-sicura.
                    </p>

                    <a
                        href="/ebee-tac-brochure.pdf"
                        download
                        className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] group mt-8"
                    >
                        <span>Scarica Brochure</span>
                        <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </a>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <img
                        src={ndaaImg}
                        alt="NDAA Compliant"
                        className="relative w-full max-w-lg object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
