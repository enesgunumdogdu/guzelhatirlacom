import { motion } from 'framer-motion'
import { GradientText } from '../ui/GradientText'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-5 py-20">
      <motion.div
        className="max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="mb-8 md:mb-10">
          <h1 className="font-display font-bold leading-[0.85] tracking-tight">
            <span className="block text-[clamp(5rem,18vw,10rem)] bg-gradient-to-br from-primary-500 via-primary-400 to-accent-500 bg-clip-text text-transparent bg-200% animate-gradient">
              güzel
            </span>
            <span className="block text-[clamp(5rem,18vw,10rem)] bg-gradient-to-br from-primary-500 via-primary-400 to-accent-500 bg-clip-text text-transparent bg-200% animate-gradient">
              hatırla
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 md:mb-8"
        >
          <GradientText>Sevdiklerinizin anılarını ölümsüzleştirin</GradientText>
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed text-balance px-2"
        >
          Kaybettiğimiz insanları ve onlarla yaşadığımız güzel anları
          biriktirip paylaşabileceğimiz dijital bir{' '}
          <strong className="text-primary-400 font-semibold">anı bahçesi</strong>.
        </motion.p>

        {/* Coming Soon Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-8 py-4 glass rounded-full"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500" />
          </span>
          <span className="text-base font-semibold tracking-widest uppercase text-white/80">
            Yakında
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
