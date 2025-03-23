import { Button } from "@/components/ui/button"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "29",
      priceId: "starter",
      description: "Perfect for small businesses just getting started",
      features: [
        "Up to 100 calls per month",
        "Basic call routing",
        "Email notifications",
        "Call recordings",
        "Basic reporting"
      ]
    },
    {
      name: "Pro",
      price: "79",
      priceId: "pro",
      description: "For growing businesses that need more features",
      features: [
        "Up to 500 calls per month",
        "Advanced call routing",
        "SMS notifications",
        "Call recordings & transcripts",
        "CRM integration",
        "Custom voice options"
      ]
    },
    {
      name: "Business",
      price: "149",
      priceId: "business",
      description: "For established businesses with high call volume",
      features: [
        "Unlimited calls",
        "Priority routing",
        "Multi-location support",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated support"
      ]
    }
  ]

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that best fits your business needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {plan.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">${plan.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="mt-8" size="lg" variant={plan.name === "Pro" ? "default" : "outline"}>
                Get started
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
          One-time setup fee applies: $499-$899 depending on customization needs
        </p>
      </div>
    </section>
  )
} 