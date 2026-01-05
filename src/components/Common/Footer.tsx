interface FooterProps {
    onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
    return (
        <footer className="bg-black py-12 border-t border-white/10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <p className="text-xs text-blue-200/80">© 2025 AEMME SURVEYING - DEFENSE DIVISION. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <button onClick={() => onNavigate && onNavigate('privacy')} className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</button>
                        <button onClick={() => onNavigate && onNavigate('cookie-policy')} className="text-xs text-slate-500 hover:text-white transition-colors">Cookie Policy</button>
                    </div>
                </div>

                {/* Corporate Legal Info */}
                <div className="border-t border-white/5 pt-8 text-center">
                    <div className="space-y-1 text-xs text-slate-600">
                        <p className="font-bold text-slate-500">AEMME RE SRL</p>
                        <p>Sede Legale: Via Lessolo 5 - 10153 TORINO</p>
                        <p>P.IVA 09248140015</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
