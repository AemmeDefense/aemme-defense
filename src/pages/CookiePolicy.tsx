import { useEffect } from 'react';
import { motion } from 'framer-motion';

export function CookiePolicy() {
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
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
                    <p className="text-xl text-blue-400 mb-12">Informativa sui cookie</p>

                    <div className="space-y-12 text-gray-300 leading-relaxed text-lg">

                        {/* 0. Update Info */}
                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400">
                            <strong>Ultimo aggiornamento:</strong> 2026 – versione 1.0
                        </div>

                        {/* 1. Definizione */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">01.</span>
                                Definizione di cookie
                            </h2>
                            <p>
                                I cookie sono file di piccole dimensioni che i siti web inviano al dispositivo dell’utente durante la navigazione e che vengono memorizzati per essere poi ritrasmessi alle visite successive. Essi consentono il corretto funzionamento del sito, migliorano l’esperienza di utilizzo e permettono di raccogliere informazioni statistiche. Rientrano in questa informativa anche strumenti assimilabili ai cookie, quali pixel di tracciamento, local storage e tecnologie analoghe.
                            </p>
                        </section>

                        {/* 2. Categorie */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">02.</span>
                                Categorie di cookie utilizzate
                            </h2>
                            <p className="mb-6">Il sito aemmedefense.it utilizza, o può utilizzare, le seguenti tipologie di cookie:</p>

                            <div className="space-y-6">
                                <div className="border-l-2 border-blue-500 pl-6">
                                    <h3 className="text-lg font-bold text-white mb-1">Cookie tecnici e strettamente necessari</h3>
                                    <p className="text-sm text-gray-400">Essenziali per il funzionamento del sito e per consentire la corretta fruizione dei servizi richiesti dall’utente. Non richiedono il consenso.</p>
                                </div>
                                <div className="border-l-2 border-slate-700 pl-6">
                                    <h3 className="text-lg font-bold text-white mb-1">Cookie di funzionalità e preferenza</h3>
                                    <p className="text-sm text-gray-400">Permettono di memorizzare alcune impostazioni o scelte dell’utente (ad esempio lingua o preferenze di navigazione) al fine di migliorare l’esperienza complessiva.</p>
                                </div>
                                <div className="border-l-2 border-slate-700 pl-6">
                                    <h3 className="text-lg font-bold text-white mb-1">Cookie analitici</h3>
                                    <p className="text-sm text-gray-400">Raccolgono informazioni in forma aggregata e statistica sull’utilizzo del sito (pagine visitate, tempi di permanenza, interazioni). Qualora non anonimizzati, vengono installati solo previo consenso dell’utente.</p>
                                </div>
                                <div className="border-l-2 border-slate-700 pl-6">
                                    <h3 className="text-lg font-bold text-white mb-1">Cookie di marketing e profilazione</h3>
                                    <p className="text-sm text-gray-400">Utilizzati per analizzare il comportamento di navigazione dell’utente e proporre contenuti o comunicazioni in linea con i suoi interessi. Richiedono il consenso espresso dell’interessato.</p>
                                </div>
                                <div className="border-l-2 border-slate-700 pl-6">
                                    <h3 className="text-lg font-bold text-white mb-1">Cookie di terze parti</h3>
                                    <p className="text-sm text-gray-400">Installati da soggetti diversi dal Titolare del sito (ad esempio fornitori di servizi di analisi, piattaforme social o contenuti multimediali). Tali soggetti operano come autonomi titolari del trattamento.</p>
                                </div>
                            </div>
                        </section>

                        {/* 3. Gestione Consenso */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">03.</span>
                                Gestione del consenso
                            </h2>
                            <p className="mb-4">Al primo accesso al sito viene visualizzato un banner informativo che consente all’utente di:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 mb-4">
                                <li>accettare l’utilizzo di tutti i cookie;</li>
                                <li>rifiutare i cookie non necessari;</li>
                                <li>personalizzare le proprie preferenze in modo granulare.</li>
                            </ul>
                            <p>
                                Il consenso prestato può essere modificato o revocato in qualsiasi momento, senza pregiudicare la liceità del trattamento basata sul consenso precedentemente espresso.
                            </p>
                        </section>

                        {/* 4. Strumenti Utilizzati */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">04.</span>
                                Cookie e strumenti effettivamente utilizzati
                            </h2>
                            <p className="mb-4">Il sito può avvalersi di cookie e strumenti tecnologici connessi:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 mb-4">
                                <li>al funzionamento del CMS e delle funzionalità di base del sito;</li>
                                <li>all’analisi del traffico e delle prestazioni;</li>
                                <li>all’integrazione di contenuti multimediali o servizi esterni.</li>
                            </ul>
                            <p className="text-sm text-gray-500">
                                L’elenco specifico dei cookie utilizzati può variare nel tempo in funzione delle integrazioni tecniche effettivamente attive sul sito.
                            </p>
                        </section>

                        {/* 5. Browser */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">05.</span>
                                Gestione dei cookie tramite browser
                            </h2>
                            <p>
                                L’utente può gestire, limitare o disabilitare i cookie direttamente attraverso le impostazioni del proprio browser. La disattivazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito o di alcune sue funzionalità.
                            </p>
                        </section>

                        {/* 6. Extra UE */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">06.</span>
                                Trasferimento dei dati verso Paesi extra UE
                            </h2>
                            <p>
                                L’utilizzo di cookie di terze parti può comportare il trasferimento di dati personali verso Paesi situati al di fuori dello Spazio Economico Europeo. Tali trasferimenti avvengono nel rispetto delle disposizioni del GDPR, sulla base di Clausole Contrattuali Standard (SCC) o di altre garanzie adeguate previste dalla normativa.
                            </p>
                        </section>

                        {/* 7. Diritti */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-lg">07.</span>
                                Diritti dell’utente
                            </h2>
                            <p>
                                Per maggiori informazioni sul trattamento dei dati personali e per esercitare i diritti riconosciuti dagli articoli 15–22 del GDPR (accesso, rettifica, cancellazione, limitazione, portabilità, opposizione e revoca del consenso), l’utente può consultare la Privacy Policy o contattare il Titolare ai recapiti indicati.
                            </p>
                        </section>

                    </div>
                </motion.div>
            </div>
        </div>
    );
}
