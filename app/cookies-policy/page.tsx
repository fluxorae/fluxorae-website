import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cookies Policy',
    description: 'Cookies Policy for Fluxorae Private Limited',
}

export default function CookiesPolicy() {
    return (
        <div className="section-padding bg-secondary-light min-h-screen">
            <div className="container-custom max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm">
                <h1 className="heading-1 mb-8">Cookies Policy</h1>
                <p className="text-gray-600 mb-6">Last updated: January 18, 2026</p>

                <section className="mb-8">
                    <h2 className="heading-3 mb-4">1. What are Cookies?</h2>
                    <p className="text-gray-600 mb-4">
                        Cookies are small files that are placed on your computer, mobile device or any other device by a website, containing the details of your browsing history on that website among its many uses.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="heading-3 mb-4">2. Use of Cookies</h2>
                    <p className="text-gray-600 mb-4">
                        We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="heading-3 mb-4">3. Contact Us</h2>
                    <p className="text-gray-600">
                        If you have any questions about this Cookies Policy, you can contact us:
                        <br />
                        <strong>contact@fluxorae.com</strong>
                    </p>
                </section>
            </div>
        </div>
    )
}
