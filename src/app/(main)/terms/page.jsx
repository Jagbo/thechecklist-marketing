'use client'

import { Container } from '@/components/Container'

export default function TermsPage() {
    return (
        <div className="pb-20 pt-16 sm:pb-32 sm:pt-24 lg:pt-32">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Terms of Service
                    </h1>
                    <p className="mt-4 text-base text-gray-600">
                        Last updated: January 2026
                    </p>

                    <div className="mt-16 space-y-12 text-base leading-7 text-gray-700">
                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                1. Acceptance of Terms
                            </h2>
                            <p className="mt-6">
                                By accessing and using theChecklist app, you accept and agree to be bound by the terms and provision of this agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                2. Subscription Terms
                            </h2>
                            <p className="mt-6">
                                Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. You can manage your subscription and turn off auto-renewal in your App Store or Google Play account settings.
                            </p>
                            <p className="mt-4">
                                Payment will be charged to your App Store or Google Play account at confirmation of purchase. Your account will be charged for renewal within 24 hours prior to the end of the current period.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                3. Refund Policy
                            </h2>
                            <p className="mt-6">
                                All purchases are final. Refunds are handled through the App Store or Google Play according to their respective refund policies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                4. User Content
                            </h2>
                            <p className="mt-6">
                                You retain ownership of any content you create or upload. By using the app, you grant us a license to use, store, and display your content as necessary to provide the service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                5. Prohibited Uses
                            </h2>
                            <p className="mt-6">
                                You may not use the app for any unlawful purpose or to solicit others to perform unlawful acts. You may not violate any local, state, national, or international law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                6. Limitation of Liability
                            </h2>
                            <p className="mt-6">
                                theChecklist shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the app.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                7. Changes to Terms
                            </h2>
                            <p className="mt-6">
                                We reserve the right to modify these terms at any time. We will notify users of any material changes via the app or email.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                8. Contact
                            </h2>
                            <p className="mt-6">
                                For questions about these Terms of Service, please contact us at: <a href="mailto:support@thechecklist.app" className="font-semibold text-brand-accent hover:underline">support@thechecklist.app</a>
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    )
}
