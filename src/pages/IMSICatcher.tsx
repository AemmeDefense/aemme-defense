import { useEffect } from 'react';
import { IMSICatcherHero } from '../components/IMSICatcher/IMSICatcherHero';
import { IMSICatcherIntro } from '../components/IMSICatcher/IMSICatcherIntro';
import { IMSICatcherCapabilities } from '../components/IMSICatcher/IMSICatcherCapabilities';
import { IMSICatcherRescue } from '../components/IMSICatcher/IMSICatcherRescue';
import { IMSICatcherPoints } from '../components/IMSICatcher/IMSICatcherPoints';
import { IMSICatcherComponents } from '../components/IMSICatcher/IMSICatcherComponents';
import { IMSICatcherSpecs } from '../components/IMSICatcher/IMSICatcherSpecs';
import { IntegrationFinal } from '../components/IMSICatcher/IntegrationFinal';
import { IMSICatcherApplications } from '../components/IMSICatcher/IMSICatcherApplications';
import { IMSICatcherInterface } from '../components/IMSICatcher/IMSICatcherInterface';
import { CTASection } from '../components/Common/CTASection';

// Asset Imports
import mappaItaliaImg from '../assets/mappaitalia.png';

function IMSICatcher() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans">
            <IMSICatcherHero />
            <IMSICatcherIntro />
            <IMSICatcherCapabilities />
            <IMSICatcherRescue />
            <IMSICatcherPoints />
            <IMSICatcherComponents />
            <IMSICatcherSpecs />
            <IntegrationFinal />
            <IMSICatcherApplications />
            <IMSICatcherInterface />
            <CTASection mappaItaliaImg={mappaItaliaImg} />
        </div>
    );
}

export default IMSICatcher;
