import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { KeyHighlights } from "./components/KeyHighlights";
import { ProductDetails } from "./components/ProductDetails";
import { CertificationStrip } from "./components/CertificationStrip";
import { Applications } from "./components/Applications";
import { VideoSection } from "./components/VideoSection";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <KeyHighlights />
        <ProductDetails />
        <CertificationStrip />
        <Applications />
        <VideoSection />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}