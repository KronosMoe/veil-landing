import Seo from '@/components/seo'
import LandingExperience from '@/components/landing/landing-experience'

export default function Home() {
  return (
    <>
      <Seo
        title="Veil — Group chat that moves work forward"
        description="Communication and coordination for small and medium-sized groups. Turn conversations into shared plans and tasks in a private Veil workspace."
        path="/"
      />
      <LandingExperience />
    </>
  )
}
