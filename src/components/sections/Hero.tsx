import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Never Miss a Lead Again
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Set up a 24/7 AI voice assistant that answers your calls, books clients, and captures every opportunity.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 