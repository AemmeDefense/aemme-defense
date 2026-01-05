interface EbeeTacHeroProps {
    ebeeTacVideo: string;
}

export function EbeeTacHero({ ebeeTacVideo }: EbeeTacHeroProps) {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={ebeeTacVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[url('/grid-pixel.png')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-80% to-[#050505]"></div>
            <div
                className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80 animate-bounce cursor-pointer p-2"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
                </svg>
            </div>
        </div>
    );
}
