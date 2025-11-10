import { Container, MediaFrame, SectionHeading } from '@/components/primitives'
import { demoClips } from '@/data/content'

export function VisualDemo() {
  return (
    <section id="demo" className="bg-s1-ink py-20 text-s1-sand">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Visual demo"
          title="See S1MC in action"
        />
        <div className="grid gap-12 lg:grid-cols-2">
          {demoClips.map((clip) => (
            <MediaFrame key={clip.id} clip={clip} />
          ))}
        </div>
      </Container>
    </section>
  )
}
