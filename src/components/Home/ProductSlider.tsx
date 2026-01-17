import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PanInfo } from 'framer-motion';

interface Product {
    id: number;
    name: string;
    tag: string;
    tagColor: string;
    description: string;
    image: string;
    specs: { label: string; value: string; icon: React.ReactNode }[];
}

interface ProductSliderProps {
    products: Product[];
    onProductClick: (id: number) => void;
}

export function ProductSlider({ products, onProductClick }: ProductSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    const handleDragEnd = (_: any, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x < -threshold) {
            nextSlide();
        } else if (info.offset.x > threshold) {
            prevSlide();
        }
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.95
        })
    };

    const ProductCard = ({ product, isMobile = false }: { product: Product, isMobile?: boolean }) => (
        <div
            onClick={() => onProductClick(product.id)}
            className={`bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full cursor-pointer relative ${isMobile ? 'shadow-2xl shadow-black/50' : ''}`}
        >
            {/* Image Area */}
            <div className={`${isMobile ? 'h-[220px]' : 'h-[250px]'} relative overflow-hidden border-b border-white/5 bg-black`}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-10" />
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Content Area */}
            <div className={`${isMobile ? 'p-5' : 'p-8'} flex flex-col flex-grow justify-between`}>
                <div>
                    <h3 className={`${isMobile ? 'text-2xl' : 'text-2xl'} font-bold text-white mb-3 group-hover:text-blue-400 transition-colors`}>
                        {product.name}
                    </h3>
                    <p className={`${isMobile ? 'text-sm' : 'text-sm text-slate-400'} leading-relaxed mb-6 line-clamp-3 text-slate-300`}>
                        {product.description}
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6 border-t border-white/5 pt-4">
                        {product.specs.slice(0, 4).map((spec, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="text-blue-400 flex-shrink-0">
                                    {spec.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">{spec.label}</span>
                                    <span className={`${isMobile ? 'text-sm' : 'text-sm'} font-bold text-white`}>{spec.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className={`w-full ${isMobile ? 'py-4 text-xs' : 'py-4 text-xs'} bg-blue-900/10 border border-blue-500/30 hover:bg-blue-600 hover:border-blue-500 text-white rounded-xl font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-900/20`}
                >
                    Scopri Dettagli
                </button>
            </div>
        </div>
    );

    return (
        <div className="py-12 md:py-24 bg-[#050505] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mb-16 text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Soluzioni professionali per ricognizione, sorveglianza e superiorità informativa
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Sistemi UAV e strumenti d’intelligence progettati per supportare missioni critiche, con specifiche create appositamente per il settore militare e delle Forze dell’Ordine.
                    </p>
                </div>

                {/* DESKTOP: 2x2 Grid */}
                <div className="hidden md:grid grid-cols-2 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* MOBILE: Swipeable Card Slider */}
                <div className="md:hidden relative px-4 min-h-[600px]">
                    <div className="relative overflow-visible">
                        <AnimatePresence initial={false} custom={direction} mode='wait'>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={handleDragEnd}
                                className="w-full touch-pan-y"
                            >
                                <ProductCard product={products[currentIndex]} isMobile={true} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex justify-between items-center px-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-colors active:scale-95 z-20"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="flex gap-2 z-20">
                            {products.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-blue-500' : 'bg-white/20'}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-colors active:scale-95 z-20"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
