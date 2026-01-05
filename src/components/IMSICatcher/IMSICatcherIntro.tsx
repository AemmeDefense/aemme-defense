import { motion } from 'framer-motion';

export function IMSICatcherIntro() {
    return (
        <section className="bg-black py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
                >
                    Le soluzioni <span className="text-blue-500 font-medium tracking-wide">IMSI Catcher</span> (International Mobile Subscriber Identity catcher) integrate
                    su droni offerte da <span className="text-white font-medium">AEMME Surveying</span> garantiscono risultati efficaci nel tracciamento di dispositivi mobili alle forze dell’ordine e agli operatori del soccorso.
                    <br /><br />
                    I sistemi consentono di raccogliere dati cruciali, come <span className="text-blue-400">IMSI e IMEI</span>, dai telefoni cellulari senza allertare gli utenti o i fornitori di servizi.
                    Il grado di compattezza raggiunto dai dispositivi li ha resi adatti all’installazione e all’integrazione su droni, permettendo la raccolta di dati dall’alto, su aree inaccessibili al personale a terra.
                </motion.p>

                {/* Decorative Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-24 h-1 bg-blue-600 mx-auto mt-12 rounded-full"
                />
            </div>
        </section>
    );
}
