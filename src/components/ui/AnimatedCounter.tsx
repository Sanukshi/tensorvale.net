import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/utils'

export default function AnimatedCounter({
  value,
  suffix = '',
  decimals = 0,
  className,
  duration = 1400,
}: {
  value: number
  suffix?: string
  decimals?: number
  className?: string
  duration?: number
}) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setStarted(true), {
      threshold: 0.35,
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const t0 = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration)
      setDisplay(value * (1 - Math.pow(1 - t, 3)))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, value, duration])

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString('en-US')

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {formatted}
      {suffix}
    </span>
  )
}
