interface HomeHeroProps {
    headerBg: string;
    headerMobileBg?: string;
    onSolutionsClick: () => void;
    onContactClick: () => void;
}

export function HomeHero({ headerBg, headerMobileBg, onSolutionsClick, onContactClick }: HomeHeroProps) {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[80vh] flex items-center">
            <div className="absolute inset-0 z-0">
                {/* Desktop Image */}
                <img
                    src={headerBg}
                    alt="Tactical Background Desktop"
                    className={`w-full h-full object-cover brightness-110 opacity-100 ${headerMobileBg ? 'hidden md:block' : 'block'}`}
                />

                {/* Mobile Image (if provided) */}
                {headerMobileBg && (
                    <img
                        src={headerMobileBg}
                        alt="Tactical Background Mobile"
                        className="w-full h-full object-cover brightness-110 opacity-100 block md:hidden"
                    />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/30 to-transparent" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mt-8"></div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 max-w-4xl mx-auto">
                    Droni, sensori e software per Intelligence aerea avanzata
                </h1>
                <div className="mt-10 flex justify-center gap-4">
                    <button
                        onClick={onSolutionsClick}
                        className="px-8 py-4 bg-gradient-to-r from-blue-900 to-[#152d50] hover:from-blue-800 hover:to-[#1e3a63] border border-blue-500/30 text-white font-bold rounded text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-blue-900/40 hover:scale-105"
                    >
                        Soluzioni operative
                    </button>
                    <button
                        onClick={onContactClick}
                        className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white font-bold rounded text-sm uppercase tracking-widest transition-all hover:scale-105"
                    >
                        Richiedi briefing
                    </button>
                </div>
            </div>
        </div>
    );
}
