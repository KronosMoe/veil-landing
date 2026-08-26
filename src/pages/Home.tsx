import Seo from '@/components/seo'
import { CallToAction } from '@/components/landing/cta'
import { FAQ } from '@/components/landing/faq'
import { Features } from '@/components/landing/features'
import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { Security } from '@/components/landing/security'
import { Showcase } from '@/components/landing/showcase'

export default function Home() {
  return (
    <>
      <Seo
        title="Veil — Encrypted chat, calls and whiteboards for your team"
        description="Veil is a free workspace for teams: encrypted messaging, voice and video calls, whiteboards and shared to-dos. Messages are encrypted in your browser. No ads, no trackers."
        path="/"
      />
      <Header />
      <main>
        <Hero />
        <Showcase />
        <Features />
        <Security />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
