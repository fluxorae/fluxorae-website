'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/919115377791"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgb(37,211,102,0.6)] transition-shadow duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0 hidden md:block border border-gray-100">
                Chat with us
            </span>
        </motion.a>
    )
}
