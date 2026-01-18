import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Fluxorae Private Limited',
}

export default function PrivacyPolicy() {
    return (
        <div className="section-padding bg-secondary-light min-h-screen">
            <div className="container-custom max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm">
                <h1 className="heading-1 mb-8">Privacy Policy</h1>
                <p className="text-gray-600 mb-6">Last updated: January 18, 2026</p>

                <section className="mb-8">
                    <h2 className="heading-3 mb-4">1. Introduction</h2>
                    <p className="text-gray-600 mb-4">
                        Welcome to Fluxorae Private Limited (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). We are committed to protecting your personal information and your right to privacy.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="heading-3 mb-4">2. Information We Collect</h2>
                    <p className="text-gray-600 mb-4">
                        We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and payment information.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="heading-3 mb-4">3. How We Use Your Information</h2>
                    <p className="text-gray-600 mb-4">
                        We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="heading-3 mb-4">4. Contact Us</h2>
                    <p className="text-gray-600">
                        If you have questions or comments about this policy, you may email us at:
                        <br />
                        <strong>contact@fluxorae.com</strong>
                        <br /><br />
                        Fluxorae Private Limited<br />
                        Gata No. 316, Sahinwan, Gosaisinghpur,<br />
                        Kadipur, Sultanpur, UP - 228131
                    </p>
                </section>
            </div>
        </div>
    )
}
