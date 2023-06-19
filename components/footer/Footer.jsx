"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import NavLink from "../NavLink";
import { links } from "@/data/dummy";

export default function Footer() {
    return (
        <footer className="w-full bg-white p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 bg-white text-center md:justify-between">
                <div className="flex items-center justify-center gap-5">
                    <Image
                        src="/logo.png"
                        alt="Sabreena Construction Logo"
                        className="w-9"
                        width={40}
                        height={40}
                    />
                    <Typography
                        as="p"
                        className="!font-poppins text-xl font-semibold"
                    >
                        Sabreena
                        Construction
                    </Typography>
                </div>
                <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    {links.map(
                        (link) => (
                            <li
                                key={
                                    link
                                }
                            >
                                <NavLink
                                    target={
                                        link
                                    }
                                />
                            </li>
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
