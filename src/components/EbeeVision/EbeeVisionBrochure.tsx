import { motion } from 'framer-motion';
import brochurePdf from '../../assets/ebeevisionbrochure.pdf';

export function EbeeVisionBrochure() {
    return (
        <section className="bg-black py-12 px-4 relative flex justify-center items-center">

            <motion.a
                href={brochurePdf}
                download="eBee_VISION_Brochure.pdf"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm md:text-base font-medium tracking-wide border-b border-transparent hover:border-blue-500 pb-0.5"
            >
                <span>Scarica Brochure Tecnica</span>
                <svg
                    className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            </motion.a>

        </section>
    );
}
