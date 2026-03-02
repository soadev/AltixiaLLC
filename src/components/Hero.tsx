import { motion } from 'framer-motion'
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from 'lucide-react'
import { useContent } from '../hooks/useContent'
import { LucideIcon } from './LucideIcon'

/**
 * Hero component for Altixia LLC.
 * Implements the Modern Classic design system with DM Serif Display and DM Sans.
 */
export function Hero() {
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
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  }

  // Split title to highlight "48h" in brand blue
  const renderTitle = (title: string) => {
    const parts = title.split(/(48h)/i)
    return parts.map((part, i) =>
      part.toLowerCase() === '48h' ? (
        <span key={i} className="text-[#3877AF]">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    )
  }

  return (
    <section className="relative overflow-hidden py-24 px-5 md:px-8 border-b border-[#E8EDF2] bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        {/* LEFT COLUMN: Text Content */}
        <motion.div
          className="z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-[#D5E8F8] text-[#3877AF] px-4 py-1.5 rounded-full text-sm font-bold">
              {content.hero.badge}
            </span>
          </motion.div>

          {/* H1 Title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-[#333A49] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
          >
            {renderTitle(content.hero.title)}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] mb-10 max-w-lg leading-relaxed text-lg font-sans"
          >
            {content.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a
              href={content.hero.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3877AF] text-white px-8 py-4 rounded font-bold hover:bg-[#2D6193] shadow-lg shadow-[#3877AF]/20 flex items-center justify-center gap-2 transition-all"
            >
              {content.hero.ctaPrimary.label} <ArrowRight size={20} />
            </a>
            <a
              href={content.hero.ctaSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F7F9FC] text-[#333A49] px-8 py-4 rounded font-bold border border-[#E8EDF2] hover:bg-[#E8EDF2] flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle size={20} className="text-[#25D366]" />{' '}
              {content.hero.ctaSecondary.label}
            </a>
          </motion.div>

          {/* Trust Badges Row */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-6">
            {content.hero.trustBadges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-[#6B7280] text-sm font-medium"
              >
                <LucideIcon name={badge.icon} size={18} className="text-[#3877AF]" />
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Decorative Visual (Desktop Only) */}
        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Tilted background decoration */}
          <div className="absolute -inset-4 bg-[#D5E8F8] rounded-2xl -rotate-2 z-0"></div>

          {/* Main Card */}
          <div className="relative bg-white p-8 rounded-xl border border-[#E8EDF2] shadow-xl z-10">
            <div className="space-y-6">
              {/* Trust Item 1 */}
              <div className="flex items-start gap-4 p-4 bg-[#F7F9FC] rounded-lg border border-transparent hover:border-[#3877AF]/10 transition-colors">
                <CheckCircle2
                  className="text-[#10B981] mt-1 shrink-0"
                  size={24}
                />
                <div>
                  <h4 className="font-bold text-[#333A49] text-lg">
                    Accompagnement 100% en Français
                  </h4>
                  <p className="text-sm text-[#6B7280] mt-1 leading-relaxed">
                    Zéro barrière de la langue pour vos démarches administratives
                    et fiscales aux USA.
                  </p>
                </div>
              </div>

              {/* Trust Item 2 */}
              <div className="flex items-start gap-4 p-4 bg-[#F7F9FC] rounded-lg border border-transparent hover:border-[#3877AF]/10 transition-colors">
                <Clock className="text-[#3877AF] mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-[#333A49] text-lg">
                    Délai record : 48h
                  </h4>
                  <p className="text-sm text-[#6B7280] mt-1 leading-relaxed">
                    Processus optimisé et direct avec les autorités de l'état US
                    pour un lancement rapide.
                  </p>
                </div>
              </div>

              {/* Decorative badge inside card */}
              <div className="pt-4 border-t border-[#E8EDF2] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#3877AF] rounded flex items-center justify-center text-white font-bold text-sm italic">
                    A
                  </div>
                  <span className="text-xs font-bold text-[#333A49] tracking-widest uppercase">
                    Altixia Certifié
                  </span>
                </div>
                <div className="text-[#10B981] flex items-center gap-1">
                  <ShieldCheck size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    IRS accredited Tax Preparer
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating abstract element */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut' as const,
            }}
            className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#3877AF]/5 rounded-full blur-2xl z-0"
          />
        </motion.div>
      </div>
    </section>
  )
}
