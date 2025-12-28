import type { ReactNode, HTMLAttributes } from 'react'
import './Card.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'elevated'
  hover?: boolean
}

function Card({
  children,
  variant = 'default',
  hover = true,
  className = '',
  ...props
}: CardProps) {
  const classes = [
    'card',
    `card-${variant}`,
    hover && 'hover-lift',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card
