import Hero from './components/hero';
import HowItWorks from './components/how-it-works';
import Features from './components/features';
import Pricing from './components/pricing';
import Testimonials from './components/testimonials';
import FAQ from './components/faq';
import Footer from './components/footer';
import Nav from './components/nav';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}