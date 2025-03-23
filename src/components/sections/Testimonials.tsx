export default function Testimonials() {
  const testimonials = [
    {
      quote: "The virtual receptionist has transformed how we handle inquiries. We never miss a lead now, even after hours.",
      author: "Sarah Johnson",
      role: "Real Estate Agent",
      company: "Premium Properties NSW"
    },
    {
      quote: "Client bookings have increased by 40% since we started using the AI assistant. It's like having a 24/7 receptionist.",
      author: "Mike Chen",
      role: "Fitness Coach",
      company: "Elite Training Studio"
    },
    {
      quote: "The automated appointment booking and reminder system has significantly reduced no-shows at our clinic.",
      author: "Dr. Emily Taylor",
      role: "Clinic Director",
      company: "Wellness Hub Medical"
    }
  ]

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by businesses across NSW
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8">
              <blockquote className="text-lg leading-8 text-gray-900">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm leading-6 text-gray-600">{testimonial.role}</p>
                  <p className="text-sm leading-6 text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 