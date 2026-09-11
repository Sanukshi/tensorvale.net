export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Platform', href: '/#platform' },
  { label: 'Architecture', href: '/#architecture' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
]
