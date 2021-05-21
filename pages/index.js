import HeroSection from '../src/components/HeroSection/HeroSection';
import ProductShopLinks from '../src/components/ProductShopLinks/ProductShopCards';
import BestAudioGear from '../src/components/shared/BestAudioGear/BestAudioGear';
import ProductsGrid from '../src/components/ProductsGrid/ProductsGrid';
import HeroProduct from '../src/components/HeroProduct/HeroProduct';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductShopLinks />
      <ProductsGrid>
        <HeroProduct />
      </ProductsGrid>
      <BestAudioGear />
    </>
  );
}
