"use client";
import React from "react";
import {
    Navbar as Nav,
    Typography,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import NavList from "@/components/navbar/NavList";

export default function Navbar() {
    const [openNav, setOpenNav] =
        React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () =>
                window.innerWidth >=
                    960 &&
                setOpenNav(false)
        );
    }, []);

    return (
        <>
            <Nav className="navbar sticky inset-0 z-10 h-max max-w-full rounded-none !px-4 !py-3 !shadow-none md:!px-12 lg:py-4 xl:!px-28">
                <div className="flex items-center justify-between">
                    <Typography
                        as="a"
                        href="#"
                        className=" mr-4 cursor-pointer py-1.5 font-poppins font-semibold text-primary"
                    >
                        PT Sabreena Amaa
                        Karya
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">
                            <NavList />
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={
                                false
                            }
                            onClick={() =>
                                setOpenNav(
                                    !openNav
                                )
                            }
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6 text-secondary"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={
                                        2
                                    }
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-secondary"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={
                                        2
                                    }
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse
                    open={openNav}
                >
                    <NavList />
                </Collapse>
            </Nav>
        </>
    );
}
