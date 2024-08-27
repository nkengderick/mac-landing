import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import { FC } from 'react';
import Subscribe from '@/components/Subscribe';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
import Galleries from '@/components/Gallery';
import Blogs from '@/components/Blogs';
import WhoWeAre from '@/components/WhoWeAre';
import Bot from '@/components/Bot';
import WhyUs from '@/components/WhyUs';

const Home: FC = () => {
  return (
    <div>

      <div id='chatbot' className='fixed left-0 bottom-4 z-50'>
        <Bot />
      </div>

      <header id="header" className='pb-16'>
        <Header />
      </header>

      <section id="hero" className="pb-16">
        <Hero />
      </section>

      <section id="features" className="pb-16">
        <Features />
      </section>

      <section id="who-we-are" className="pb-16">
        <WhoWeAre />
      </section>

      <section id="services" className="pb-16">
        <Services />
        <WhyUs />
      </section>

      <section id="galleries" className="pb-16">
        <Galleries />
      </section>

      <section id="blogs" className="pb-16">
        <Blogs />
      </section>

      <section id="partners" className="pb-16">
        <Partners />
      </section>

      <section id="subscribe" className="pb-16">
        <Subscribe />
      </section>

      <footer id="footer" className="pt-16">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
