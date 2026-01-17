import visualLogo from '../../assets/visuallogo2.png';

interface HomeIntroProps {
    onAboutClick: () => void;
}

export function HomeIntro({ onAboutClick }: HomeIntroProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-[#152d50]"></span>
                        ESPERIENZA CHE FA LA DIFFERENZA
                    </h2>
                    <p className="text-white text-lg leading-relaxed cursor-default">
                        {"Da anni supportiamo i principali Enti della Difesa, Organismi di Informazione e Sicurezza, e Forze dell’Ordine con tecnologie affidabili e soluzioni tattiche di alto livello. La selezione dei migliori brand internazionali, produttori delle migliori tecnologie americane ed europee, unitamente alla nostra esperienza sul campo, ci permettono di garantire prestazioni avanzate per applicazioni specifiche militari, continuità operativa assicurata da lunghe autonomie di volo ed acquisizione di informazioni dettagliate in ogni scenario.".split(" ").map((word, index) => (
                            <span key={index} className="inline-block hover:text-blue-400 hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] transition-all duration-300 mx-[2px]">
                                {word}
                            </span>
                        ))}
                    </p>

                    <div className="mt-8">
                        <button
                            onClick={onAboutClick}
                            className="group flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-blue-300 uppercase py-3 border-b border-blue-500/30 hover:border-blue-400 transition-all duration-300"
                        >
                            Scopri la nostra storia
                            <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-blue-400">→</span>
                        </button>
                    </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-center py-8 md:py-0 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 blur-[80px] rounded-full"></div>
                    <img src={visualLogo} alt="Aemme Experience" className="relative w-64 h-64 md:w-96 md:h-96 object-contain opacity-90 drop-shadow-[0_0_35px_rgba(37,99,235,0.4)]" />
                </div>
            </div>
        </div>
    );
}
