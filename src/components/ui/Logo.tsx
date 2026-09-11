import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

type LogoProps = {
  className?: string
  /** @deprecated kept for call-site compatibility */
  dark?: boolean
  darkBg?: boolean
  /** mark = icon only; full = wordmark image; auto = full on lg+, mark below */
  variant?: 'full' | 'mark' | 'auto'
  /** When set, wraps the logo in a home link. Omit if parent already links. */
  to?: string
}

/** Brand logo — uses official TensorVale mark + wordmark assets. */
export default function Logo({
  className,
  variant = 'auto',
  to,
}: LogoProps) {
  const content = (
    <span className={cn('inline-flex items-center', className)}>
      {(variant === 'mark' || variant === 'auto') && (
        <img
          src="/images/tensorvale-mark.png"
          alt={variant === 'mark' ? 'TensorVale' : ''}
          width={56}
          height={56}
          className={cn(
            'h-11 w-11 object-contain sm:h-14 sm:w-14',
            variant === 'auto' && 'lg:hidden',
          )}
          decoding="async"
        />
      )}
      {(variant === 'full' || variant === 'auto') && (
        <img
          src="/images/tensorvale-logo.png"
          alt="TensorVale"
          width={280}
          height={64}
          className={cn(
            'h-11 w-auto max-w-[min(100%,200px)] object-contain object-left sm:h-12 sm:max-w-none lg:h-14',
            variant === 'auto' && 'hidden lg:block',
          )}
          decoding="async"
        />
      )}
    </span>
  )

  if (!to) return content

  return (
    <Link to={to} aria-label="TensorVale home" className="inline-flex shrink-0">
      {content}
    </Link>
  )
}
