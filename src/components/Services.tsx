import { motion } from 'framer-motion'
import { useContent } from '../hooks/useContent'
import { LucideIcon } from './LucideIcon'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
}

export function Services() {
  const content = useContent()

  return (
    <motion.section
      className="py-20 md:py-24 px-5 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="font-serif text-[#333A49] text-3xl md:text-4xl font-bold mb-4">
            {content.services.sectionTitle}
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            {content.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white p-6 md:p-8 rounded-lg border border-[#E8EDF2] shadow-sm hover:shadow-md hover:border-[#3877AF]/30 transition-all group flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-[#D5E8F8] rounded-full flex items-center justify-center text-[#3877AF] mb-6 shrink-0">
                <LucideIcon name={card.icon} size={24} />
              </div>

              {/* Content */}
              <h3 className="font-serif text-[#333A49] text-lg font-bold mb-2">
                {card.title}
              </h3>

              <p className="text-[#6B7280] text-sm leading-relaxed mb-6 flex-grow">
                {card.description}
              </p>

              {/* Badge Pill */}
              <div className="mt-auto">
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-[#D5E8F8] text-[#3877AF]">
                  {card.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
