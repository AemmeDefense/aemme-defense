import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Asset Imports
import ebeeTacImg from '../../assets/ebeetac.jpg';
import ebeeVisionImg from '../../assets/ebeevision.jpg';
import imsiImg from '../../assets/imsi.jpg';
import anafiUkrImg from '../../assets/ukr.jpg';

interface Product {
    id: number;
    name: string;
    tag: string;
    description: string;
    image: string;
    specs: { label: string; value: string; icon: React.ReactNode }[];
}

const products: Product[] = [
    {
        id: 1,
        name: "eBee TAC",
        tag: "Drone ad ala fissa",
        description: "Drone tattico ad ala fissa per missioni di sorveglianza precisa. Massima autonomia e resistenza anche in condizioni difficili, progettato per operazioni stealth.",
        image: ebeeTacImg,
        specs: [
            { label: "Flight", value: "90 min", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
            { label: "Range", value: "30 km", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg> },
        ]
    },
    {
        id: 2,
        name: "eBee Vision",
        tag: "Drone Mapping",
        description: "Piattaforma avanzata per il mapping rapido e l'intelligence visiva. Integra sensori termici e RGB ad alta risoluzione per una situational awareness immediata.",
        image: ebeeVisionImg,
        specs: [
            { label: "Flight", value: "50 min", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
            { label: "Sensor", value: "Thermal", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> },
        ]
    },
    {
        id: 3,
        name: "Parrot ANAFI UKR",
        tag: "Quadrirotore Tattico",
        description: "Quadricottero leggero e dispiegabile in secondi. Dotato di ottiche 4K HDR e zoom senza perdita, ideale per ricognizione a corto raggio.",
        image: anafiUkrImg,
        specs: [
            { label: "Weight", value: "0.8 kg", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> },
            { label: "Camera", value: "4K HDR", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg> },
        ]
    },
    {
        id: 4,
        name: "IMSI Catcher Payload",
        tag: "Intelligence",
        description: "Sistema imbarcato per l'intercettazione e la localizzazione di dispositivi mobili. Integrazione nativa con piattaforme DJI Enterprise.",
        image: imsiImg,
        specs: [
            { label: "Type", value: "Payload", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg> },
            { label: "Channels", value: "Multi", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
        ]
    }
];

interface SolutionsListProps {
    onProductClick: (id: number) => void;
}

export function SolutionsList({ onProductClick }: SolutionsListProps) {
    return (
        <section className="relative bg-[#050505] pb-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col gap-32 md:gap-48">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
                        >

                            {/* TEXT CONTENT */}
                            <div className="w-full lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    {/* Tag removed per user request */}

                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                        {product.name}
                                    </h2>

                                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                        {product.description}
                                    </p>



                                    <button
                                        onClick={() => onProductClick(product.id)}
                                        className="group inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest hover:text-blue-400 transition-colors"
                                    >
                                        Scopri Dettagli
                                        <div className="p-3 border border-white/20 rounded-full group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </button>
                                </motion.div>
                            </div>

                            {/* IMAGE CONTENT */}
                            <div className="w-full lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group bg-[#0a0a0a]"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                    />

                                    {/* Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60" />
                                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </motion.div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
