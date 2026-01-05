interface HomeHeroProps {
    headerBg: string;
    onSolutionsClick: () => void;
    onContactClick: () => void;
}

export function HomeHero({ headerBg, onSolutionsClick, onContactClick }: HomeHeroProps) {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[80vh] flex items-center">
            <div className="absolute inset-0 z-0">
                <img src={headerBg} alt="Tactical Background" className="w-full h-full object-cover brightness-110 opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/30 to-transparent" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mt-8"></div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 max-w-4xl mx-auto">
                    Tecnologie tattiche per chi opera sul campo.
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100 font-medium leading-relaxed cursor-default">
                    {"Soluzioni professionali per ricognizione, sorveglianza e superiorità informativa.".split(" ").map((word, index) => (
                        <span key={`p1-${index}`} className="inline-block hover:text-blue-400 hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] transition-all duration-300 mx-[2px]">
                            {word}
                        </span>
                    ))}
                    <br className="block mb-2" />
                    {"Sistemi UAV e strumenti d’intelligence progettati per supportare missioni critiche, con prestazioni certificate per ambito militare e law enforcement.".split(" ").map((word, index) => (
                        <span key={`p2-${index}`} className="inline-block hover:text-blue-400 hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] transition-all duration-300 mx-[2px]">
                            {word}
                        </span>
                    ))}
                </p>
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
