import HeroSection from '@/components/UI/HomePage/HeroSection/HeroSection';
import Specialty from '@/components/UI/HomePage/Specialty/Seecialty';
import TopRatedDoctors from '@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors';
import WhyUs from '@/components/UI/HomePage/WhyUs/WhyUs';
import { Button } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialty />
      <TopRatedDoctors />
      <WhyUs />
    </>
  );
};

export default HomePage;
