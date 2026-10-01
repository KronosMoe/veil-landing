import Seo from '@/components/seo'
import VeilLanding from '@/components/landing/veil-landing'

export default function Home() {
  return (
    <>
      <Seo
        title="Veil — A place where you define how you work."
        description="Everything happens in a Space. Compose your conversations, meetings, ideas and shared work. Veil helps surface what deserves your attention."
        path="/"
      />
      <VeilLanding />
    </>
  )
}
