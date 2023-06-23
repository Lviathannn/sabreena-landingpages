import React from "react";
import TextCaption from "../TextCaption";
import { homeCaption } from "@/data/dummy";
import HomeButton from "./HomeButton";
import Link from "next/link";

export default function HomeCaption() {
    return (
        <article className=" relative flex flex-col justify-center gap-5 before:absolute before:-z-50 before:content-line">
            <h1 className="text-[42px] font-bold leading-[1.1] text-primary lg:text-[64px]">
                PT Sabreena <br />
                <span className="text-secondary">
                    Amaa Karya
                </span>
            </h1>
            <TextCaption
                customClassName="lg:max-w-lg"
                text={homeCaption}
            />
            <div className="flex gap-5">
                <HomeButton />
                <Link
                    href="https://api.whatsapp.com/send/?phone=6282123529842&text&type=phone_number&app_absent=0"
                    target="_blank"
                >
                    <button className="rounded-bl-sm rounded-br-2xl rounded-tl-2xl rounded-tr-sm border-2 border-primary px-8 py-2 text-sm text-primary transition-all hover:border-transparent hover:bg-primary hover:px-12 hover:text-white hover:shadow-2xl hover:shadow-primary">
                        Contact
                    </button>
                </Link>
            </div>
            <div className="mt-10 flex items-center justify-evenly gap-8 sm:justify-start">
                <div className="flex flex-col">
                    <p
                        className="relative text-[25px] font-medium text-secondary before:absolute
                before:-left-4 before:-top-2 before:-z-20 before:content-orange"
                    >
                        500+
                    </p>
                    <p className="text-[15px] text-tertiary">
                        Project
                    </p>
                </div>
                <div className="flex flex-col">
                    <p
                        className="relative text-[25px] font-medium text-secondary before:absolute
                before:-left-4 before:-top-2 before:-z-20 before:content-blue"
                    >
                        200+
                    </p>
                    <p className="text-[15px] text-tertiary">
                        Bangunan
                    </p>
                </div>
                <div className="flex flex-col">
                    <p
                        className="relative text-[25px] font-medium text-secondary before:absolute
                before:-left-4 before:-top-2 before:-z-20 before:content-green"
                    >
                        50+
                    </p>
                    <p className="text-[15px] text-tertiary">
                        Pegawai
                    </p>
                </div>
            </div>
        </article>
    );
}
