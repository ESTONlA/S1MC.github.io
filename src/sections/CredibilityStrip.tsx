import { Container, LogoLockup, SectionHeading } from '@/components/primitives'
import { credibilityLogos } from '@/data/content'

export function CredibilityStrip() {
  return (
    <section className="bg-s1-deep py-14 text-s1-sand" aria-label="Credibility">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <SectionHeading
          eyebrow="Built for"
          title="S1API + MelonLoader"
          description="Tested against 0.7.0 MelonLoader builds, with Roslyn analyzers baked in."
          className="lg:max-w-lg"
        />
        <LogoLockup logos={credibilityLogos} />
      </Container>
    </section>
  )
}
