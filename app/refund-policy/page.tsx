import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Refund Policy',
    description: 'Refund Policy for Fluxorae Private Limited',
}

export default function RefundPolicy() {
    return (
        <div className="section-padding bg-secondary-light min-h-screen">
            <div className="container-custom max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm">
                <h1 className="heading-1 mb-8">Refund Policy</h1>
                <p className="text-gray-600 mb-6">Last updated: January 18, 2026</p>

                <section className="mb-8">
                    <h2 className="heading-3 mb-4">1. Refund Eligibility</h2>
                    <p className="text-gray-600 mb-4">
                        At Fluxorae Private Limited, we strive to provide high-quality software installation and technology services. Since we provide digital services, refunds are generally only processed if the service was not delivered as per the scope of work agreed upon.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="heading-3 mb-4">2. Process for Refund</h2>
                    <p className="text-gray-600 mb-4">
                        To request a refund, please contact us at contact@fluxorae.com with your order details and the reason for the refund request. We will review your request and get back to you within 7-10 business days.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="heading-3 mb-4">3. Exceptions</h2>
                    <p className="text-gray-600 mb-4">
                        Refunds are not applicable for services already completed or if the project was delayed due to lack of information or resources from the client side.
                    </p>
                </section>
            </div>
        </div>
    )
}
