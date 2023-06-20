import AboutSection from "@/components/about/AboutSection";
import HomeSection from "@/components/home/HomeSection";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ServicesSection from "@/components/services/ServicesSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="overflow-hidden">
                <HomeSection />
                <AboutSection />
                <ServicesSection />
            </main>
            <Footer />
        </>
    );
}
