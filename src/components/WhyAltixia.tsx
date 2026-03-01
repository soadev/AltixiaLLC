import { motion } from 'framer-motion'
import { useContent } from '../hooks/useContent'
import { LucideIcon } from './LucideIcon'

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
      ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number],
    },
  },
}

export function WhyAltixia() {
  const content = useContent()

  return (
    <motion.section
      className="py-20 md:py-24 px-5 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-16 md:mb-20" variants={itemVariants}>
          <h2 className="font-serif text-[#333A49] text-3xl md:text-4xl font-bold mb-6">
            {content.whyAltixia.sectionTitle}
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
            {content.whyAltixia.subtitle}
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.whyAltixia.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white p-8 border border-[#E8EDF2] rounded-lg shadow-sm hover:shadow-md hover:border-[#3877AF]/30 transition-all group flex flex-col items-start"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-[#D5E8F8] rounded-full flex items-center justify-center text-[#3877AF] mb-6 group-hover:scale-110 transition-transform duration-300">
                <LucideIcon name={card.icon} size={24} />
              </div>

              {/* Content */}
              <h3 className="font-serif text-[#333A49] text-lg font-bold mb-3">
                {card.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
