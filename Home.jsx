import Hero from '../components/Hero.jsx';
import TrustBar from '../components/TrustBar.jsx';
import About from '../components/About.jsx';
import Services from '../components/Services.jsx';
import TechStack from '../components/TechStack.jsx';
import Process from '../components/Process.jsx';
import Portfolio from '../components/Portfolio.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Reviews from '../components/Reviews.jsx';
import FAQ from '../components/FAQ.jsx';
import ContactTeaser from '../components/ContactTeaser.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <TechStack />
      <Process />
      <Portfolio />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
      <ContactTeaser />
    </>
  );
}
