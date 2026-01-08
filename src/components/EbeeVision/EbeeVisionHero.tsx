import ebeevisionVideo from '../../assets/ebeevision1.mp4';
import posterImg from '../../assets/poster-ebeevision.jpg';

export function EbeeVisionHero() {
    return (
        <div className="relative w-full h-auto overflow-hidden pt-24">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain"
                poster={posterImg}
            >
                <source src={ebeevisionVideo} type="video/mp4" />
            </video>
            {/* Grid Overlay - consistent with EbeeTac style */}
            <div className="absolute inset-0 bg-[url('/grid-pixel.png')] opacity-20 mix-blend-overlay"></div>

            {/* Bottom Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-80% to-[#050505]"></div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80 animate-bounce cursor-pointer p-2 z-10"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
                </svg>
            </div>
        </div>
    );
}
