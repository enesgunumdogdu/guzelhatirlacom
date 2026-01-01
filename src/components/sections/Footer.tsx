import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 bg-black/30">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-sm text-white/50 flex items-center justify-center gap-2">
          Made with{' '}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-base"
          >
            💜
          </motion.span>{' '}
          by{' '}
          <a
            href="https://enesgunumdogdu.com.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 font-semibold hover:text-accent-400 transition-colors"
          >
            3nes
          </a>
        </p>
      </motion.div>
    </footer>
  )
}
