import type { Logo } from '@/data/content'

interface LogoLockupProps {
  logos: Logo[]
}

export function LogoLockup({ logos }: LogoLockupProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
      {logos.map((logo) => (
        <a
          key={logo.name}
          href={logo.href}
          className="group flex h-16 w-24 items-center justify-center rounded-md border border-s1-forest/40 bg-s1-ink/30 text-center text-sm font-semibold tracking-[0.3em] text-s1-sand/70 transition hover:text-s1-sand"
          aria-label={`Learn more about ${logo.name}`}
          target="_blank"
          rel="noreferrer"
        >
          <span>{logo.abbr}</span>
        </a>
      ))}
    </div>
  )
}
