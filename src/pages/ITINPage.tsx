import { motion } from 'framer-motion'
import { Check, MessageCircle, Clock } from 'lucide-react'
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

export function ITINPage() {
  const content = useContent()
  const itin = content.itinPage

  return (
    <div>
      <SEOHead
        titleFr="Demande d'ITIN — Numéro fiscal personnel US | Altixia"
        titleEn="ITIN Application — US Personal Tax Number | Altixia"
        descriptionFr="Obtenez votre ITIN (Individual Taxpayer Identification Number) avec Altixia. Dossier complet, suivi personnalisé, en français."
        descriptionEn="Get your ITIN (Individual Taxpayer Identification Number) with Altixia. Complete application, personalized follow-up, in your language."
        path="/itin"
      />

      {/* 1. Hero Section */}
      <section className="bg-[#D5E8F8] py-20 px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/60 text-[#3877AF] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Clock size={16} />
            ~7 semaines
          </div>
          <h1 className="font-serif text-3xl md:text-6xl text-[#333A49] mb-6 leading-tight">
            {itin.title}
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            {itin.subtitle}
          </p>
        </motion.div>
      </section>

      {/* 2. Description Section */}
      <section className="bg-white py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#6B7280] text-lg leading-relaxed text-center"
          >
            {itin.description}
          </motion.p>
        </div>
      </section>

      {/* 3. Benefits Checklist */}
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
              {itin.benefits.map((item, index) => (
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
          <p className="text-[#6B7280] text-sm mb-8 italic">
            {itin.timeline}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Order Button */}
            <a
              href={itin.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[#3877AF] text-white px-10 py-5 rounded font-bold hover:bg-[#2D6193] transition-all shadow-lg shadow-[#3877AF]/20 text-lg flex items-center justify-center gap-2"
            >
              {itin.ctaPrimary.label}
            </a>

            {/* Booking Button */}
            <a
              href={itin.ctaBooking.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[#F7F9FC] text-[#333A49] px-10 py-5 rounded font-bold border border-[#E8EDF2] hover:bg-[#E8EDF2] transition-all text-lg flex items-center justify-center gap-2"
            >
              {itin.ctaBooking.label}
            </a>

            {/* WhatsApp Button (green unified) */}
            <a
              href={itin.ctaSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[#25D366] text-white px-10 py-5 rounded font-bold hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20 text-lg flex items-center justify-center gap-3"
            >
              <MessageCircle size={22} fill="white" className="text-[#25D366]" />
              {itin.ctaSecondary.label}
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
