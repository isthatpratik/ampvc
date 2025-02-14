import LeftSection from "@/components/layout/left-section";
import RightSection from "@/components/layout/right-section";
import SplitLayout from "@/components/layout/split-layout";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] min-h-screen flex items-center justify-center">
      <main>
        <SplitLayout>
          <LeftSection>
            
          </LeftSection>
          <RightSection />
        </SplitLayout>
      </main>
    </div>
  );
}
