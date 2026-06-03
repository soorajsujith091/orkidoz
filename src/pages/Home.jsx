import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import CollectionsSection from '../components/home/CollectionsSection';
import CustomizeSection from '../components/home/CustomizeSection';
import BestsellersSection from '../components/home/BestsellersSection';
import GiftGiftingSection from '../components/home/GiftGiftingSection';
import ReviewsSection from '../components/home/ReviewsSection';
import AboutPurposeSection from '../components/home/AboutPurposeSection';

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Orkidoz – Organic Baby Clothes | Soft, Safe & Sustainable</title>
        <meta name="description" content="GOTS-certified organic cotton baby clothing. Custom embroidered rompers, bomber jackets & gifting essentials for newborns. Starting ₹999. Free shipping over ₹999." />
        <meta property="og:title" content="Orkidoz – Organic Baby Clothes | Soft, Safe & Sustainable" />
        <meta property="og:description" content="GOTS-certified organic cotton baby clothing for newborns. Starting ₹999." />
        <link rel="canonical" href="https://orkidoz.com" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Feature Bar */}
      <TrustBar />

      {/* Curated Collections Section */}
      <CollectionsSection />

      {/* Dynamic Customize Section */}
      <CustomizeSection />

      {/* Bestsellers Section */}
      <BestsellersSection />

      {/* Gifting Section */}
      <GiftGiftingSection />

      {/* Testimonials/Reviews Section */}
      <ReviewsSection />

      {/* Purpose Section */}
      <AboutPurposeSection />
    </main>
  );
}
