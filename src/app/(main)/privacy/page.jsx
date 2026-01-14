'use client'

import { Container } from '@/components/Container'

export default function PrivacyPage() {
    return (
        <div className="pb-20 pt-16 sm:pb-32 sm:pt-24 lg:pt-32">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-base text-gray-600">
                        Last updated: January 14, 2026
                    </p>

                    <div className="mt-16 space-y-12 text-base leading-7 text-gray-700">
                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                1. Information We Collect
                            </h2>
                            <p className="mt-6">
                                We collect information you provide directly to us, such as when you create an account, 
                                make a purchase, or contact us for support. This may include your name, email address, 
                                and payment information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                2. How We Use Your Information
                            </h2>
                            <p className="mt-6">
                                We use the information we collect to provide, maintain, and improve our services, 
                                process transactions, send you technical notices and support messages, and respond 
                                to your comments and questions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                3. Data Storage
                            </h2>
                            <p className="mt-6">
                                Your data is stored securely using Supabase. We implement appropriate technical and 
                                organizational measures to protect your personal information against unauthorized access, 
                                alteration, disclosure, or destruction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                4. Third-Party Services
                            </h2>
                            <p className="mt-6">
                                We use third-party services including:
                            </p>
                            <ul className="mt-4 list-disc pl-6 space-y-2">
                                <li>RevenueCat for subscription management</li>
                                <li>Google Mobile Ads for advertising</li>
                                <li>Sentry for error tracking and performance monitoring</li>
                                <li>Supabase for data storage and authentication</li>
                            </ul>
                            <p className="mt-4">
                                These services have their own privacy policies governing their collection and use of information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                5. Your Rights
                            </h2>
                            <p className="mt-6">
                                You have the right to access, update, or delete your personal information at any time. 
                                You can do this through the app settings or by contacting us directly at the email address below.
                            </p>
                            <p className="mt-4">
                                If you are a resident of the European Economic Area (EEA), you have additional rights under GDPR, 
                                including the right to data portability and the right to lodge a complaint with a supervisory authority.
                            </p>
                            <p className="mt-4">
                                If you wish to exercise any of the rights set out above, or have questions about your data, please contact us or use our dedicated <a href="/delete" className="font-semibold text-brand-accent hover:underline">data deletion tools</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                6. Data Retention
                            </h2>
                            <p className="mt-6">
                                We retain your personal information for as long as necessary to provide our services and 
                                for legitimate business purposes. When you delete your account, we will delete or anonymize 
                                your personal information within 30 days.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                7. Children's Privacy
                            </h2>
                            <p className="mt-6">
                                Our services are not directed to children under 13 years of age. We do not knowingly collect 
                                personal information from children under 13. If you believe we have collected information from 
                                a child under 13, please contact us immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                8. Changes to This Policy
                            </h2>
                            <p className="mt-6">
                                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                                by posting the new Privacy Policy in the app and updating the "Last Updated" date above.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                9. Contact Us
                            </h2>
                            <p className="mt-6">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <p className="mt-4">
                                Email: <a href="mailto:support@thechecklist.app" className="font-semibold text-brand-accent hover:underline">support@thechecklist.app</a><br />
                                Company: AGBO Ventures LTD
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    )
}
