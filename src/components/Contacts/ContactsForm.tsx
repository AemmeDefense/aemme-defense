import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2, Send } from 'lucide-react';

export function ContactsForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        entityType: '',
        role: '',
        requirement: '',
        preference: 'email',
        message: '',
        legality: false,
        privacy: false
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate processing delay for effect
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Construct email body for testing
        const subject = `Richiesta Consulenza Web: ${formData.entityType}`;
        const body = `
Dettagli Nuova Richiesta:
--------------------------------
Nome e Cognome: ${formData.name}
Email Istituzionale: ${formData.email}
Telefono: ${formData.phone}

Tipologia Ente: ${formData.entityType}
Ruolo: ${formData.role}
Tipo Esigenza: ${formData.requirement}
Preferenza Contatto: ${formData.preference}

Descrizione Messaggio:
${formData.message}

--------------------------------
Privacy Accettata: ${formData.privacy ? 'Sì' : 'No'}
Dichiarazione Legittimità: ${formData.legality ? 'Sì' : 'No'}
        `;

        // Redirect to email client
        window.location.href = `mailto:marketing@aemmere.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setIsLoading(false);
        setIsSuccess(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData(prev => ({ ...prev, [name]: val }));
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0a0a0a] p-12 rounded-3xl border border-blue-500/30 flex flex-col items-center justify-center text-center h-full min-h-[600px]"
            >
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8 border border-green-500/20">
                    <Check className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Richiesta Inviata</h3>
                <p className="text-gray-400 max-w-md mx-auto text-lg">
                    Grazie per averci contattato. La tua richiesta è stata presa in carico dal nostro team tecnico. Riceverai un riscontro a breve all'indirizzo email indicato.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-12 px-8 py-3 bg-[#152d50] hover:bg-[#1e3a63] text-white rounded-lg transition-colors font-medium border border-blue-500/20"
                >
                    Invia nuova richiesta
                </button>
            </motion.div>
        );
    }

    return (
        <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">

            {/* Header */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-2">Richiedi una Consulenza</h2>
                <p className="text-gray-500 text-sm">I campi contrassegnati con * sono obbligatori.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-blue-400 uppercase tracking-widest">Nome e Cognome *</label>
                        <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all"
                            placeholder="Mario Rossi"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-blue-400 uppercase tracking-widest">Email Istituzionale *</label>
                        <input
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all"
                            placeholder="nome@ente.it"
                        />
                    </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Telefono (Opzionale)</label>
                    <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all"
                        placeholder="+39 333 1234567"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-blue-400 uppercase tracking-widest">Tipologia Ente *</label>
                        <div className="relative">
                            <select
                                required
                                name="entityType"
                                value={formData.entityType}
                                onChange={handleChange}
                                className="w-full bg-[#0f0f0f] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                            >
                                <option value="" disabled>Seleziona...</option>
                                <option value="forze_armate">Forze Armate</option>
                                <option value="forze_ordine">Forze dell'Ordine</option>
                                <option value="pa">Pubblica Amministrazione</option>
                                <option value="privato_difesa">Azienda Privata (Difesa/Sicurezza)</option>
                                <option value="ingegneria">Società Ingegneria / Survey</option>
                                <option value="altro">Altro</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-mono text-blue-400 uppercase tracking-widest">Ruolo / Funzione *</label>
                        <div className="relative">
                            <select
                                required
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full bg-[#0f0f0f] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                            >
                                <option value="" disabled>Seleziona...</option>
                                <option value="tecnico">Responsabile Tecnico</option>
                                <option value="acquisti">Ufficio Acquisti</option>
                                <option value="management">Direzione / Management</option>
                                <option value="operatore">Operatore</option>
                                <option value="consulente">Consulente</option>
                                <option value="altro">Altro</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                        </div>
                    </div>
                </div>

                {/* Requirement */}
                <div className="space-y-2">
                    <label className="text-xs font-mono text-blue-400 uppercase tracking-widest">Esigenza *</label>
                    <div className="relative">
                        <select
                            required
                            name="requirement"
                            value={formData.requirement}
                            onChange={handleChange}
                            className="w-full bg-[#0f0f0f] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                            <option value="" disabled>Seleziona tipologia richiesta...</option>
                            <option value="valutazione">Valutazione Tecnica</option>
                            <option value="pre_acquisto">Supporto Pre-Acquisto</option>
                            <option value="fattibilita">Studio di Fattibilità</option>
                            <option value="integrazione">Integrazione Sistemi</option>
                            <option value="altro">Altro</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                    </div>
                </div>

                {/* Preference */}
                <div className="space-y-3">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Preferenza contatto</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.preference === 'email' ? 'border-blue-500' : 'border-white/30 group-hover:border-white/50'}`}>
                                {formData.preference === 'email' && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />}
                            </div>
                            <input type="radio" name="preference" value="email" checked={formData.preference === 'email'} onChange={handleChange} className="hidden" />
                            <span className="text-gray-300 text-sm">Email</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.preference === 'phone' ? 'border-blue-500' : 'border-white/30 group-hover:border-white/50'}`}>
                                {formData.preference === 'phone' && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />}
                            </div>
                            <input type="radio" name="preference" value="phone" checked={formData.preference === 'phone'} onChange={handleChange} className="hidden" />
                            <span className="text-gray-300 text-sm">Telefonata</span>
                        </label>
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Descrizione Esigenza (Opzionale)</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all min-h-[100px]"
                        placeholder="Descrivi brevemente la tua necessità operativa..."
                    />
                    <p className="text-xs text-gray-600 italic">
                        Ogni informazione è strettamente riservata e non verrà condivisa esternamente.
                    </p>
                </div>

                <div className="h-px bg-white/10 my-8"></div>

                {/* Legal Checkboxes */}
                <div className="space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer group">
                        <div className={`mt-1 w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${formData.legality ? 'bg-blue-600 border-blue-600' : 'border-white/30 group-hover:border-white/50'}`}>
                            {formData.legality && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <input type="checkbox" name="legality" checked={formData.legality} onChange={handleChange} className="hidden" required />
                        <span className="text-gray-400 text-sm leading-tight selects-none">
                            Dichiaro di rappresentare un ente o un’azienda legittimata a richiedere consulenze in ambito difesa e sicurezza. *
                        </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer group">
                        <div className={`mt-1 w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${formData.privacy ? 'bg-blue-600 border-blue-600' : 'border-white/30 group-hover:border-white/50'}`}>
                            {formData.privacy && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <input type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} className="hidden" required />
                        <span className="text-gray-400 text-sm leading-tight selects-none">
                            Accetto l’informativa sulla privacy e il trattamento dei dati personali. *
                        </span>
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#152d50] hover:bg-[#1e3a63] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg uppercase tracking-widest transition-colors flex items-center justify-center gap-3 mt-8"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Elaborazione...
                        </>
                    ) : (
                        <>
                            Invia Richiesta di Consulenza
                            <Send className="w-5 h-5" />
                        </>
                    )}
                </button>

            </form>
        </div>
    );
}
