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
                        Last updated: January 14, 2026
                    </p>

                    <div className="mt-16 space-y-12 text-base leading-7 text-gray-700">
                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                1. Acceptance of Terms
                            </h2>
                            <p className="mt-6">
                                By accessing and using TheChecklist app ("the App"), you accept and agree to be bound by the terms 
                                and provisions of this agreement. If you do not agree to these terms, please do not use the App.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                2. Subscription Terms
                            </h2>
                            
                            <div className="mt-6 space-y-6">
                                <div className="rounded-lg bg-gray-50 p-6 border border-gray-200">
                                    <h3 className="text-lg font-bold text-gray-900">Monthly Subscription</h3>
                                    <p className="mt-3">
                                        <span className="font-semibold">Price:</span> £1.99 per month<br />
                                        <span className="font-semibold">Billing:</span> Charged monthly to your App Store or Google Play account<br />
                                        <span className="font-semibold">Auto-Renewal:</span> Your subscription will automatically renew unless cancelled at least 
                                        24 hours before the end of the current period.
                                    </p>
                                </div>

                                <div className="rounded-lg bg-gray-50 p-6 border border-gray-200">
                                    <h3 className="text-lg font-bold text-gray-900">Yearly Subscription</h3>
                                    <p className="mt-3">
                                        <span className="font-semibold">Price:</span> £19.99 per year<br />
                                        <span className="font-semibold">Billing:</span> Charged annually to your App Store or Google Play account<br />
                                        <span className="font-semibold">Auto-Renewal:</span> Your subscription will automatically renew unless cancelled at least 
                                        24 hours before the end of the current period.<br />
                                        <span className="font-semibold">Savings:</span> Save 16% compared to monthly subscription
                                    </p>
                                </div>

                                <div className="rounded-lg bg-gray-50 p-6 border border-gray-200">
                                    <h3 className="text-lg font-bold text-gray-900">Lifetime Access</h3>
                                    <p className="mt-3">
                                        <span className="font-semibold">Price:</span> £49.99 one-time payment<br />
                                        <span className="font-semibold">Billing:</span> One-time charge, no subscription<br />
                                        <span className="font-semibold">Auto-Renewal:</span> Not applicable - no recurring charges
                                    </p>
                                </div>
                            </div>

                            <p className="mt-6">
                                Payment will be charged to your App Store or Google Play account at confirmation of 
                                purchase. Your account will be charged for renewal within 24 hours prior to the end 
                                of the current period at the subscription price shown above.
                            </p>

                            <p className="mt-4">
                                You can manage your subscription and turn off auto-renewal by going to your Account Settings 
                                in the App Store or Google Play after purchase. Cancellation of the current active subscription 
                                period is not allowed. However, you can cancel at any time to prevent future renewals.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                3. Refund Policy
                            </h2>
                            <p className="mt-6">
                                All purchases are final and non-refundable except as required by law. Refunds for purchases 
                                made through the App Store or Google Play are handled according to their respective refund 
                                policies. Please contact Apple or Google directly for refund requests.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                4. User Content
                            </h2>
                            <p className="mt-6">
                                You retain ownership of any content you create or upload to the App. By using the App, you grant 
                                us a non-exclusive, worldwide, royalty-free license to use, store, and display your content as 
                                necessary to provide and improve the service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                5. Prohibited Uses
                            </h2>
                            <p className="mt-6">You agree not to use the App to:</p>
                            <ul className="mt-4 list-disc pl-6 space-y-2">
                                <li>Violate any local, state, national, or international law</li>
                                <li>Transmit any harmful, offensive, or illegal content</li>
                                <li>Impersonate any person or entity</li>
                                <li>Interfere with or disrupt the App or servers</li>
                                <li>Attempt to gain unauthorized access to any portion of the App</li>
                                <li>Use automated systems to access the App without permission</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                6. Intellectual Property
                            </h2>
                            <p className="mt-6">
                                The App and its original content, features, and functionality are owned by AGBO Ventures LTD 
                                and are protected by international copyright, trademark, and other intellectual property laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                7. Limitation of Liability
                            </h2>
                            <p className="mt-6">
                                AGBO Ventures LTD shall not be liable for any indirect, incidental, special, consequential, 
                                or punitive damages resulting from your use of or inability to use the App, even if we have 
                                been advised of the possibility of such damages.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                8. Changes to Terms
                            </h2>
                            <p className="mt-6">
                                We reserve the right to modify these terms at any time. We will notify users of any 
                                material changes via the App or email. Your continued use of the App after such modifications 
                                constitutes acceptance of the updated terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                9. Apple End User License Agreement (EULA)
                            </h2>
                            <p className="mt-6">
                                If you are accessing TheChecklist through Apple's App Store, you acknowledge and agree that:
                            </p>
                            <ul className="mt-4 list-disc pl-6 space-y-3">
                                <li>
                                    These Terms of Service are between you and AGBO Ventures LTD, not Apple Inc. ("Apple"), 
                                    and Apple is not responsible for the App or its content.
                                </li>
                                <li>
                                    Apple has no obligation to provide any maintenance or support services for the App.
                                </li>
                                <li>
                                    In the event of any failure of the App to conform to any applicable warranty, you may 
                                    notify Apple and Apple will refund the purchase price (if any) to you. To the maximum 
                                    extent permitted by applicable law, Apple will have no other warranty obligation with 
                                    respect to the App.
                                </li>
                                <li>
                                    Apple is not responsible for addressing any claims by you or any third party relating to 
                                    the App or your use of it, including but not limited to: (i) product liability claims; 
                                    (ii) any claim that the App fails to conform to any applicable legal or regulatory requirement; 
                                    and (iii) claims arising under consumer protection or similar legislation.
                                </li>
                                <li>
                                    In the event of any third-party claim that the App or your possession and use of the App 
                                    infringes that third party's intellectual property rights, AGBO Ventures LTD (not Apple) 
                                    will be solely responsible for the investigation, defense, settlement, and discharge of 
                                    any such intellectual property infringement claim.
                                </li>
                                <li>
                                    Apple and its subsidiaries are third-party beneficiaries of these Terms of Service, and 
                                    upon your acceptance of these Terms, Apple will have the right (and will be deemed to have 
                                    accepted the right) to enforce these Terms against you as a third-party beneficiary.
                                </li>
                                <li>
                                    You represent and warrant that: (i) you are not located in a country that is subject to a 
                                    U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist 
                                    supporting" country; and (ii) you are not listed on any U.S. Government list of prohibited 
                                    or restricted parties.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                10. Governing Law
                            </h2>
                            <p className="mt-6">
                                These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, 
                                without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                11. Contact Us
                            </h2>
                            <p className="mt-6">
                                For questions about these Terms of Service, please contact us:
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
