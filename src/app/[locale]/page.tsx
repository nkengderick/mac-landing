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

const Home: FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Services />
      <Partners />
      <Galleries />
      <CTA />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
