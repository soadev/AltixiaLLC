import * as LucideIcons from 'lucide-react'

interface LucideIconProps {
  name: string
  size?: number
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const icons = LucideIcons as unknown as Record<string, React.ComponentType<any>>

export function LucideIcon({ name, size = 20, className }: LucideIconProps) {
  const Icon = icons[name]
  if (!Icon || typeof Icon !== 'function') return null
  return <Icon size={size} className={className} />
}
