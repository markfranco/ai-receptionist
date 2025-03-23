import { Button } from "@/components/ui/button"

export default function FAQ() {
  const faqs = [
    {
      question: "How many calls are included?",
      answer: "Each plan has different call limits. The Starter plan includes 100 calls/month, Pro plan includes 500 calls/month, and Business plan includes unlimited calls. Additional calls can be purchased if needed."
    },
    {
      question: "Can I use my own phone number?",
      answer: "Yes! You can either port your existing business number to our service or we can provide you with a new local number. The system works seamlessly with both options."
    },
    {
      question: "What happens after hours?",
      answer: "Your AI assistant handles calls 24/7, following your configured rules. It can take messages, book appointments, or handle urgent matters according to your preferences."
    },
    {
      question: "How accurate is the voice recognition?",
      answer: "Our AI uses state-of-the-art voice recognition with over 95% accuracy. It handles Australian accents well and can understand context and intent."
    },
    {
      question: "Can I customize the AI's responses?",
      answer: "Absolutely! You can customize greeting messages, response scripts, and business rules. The AI adapts to your specific business needs and terminology."
    },
    {
      question: "What kind of support do you provide?",
      answer: "All plans include email support. Pro and Business plans include priority support with phone assistance. We also provide comprehensive onboarding and setup assistance."
    }
  ]

  return (
    <section className="bg-gray-50 py-24 sm:py-32" id="faq">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have a different question? Contact our support team for help.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-8">
              <h3 className="text-lg font-semibold leading-7 text-gray-900">
                {faq.question}
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button variant="outline">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  )
} 