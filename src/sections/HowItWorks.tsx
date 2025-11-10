import { Container, SectionHeading } from '@/components/primitives'
import { howItWorksSteps } from '@/data/content'

export function HowItWorks() {
  return (
    <section id="workflow" className="bg-s1-deep/40 py-20 text-s1-sand">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="How it works"
          title="Design → Configure → Generate C# → Install"
          description="Four deliberate beats that move from ideation to a MelonLoader-ready mod without ever breaking flow."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-[16px] border border-s1-forest/40 bg-s1-ink/40 p-6 shadow-card"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-s1-forest/40 bg-s1-deep/70 text-s1-sand">
                <step.icon size={20} />
              </div>
              <h3 className="font-display text-xl text-s1-sand">{step.title}</h3>
              <p className="mt-2 text-sm text-s1-sand/75">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
