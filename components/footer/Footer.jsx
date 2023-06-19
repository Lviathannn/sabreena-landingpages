"use client";
import { links } from "@/data/dummy";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { Link } from "react-scroll";
import NavLink from "../NavLink";

export default function Example() {
    return (
        <footer className="w-full bg-white p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 bg-white text-center md:justify-between">
                <div className="flex items-center justify-center gap-5">
                    <Image
                        src="/logo.png"
                        alt="Sabreena Construction Logo"
                        className="w-10"
                        width={50}
                        height={50}
                    />
                    <h3 className="text-lg font-semibold leading-none text-secondary">
                        Sabreena
                        Construction
                    </h3>
                </div>
                <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
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
