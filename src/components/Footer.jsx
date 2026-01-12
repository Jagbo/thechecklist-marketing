import Link from 'next/link'

import { AppStoreLink } from '@/components/AppStoreLink'
import { Container } from '@/components/Container'
import { GooglePlayLink } from '@/components/GooglePlayLink'
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
                <AppStoreLink />
                <GooglePlayLink />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row md:justify-between md:pt-6">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} theChecklist. All rights reserved.
          </p>
          <div className="mt-6 flex gap-x-6 text-sm text-gray-500 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="/delete" className="hover:text-gray-900">
              Data Controls
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
