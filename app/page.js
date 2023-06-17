import AboutSection from "@/section/AboutSection";
import FlowFooter from "@/section/FlowFooter";
import FlowNavbar from "@/section/FlowNavbar";
import HomeSection from "@/section/HomeSection";


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
