import { links } from "@/data/dummy";
import React from "react";
import NavLink from "./NavLink";

export default function NavList() {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
            {links.map((link) => {
                return (
                    <NavLink
                        key={link}
                        target={link}
                    />
                );
            })}
        </ul>
    );
}
