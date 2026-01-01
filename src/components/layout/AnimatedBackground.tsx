import { motion } from 'framer-motion'

const shapes = [
  {
    className: 'w-[600px] h-[600px] -top-48 -right-48 bg-gradient-to-br from-primary-500 to-accent-500',
    delay: 0,
  },
  {
    className: 'w-[400px] h-[400px] -bottom-24 -left-24 bg-gradient-to-br from-accent-500 to-primary-500',
    delay: 5,
  },
  {
    className: 'w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-400',
    delay: 10,
  },
  {
    className: 'w-[200px] h-[200px] bottom-[30%] right-[10%] bg-gradient-to-br from-primary-600 to-accent-600',
    delay: 15,
  },
]

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[80px] opacity-30 ${shape.className}`}
          animate={{
            x: [0, 30, -20, 20, 0],
            y: [0, -30, 20, 30, 0],
            rotate: [0, 5, -5, 3, 0],
          }}
          transition={{
            duration: 20,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
