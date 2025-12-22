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
                        Last updated: 19 December 2025
                    </p>

                    <div className="mt-16 space-y-12 text-base leading-7 text-gray-700">
                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                1. Introduction
                            </h2>
                            <p className="mt-6">
                                At theChecklist, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our app and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                2. The Data We Collect
                            </h2>
                            <p className="mt-6">
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                            </p>
                            <ul className="mt-8 list-disc pl-6 space-y-2">
                                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                                <li><strong>Usage Data:</strong> includes information about how you use our website, app and services.</li>
                                <li><strong>Interaction Data:</strong> includes your swipes and choices made within shared lists.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                3. How We Use Your Data
                            </h2>
                            <p className="mt-6">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="mt-8 list-disc pl-6 space-y-2">
                                <li>To register you as a new user and provide our services.</li>
                                <li>To enable you to share lists and interact with other users.</li>
                                <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
                                <li>To improve our website, app, marketing, and customer relationships.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                4. Data Security
                            </h2>
                            <p className="mt-6">
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                5. Your Legal Rights
                            </h2>
                            <p className="mt-6">
                                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, or restriction of your personal data.
                            </p>
                            <p className="mt-4">
                                If you wish to exercise any of the rights set out above, or have questions about your data, please contact us or use our dedicated <a href="/delete" className="font-semibold text-brand-accent hover:underline">data deletion tools</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                6. Contact Us
                            </h2>
                            <p className="mt-6">
                                If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:privacy@thechecklist.london" className="font-semibold text-brand-accent hover:underline">privacy@thechecklist.london</a>
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    )
}
