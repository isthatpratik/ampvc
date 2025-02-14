import Footer from "@/components/layout/footer";
import LeftSection from "@/components/layout/left-section";
import Navbar from "@/components/layout/navbar";
import RightSection from "@/components/layout/right-section";
import SplitLayout from "@/components/layout/split-layout";
import AIMatchingBanner from "@/components/sections/ai-matching-banner";
import HeroSection from "@/components/sections/hero-section";
import ServicesGrid from "@/components/sections/services-grid";
import SolutionsGrid from "@/components/sections/solutions-grid";

export default function Home() {
  return (
    <div>
      <main
      >
        <SplitLayout>
          <LeftSection>
            <Navbar />
            <HeroSection />
            <ServicesGrid />
            <AIMatchingBanner />
            <SolutionsGrid />
            <Footer />
          </LeftSection>
          <RightSection />
        </SplitLayout>
      </main>
    </div>
  );
}
