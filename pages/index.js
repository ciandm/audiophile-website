import HeroSection from '../src/components/HeroSection/HeroSection';
import ProductShopLinks from '../src/components/ProductShopLinks/ProductShopCards';
import BestAudioGear from '../src/components/shared/BestAudioGear/BestAudioGear';
import ProductsGrid from '../src/components/ProductsGrid/ProductsGrid';
import HeroProduct from '../src/components/HeroProduct/HeroProduct';
import SpeakerProductHighlight from '../src/components/SpeakerProductHighlight/SpeakerProductHighlight';
import EarphoneProductHighlight from '../src/components/EarphoneProductHighlight/EarphoneProductHighlight';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductShopLinks />
      <ProductsGrid>
        <HeroProduct />
        <SpeakerProductHighlight />
        <EarphoneProductHighlight />
      </ProductsGrid>
      <BestAudioGear />
    </>
  );
}
