import { motion } from 'framer-motion';
import imsi6 from '../../assets/imsi6.jpg';
import imsi7 from '../../assets/imsi7.jpg';
import imsi8 from '../../assets/imsi8.jpg';
import imsi9 from '../../assets/imsi9.jpg';
import imsi10 from '../../assets/imsi10.jpg';
import imsi11 from '../../assets/imsi11.jpg';

const applications = [
    { title: "Operazioni di Polizia", image: imsi6 },
    { title: "Agenzie di intelligence", image: imsi7 },
    { title: "Controllo confini", image: imsi8 },
    { title: "Operazioni di soccorso", image: imsi9 },
    { title: "Operazioni militari e di sicurezza pubblica", image: imsi10 },
    { title: "Guardia Costiera", image: imsi11 }
];

export function IMSICatcherApplications() {
    return (
        <section className="bg-black py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-16 text-center"
                >
                    Principali <span className="text-blue-500">Applicazioni</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {applications.map((app, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-default"
                        >
                            {/* Image */}
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Blue Accent Line (Animated) */}
                            <div className="absolute bottom-0 left-0 h-1 bg-blue-500 w-0 group-hover:w-full transition-all duration-500 ease-out" />

                            {/* Text Content */}
                            <div className="absolute inset-0 flex items-end p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {app.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
