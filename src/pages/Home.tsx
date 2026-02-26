import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import QuemSomos from '../components/QuemSomos'
import MapaBrasil from '../components/MapaBrasil'
import Parceiros from '../components/Parceiros'
import WEG from '../components/WEG'
import Contato from '../components/Contato'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent />
      <Hero />
      <QuemSomos />
      <MapaBrasil />
      <Parceiros />
      <WEG />
      <Contato />
      <Footer />
    </div>
  )
}
