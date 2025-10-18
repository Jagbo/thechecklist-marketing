import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none" />
              <div className="ml-4">
                <p className="text-base font-semibold">theChecklist</p>
                <p className="mt-1 text-sm text-gray-600">
                  Swipe Together, Decide Together
                </p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch rounded-2xl border border-gray-200 p-4 transition-colors hover:border-brand-accent sm:self-auto lg:mx-0 lg:self-auto lg:p-6">
            <div className="ml-0 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the app
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Available on iOS and Android. Start planning better today.
              </p>
              <div className="mt-4 flex gap-3">
                <Button href="#" className="text-sm">
                  App Store
                </Button>
                <Button href="#" variant="outline" className="text-sm">
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" className="ml-4 flex-none">
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </Button>
          </form>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; {new Date().getFullYear()} theChecklist. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
