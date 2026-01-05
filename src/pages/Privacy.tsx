import { useEffect } from 'react';
import { motion } from 'framer-motion';


export function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col">

            <div className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-xl text-blue-400 mb-12">Informativa sul trattamento dei dati personali</p>

                    <div className="space-y-12 text-gray-300 leading-relaxed text-lg">

                        {/* 0. Update Info */}
                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400">
                            <strong>Ultimo aggiornamento:</strong> 2026 – versione 1.0
                        </div>

                        {/* 1. Titolare */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">01.</span>
                                Titolare del trattamento
                            </h2>
                            <p className="mb-4">
                                <strong>Aemme Re S.r.l.</strong><br />
                                Sede legale: Via Lessolo 5 – 10153 Torino (TO)<br />
                                P. IVA / C.F.: 09248140015<br />
                                Email: <a href="mailto:aemmere@aemmere.it" className="text-blue-400 hover:text-blue-300 transition-colors">aemmere@aemmere.it</a><br />
                                PEC: <a href="mailto:aemmere@legalmail.it" className="text-blue-400 hover:text-blue-300 transition-colors">aemmere@legalmail.it</a>
                            </p>
                            <p>
                                Il Titolare del trattamento è responsabile della determinazione delle finalità e delle modalità con cui vengono trattati i dati personali raccolti attraverso il sito aemmedefense.it.
                            </p>
                        </section>

                        {/* 2. Contatti */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">02.</span>
                                Contatti per la protezione dei dati personali
                            </h2>
                            <p>
                                Per qualsiasi informazione o richiesta relativa al trattamento dei dati personali, l’interessato può contattare direttamente il Titolare all’indirizzo email <a href="mailto:aemmere@aemmere.it" className="text-blue-400 hover:text-blue-300 transition-colors">aemmere@aemmere.it</a>.
                            </p>
                        </section>

                        {/* 3. Categorie */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">03.</span>
                                Categorie di dati trattati
                            </h2>
                            <p className="mb-4">In relazione all’utilizzo del sito e ai servizi richiesti, possono essere oggetto di trattamento:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                                <li><strong>Dati identificativi e di contatto:</strong> nome, cognome, indirizzo email, numero di telefono.</li>
                                <li><strong>Informazioni professionali e aziendali:</strong> denominazione della società, ruolo, ambito di attività.</li>
                                <li><strong>Dati di natura tecnica connessi alla navigazione:</strong> indirizzo IP, log di sistema, tipo di browser e dispositivo.</li>
                                <li><strong>Ulteriori dati trasmessi volontariamente:</strong> informazioni inserite dall’utente tramite moduli di contatto o richieste di consulenza.</li>
                            </ul>
                        </section>

                        {/* 4. Finalità */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">04.</span>
                                Finalità del trattamento e basi giuridiche
                            </h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                                    <h3 className="font-bold text-white mb-2">Navigazione e Sicurezza</h3>
                                    <p className="text-sm mb-2">Sicurezza e tutela dell’infrastruttura.</p>
                                    <div className="text-xs text-gray-500">
                                        <div><strong>Base giuridica:</strong> legittimo interesse</div>
                                        <div><strong>Conservazione:</strong> 12 mesi</div>
                                    </div>
                                </div>
                                <div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                                    <h3 className="font-bold text-white mb-2">Richieste Contatto</h3>
                                    <p className="text-sm mb-2">Gestione richieste e consulenza.</p>
                                    <div className="text-xs text-gray-500">
                                        <div><strong>Base giuridica:</strong> misure precontrattuali</div>
                                        <div><strong>Conservazione:</strong> 12 mesi</div>
                                    </div>
                                </div>
                                <div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                                    <h3 className="font-bold text-white mb-2">Contratti e Amministrazione</h3>
                                    <p className="text-sm mb-2">Gestione rapporti contrattuali.</p>
                                    <div className="text-xs text-gray-500">
                                        <div><strong>Base giuridica:</strong> contratto</div>
                                        <div><strong>Conservazione:</strong> 10 anni</div>
                                    </div>
                                </div>
                                <div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                                    <h3 className="font-bold text-white mb-2">Obblighi Legali</h3>
                                    <p className="text-sm mb-2">Adempimenti contabili e fiscali.</p>
                                    <div className="text-xs text-gray-500">
                                        <div><strong>Base giuridica:</strong> obbligo di legge</div>
                                        <div><strong>Conservazione:</strong> 10 anni</div>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-6 text-sm italic text-gray-400 border-l-2 border-blue-500 pl-4">
                                Il conferimento dei dati richiesti per finalità contrattuali o precontrattuali è necessario. Il mancato conferimento può comportare l’impossibilità di dare seguito alle richieste dell’utente.
                            </p>
                        </section>

                        {/* 5. Modalità */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">05.</span>
                                Modalità di trattamento
                            </h2>
                            <p>
                                Il trattamento dei dati personali è effettuato mediante strumenti informatici e telematici, nel rispetto dei principi di liceità, correttezza, trasparenza, limitazione delle finalità e minimizzazione dei dati, in conformità al Regolamento (UE) 2016/679.
                            </p>
                        </section>

                        {/* 6. Sicurezza */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">06.</span>
                                Misure di sicurezza
                            </h2>
                            <p className="mb-4">Il Titolare adotta misure tecniche e organizzative adeguate a garantire un livello di sicurezza proporzionato al rischio, tra cui:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <li className="flex items-center gap-3 bg-[#0a0a0a] p-3 rounded border border-white/5">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Cifratura dei dati
                                </li>
                                <li className="flex items-center gap-3 bg-[#0a0a0a] p-3 rounded border border-white/5">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Backup periodici
                                </li>
                                <li className="flex items-center gap-3 bg-[#0a0a0a] p-3 rounded border border-white/5">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Controllo accessi
                                </li>
                                <li className="flex items-center gap-3 bg-[#0a0a0a] p-3 rounded border border-white/5">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Firewall e monitoraggio
                                </li>
                            </ul>
                        </section>

                        {/* 7. Destinatari */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">07.</span>
                                Soggetti destinatari dei dati
                            </h2>
                            <p>
                                I dati personali possono essere trattati da soggetti esterni che forniscono servizi di natura tecnica o organizzativa (ad esempio hosting, manutenzione IT, strumenti di comunicazione), formalmente designati quali Responsabili del trattamento ai sensi dell’art. 28 del GDPR.
                            </p>
                        </section>

                        {/* 8. Extra UE */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">08.</span>
                                Trasferimento dati Extra UE
                            </h2>
                            <p>
                                Nel caso in cui alcuni fornitori abbiano sede al di fuori dell’Unione Europea, il trasferimento dei dati avviene nel rispetto delle disposizioni del GDPR, mediante l’adozione di Clausole Contrattuali Standard (SCC) o altre garanzie ritenute idonee.
                            </p>
                        </section>

                        {/* 9. Minori */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">09.</span>
                                Dati relativi a minori
                            </h2>
                            <p>
                                I contenuti e i servizi del sito non sono rivolti a soggetti di età inferiore ai 16 anni. Qualora vengano involontariamente raccolti dati personali riferibili a minori, questi saranno cancellati tempestivamente.
                            </p>
                        </section>

                        {/* 10. Diritti */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">10.</span>
                                Diritti dell’interessato
                            </h2>
                            <p className="mb-4">L’interessato può esercitare in qualsiasi momento i diritti previsti dagli articoli 15–22 del GDPR:</p>
                            <div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/10">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
                                    <li className="flex items-center gap-2"><span className="text-blue-500">›</span> Accesso</li>
                                    <li className="flex items-center gap-2"><span className="text-blue-500">›</span> Rettifica e aggiornamento</li>
                                    <li className="flex items-center gap-2"><span className="text-blue-500">›</span> Cancellazione</li>
                                    <li className="flex items-center gap-2"><span className="text-blue-500">›</span> Limitazione del trattamento</li>
                                    <li className="flex items-center gap-2"><span className="text-blue-500">›</span> Portabilità dei dati</li>
                                    <li className="flex items-center gap-2"><span className="text-blue-500">›</span> Opposizione</li>
                                    <li className="flex items-center gap-2"><span className="text-blue-500">›</span> Revoca del consenso</li>
                                </ul>
                                <div className="mt-6 pt-4 border-t border-white/10 text-sm">
                                    Le richieste possono essere inoltrate a: <a href="mailto:aemmere@aemmere.it" className="text-blue-400 hover:text-white transition-colors">aemmere@aemmere.it</a>
                                </div>
                            </div>
                        </section>

                        {/* 11 & 12 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">11/12.</span>
                                Reclami e Aggiornamenti
                            </h2>
                            <p className="mb-4">
                                Qualora l’interessato ritenga che il trattamento dei propri dati personali avvenga in violazione della normativa applicabile, ha il diritto di proporre reclamo al <strong>Garante per la Protezione dei Dati Personali</strong>.
                            </p>
                            <p className="text-gray-400 text-sm">
                                La presente informativa può essere soggetta a revisioni o aggiornamenti nel tempo. Si invita pertanto l’utente a consultare periodicamente questa pagina per verificare eventuali modifiche.
                            </p>
                        </section>

                    </div>
                </motion.div>
            </div>
        </div>
    );
}
