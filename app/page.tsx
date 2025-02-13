import LeftSection from "@/components/layout/left-section";
import Navbar from "@/components/layout/navbar";
import RightSection from "@/components/layout/right-section";
import SplitLayout from "@/components/layout/split-layout";

export default function Home() {
  return (
    <div>
      <main
      >
        <SplitLayout>
          <LeftSection>
            <Navbar />
          </LeftSection>
          <RightSection />
        </SplitLayout>
      </main>
    </div>
  );
}
