import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { InteractiveFeaturesShowcase } from '@/components/InteractiveFeaturesShowcase'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <InteractiveFeaturesShowcase />
      <SecondaryFeatures />
      <Testimonials />
      <CallToAction />
      <Faqs />
    </>
  )
}
