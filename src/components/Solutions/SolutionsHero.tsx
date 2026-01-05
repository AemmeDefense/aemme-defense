import { motion } from 'framer-motion';

export function SolutionsHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 bg-[#050505] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">

                    {/* LEFT COLUMN: TITLE */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-6 pl-1 border-l-2 border-blue-500">
                                Portfolio Tecnologico
                            </h2>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9]">
                                Sistemi <br />
                                tattici. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 block mt-2">
                                    Certificati.
                                </span>
                            </h1>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: TEXT */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="space-y-8"
                        >
                            <p className="text-gray-400 text-lg leading-relaxed border-l border-white/10 pl-6">
                                Aemme Defense propone una selezione mirata di soluzioni tecnologiche dedicate ad applicazioni istituzionali e professionali in ambito sicurezza, difesa e controllo del territorio.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed pl-6">
                                Le soluzioni presentate offrono affidabilità, integrazione immediata e supporto operativo, nel rispetto degli standard militari ed enterprise.
                            </p>

                            <div className="pl-6 pt-4">
                                <a
                                    href="#contact"
                                    onClick={(e) => { e.preventDefault(); document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' }); }}
                                    className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs hover:text-blue-400 transition-colors group"
                                >
                                    Contatta il team
                                    <span className="block h-px w-8 bg-blue-500 group-hover:w-16 transition-all" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
