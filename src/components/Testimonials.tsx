import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useContent } from '../hooks/useContent'

export function Testimonials() {
  const content = useContent()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section className="py-24 px-5 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-[#333A49] text-3xl md:text-[40px] leading-tight mb-6">
            {content.testimonials.sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-[#3877AF] mx-auto opacity-20" />
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {content.testimonials.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white p-8 border border-[#E8EDF2] rounded-lg shadow-sm hover:border-[#3877AF] transition-all group flex flex-col h-full"
            >
              {/* Decorative Quote Mark */}
              <div className="mb-6">
                <Quote
                  size={40}
                  fill="#D5E8F8"
                  stroke="none"
                  className="text-[#D5E8F8] group-hover:text-[#9BCAEF] transition-colors"
                />
              </div>

              {/* Quote Content */}
              <blockquote className="flex-grow">
                <p className="font-sans italic text-[#333A49] text-lg leading-relaxed mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </blockquote>

              {/* Attribution */}
              <footer className="mt-auto border-t border-[#E8EDF2] pt-6">
                <p className="font-sans font-bold text-[#333A49] text-sm tracking-wide uppercase">
                  {item.author}
                </p>
                <p className="font-sans text-[#6B7280] text-xs mt-1 uppercase tracking-widest">
                  {item.role} — {item.location}
                </p>
              </footer>
            </motion.div>
          ))}
        </motion.div>

        {/* Centered Closing Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-sans text-[#6B7280] text-lg leading-relaxed italic border-t border-[#E8EDF2] pt-12">
            {content.testimonials.closingText}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
