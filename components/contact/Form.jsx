"use client";
import {
    Input,
    Textarea,
} from "@material-tailwind/react";
import React from "react";

export default function Form() {
    return (
        <form
            initial="hidden"
            whileInView="show"
            action="https://formspree.io/f/xoqbjzeo"
            method="POST"
            className="contact__form flex w-full flex-col items-center justify-center gap-5"
        >
            <Input
                type="username"
                placeholder="Username"
                className="!border-0 !bg-form text-blue-gray-500 ring-2 ring-transparent placeholder:!font-poppins placeholder:text-blue-gray-200 focus:!border-primary focus:!border-t-primary focus:ring-primary"
                labelProps={{
                    className: "hidden",
                }}
                containerProps={{
                    className:
                        "min-w-[100px]",
                }}
            />
            <Input
                type="email"
                placeholder="Email Address"
                className="!border-0 !bg-form text-blue-gray-500 ring-2 ring-transparent placeholder:!font-poppins placeholder:text-blue-gray-200 focus:!border-primary focus:!border-t-primary focus:ring-primary"
                labelProps={{
                    className: "hidden",
                }}
                containerProps={{
                    className:
                        "min-w-[100px]",
                }}
            />

            <Textarea
                type="text"
                placeholder="Your Message"
                className="!border-0 !bg-form text-blue-gray-500 ring-2 ring-transparent placeholder:!font-poppins placeholder:text-blue-gray-200 focus:!border-primary focus:!border-t-primary focus:ring-primary"
                labelProps={{
                    className: "hidden",
                }}
                containerProps={{
                    className:
                        "min-w-[100px]",
                }}
            />
            <button className="self-start rounded-bl-sm rounded-br-2xl rounded-tl-2xl rounded-tr-sm border-2 border-primary bg-primary px-8 py-2 text-sm text-white  transition-all hover:px-12 hover:shadow-2xl hover:shadow-primary">
                Send
            </button>
        </form>
    );
}
