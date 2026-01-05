import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import imsi20 from '../../assets/imsi20.png';
import imsi23 from '../../assets/imsi23.png';
import imsi22 from '../../assets/imsi22.png';
import imsi21 from '../../assets/imsi21.png';

const interfaces = [
    {
        id: 1,
        title: "APP XP2-Locator - Interfaccia Principale",
        text: "Interfaccia utente di volo: impostazione dei parametri di rete, inclusi operatore di telecomunicazioni, modalità di rete e bande di frequenza. Elenco missioni: per condividere, esportare o eliminare i file di missione. Ogni file nell'elenco registra i dati rilevati durante una missione. Modello: per configurare gli MNO (Operatori di rete mobile) di un paese e le relative informazioni di rete. Lista nera e lista bianca: per inserire e modificare i numeri IMSI.",
        image: imsi20
    },
    {
        id: 2,
        title: "Risultati della ricerca IMSI",
        text: "Controllo del volo, mappa, immagini e video, impostazioni della missione e risultati della ricerca IMSI vengono tutti visualizzati in un'unica schermata.",
        image: imsi23
    },
    {
        id: 3,
        title: "Pianificazione del volo di ricerca",
        text: "Imposta l'area di ricerca sulla mappa: il sistema percorre le strisciale e cerca automaticamente gli apparati target.",
        image: imsi22
    },
    {
        id: 4,
        title: "Risultati della Geolocalizzazione",
        text: "Le coordinate WGS84 del target rilevato vengono visualizzate sullo schermo.",
        image: imsi21
    }
];

export function IMSICatcherInterface() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;
            const rect = scrollRef.current.getBoundingClientRect();
            const offsetTop = rect.top;
            const height = rect.height;
            const windowHeight = window.innerHeight;

            // Calculate percentage based on how much of the section has scrolled past
            let percentage = ((-offsetTop) / (height - windowHeight)) * 100;
            percentage = Math.min(Math.max(percentage, 0), 100);
            setScrollProgress(percentage);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={scrollRef} className="relative h-[250vh] bg-black">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* Header */}
                <div className="absolute top-10 left-0 right-0 z-20 text-center px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-2"
                    >
                        Interfaccia <span className="text-blue-500">Operativa</span>
                    </motion.h2>
                    <p className="text-gray-400 text-sm md:text-lg tracking-widest uppercase">
                        Gestione Missione Avanzata
                    </p>
                </div>

                {/* Horizontal Scrolling Container */}
                <div
                    className="flex gap-8 px-[10vw] w-max transition-transform duration-100 ease-out items-center mt-32"
                    style={{ transform: `translateX(-${scrollProgress * 0.55}%)` }}
                >
                    {interfaces.map((item) => (
                        <div
                            key={item.id}
                            className="relative w-[85vw] md:w-[800px] h-[70vh] md:h-[600px] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 group hover:border-blue-500/50 transition-all duration-500 flex flex-col"
                        >
                            {/* Image Section (Top 60%) */}
                            <div className="h-[60%] relative overflow-hidden bg-black/50 border-b border-white/5">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-50" />
                            </div>

                            {/* Text Section (Bottom 40%) */}
                            <div className="h-[40%] p-8 flex flex-col justify-center bg-[#0a0a0a] relative overflow-hidden">
                                {/* Background Glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {item.text}
                                </p>

                                {/* Decorative Line */}
                                <div className="w-12 h-1 bg-blue-500/50 mt-6 rounded-full group-hover:w-24 transition-all duration-500" />
                            </div>
                        </div>
                    ))}
                    {/* Spacer specifically added to allow scrolling past the last item */}
                    <div className="w-[5vw]"></div>
                </div>
            </div>
        </section>
    );
}
