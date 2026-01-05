import { useEffect } from 'react';
import { SolutionsHero } from '../components/Solutions/SolutionsHero';
import { SolutionsList } from '../components/Solutions/SolutionsList';
import { CTASection } from '../components/Common/CTASection';
import { Footer } from '../components/Common/Footer';
import mappaItaliaImg from '../assets/mappaitalia.png';

interface SolutionsProps {
    onProductClick: (id: number) => void;
}

export function Solutions({ onProductClick }: SolutionsProps) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans">
            <SolutionsHero />
            <SolutionsList onProductClick={onProductClick} />
            <CTASection mappaItaliaImg={mappaItaliaImg} />
            <Footer />
        </div>
    );
}
