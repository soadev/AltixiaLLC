import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import { SEOHead } from '../components/SEOHead'

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
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export function LLCPage() {
  const content = useContent()
  const llc = content.llcPage

  return (
    <div>
      <SEOHead
        titleFr="Création de LLC aux États-Unis — Wyoming, Delaware, Nouveau-Mexique | Altixia"
        titleEn="US LLC Formation — Wyoming, Delaware, New Mexico | Altixia"
        descriptionFr="Créez votre LLC américaine au Wyoming, Delaware ou Nouveau-Mexique. Pack complet : LLC + EIN + ITIN + compte bancaire. En français, en 48h."
        descriptionEn="Create your US LLC in Wyoming, Delaware, or New Mexico. Complete pack: LLC + EIN + ITIN + bank account. In your language, in 48h."
        path="/llc"
      />
      {/* 1. LLC Hero Section */}
      <section className="bg-[#D5E8F8] py-20 px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-3xl md:text-6xl text-[#333A49] mb-6 leading-tight">
            {llc.title}
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            {llc.subtitle}
          </p>
        </motion.div>
      </section>

      {/* 2. State Comparison Section */}
      <section className="bg-white py-20 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {llc.states.map((state, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 border border-[#E8EDF2] rounded-lg hover:border-[#3877AF] transition-all duration-300 shadow-sm flex flex-col h-full"
              >
                <h3 className="font-serif text-2xl font-bold text-[#333A49] mb-6">
                  {state.name}
                </h3>
                <ul className="space-y-4 flex-grow">
                  {state.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Check size={18} className="text-[#10B981]" strokeWidth={3} />
                      </div>
                      <span className="text-[#6B7280] text-sm leading-relaxed">
                        {pro}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Pack Checklist Section */}
      <section className="bg-[#F7F9FC] py-20 px-5 md:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-lg border border-[#E8EDF2] shadow-sm"
          >
            <ul className="space-y-6">
              {llc.checklist.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <div className="bg-[#D5E8F8] p-1.5 rounded-full flex-shrink-0">
                    <Check size={20} className="text-[#3877AF]" strokeWidth={3} />
                  </div>
                  <span className="text-[#333A49] font-medium text-lg leading-tight">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="bg-white py-24 px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href={llc.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[#3877AF] text-white px-10 py-5 rounded font-bold hover:bg-[#2D6193] transition-all shadow-lg shadow-[#3877AF]/20 text-lg flex items-center justify-center gap-2"
            >
              {llc.ctaPrimary.label}
            </a>

            <a
              href={llc.ctaSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[#F7F9FC] text-[#333A49] px-10 py-5 rounded font-bold border border-[#E8EDF2] hover:bg-[#E8EDF2] transition-all text-lg flex items-center justify-center gap-3"
            >
              <MessageCircle size={22} className="text-[#10B981]" />
              {llc.ctaSecondary.label}
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
