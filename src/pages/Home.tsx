import HeroSection from '../components/landing/HeroSection'
import TrustMarquee from '../components/landing/TrustMarquee'
import ProblemSolutionSection from '../components/landing/ProblemSolutionSection'
import CapabilitiesSection from '../components/landing/CapabilitiesSection'
import ProcessSection from '../components/landing/ProcessSection'
// import TechnicalShowcaseSection from '../components/landing/TechnicalShowcaseSection'
import TestimonialsSection from '../components/landing/TestimonialsSection'
import MonetizationSection from '../components/landing/MonetizationSection'
import FAQSection from '../components/landing/FAQSection'
import FinalCTASection from '../components/landing/FinalCTASection'
import ContactSection from '../components/landing/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustMarquee />
      <ProblemSolutionSection />
      <CapabilitiesSection />
      <ProcessSection />
      {/* <TechnicalShowcaseSection /> */}
      <TestimonialsSection />
      <MonetizationSection />
      <FAQSection />
      <FinalCTASection />
      <ContactSection />
    </>
  )
}
