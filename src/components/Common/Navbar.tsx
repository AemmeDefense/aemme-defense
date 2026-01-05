import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../../assets/aemmelogodefense.png';

interface NavbarProps {
    onHomeClick: () => void;
    onNavigate?: (page: string) => void;
}

export function Navbar({ onHomeClick, onNavigate }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavigation = (item: string) => {
        setIsMobileMenuOpen(false); // Close mobile menu on click
        if (item === 'About' && onNavigate) {
            onNavigate('about');
        } else if (item === 'Soluzioni' && onNavigate) {
            onNavigate('solutions');
        }
    };

    const handleHomeClick = () => {
        setIsMobileMenuOpen(false);
        onHomeClick();
    }

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-24">
                        {/* Logo */}
                        <div className="relative w-40 md:w-48 h-full flex items-center cursor-pointer z-50" onClick={handleHomeClick}>
                            <img src={logo} alt="AEMME DEFENSE" className="h-16 md:h-24 w-auto object-contain filter drop-shadow-lg" />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-12">
                            <div className="flex items-center gap-8">
                                {['Soluzioni', 'About'].map((item) => (
                                    <span
                                        key={item}
                                        onClick={() => handleNavigation(item)}
                                        className="hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-semibold text-slate-400 cursor-pointer"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <button
                                onClick={() => { setIsMobileMenuOpen(false); onNavigate && onNavigate('contacts'); }}
                                className="bg-[#152d50] hover:bg-[#1e3a63] text-white px-6 py-2 rounded text-xs uppercase tracking-widest font-bold transition-colors border border-blue-500/20"
                            >
                                Contatti
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden z-50">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-white hover:text-blue-400 transition-colors p-2"
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#050505] pt-28 px-4 md:hidden flex flex-col items-center"
                    >
                        <div className="flex flex-col gap-8 w-full max-w-sm text-center">
                            {['Soluzioni', 'About'].map((item) => (
                                <span
                                    key={item}
                                    onClick={() => handleNavigation(item)}
                                    className="text-2xl font-bold text-white hover:text-blue-400 transition-colors uppercase tracking-widest cursor-pointer py-4 border-b border-white/10"
                                >
                                    {item}
                                </span>
                            ))}
                            <button
                                onClick={() => { setIsMobileMenuOpen(false); onNavigate && onNavigate('contacts'); }}
                                className="mt-4 bg-[#152d50] hover:bg-[#1e3a63] text-white px-8 py-4 rounded text-sm uppercase tracking-widest font-bold transition-all border border-blue-500/20 w-full"
                            >
                                Contatti
                            </button>

                            <div className="mt-8 flex gap-4 justify-center">
                                <a href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onNavigate && onNavigate('privacy') }} className="text-xs text-gray-500 hover:text-white">Privacy</a>
                                <a href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onNavigate && onNavigate('cookie-policy') }} className="text-xs text-gray-500 hover:text-white">Cookies</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
