import Card from "./Card";
import CaptionTitle from "../CaptionTitle";

export default function ServicesSection() {
    return (
        <section
            className="flex flex-col justify-between gap-20 px-5 py-12 sm:mx-10 lg:px-20"
            id="Services"
        >
            <CaptionTitle
                firstWord="Our"
                secondWord="Services"
                subtitle="Layanan Kami"
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}
