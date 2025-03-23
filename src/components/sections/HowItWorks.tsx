export default function HowItWorks() {
  const steps = [
    {
      title: "Setup your business info",
      description: "Enter your business details and customize how your virtual receptionist handles calls."
    },
    {
      title: "Personalize your voice agent",
      description: "Choose your AI assistant's voice and configure responses to match your business needs."
    },
    {
      title: "Start capturing leads",
      description: "Let your AI assistant handle calls, book appointments, and grow your business 24/7."
    }
  ]

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                    {index + 1}
                  </div>
                  {step.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
} 