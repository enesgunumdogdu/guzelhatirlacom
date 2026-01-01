import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '../ui/Button'

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

export function CTA() {
  const [email, setEmail] = useState('')
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitState('loading')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'newsletter',
          email: email,
        }).toString(),
      })

      if (response.ok) {
        setSubmitState('success')
        setEmail('')
        setTimeout(() => setSubmitState('idle'), 3000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch {
      setSubmitState('error')
      setTimeout(() => setSubmitState('idle'), 3000)
    }
  }

  return (
    <section className="py-16 md:py-24 px-5">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
          Haberdar Olun
        </h2>
        <p className="text-xl md:text-2xl text-white/60 mb-10 md:mb-12">
          Lansman tarihi yaklaştığında size haber verelim.
        </p>

        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta adresiniz"
            required
            disabled={submitState === 'loading'}
            className="flex-1 px-6 py-5 text-lg glass rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all disabled:opacity-50"
          />
          <Button
            type="submit"
            disabled={submitState === 'loading'}
            size="lg"
            className="min-w-[200px] text-lg"
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
            {submitState === 'error' && (
              <>
                Hata oluştu
                <AlertCircle className="w-5 h-5" />
              </>
            )}
          </Button>
        </form>

        <p className="mt-6 text-base text-white/40">
          Spam yapmayız, söz.
        </p>
      </motion.div>
    </section>
  )
}
