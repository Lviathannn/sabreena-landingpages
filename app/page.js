import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";
import DemoSection from "@/components/demo/DemoSection";
import HomeSection from "@/components/home/HomeSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="overflow-hidden">
                <HomeSection />
                <AboutSection />
                <ServicesSection />
                <DemoSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
