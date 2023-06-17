import Image from "next/image";
import CaptionTitle from "../CaptionTitle";
import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="flex flex-col gap-20 px-10 lg:px-24">
            <CaptionTitle
                firstWord="About"
                secondWord="Us"
                subtitle="Siapa Kami?"
            />
            <div className=" flex flex-col items-center justify-between gap-16 md:gap-10 lg:flex-row">
                <Image
                    src="/aboutus.webp"
                    className="h-72 w-64 self-center rounded-b-md rounded-tl-md rounded-tr-[30%] bg-contain sm:h-96 sm:w-80 sm:self-start lg:h-[400px] lg:w-[350px] xl:h-[500px] xl:w-[450px]"
                    alt="About Image"
                    width={500}
                    height={600}
                    quality={85}
                    priority={false}
                />
                <article className="flex flex-col justify-start gap-5 sm:self-end lg:self-start">
                    <h3 className="text-[28px] font-semibold leading-none text-secondary">
                        Sabreena
                        Construction
                    </h3>
                    <p className="max-w-xl text-base leading-loose text-secondary lg:max-w-2xl">
                        Sabreena
                        Construction
                        adalah
                        perusahaan yang
                        mengkhususkan
                        diri dalam
                        bidang
                        kontraktor rumah
                        dan gedung,
                        serta penyedia
                        ornamen besi,
                        ornamen
                        krawangan
                        masjid, ornamen
                        plafond, dan
                        pembuatan sumur
                        bor. Kami
                        memiliki tim
                        ahli yang
                        terampil dan
                        berpengalaman
                        dalam membangun
                        rumah dan gedung
                        dengan standar
                        yang tinggi
                        serta memastikan
                        kepuasan
                        pelanggan.
                    </p>
                    <p className="hidden text-base leading-loose text-secondary lg:block lg:max-w-2xl">
                        Dalam layanan
                        kontraktor rumah
                        dan gedung,
                        Sabreena
                        Construction
                        mampu mengelola
                        proyek mulai
                        dari perencanaan
                        hingga
                        penyelesaian
                        dengan baik.
                        Kami bekerja
                        sama dengan
                        arsitek,
                        insinyur, dan
                        tenaga kerja
                        terampil untuk
                        memberikan hasil
                        akhir yang
                        berkualitas dan
                        sesuai dengan
                        kebutuhan klien.
                        Keahlian kami
                        meliputi
                        konstruksi
                        struktural,
                        instalasi
                        listrik,
                        perpipaan, dan
                        penyelesaian
                        interior, dengan
                        fokus pada
                        keamanan dan
                        ketahanan
                        bangunan.
                    </p>
                    <div className="">
                        <button className="rounded-bl-sm rounded-br-2xl rounded-tl-2xl rounded-tr-sm border-2 border-primary px-8 py-2 text-sm text-primary transition-all hover:border-transparent hover:bg-primary hover:px-12 hover:text-white hover:shadow-2xl hover:shadow-primary">
                            <Link
                                href="https://www.google.com/maps/place/7%C2%B001'35.6%22S+106%C2%B056'41.6%22E/@-7.0265415,106.9427103,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x5f6addada8373fc!8m2!3d-7.0265415!4d106.944899?hl=id"
                                replace={
                                    false
                                }
                                target="_blank"
                            >
                                Cek
                                Lokasi
                                Kami
                            </Link>
                        </button>
                    </div>
                </article>
            </div>
        </section>
    );
}
