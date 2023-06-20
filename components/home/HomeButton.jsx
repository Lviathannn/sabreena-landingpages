"use client";

import Link from "next/link";
import React from "react";
import { Link as ReactScrollLink } from "react-scroll";

export default function HomeButton() {
    return (
        <>
            <ReactScrollLink
                to="About"
                smooth={true}
                offset={-15}
            >
                <button className="rounded-bl-sm rounded-br-2xl rounded-tl-2xl rounded-tr-sm border-2 border-primary bg-primary px-8 py-2 text-sm text-white shadow-2xl  shadow-primary transition-all hover:px-12">
                    Explore
                </button>
            </ReactScrollLink>
            <Link
                href="https://api.whatsapp.com/send/?phone=6282123529842&text&type=phone_number&app_absent=0"
                target="_blank"
            >
                <button className="rounded-bl-sm rounded-br-2xl rounded-tl-2xl rounded-tr-sm border-2 border-primary px-8 py-2 text-sm text-primary transition-all hover:border-transparent hover:bg-primary hover:px-12 hover:text-white hover:shadow-2xl hover:shadow-primary">
                    Contact
                </button>
            </Link>
        </>
    );
}
