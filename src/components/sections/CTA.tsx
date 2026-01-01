import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Loader2 } from 'lucide-react'
import { Button } from '../ui/Button'

type SubmitState = 'idle' | 'loading' | 'success'

export function CTA() {
  const [email, setEmail] = useState('')
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitState('loading')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitState('success')
    setEmail('')

    // Reset after 3 seconds
    setTimeout(() => setSubmitState('idle'), 3000)
  }

  return (
    <section className="py-24 px-6">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Haberdar Olun
        </h2>
        <p className="text-lg text-white/60 mb-10">
          Lansman tarihi yaklaştığında size haber verelim.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta adresiniz"
            required
            disabled={submitState === 'loading'}
            className="flex-1 px-5 py-4 glass rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all disabled:opacity-50"
          />
          <Button
            type="submit"
            disabled={submitState === 'loading'}
            className="min-w-[180px]"
          >
            {submitState === 'idle' && (
              <>
                Beni Bilgilendir
                <ArrowUpRight className="w-5 h-5 rotate-45" />
              </>
            )}
            {submitState === 'loading' && (
              <>
                Gönderiliyor
                <Loader2 className="w-5 h-5 animate-spin" />
              </>
            )}
            {submitState === 'success' && (
              <>
                Kaydedildi
                <Check className="w-5 h-5" />
              </>
            )}
          </Button>
        </form>

        <p className="mt-4 text-sm text-white/40">
          Spam yapmayız, söz.
        </p>
      </motion.div>
    </section>
  )
}
