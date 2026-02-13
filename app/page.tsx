import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import Stats from './src/components/Stats';
import Services from './src/components/Services';
import Testimonials from './src/components/Testimonials';
import BeforeAfter from './src/components/BeforeAfter';
import CTA from './src/components/CTA';
import WhatsAppIcon from './src/components/WhatsAppIcon';
import Footer from './src/components/Footer';
import Treatments from './src/components/Treatments'; 

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Treatments />
      <BeforeAfter />
      <Stats />
      <Services />
      <Testimonials />
      <WhatsAppIcon />
      <CTA />
      <Footer />
    </main>
  );
}
