import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from 'framer-motion'
import { useContent } from '../hooks/useContent'

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number
  suffix: string
}) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest: number) => Math.round(latest))
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: 'easeOut' as const,
      })
      return controls.stop
    }
  }, [isInView, count, value])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v: number) => setDisplayValue(v))
    return unsubscribe
  }, [rounded])

  return (
    <div ref={ref} className="flex items-baseline justify-center">
      <span className="text-4xl md:text-5xl font-serif font-bold text-white">
        {displayValue}
      </span>
      <span className="text-4xl md:text-5xl font-serif font-bold text-white">
        {suffix}
      </span>
    </div>
  )
}

export function Stats() {
  const content = useContent()

  return (
    <section className="py-20 md:py-24 bg-[#333A49] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' as const }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-8"
        >
          {content.stats.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <AnimatedCounter value={item.value} suffix={item.suffix} />
              <p className="mt-4 uppercase tracking-widest text-xs font-bold text-white/60">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
