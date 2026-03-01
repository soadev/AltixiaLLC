import { motion } from 'framer-motion'
import { useContent } from '../hooks/useContent'
import { LucideIcon } from './LucideIcon'

// Keywords to highlight in trust bar items (works for both FR and EN)
const HIGHLIGHT_KEYWORDS = ['48h', '100%', 'français', 'French', 'Wyoming', 'WhatsApp']

function highlightKeywords(text: string) {
  // Build a regex that matches any of the keywords
  const regex = new RegExp(`(${HIGHLIGHT_KEYWORDS.join('|')})`, 'gi')
  const parts = text.split(regex)

  return parts.map((part, i) => {
    if (HIGHLIGHT_KEYWORDS.some((kw) => kw.toLowerCase() === part.toLowerCase())) {
      return (
        <span key={i} className="font-bold text-[#3877AF]">
          {part}
        </span>
      )
    }
    return <span key={i}>{part}</span>
  })
}

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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
}

export function TrustBar() {
  const content = useContent()

  return (
    <section className="w-full bg-[#F7F9FC] py-8 px-5 md:px-8 border-y border-[#E8EDF2]">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6">
          {content.trustBar.items.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center gap-2 group"
              variants={itemVariants}
            >
              <div className="mb-1 transition-transform duration-300 group-hover:scale-110">
                <LucideIcon
                  name={item.icon}
                  size={24}
                  className="text-[#3877AF]"
                />
              </div>
              <p className="text-[#6B7280] text-sm font-medium leading-relaxed tracking-tight max-w-[160px]">
                {highlightKeywords(item.text)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
