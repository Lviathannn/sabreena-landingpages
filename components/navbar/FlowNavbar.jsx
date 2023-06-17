'use client';
import {useEffect, useState} from "react";
import NavbarLink from "@/components/navbar/NavbarLink";
import NavButton from "@/components/navbar/NavButton";

export default function FlowNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleResize = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            <nav className="bg-white/80 backdrop-blur-xl border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-50">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between p-4 md:mx-14 mx-5 ">
                    <a href="" className="flex items-center">
                    <span
                        className="self-center text-base font-medium md:font-semibold whitespace-nowrap text-primary">Sabreena Construction</span>
                    </a>
                    <NavButton isOpen={isOpen} setIsOpen={setIsOpen}/>
                    <NavbarLink isOpen={isOpen}/>
                </div>
            </nav>
        </header>

    )
}


