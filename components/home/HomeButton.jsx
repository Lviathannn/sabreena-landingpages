"use client";

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
        </>
    );
}
