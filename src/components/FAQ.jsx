import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Minus, Plus } from 'lucide-react'

const faqs = [
    {
        question: "How do I book?",
        answer:
            "Booking is easy! Simply visit our process section then fill out the contact form. We'll contact you about your booking shortly after."
    },
    {
        question: "What are the prices?",
        answer: "Our prices vary based on the type of bouncy house and add-ons. We offer competitive rates to ensure you get the best value. Contact us for more pricing details."
    },
    {
        question: "Do you deliver?",
        answer: "Yes, we provide delivery and setup at your chosen location that is within Wichita, KS. We charge a delivery fee if it is outside of Wichita, KS. Our team ensures everything is ready for your event."
    },
    {
        question: "Are the rentals safe?",
        answer: "Absolutely! Safety is our top priority. All our bouncy houses are regularly inspected and cleaned to ensure a safe and fun experience for everyone."
    }
]

export default function FAQ() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-16 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base/7 font-semibold">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <Plus aria-hidden="true" className="size-6 group-data-open:hidden" />
                                            <Minus aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
