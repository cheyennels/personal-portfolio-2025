import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
  className?: string
}

export default function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: ButtonProps) {
  const baseStyles = 'button-link'
  const variantStyles =
    variant === 'primary' ? 'button-primary' : 'button-secondary'
  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`.trim()

  if (external || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={combinedClassName}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  )
}
