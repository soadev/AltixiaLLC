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
      ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
    },
  },
}

export function Problem() {
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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#333A49] font-bold mb-6">
            {content.problem.sectionTitle}
          </h2>
          <p className="text-[#6B7280] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {content.problem.subtitle}
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.problem.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white p-8 border border-[#E8EDF2] rounded-lg hover:border-[#3877AF]/30 hover:shadow-md transition-all group flex flex-col items-start"
            >
              <div className="w-12 h-12 bg-[#D5E8F8] rounded-full flex items-center justify-center text-[#3877AF] mb-6 group-hover:bg-[#3877AF] group-hover:text-white transition-colors duration-300">
                <LucideIcon name={card.icon} size={24} />
              </div>
              <h3 className="font-serif text-xl text-[#333A49] font-bold mb-3">
                {card.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition Phrase */}
        <motion.div className="mt-16 md:mt-20 text-center" variants={itemVariants}>
          <p className="text-[#3877AF] font-semibold text-lg md:text-xl italic">
            {content.problem.transition}
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
