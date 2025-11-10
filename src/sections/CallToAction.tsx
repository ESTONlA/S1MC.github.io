import { Container, SectionHeading, Button } from '@/components/primitives'
import { primaryCta, secondaryCta } from '@/data/content'

export function CallToAction() {
  return (
    <section id="download" className="bg-s1-ink py-24 text-s1-sand">
      <Container>
        <div className="rounded-[24px] border border-s1-forest/40 bg-gradient-to-br from-s1-deep/70 to-s1-ink/80 px-8 py-12 shadow-card">
          <SectionHeading
            eyebrow="Ready to mod?"
            title="Download the editor or drop into the docs"
            description="S1MC is free to use and open source, so you can get started right away."
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a href={primaryCta.href}>{primaryCta.label}</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={secondaryCta.href} target="_blank" rel="noreferrer">
                {secondaryCta.label}
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
