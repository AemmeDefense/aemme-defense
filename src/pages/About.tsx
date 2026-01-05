import { useEffect } from 'react';

import { AboutHero } from '../components/About/AboutHero';
import { AboutHistory } from '../components/About/AboutHistory';
import { AboutMap } from '../components/About/AboutMap';
import { CTASection } from '../components/Common/CTASection';
import mappaItaliaImg from '../assets/mappaitalia.png';

export function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 selection:text-white">
            {/* The Navbar will be rendered by App.tsx logic, but if this page is standalone we might need to adjust logic there. 
                Based on App.tsx structure, Navbar is outside the page component if we use the switch/case there. 
                Wait, looking at App.tsx, Navbar is OUTSIDE the renderPage(). 
                So we don't need Navbar here if we integrate it properly in App.tsx. 
                BUT, for now, let's keep it clean. I will NOT render Navbar here, 
                assuming App.tsx handles the layout frame.
            */}

            <main>
                <AboutHero />
                <AboutHistory />

                {/* Map with requested margin */}
                <div className="mt-20">
                    <AboutMap />
                </div>

                <CTASection mappaItaliaImg={mappaItaliaImg} />
            </main>
        </div>
    );
}
// Actually, looking at App.tsx again:
// renderPage() returns the component.
// Navbar is fixed at the top of App.tsx return.
// So About.tsx should just be the content.
export default About;
