import { motion } from 'framer-motion'
import { Heart, Users, Clock } from 'lucide-react'
import { GradientText } from '../ui/GradientText'

const features = [
  {
    icon: Heart,
    title: 'Anıları Koruyun',
    description: 'Sevdiklerinizle yaşadığınız özel anları, fotoğrafları ve hikayeleri güvenle saklayın.',
  },
  {
    icon: Users,
    title: 'Birlikte Hatırlayın',
    description: 'Aile ve arkadaşlarınızla anıları paylaşın, birlikte güzel günleri yeniden yaşayın.',
  },
  {
    icon: Clock,
    title: 'Sonsuza Dek',
    description: 'Anılar asla kaybolmaz. Gelecek nesillere aktarılacak dijital bir miras oluşturun.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          <GradientText>Neden Güzel Hatırla?</GradientText>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group glass rounded-3xl p-8 text-center hover:border-primary-500/50 transition-colors duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
