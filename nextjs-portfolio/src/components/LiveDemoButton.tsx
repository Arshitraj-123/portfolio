'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

export default function LiveDemoButton() {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowPopup(true);
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="flex items-center gap-2 px-4 py-2 bg-[#2d3348] rounded-lg text-sm text-white hover:bg-[#f56565] transition-colors cursor-pointer"
            >
                <ExternalLink size={16} />
                Live Demo
            </button>

            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]"
                        onClick={() => setShowPopup(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#1a1e2e] border border-white/10 rounded-xl p-8 max-w-md mx-4 text-center shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-16 h-16 bg-[#f56565]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ExternalLink size={32} className="text-[#f56565]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Sorry!</h3>
                            <p className="text-[#a0aec0] mb-6">Sorry, cannot be previewed now.</p>
                            <button
                                onClick={() => setShowPopup(false)}
                                className="flex items-center gap-2 px-6 py-2.5 bg-[#f56565] rounded text-white text-sm font-medium hover:bg-[#d55555] transition-colors mx-auto"
                            >
                                <X size={14} />
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
