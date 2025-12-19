'use client'

import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Button } from '@/components/Button'

export default function DeletePage() {
  return (
    <div className="pb-20 pt-16 sm:pb-32 sm:pt-24 lg:pt-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0">
            {/* Delete Account Form */}
            <div className="flex flex-col gap-y-6 rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-200">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Delete Account
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Permanently delete your account and all associated services. This action cannot be undone.
                </p>
              </div>
              <form 
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Account deletion request submitted.')
                }}
                className="flex flex-col gap-y-4"
              >
                <TextField
                  label="Email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <Button type="submit" variant="solid" color="primary" className="w-full">
                  Delete My Account
                </Button>
              </form>
            </div>

            {/* Delete Data Form */}
            <div className="flex flex-col gap-y-6 rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-200">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Delete Data
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Request a deletion of your personal data while keeping your account active.
                </p>
              </div>
              <form 
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Data deletion request submitted.')
                }}
                className="flex flex-col gap-y-4"
              >
                <TextField
                  label="Email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <Button type="submit" variant="solid" color="gray" className="w-full">
                  Delete My Data
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
