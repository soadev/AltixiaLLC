import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { useContent } from '../hooks/useContent'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export function HowItWorks() {
  const content = useContent()

  return (
    <section className="py-20 md:py-24 px-5 md:px-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-[#333A49] text-3xl md:text-4xl font-bold mb-4">
            {content.howItWorks.sectionTitle}
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            {content.howItWorks.subtitle}
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <motion.div
          className="hidden md:flex flex-row items-start justify-between w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {content.howItWorks.steps.map((step, index) => (
            <Fragment key={index}>
              <motion.div
                className="flex flex-col items-center text-center max-w-[180px]"
                variants={itemVariants}
              >
                <div className="w-14 h-14 bg-[#3877AF] text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0 mb-6 shadow-lg shadow-[#3877AF]/20">
                  {step.number}
                </div>
                <h3 className="font-serif text-[#333A49] font-bold text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Connector Line */}
              {index < content.howItWorks.steps.length - 1 && (
                <motion.div
                  className="h-0.5 bg-[#3877AF]/20 flex-1 self-start mt-7 mx-2"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                />
              )}
            </Fragment>
          ))}
        </motion.div>

        {/* Mobile Layout */}
        <motion.div
          className="flex md:hidden flex-col w-full space-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {content.howItWorks.steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <motion.div
                className="flex flex-row items-start gap-5"
                variants={itemVariants}
              >
                <div className="w-14 h-14 bg-[#3877AF] text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-lg shadow-[#3877AF]/20">
                  {step.number}
                </div>
                <div className="pt-2 pb-6">
                  <h3 className="font-serif text-[#333A49] font-bold text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {/* Vertical Connector */}
              {index < content.howItWorks.steps.length - 1 && (
                <div className="flex px-7 -mt-6 mb-2">
                  <motion.div
                    className="w-0.5 h-12 bg-[#3877AF]/20"
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
