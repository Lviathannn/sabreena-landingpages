import AboutSection from "@/components/about/AboutSection";
import FlowFooter from "@/components/footer/FlowFooter";
import FlowNavbar from "@/components/navbar/FlowNavbar";
import HomeSection from "@/components/home/HomeSection";
import WhyChooseSection from "@/components/about/WhyChooseSection";


export default function Home() {
    return (
        <>
            <FlowNavbar/>
            <main className="overflow-hidden">
                <HomeSection />
                <AboutSection />
                <WhyChooseSection/>
            </main>
            <FlowFooter/>
        </>
    )
}
