import { motion } from 'framer-motion';
import vision4 from '../../assets/vision4.svg';
import vision3 from '../../assets/vision3.svg';
import vision2 from '../../assets/vision2.svg';
import vision1 from '../../assets/vision1.svg';

const capabilities = [
    {
        id: 1,
        icon: vision4,
        title: "Doppia camera RGB con zoom 32x",
        text: "Rileva e identifica oggetti di interesse da una distanza di sicurezza grazie al sensore doppio RGB stabilizzato da 21 MP. Utilizza la fusione in tempo reale tra immagini RGB e termiche per ottimizzare la visibilità. Consente di visualizzare e registrare simultaneamente video in 4K e di acquisire immagini statiche ad alta risoluzione."
    },
    {
        id: 2,
        icon: vision3,
        title: "Camera termica con zoom 5x",
        text: "Consente di individuare facilmente piccoli bersagli a lunghe distanze o occultati, grazie alla fusione tra immagini termiche e RGB, resa possibile da un microbolometro FLIR Boson da 640×512 con zoom digitale 5x."
    },
    {
        id: 3,
        icon: vision2,
        title: "Localizzazione del bersaglio",
        text: "Localizza i bersagli utilizzando le coordinate del centro immagine, disponibili sia nella vista RGB sia in quella termica, con un errore circolare di 50 m da una distanza non rilevabile dal bersaglio. Condividi immediatamente la posizione sotto forma di coordinate latitudine/longitudine o MGRS."
    },
    {
        id: 4,
        icon: vision1,
        title: "Operazioni di volo automatizzate",
        text: "Adatta senza interruzioni le missioni di volo pre-pianificate durante l’operazione per seguire i bersagli individuati. Modalità Point of Interest facile da usare per attività di sorveglianza e funzione Go To per concentrare rapidamente l’osservazione sul bersaglio di interesse direttamente sulla mappa."
    }
];

export function EbeeVisionCapabilities() {
    return (
        <section className="bg-black pt-14 pb-12 px-4 relative overflow-hidden text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
                        Soluzione ISR ad alta precisione
                    </h2>
                    <div className="h-1 w-24 bg-blue-500 rounded-full mx-auto" />
                </div>

                {/* 2x2 Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={cap.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-[#0a0a0f] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl relative group flex flex-col"
                        >
                            {/* 1. Image Header (Large) */}
                            <div className="relative h-[250px] bg-gradient-to-b from-[#151520] to-[#0a0a0f] flex items-center justify-center p-8 overflow-hidden flex-shrink-0">
                                {/* Top Gradient Overlay */}
                                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/90 to-transparent z-10" />

                                <img
                                    src={cap.icon}
                                    alt={cap.title}
                                    className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] opacity-90 group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* 2. Content Body (Exploded Text) */}
                            <div className="p-8 md:p-10 bg-[#0a0a0f] relative z-20 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                                    {cap.title}
                                </h3>

                                <p className="text-white text-sm md:text-base leading-relaxed relative z-10">
                                    {cap.text}
                                </p>

                                {/* Bottom Subtle Blue Gradient (Sfumatura Blu) */}
                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
