import { EbeeVisionHero } from '../components/EbeeVision/EbeeVisionHero';
import { EbeeVisionIntro } from '../components/EbeeVision/EbeeVisionIntro';
import { EbeeVisionShowcase } from '../components/EbeeVision/EbeeVisionShowcase';
import { EbeeVisionFeatures } from '../components/EbeeVision/EbeeVisionFeatures';

import { EbeeVisionCapabilities } from '../components/EbeeVision/EbeeVisionCapabilities';
import { EbeeVisionInterface } from '../components/EbeeVision/EbeeVisionInterface';
import { EbeeVisionSpecs } from '../components/EbeeVision/EbeeVisionSpecs';
import { EbeeVisionTechSpecs } from '../components/EbeeVision/EbeeVisionTechSpecs';
import { EbeeVisionNDAA } from '../components/EbeeVision/EbeeVisionNDAA';
import { EbeeVisionFlightModes } from '../components/EbeeVision/EbeeVisionFlightModes';
import { EbeeVisionBrochure } from '../components/EbeeVision/EbeeVisionBrochure';
import { CTASection } from '../components/Common/CTASection';
import mappaItaliaImg from '../assets/mappaitalia.png';

export function EbeeVision() {
    return (
        <div className="bg-black min-h-screen text-white">
            <EbeeVisionHero />
            <EbeeVisionIntro />
            <EbeeVisionShowcase />
            <EbeeVisionFeatures />
            <EbeeVisionFlightModes />
            <EbeeVisionCapabilities />
            <EbeeVisionInterface />
            <EbeeVisionSpecs />
            <EbeeVisionTechSpecs />
            <EbeeVisionNDAA />
            <EbeeVisionBrochure />
            <CTASection mappaItaliaImg={mappaItaliaImg} />
        </div>
    );
}
