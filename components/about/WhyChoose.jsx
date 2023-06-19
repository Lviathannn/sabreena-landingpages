import Image from "next/image";
import { whyUsListData } from "@/data/dummy";
import WhyUsList from "./WhyUsList";

export default function WhyChoose() {
    return (
        <div className=" flex flex-col-reverse justify-around gap-20 lg:flex-row">
            <article className="flex flex-col items-center justify-center gap-10 sm:self-start ">
                <h3 className="max-w-lg self-start text-[28px] font-semibold text-secondary">
                    Alasan Kenapa Anda
                    Harus Memilih Kami
                </h3>
                {whyUsListData.map(
                    (item, index) => {
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
                className="h-72 w-64 self-end rounded-b-md rounded-tl-[30%] rounded-tr-md bg-cover sm:h-96 sm:w-80 lg:h-[400px] lg:w-[350px] xl:h-[500px] xl:w-[450px]"
                alt="About Image"
                width={500}
                height={600}
                quality={85}
                priority={false}
            />
        </div>
    );
}
