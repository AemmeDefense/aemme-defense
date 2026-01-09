import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/aemmelogodefense.png';

export function ContactsInfo() {
    return (
        <div className="bg-[#0a0a0a] p-8 md:p-12 lg:p-16 rounded-3xl border border-white/10 relative overflow-hidden h-full flex flex-col justify-between">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-900/5 blur-[80px] rounded-full pointer-events-none" />

            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <img src={logo} alt="AEMME Defense" className="h-12 w-auto mb-8" />
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Parla con i nostri esperti
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Il nostro team è a disposizione per fornire consulenza tecnica, studi di fattibilità e supporto operativo per missioni critiche.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {/* EMAIL */}
                    <motion.a
                        href="mailto:aemmere@aemmere.it"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-6 group"
                    >
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500 transition-all">
                            <Mail className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email Istituzionale</div>
                            <div className="text-xl text-white font-medium group-hover:text-blue-400 transition-colors">aemmere@aemmere.it</div>
                        </div>
                    </motion.a>

                    {/* PHONE */}
                    <motion.a
                        href="tel:011747555"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-6 group"
                    >
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500 transition-all">
                            <Phone className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Telefono</div>
                            <div className="text-xl text-white font-medium group-hover:text-blue-400 transition-colors">011 747555</div>
                        </div>
                    </motion.a>

                    {/* ADDRESS */}
                    <motion.a
                        href="https://maps.google.com/?q=Via+Lessolo+5+Torino"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-6 group"
                    >
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500 transition-all">
                            <MapPin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Sede Operativa</div>
                            <div className="text-white font-medium group-hover:text-blue-400 transition-colors leading-relaxed">
                                Via Lessolo, 5<br />
                                10153 Torino (TO)
                            </div>
                        </div>
                    </motion.a>
                </div>
            </div>
        </div>
    );
}
