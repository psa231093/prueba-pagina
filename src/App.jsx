import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesGrid from './components/FeaturesGrid'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>
      <FeaturesGrid />
    </div>
  )
}
