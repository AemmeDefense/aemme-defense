import { useEffect } from 'react';
import { SolutionsHero } from '../components/Solutions/SolutionsHero';
import { SolutionsList } from '../components/Solutions/SolutionsList';
import { CTASection } from '../components/Common/CTASection';

import mappaItaliaImg from '../assets/mappaitalia.png';

interface SolutionsProps {
    onProductClick: (id: number) => void;
    onContactClick: () => void;
}

export function Solutions({ onProductClick, onContactClick }: SolutionsProps) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans">
            <SolutionsHero onContactClick={onContactClick} />
            <SolutionsList onProductClick={onProductClick} />
            <CTASection mappaItaliaImg={mappaItaliaImg} onContactClick={onContactClick} />
        </div>
    );
}
