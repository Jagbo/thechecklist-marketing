import { Button } from '@/components/Button'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gray-700 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#9ca0c8" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start Planning Better Together
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Download theChecklist and make group decisions effortless. Available
            for iOS and Android.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="#" color="white">
              Download on App Store
            </Button>
            <Button href="#" color="white">
              Get it on Google Play
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
