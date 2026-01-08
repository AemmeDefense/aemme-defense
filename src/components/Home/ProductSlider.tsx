import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    const ProductCard = ({ product }: { product: Product }) => (
        <div
            onClick={() => onProductClick(product.id)}
            className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full cursor-pointer relative"
        >
            {/* Image Area */}
            <div className="h-[250px] relative overflow-hidden border-b border-white/5 bg-black">
                <div className="absolute top-6 right-6 z-20">
                    <span className={`px-4 py-2 backdrop-blur-md text-[10px] font-mono font-bold uppercase border rounded tracking-widest ${product.tagColor}`}>
                        {product.tag}
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-10" />
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {product.description}
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8 border-t border-white/5 pt-6">
                        {product.specs.slice(0, 4).map((spec, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="text-blue-400 flex-shrink-0">
                                    {spec.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">{spec.label}</span>
                                    <span className="text-sm font-bold text-white">{spec.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="w-full py-4 bg-blue-900/10 border border-blue-500/30 hover:bg-blue-600 hover:border-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-900/20"
                >
                    Scopri Dettagli
                </button>
            </div>
        </div>
    );

    return (
        <div className="py-24 bg-[#050505] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Sistemi Tattici
                    </h2>
                    <p className="text-slate-400 text-lg uppercase tracking-widest font-medium">
                        Soluzioni operative per contesti critici
                    </p>
                </div>

                {/* DESKTOP: 2x2 Grid */}
                <div className="hidden md:grid grid-cols-2 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* MOBILE: Single Card Slider */}
                <div className="md:hidden relative px-4">
                    <div className="mb-8">
                        <ProductCard product={products[currentIndex]} />
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
                            {products.map((_, idx) => (
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
        </div>
    );
}
