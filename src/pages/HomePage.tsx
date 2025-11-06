import Hero from '../components/Hero';
import About from '../components/About';
import Offerings from '../components/Offerings';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

interface HomePageProps {
  onNavigate: (page: 'home' | 'gallery' | 'terms' | 'gdpr') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero />
      <About />
      <Offerings />
      <ContactForm />
      <Footer onNavigate={onNavigate} />
    </>
  );
}
