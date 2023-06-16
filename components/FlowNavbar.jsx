'use client';

import { Navbar } from 'flowbite-react';
import {useEffect, useState} from "react";
import NavbarLink from "@/components/NavbarLink";
import NavButton from "@/components/NavButton";

export default function FlowNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidht, setWindowWidht] = useState(window.innerWidth);

    const handleResize = () =>{
        setIsOpen(false)
    }

    useEffect(() => {
        window.addEventListener('resize',handleResize);
        return () => {
            window.removeEventListener('resize',handleResize);
        };
    }, []);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 py-1 md:mx-14 mx-5">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center">
                    <span
                        className="self-center text-lg font-semibold whitespace-nowrap text-cyan-500">Sabreena Construction</span>
                </a>
                <NavButton isOpen={isOpen} setIsOpen={setIsOpen}/>
                <NavbarLink isOpen={isOpen}/>
            </div>
        </nav>

    )
}


