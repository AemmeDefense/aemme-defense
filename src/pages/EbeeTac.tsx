import { useEffect } from 'react';

// Component Imports
import { EbeeTacHero } from '../components/EbeeTac/EbeeTacHero';
import { EbeeTacIntro } from '../components/EbeeTac/EbeeTacIntro';
import { PerformanceStats } from '../components/EbeeTac/PerformanceStats';
import { FeatureAccordion } from '../components/EbeeTac/FeatureAccordion';
import { TransportCaseSection } from '../components/EbeeTac/TransportCaseSection';
import { FieldOpsSection } from '../components/EbeeTac/FieldOpsSection';
import { CertificationSection } from '../components/EbeeTac/CertificationSection';
import { EMotionSection } from '../components/EbeeTac/EMotionSection';
import { ReliabilitySection } from '../components/EbeeTac/ReliabilitySection';
import { SafeOpsSection } from '../components/EbeeTac/SafeOpsSection';
import { NDAASection } from '../components/EbeeTac/NDAASection';
import { CTASection } from '../components/Common/CTASection';

// Asset Imports
import ebeeTacVideo from '../assets/ebeetacvideo.mp4';
import orthoVideo from '../assets/orthomosaic.mp4';
import pointCloudVideo from '../assets/3dpointcloud.mp4';
import thermalVideo from '../assets/thermalmap.mp4';
import surfaceVideo from '../assets/digitalsurface.mp4';
import modelVideo from '../assets/3dmodels.mp4';
import transportCaseImg from '../assets/ebeetaczaino.png';
import deployImg from '../assets/ebeetac2.jpg';
import operatorImg from '../assets/ebeetac3.png';
import certImg from '../assets/APPROVED.png';
import emotionImg from '../assets/emotion.png';
import reliabilityImg from '../assets/ebeetac4.jpg';
import safeOpsImg from '../assets/ebeetac10.jpg';
import ndaaImg from '../assets/ndaa.png';
import mappaItaliaImg from '../assets/mappaitalia.png';

const features = [
    {
        id: 0,
        title: "Modelli 3D",
        subtitle: "",
        description: "Trasforma i dati grezzi in modelli 3D georeferenziati. Grazie alla risoluzione centimetrica dei sensori integrati ogni dettaglio viene ricostruito fedelmente.",
        video: modelVideo,
    },
    {
        id: 1,
        title: "Ortomosaico",
        subtitle: "",
        description: "Trasforma centinaia di scatti aerei in un’unica mappa georeferenziata dalla precisione millimetrica. Ogni pixel riflette la sua reale posizione geografica, eliminando le distorsioni della lente e i dislivelli del terreno.",
        video: orthoVideo,
    },
    {
        id: 2,
        title: "Nuvola di Punti 3D",
        subtitle: "",
        description: "Ogni nuvola è composta da milioni di punti georeferenziati che definiscono una mappatura del territorio rapida, scalabile e pronta per essere integrata in sistemi GIS o software CAD.",
        video: pointCloudVideo,
    },
    {
        id: 3,
        title: "Mappa Termica",
        subtitle: "",
        description: "La Mappatura Termica ad alta risoluzione realizzata permette di visualizzare l'impronta calorifica del territorio e delle infrastrutture con estrema precisione. È una risorsa cruciale per la ricerca e soccorso.",
        video: thermalVideo,
    },
    {
        id: 4,
        title: "Digital Surface Model",
        subtitle: "",
        description: "La ricostruzione altimetrica totale, questo output permette di mappare con precisione chiome degli alberi, tetti di edifici e infrastrutture complesse, garantendo una base dati ad alta fedeltà.",
        video: surfaceVideo,
    }
];

function EbeeTac() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans">
            <EbeeTacHero ebeeTacVideo={ebeeTacVideo} />
            <EbeeTacIntro />
            <PerformanceStats />
            <FeatureAccordion features={features} />
            <TransportCaseSection transportCaseImg={transportCaseImg} />
            <FieldOpsSection deployImg={deployImg} operatorImg={operatorImg} />
            <CertificationSection certImg={certImg} />
            <EMotionSection emotionImg={emotionImg} />
            <ReliabilitySection reliabilityImg={reliabilityImg} />
            <SafeOpsSection safeOpsImg={safeOpsImg} />
            <NDAASection ndaaImg={ndaaImg} />
            <CTASection mappaItaliaImg={mappaItaliaImg} />
        </div >
    );
}

export default EbeeTac;
