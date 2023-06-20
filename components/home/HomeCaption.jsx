import React from "react";
import TextCaption from "../TextCaption";
import { homeCaption } from "@/data/dummy";
import HomeButton from "./HomeButton";

export default function HomeCaption() {
    return (
        <article className=" relative flex flex-col justify-center gap-5 before:absolute before:-z-50 before:content-line">
            <h1 className="text-[42px] font-bold leading-[1.1] text-primary lg:text-[64px]">
                Sabreena <br />
                <span className="text-secondary">
                    Construction
                </span>
            </h1>
            <TextCaption
                customClassName="lg:max-w-lg"
                text={homeCaption}
            />
            <div className="flex gap-5">
                <HomeButton />
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
