import { ArrowUpRight } from 'lucide-react'
import { Badge, Button, Container } from '@/components/primitives'
import { primaryCta, secondaryCta } from '@/data/content'
import { useGitHubStats } from '@/hooks/useGitHubStats'

export function Hero() {
  const { stats, loading } = useGitHubStats()

  const formatCount = (value: number) => {
    if (value >= 1000) {
      return `${value >= 10000 ? Math.round(value / 1000) : (value / 1000).toFixed(1)}k`
    }
    return value.toString()
  }

  const heroStats = [
    {
      label: 'GitHub stars',
      value: stats ? formatCount(stats.stars) : loading ? 'Loading…' : '0',
      meta: 'Schedule 1 Mod Creator',
    },
    {
      label: 'Community watchers',
      value: stats ? formatCount(stats.watchers) : loading ? 'Loading…' : '0',
      meta: 'Subscribed to repo',
    },
  ]

  return (
    <header className="relative overflow-hidden bg-s1-ink text-s1-sand">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-s1-forest/40 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-s1-sand/20 blur-[140px]" />
      </div>
      <Container className="relative z-10 flex flex-col gap-16 pb-24 pt-14">
        <nav className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-2xl tracking-[0.3em] uppercase text-s1-sand/80">
            Schedule 1 Mod Creator
          </span>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-s1-sand/70">
            <a href="#features" className="hover:text-s1-sand">Features</a>
            <a href="#demo" className="hover:text-s1-sand">Demo</a>
            <a href={secondaryCta.href} target="_blank" rel="noreferrer" className="hover:text-s1-sand">Docs</a>
          </div>
        </nav>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="space-y-8 lg:col-span-6">
            <Badge className="border-0 bg-s1-forest/40 text-s1-sand">Built for S1API / MelonLoader</Badge>
            <div className="space-y-6">
              <h1 className="font-display text-4xl leading-tight tracking-tight text-s1-sand sm:text-5xl xl:text-6xl">
                Create Schedule One mods visually.
                <span className="relative mt-3 block">
                  Ship C# in minutes.
                  <span className="absolute -bottom-2 left-0 h-1 w-32 rounded-full bg-s1-sand/70" aria-hidden="true" />
                </span>
              </h1>
              <p className="max-w-prose text-lg text-s1-sand/80">
                Generate quests and NPCs for S1API + MelonLoader with confident grids, refined motion, and a Roslyn-powered export pipeline.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href={primaryCta.href} aria-label={`${primaryCta.label} — Schedule 1 Mod Creator`}>
                  {primaryCta.label}
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href={secondaryCta.href} target="_blank" rel="noreferrer" aria-label="View docs on GitHub">
                  {secondaryCta.label}
                </a>
              </Button>
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-s1-sand/60">
              Visual builder · Roslyn pipeline · WCAG AA+
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-[20px] border border-s1-forest/40 bg-gradient-to-br from-s1-deep/70 to-s1-ink/80 p-8 shadow-card">
              <div className="absolute inset-x-10 top-6 h-16 rounded-full bg-s1-sand/10 blur-3xl" aria-hidden="true" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-s1-sand/70">
                  <span>Live canvas</span>
                  <span className="inline-flex items-center gap-2 text-s1-sand">
                    Roslyn ready
                    <ArrowUpRight size={14} />
                  </span>
                </div>
                <div className="rounded-[16px] border border-s1-forest/30 bg-s1-ink/40 p-6">
                  <ul className="space-y-4 text-sm text-s1-sand/80">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-s1-sand" />
                      Visual Blueprint Editors for Quests, NPCs, and more.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-s1-sand" />
                      Configure triggers, rewards, NPC states, and more.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-s1-sand" />
                      Export MelonMod-ready C# in a single click, or compile your mod directly in the editor.
                    </li>
                  </ul>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[14px] border border-s1-forest/30 bg-s1-deep/40 px-4 py-3 text-xs uppercase tracking-[0.3em] text-s1-sand/80"
                    >
                      {stat.label}
                      <p className="mt-2 text-base font-display normal-case tracking-normal text-s1-sand">
                        {stat.value}
                      </p>
                      <p className="text-[0.65rem] tracking-[0.4em] text-s1-sand/60">{stat.meta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
