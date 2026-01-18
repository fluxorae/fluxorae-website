import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms & Conditions',
    description: 'Terms and Conditions for Fluxorae Private Limited',
}

export default function TermsConditions() {
    return (
        <div className="section-padding bg-secondary-light min-h-screen">
            <div className="container-custom max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm">
                <h1 className="heading-1 mb-8">Terms & Conditions</h1>
                <p className="text-gray-600 mb-6">Last updated: January 18, 2026</p>

                <section className="mb-8">
                    <h2 className="heading-3 mb-4">1. Agreement to Terms</h2>
                    <p className="text-gray-600 mb-4">
                        By accessing our website at fluxorae.com, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="heading-3 mb-4">2. Intellectual Property Rights</h2>
                    <p className="text-gray-600 mb-4">
                        Unless otherwise stated, Fluxorae Private Limited and/or its licensors own the intellectual property rights for all material on Fluxorae. All intellectual property rights are reserved.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="heading-3 mb-4">3. Governing Law</h2>
                    <p className="text-gray-600 mb-4">
                        These terms and conditions are governed by and construed in accordance with the laws of Uttar Pradesh, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="heading-3 mb-4">4. Contact Us</h2>
                    <p className="text-gray-600">
                        For any questions regarding these terms, contact us at:
                        <br />
                        <strong>contact@fluxorae.com</strong>
                    </p>
                </section>
            </div>
        </div>
    )
}
