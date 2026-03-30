import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#111111] text-white">
      <Navbar />
      <Hero />
      <Overview />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
