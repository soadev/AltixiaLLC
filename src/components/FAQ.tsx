import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useContent } from '../hooks/useContent'

export function FAQ() {
  const content = useContent()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#F7F9FC] py-24 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#333A49] leading-tight">
            {content.faq.sectionTitle}
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="flex flex-col">
          {content.faq.items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' as const }}
                className="border-b border-[#E8EDF2]"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex justify-between items-center text-left group transition-all duration-200 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={[
                      'font-sans text-[18px] font-semibold transition-colors duration-200',
                      isOpen
                        ? 'text-[#3877AF]'
                        : 'text-[#333A49] group-hover:text-[#3877AF]',
                    ].join(' ')}
                  >
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={[
                      'ml-4 flex-shrink-0',
                      isOpen ? 'text-[#3877AF]' : 'text-[#6B7280]',
                    ].join(' ')}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pr-8">
                        <p className="font-sans text-[16px] md:text-[18px] text-[#6B7280] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
