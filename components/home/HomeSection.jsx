import HomeCaption from "@/components/home/HomeCaption";
import Image from "next/image";

export default function HomeSection() {
    return (
        <section
            className="flex flex-col justify-around gap-5 px-5 py-5 md:px-16 lg:flex-row-reverse lg:px-24"
            id="Home"
        >
            <Image
                src="/hero.webp"
                className="h-64 w-64 self-center rounded-bl-md rounded-br-[30%] rounded-tl-[30%] rounded-tr-md bg-hero bg-cover sm:h-80 sm:w-80 sm:self-end md:h-96 md:w-96 md:rounded-t-md md:rounded-bl-[30%] md:rounded-br-md lg:h-[500px] lg:w-[400px] xl:h-[600px] xl:w-[500px]"
                alt="Hero Image"
                width={500}
                height={600}
                quality={85}
                priority={true}
            />
            <HomeCaption />
        </section>
    );
}
