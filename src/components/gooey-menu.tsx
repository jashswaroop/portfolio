'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Copy, ExternalLink, FileText, X } from 'lucide-react';

export function ResumeMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('jaswanth.kandregula@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[9999] flex flex-col items-end">
      {/* Expanding Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(10px)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-2xl backdrop-blur-2xl"
            style={{ width: '220px' }}
          >
            <div className="flex flex-col gap-1 p-2">
              <a
                href="/resume.pdf"
                download="jaswanth-swaroop-krishna-kandregula.pdf"
                className="group flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 active:scale-95"
              >
                <span className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-white/20">
                    <Download className="h-4 w-4 text-neutral-300 group-hover:text-white" />
                  </div>
                  Download PDF
                </span>
              </a>

              <button
                onClick={handleCopy}
                className="group flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 active:scale-95"
              >
                <span className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-white/20">
                    <Copy className="h-4 w-4 text-neutral-300 group-hover:text-white" />
                  </div>
                  {copied ? 'Copied!' : 'Copy Email'}
                </span>
              </button>

              <a
                href="https://linkedin.com/in/jaswanthswaroop"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 active:scale-95"
              >
                <span className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-white/20">
                    <ExternalLink className="h-4 w-4 text-neutral-300 group-hover:text-white" />
                  </div>
                  LinkedIn
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/90 text-white shadow-[0_0_40px_rgba(250,45,72,0.2)] backdrop-blur-xl transition-all hover:border-white/40 hover:shadow-[0_0_60px_rgba(250,45,72,0.4)]"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FA2D48]/20 to-[#FF3B5C]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <FileText className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
