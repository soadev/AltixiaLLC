import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Info } from 'lucide-react'
import { useContent } from '../hooks/useContent'

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
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export function PackLLC() {
  const content = useContent()

  return (
    <section className="py-20 md:py-24 px-5 md:px-10 bg-[#EBF3FA] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-[#333A49] text-3xl md:text-4xl font-bold mb-4">
            {content.packLLC.sectionTitle}
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg mb-12">
            {content.packLLC.subtitle}
          </p>
        </motion.div>

        {/* Main Content Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="bg-white rounded-xl p-8 shadow-sm border border-[#E8EDF2] text-left"
          >
            {/* Checklist */}
            <ul className="space-y-4 mb-10">
              {content.packLLC.checklist.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="text-[#10B981] flex-shrink-0 mt-0.5"
                    size={22}
                  />
                  <span className="text-[#333A49] font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-4">
              <a
                href={content.packLLC.ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3877AF] text-white px-8 py-4 rounded font-bold hover:bg-[#2D6193] shadow-lg shadow-[#3877AF]/20 flex items-center justify-center gap-2 w-full sm:w-auto transition-colors duration-200"
              >
                {content.packLLC.ctaPrimary.label}
                <ArrowRight size={20} />
              </a>

              <a
                href={content.packLLC.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3877AF] text-sm hover:underline text-center"
              >
                {content.packLLC.ctaSecondary.label}
              </a>
            </div>

            {/* Callout Box */}
            <motion.div
              variants={fadeInVariants}
              className="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-lg p-4 mt-8 flex gap-3 items-start"
            >
              <Info className="text-[#F59E0B] flex-shrink-0 mt-0.5" size={18} />
              <p className="text-[#92400E] text-sm leading-relaxed">
                {content.packLLC.callout}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
