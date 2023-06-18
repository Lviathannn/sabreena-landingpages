"use client";
import {
    useEffect,
    useState,
} from "react";
import NavbarLink from "@/components/navbar/NavbarLink";
import NavButton from "@/components/navbar/NavButton";

export default function FlowNavbar() {
    const [isOpen, setIsOpen] =
        useState(false);

    const handleResize = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        window.addEventListener(
            "resize",
            handleResize
        );
        return () => {
            window.removeEventListener(
                "resize",
                handleResize
            );
        };
    }, []);

    return (
        <header>
            <nav className="fixed top-0 z-50 w-full border-gray-200 bg-white/80 backdrop-blur-xl dark:bg-gray-900">
                <div className=" flex max-w-screen-2xl flex-wrap items-center justify-between p-4 md:mx-10 xl:mx-32 ">
                    <a
                        href=""
                        className="flex items-center"
                    >
                        <span className="self-center whitespace-nowrap text-base font-medium text-primary md:font-semibold">
                            Sabreena
                            Construction
                        </span>
                    </a>
                    <NavButton
                        isOpen={isOpen}
                        setIsOpen={
                            setIsOpen
                        }
                    />
                    <NavbarLink
                        isOpen={isOpen}
                    />
                </div>
            </nav>
        </header>
    );
}
