import { useEffect } from 'react';
import { ContactsForm } from '../components/Contacts/ContactsForm';
import { ContactsInfo } from '../components/Contacts/ContactsInfo';

export function Contacts() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans">
            <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">

                {/* Intro */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Contattaci
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Per richieste ufficiali e supporto specializzato. Compila il modulo per essere ricontattato.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* FORM COLUMN (WIDER) */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <ContactsForm />
                    </div>

                    {/* INFO COLUMN (NARROWER & STICKY) */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="lg:sticky lg:top-32 h-fit">
                            <ContactsInfo />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
