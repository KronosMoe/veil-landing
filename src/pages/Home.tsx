import { About } from "@/components/landing/about";
import { Contact } from "@/components/landing/contact";
import { FAQ } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <Header />
      <Hero />
      <About />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
