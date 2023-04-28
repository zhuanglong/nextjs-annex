import AboutUs from '@/components/AboutUs';
import FooterSection from '@/components/FooterSection';
import HeaderSection from '@/components/HeaderSection';
import HeroSection from '@/components/HeroSection';
import OurClients from '@/components/OurClients';
import OurPartners from '@/components/OurPartners';
import OurPowers from '@/components/OurPowers';
import OurServices from '@/components/OurServices';

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <OurServices />
      <OurPowers />
      <AboutUs />
      <OurClients />
      <OurPartners />
      <FooterSection />
    </>
  );
}
