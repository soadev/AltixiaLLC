import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { useContent } from '../hooks/useContent'

export function Objections() {
  const content = useContent()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  }

  return (
    <section className="py-24 px-5 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-[#333A49] text-3xl md:text-5xl mb-6">
            {content.objections.sectionTitle}
          </h2>
          <div className="w-24 h-1 bg-[#3877AF] mx-auto rounded-full opacity-20" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-12"
        >
          {content.objections.items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white border border-[#E8EDF2] rounded-xl p-8 md:p-12 hover:shadow-2xl hover:shadow-[#333A49]/5 hover:border-[#3877AF]/30 transition-all duration-500 relative"
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-24 items-start">
                {/* Myth / Objection (Left) */}
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#EF4444] border border-red-100">
                    <X size={20} strokeWidth={3} />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#EF4444]/60">
                      IDÉE REÇUE
                    </span>
                    <p className="text-[#6B7280] text-lg font-medium leading-relaxed italic">
                      &ldquo;{item.myth}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Reality / Response (Right) */}
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D5E8F8] flex items-center justify-center text-[#10B981] border border-[#9BCAEF]/30 group-hover:bg-[#3877AF] group-hover:text-white transition-colors duration-300">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#3877AF]">
                      LA RÉALITÉ ALTIXIA
                    </span>
                    <p className="text-[#333A49] text-lg font-bold leading-relaxed">
                      {item.reality}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
