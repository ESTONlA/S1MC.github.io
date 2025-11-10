import { Container, SectionHeading } from '@/components/primitives'
import { featureList } from '@/data/content'

export function FeaturesGrid() {
  return (
    <section id="features" className="bg-s1-ink py-20 text-s1-sand">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Feature system"
          title="Cards with editorial whitespace and confident grids"
          description="Quest/NPC builder, triggers & conditions, scaffolding, Roslyn pipeline, and a single MelonMod entry point."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureList.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col rounded-[18px] border border-s1-forest/40 bg-s1-deep/50 p-6 shadow-card"
            >
              <div className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-s1-sand/80">
                <feature.icon size={18} className="text-s1-sand" />
                {feature.meta}
              </div>
              <h3 className="font-display text-2xl text-s1-sand">{feature.title}</h3>
              <p className="mt-3 text-sm text-s1-sand/80">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
