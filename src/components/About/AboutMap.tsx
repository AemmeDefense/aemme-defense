export function AboutMap() {
    return (
        <section className="relative h-[600px] w-full bg-[#111]">
            {/* Map Filter for Dark Mode */}
            <div className="absolute inset-0 pointer-events-none z-10 bg-blue-900/10 mix-blend-overlay" />

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.433878190774!2d7.701193376793615!3d45.076991071070775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d0e653303d9%3A0x6b86419793134608!2sVia%20Lessolo%2C%205%2C%2010153%20Torino%20TO!5e0!3m2!1sit!2sit!4v1703000000000!5m2!1sit!2sit"
                // Grey/Black Dark Mode Filter
                // grayscale(1) -> No color
                // invert(0.9) -> Dark background (maps are usually light)
                // contrast(1.2) -> Sharpness
                style={{ filter: 'grayscale(1) invert(0.95) contrast(1.2) brightness(0.8)' }}
                className="w-full h-full opacity-60"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Location Card Overlay */}
            <div className="absolute top-1/2 left-6 md:left-20 transform -translate-y-1/2 z-20">
                <div className="bg-black/80 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-2xl max-w-sm">
                    <h4 className="text-white text-2xl font-bold mb-4 flex items-center gap-3">
                        <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Headquarters
                    </h4>
                    <div className="space-y-2 text-slate-300">
                        <p className="font-semibold text-white">AEMME Defense</p>
                        <p>Via Lessolo 5</p>
                        <p>10153 Torino (TO)</p>
                        <p>Italia</p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
                        <a
                            href="https://www.google.com/maps/place/Via+Lessolo,+5,+10153+Torino+TO"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors flex items-center gap-2"
                        >
                            Apri in Maps
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
