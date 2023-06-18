import Image from "next/image";
import CaptionTitle from "../CaptionTitle";
import { whyUsListData } from "@/data/dummy";
import WhyUsList from "./WhyUsList";

export default function WhyChooseSection() {
    return (
        <section className="flex flex-col justify-between gap-20 px-10 py-12 lg:px-20 ">
            <CaptionTitle
                firstWord="Why"
                secondWord="Us"
                subtitle="Apa Kelebihan Kami?"
            />
            <div className=" flex flex-col-reverse justify-around gap-20 lg:flex-row">
                <article className="flex flex-col items-center justify-center gap-10 sm:self-end lg:self-center ">
                    {whyUsListData.map(
                        (
                            item,
                            index
                        ) => {
                            return (
                                <WhyUsList
                                    key={
                                        index
                                    }
                                    id={
                                        item.id
                                    }
                                    text={
                                        item.text
                                    }
                                    shape={
                                        item.shape
                                    }
                                />
                            );
                        }
                    )}
                </article>
                <Image
                    src="/whyus.webp"
                    className="h-72 w-64 self-end rounded-b-md rounded-tl-[30%] rounded-tr-md bg-contain sm:h-96 sm:w-80 lg:h-[400px] lg:w-[350px] xl:h-[500px] xl:w-[450px]"
                    alt="About Image"
                    width={500}
                    height={600}
                    quality={85}
                    priority={false}
                />
            </div>
        </section>
    );
}
