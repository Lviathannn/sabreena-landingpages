import Image from "next/image";
import CaptionTitle from "../CaptionTitle";
import Form from "./Form";
import Link from "next/link";

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
            <div className="flex flex-col justify-between gap-5 lg:flex-row">
                <div className="flex flex-col gap-5">
                    <h3 className="text-3xl font-bold text-secondary">
                        Ayo Pesan
                        Sekarang
                    </h3>
                    <p className="max-w-xl font-poppins text-sm text-tertiary">
                        Anda Dapat
                        Menekan Tombol
                        Pesan Sekarang
                        Untuk Memesan
                        Melalui whatsapp
                        atau Isi Form
                        Dibawah Untuk
                        Memesan Dengan
                        Email
                    </p>
                </div>
                <div className="">
                    <Link
                        className="rounded-bl-sm rounded-br-2xl rounded-tl-2xl rounded-tr-sm border-2 border-primary bg-primary px-8 py-3 text-sm text-white shadow-2xl  shadow-primary transition-all hover:px-12"
                        href="https://api.whatsapp.com/send/?phone=6282123529842&text&type=phone_number&app_absent=0"
                        target="_blank"
                    >
                        Pesan Sekarang
                    </Link>
                </div>
            </div>
            <div className="flex flex-col-reverse items-start justify-between lg:gap-10 xl:flex-row">
                <Form />
                <Image
                    src="/map.svg"
                    width={600}
                    height={320}
                    quality={75}
                    alt="Contact Image"
                    className="self-center "
                />
            </div>
        </section>
    );
}
