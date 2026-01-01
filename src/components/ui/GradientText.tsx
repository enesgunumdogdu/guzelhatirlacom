import { type ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3'
}

export function GradientText({
  children,
  className = '',
  as: Component = 'span'
}: GradientTextProps) {
  return (
    <Component
      className={`bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 bg-clip-text text-transparent bg-200% animate-gradient ${className}`}
    >
      {children}
    </Component>
  )
}
