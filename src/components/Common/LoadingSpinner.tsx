import { Loader2 } from "lucide-react";

export function LoadingSpinner() {
    return (
        <div className="fixed inset-0 bg-[#050505] z-50 flex flex-col items-center justify-center">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
            <span className="text-gray-400 text-sm tracking-widest uppercase animate-pulse">Caricamento...</span>
        </div>
    );
}
