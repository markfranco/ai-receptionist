export default function Features() {
  const features = [
    {
      title: "24/7 Voice Answering",
      description: "Never miss a call with our AI assistant that handles inquiries around the clock."
    },
    {
      title: "Call Recording + Transcripts",
      description: "Every call is recorded and transcribed for your reference and quality assurance."
    },
    {
      title: "Firestore Lead Database",
      description: "Automatically capture and store lead information in a secure, searchable database."
    },
    {
      title: "Booking + Calendar Sync",
      description: "Seamlessly integrate with your calendar to automate appointment scheduling."
    },
    {
      title: "CRM & SMS Follow-ups",
      description: "Optional integration with your CRM and automated SMS follow-up messages."
    }
  ]

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to capture every lead
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
} 