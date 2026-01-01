import type { ReactNode, HTMLAttributes } from 'react'

interface AnimatedTextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right' | 'scale-in'
  delay?: number
}

export function AnimatedText({
  children,
  as: Component = 'div',
  animation = 'fade-in',
  delay = 0,
  className = '',
  ...props
}: AnimatedTextProps) {
  const animationClass = `animate-${animation}`
  const delayClass = delay > 0 ? `stagger-${delay}` : ''
  const classes = [animationClass, delayClass, className].filter(Boolean).join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
