import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import imsi20 from '../../assets/imsi20.png';
import imsi23 from '../../assets/imsi23.png';
import imsi22 from '../../assets/imsi22.png';
import imsi21 from '../../assets/imsi21.png';

const interfaces = [
    {
        id: 1,
        title: "APP XP2-Locator",
        text: "Interfaccia principale per impostazione parametri di rete, gestione missioni e liste target (Black/White list). Configurazione MNO e frequenze.",
        image: imsi20
    },
    {
        id: 2,
        title: "Risultati Ricerca",
        text: "Controllo volo, mappa tattica e feed video integrati in un'unica dashboard. Visualizzazione in tempo reale dei target rilevati.",
        image: imsi23
    },
    {
        id: 3,
        title: "Pianificazione Volo",
        text: "Definizione area di ricerca su mappa. Il sistema calcola automaticamente il percorso a strisciate per la massima copertura.",
        image: imsi22
    },
    {
        id: 4,
        title: "Geolocalizzazione",
        text: "Acquisizione precisa delle coordinate WGS84 del target. Visualizzazione immediata della posizione stimata sulla mappa.",
        image: imsi21
    }
];

export function IMSICatcherInterface() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % interfaces.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + interfaces.length) % interfaces.length);
    };

    const InterfaceCard = ({ item }: { item: typeof interfaces[0] }) => (
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full relative shadow-2xl">
            {/* Image Area */}
            <div className="h-[300px] relative overflow-hidden border-b border-white/5 bg-black/50">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-10" />
                <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col flex-grow justify-between bg-[#0a0a0a]">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {item.text}
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="w-12 h-1 bg-blue-500/30 rounded-full group-hover:w-full group-hover:bg-blue-500 transition-all duration-500" />
            </div>
        </div>
    );

    return (
        <section className="py-24 bg-black relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Interfaccia <span className="text-blue-500">Operativa</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg tracking-widest uppercase">
                        Gestione Missione Avanzata
                    </p>
                </div>

                {/* DESKTOP: 2x2 Grid */}
                <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {interfaces.map((item) => (
                        <InterfaceCard key={item.id} item={item} />
                    ))}
                </div>

                {/* MOBILE: Single Card Slider */}
                <div className="md:hidden relative px-2">
                    <div className="mb-8">
                        <InterfaceCard item={interfaces[currentIndex]} />
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex justify-between items-center px-4">
                        <button
                            onClick={prevSlide}
                            className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-colors active:scale-95"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="flex gap-2">
                            {interfaces.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-blue-500' : 'bg-white/20'}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-colors active:scale-95"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
