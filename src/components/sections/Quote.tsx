import { motion } from 'framer-motion'
import { GradientText } from '../ui/GradientText'

export function Quote() {
  return (
    <section className="py-16 md:py-24 px-5">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <blockquote className="relative py-16">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[100px] md:text-[120px] font-serif text-primary-500/20 leading-none select-none">
            "
          </span>
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-relaxed italic pt-6">
            <GradientText>
              Sevdiklerimiz gözden kaybolabilir ama kalpten asla.
            </GradientText>
          </p>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[100px] md:text-[120px] font-serif text-primary-500/20 leading-none select-none rotate-180">
            "
          </span>
        </blockquote>
      </motion.div>
    </section>
  )
}
