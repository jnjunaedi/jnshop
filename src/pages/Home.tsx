import BestDealsSection from "../features/home/components/BestDealsSection";
import Bottombar from "../features/home/components/Bottombar";
import CategorySection from "../features/home/components/CategorySection";
import FlashSaleSection from "../features/home/components/FlashSaleSection";
import Footer from "../features/home/components/Footer";
import HeroSection from "../features/home/components/HeroSection"
import ProductSection from "../features/home/components/ProductSection";
import ProfitSection from "../features/home/components/ProfitSection";
import MainLayout from "../layouts/MainLayout"

function HomePage() {
  return (
    <MainLayout>
        <HeroSection/>
        <ProfitSection/>
        <CategorySection/>
        <BestDealsSection/>
        <FlashSaleSection/>
        <ProductSection/>
        <Footer/>
        <Bottombar/>
    </MainLayout>
  )
}

export default HomePage;