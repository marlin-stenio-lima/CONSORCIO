import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://wa.me/message/26IO7K3EXNNMJ1"
            target="_blank"
            rel="noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25d366] text-white rounded-full shadow-2xl shadow-green-500/40 cursor-pointer hover:bg-[#20bd5a] transition-colors"
        >
            <MessageCircle className="w-8 h-8" />
            <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Falar com Messias
            </span>
            <div className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20" />
        </motion.a>
    );
}
