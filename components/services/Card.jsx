"use client";
import {
    Card as CardComponent,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function Card({
    title,
    cost,
    calculated,
    img,
}) {
    return (
        <CardComponent className="">
            <CardHeader
                shadow={false}
                floated={false}
                className=""
            >
                <Image
                    src={`/${img}`}
                    className="aspect-video w-full object-cover"
                    alt={title}
                    width={400}
                    height={300}
                    quality={75}
                    loading="lazy"
                />
            </CardHeader>
            <CardBody>
                <div className="flex flex-col gap-2">
                    <Typography className="text-secondar text-lgy !font-poppins font-semibold">
                        {title}
                    </Typography>
                    <Typography className="!font-poppins text-base font-medium text-tertiary">
                        {calculated}
                    </Typography>
                    <Typography className="!font-poppins text-sm font-normal text-tertiary">
                        {cost}
                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Link
                    href="https://api.whatsapp.com/send/?phone=6282123529842&text&type=phone_number&app_absent=0"
                    target="_blank"
                >
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="flex items-center justify-center gap-3 bg-primary !font-poppins text-sm font-medium normal-case text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                        <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="h-5 w-5"
                        >
                            <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                        Pesan Sekarang
                    </Button>
                </Link>
            </CardFooter>
        </CardComponent>
    );
}
