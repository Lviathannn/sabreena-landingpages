import Image from "next/image";
import CaptionTitle from "../CaptionTitle";
import Form from "./Form";

export default function ContactSection() {
    return (
        <section
            className="flex flex-col justify-between gap-20 px-5 py-12 sm:mx-10 lg:px-20"
            id="Contact"
        >
            <CaptionTitle
                firstWord="Contact"
                secondWord="Us"
                subtitle="Hubungi Kami"
            />
            <div className="flex flex-col-reverse items-start justify-between gap-10 xl:flex-row">
                <Form />
                <Image
                    src="/map.svg"
                    width={600}
                    height={320}
                    alt="Contact Image"
                />
            </div>
        </section>
    );
}
