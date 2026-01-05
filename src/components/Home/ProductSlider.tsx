import { useRef, useEffect, useState, type ReactNode } from 'react';

interface Product {
    id: number;
    name: string;
    tag: string;
    tagColor: string;
    description: string;
    image: string;
    specs: { label: string; value: string; icon: ReactNode }[];
}

interface ProductSliderProps {
    products: Product[];
    onProductClick: (id: number) => void;
}

export function ProductSlider({ products, onProductClick }: ProductSliderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;
            const rect = scrollRef.current.getBoundingClientRect();
            const offsetTop = rect.top;
            const height = rect.height;
            const windowHeight = window.innerHeight;
            let percentage = ((-offsetTop) / (height - windowHeight)) * 100;
            percentage = Math.min(Math.max(percentage, 0), 100);
            setScrollProgress(percentage);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={scrollRef} className="relative h-[300vh] bg-[#050505]">
            <div className="sticky top-0 h-screen flex flex-col justify-start pt-0 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-8 flex-shrink-0 z-10 text-center pt-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-4 inline-block relative">
                        Sistemi Tattici
                        <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-blue-500/50 rounded-full blur-[1px]"></div>
                    </h2>
                    <p className="text-slate-400 text-lg uppercase tracking-widest font-medium">Soluzioni operative per contesti critici</p>
                </div>

                <div
                    className="flex gap-8 px-[10vw] w-max transition-transform duration-100 ease-out"
                    style={{ transform: `translateX(-${scrollProgress * 0.55}%)` }}
                >
                    {products.map((product) => (
                        <div key={product.id} className="w-[90vw] md:w-[700px] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 group hover:border-blue-500/50 transition-all duration-300 flex flex-col">
                            <div className="h-[300px] relative overflow-hidden border-b border-white/5 bg-black">
                                <div className="absolute top-6 right-6 z-20">
                                    <span className={`px-4 py-2 backdrop-blur-md text-xs font-mono font-bold uppercase border rounded tracking-widest ${product.tagColor}`}>
                                        {product.tag}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-10" />
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>

                            <div className="p-6 flex flex-col justify-between flex-grow bg-[#0a0a0a] relative">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{product.name}</h3>
                                    <p className="text-slate-400 mb-6 text-sm leading-relaxed max-w-lg line-clamp-2">
                                        {product.description}
                                    </p>
                                    <div className="flex flex-wrap gap-6 mb-6 text-xs text-slate-400 border-t border-white/5 pt-4">
                                        {product.specs.map((spec, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="text-blue-400">
                                                    {spec.icon}
                                                </div>
                                                <span className="font-bold text-white tracking-wider">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => onProductClick(product.id)}
                                    className="w-full py-4 bg-blue-900/20 border border-blue-500/30 hover:bg-blue-600 hover:border-blue-500 text-white rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-normal transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] cursor-pointer"
                                >
                                    Scopri il Sistema
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="w-[5vw]"></div>
                </div>
            </div>
        </div>
    );
}
