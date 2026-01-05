interface PartnersSectionProps {
    partners: string[];
}

export function PartnersSection({ partners }: PartnersSectionProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="relative overflow-hidden group/section py-10">
                <h3 className="text-center text-3xl md:text-4xl font-bold mb-20 relative z-10 flex items-center justify-center gap-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                    <span className="h-[2px] w-12 bg-blue-500/50 rounded-full"></span>
                    Trusted by Elite Forces
                    <span className="h-[2px] w-12 bg-blue-500/50 rounded-full"></span>
                </h3>

                <div className="w-full overflow-hidden relative z-10">
                    <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-20" />
                    <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-20" />

                    <div className="flex gap-20 animate-infinite-scroll w-max items-center py-8">
                        {/* Triplicate for seamless scroll */}
                        {[...partners, ...partners, ...partners].map((logo, i) => (
                            <div key={i} className="group relative w-52 h-40 flex-shrink-0 flex items-center justify-center">
                                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 translate-y-2"></div>
                                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 translate-y-2"></div>
                                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 -translate-y-2"></div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 -translate-y-2"></div>
                                <div className="absolute inset-x-0 top-0 h-[1px] bg-white opacity-0 group-hover:animate-ping"></div>
                                <div className="relative w-full h-full flex items-center justify-center p-5 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/50 transition-colors duration-300">
                                    <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full scale-50 group-hover:scale-100"></div>
                                    <img
                                        src={logo}
                                        alt="Partner"
                                        className="relative z-10 max-w-full max-h-full object-contain 
                                            grayscale opacity-40 blur-[0.5px] scale-90
                                            group-hover:grayscale-0 group-hover:opacity-100 group-hover:blur-0 group-hover:scale-110 
                                            transition-all duration-150 ease-out 
                                            drop-shadow-none group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
