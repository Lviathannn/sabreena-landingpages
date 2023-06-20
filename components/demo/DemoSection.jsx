import CaptionTitle from "../CaptionTitle";
import DemoVideo from "./DemoVideo";

export default function DemoSection() {
    return (
        <section
            className="flex flex-col justify-between gap-20 px-5 py-12 sm:mx-10 lg:px-20"
            id="Demo"
        >
            <CaptionTitle
                firstWord="Demo"
                secondWord="Project"
                subtitle="Contoh Project"
            />
            <div className="">
                <DemoVideo />
            </div>
        </section>
    );
}
