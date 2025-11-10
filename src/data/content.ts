import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  Eye,
  GitMerge,
  Network,
  PackageCheck,
  PenTool,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'

const placeholderPoster =
  'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 450\"><rect width=\"600\" height=\"450\" fill=\"%230B1921\"/><rect x=\"30\" y=\"40\" width=\"540\" height=\"370\" rx=\"24\" fill=\"%23243D37\"/><text x=\"50%25\" y=\"50%25\" fill=\"%23E7CC9F\" font-size=\"32\" font-family=\"Space Grotesk\" text-anchor=\"middle\">Demo loop placeholder</text></svg>'

export type DemoClip = {
  id: string
  label: string
  title: string
  description: string
  caption: string
  media: {
    poster: string
    alt: string
    mp4?: string
    gif?: string
  }
}

export const demoClips: DemoClip[] = [
  {
    id: 'quest-flow',
    label: 'No-code',
    title: 'Author mod elements visually',
    description: 'Sketch complex branching quests with triggers, objectives, or build custom NPCs, all from within the editor.',
    caption: 'S1MC automatically generates your mod elements for S1API.',
    media: {
      poster: placeholderPoster,
      alt: 'Quest builder canvas preview',
      gif: '/imgs/showcase1.gif',
    },
  },
  {
    id: 'csharp-output',
    label: 'One-click',
    title: 'Generate clean C#',
    description: 'Compile-ready Roslyn pipeline emits MelonLoader mods with a single entry point.',
    caption: 'Instant C# preview before exporting to your workspace.',
    media: {
      poster: placeholderPoster,
      alt: 'Generated C# sample output',
      gif: '/imgs/showcase2.gif',
    },
  },
]

export type HowItWorksStep = {
  title: string
  description: string
  icon: LucideIcon
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    title: 'Design',
    description: 'Compose quests, NPCs, and triggers all in a visual editor.',
    icon: PenTool,
  },
  {
    title: 'Configure',
    description: 'Dial conditions, rewards, and progression pacing with sensible defaults.',
    icon: Settings2,
  },
  {
    title: 'Generate C#',
    description: 'Roslyn templates emit type-safe mods aligned with the latest S1API.',
    icon: Code2,
  },
  {
    title: 'Install',
    description: 'Ship directly to the game with 1 click. Test your mod with the built in connector mod.',
    icon: PackageCheck,
  },
]

export type Feature = {
  title: string
  description: string
  icon: LucideIcon
  meta: string
}

export const featureList: Feature[] = [
  {
    title: 'Quest & NPC Builder',
    description: 'Author full questlines, NPC states, and dialogue with a visual editor.',
    icon: Workflow,
    meta: 'Editor',
  },
  {
    title: 'Triggers & Conditions',
    description: 'Time, inventory, and world triggers with conditional stacks.',
    icon: Network,
    meta: 'Logic',
  },
  {
    title: 'Project Scaffolding',
    description: 'S1MC automatically scaffolds your project with the necessary files and folders.',
    icon: GitMerge,
    meta: 'Dev flow',
  },
  {
    title: 'Roslyn Pipeline',
    description: 'Analyzes and formats your code prior to exporting for clean C# output.',
    icon: Sparkles,
    meta: 'Compile',
  },
  {
    title: 'Single MelonMod Entry',
    description: 'Outputs base MelonMod class with that hooks into all of your mod elements.',
    icon: ShieldCheck,
    meta: 'Runtime',
  },
  {
    title: 'Real-time Preview',
    description: 'Preview NPC appearances, and more, live in-game with the built in connector mod.',
    icon: Eye,
    meta: 'Preview',
  },
]

export type Logo = {
  name: string
  href: string
  abbr: string
}

export const credibilityLogos: Logo[] = [
  { name: 'S1API', href: 'https://github.com/ifBars/S1API', abbr: 'S1API' },
  { name: 'MelonLoader', href: 'https://melonwiki.xyz', abbr: 'ML' },
  { name: 'Roslyn', href: 'https://github.com/dotnet/roslyn', abbr: 'Roslyn' },
]

export const primaryCta = {
  label: 'Try the Editor',
  href: '#download',
}

export const secondaryCta = {
  label: 'Docs on GitHub',
  href: 'https://github.com/ESTONlA/ModcreatorSchedule1',
}
