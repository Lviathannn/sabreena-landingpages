import FlowNavbar from "@/components/navbar/FlowNavbar";
import HomeSection from "@/components/home/HomeSection";
import FlowFooter from "@/components/footer/FlowFooter";
import AboutSection from "@/components/about/AboutSection";

export default function Home() {
    return (
        <>
            <FlowNavbar/>
            <main className="overflow-hidden">
                <HomeSection />
                <AboutSection/>
            </main>
            <FlowFooter/>
        </>
    )
}
