"use client";
import NavLink from "@/components/navbar/NavLink";
import { links } from "@/data/dummy";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function Example() {
    return (
        <footer className="w-full bg-white px-5 py-5 sm:px-10 lg:px-20">
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 bg-white text-center md:justify-between">
                <div className="flex items-center justify-center gap-5">
                    <Image
                        src="/logo.png"
                        alt="PT  Sabreena Amaa Karya Logo"
                        className="w-10"
                        width={40}
                        height={40}
                    />
                    <h3 className="text-lg font-semibold leading-none text-secondary">
                        Sabreena
                        Construction
                    </h3>
                </div>
                <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
                    {links.map(
                        (link) => (
                            <NavLink
                                target={
                                    link
                                }
                                key={
                                    link
                                }
                            />
                        )
                    )}
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <Typography
                color="blue-gray"
                className="text-center font-normal"
            >
                &copy; 2023 Sabreena
                Construction
            </Typography>
        </footer>
    );
}
