"use client";

import {
    Input,
    Textarea,
} from "@material-tailwind/react";
import {
    useForm,
    ValidationError,
} from "@formspree/react";
import Alert from "./Alert";

export default function ContactForm() {
    const [state, handleSubmit] =
        useForm("xknaddwn");
    console.log(state);

    return (
        <form
            onSubmit={handleSubmit}
            className="contact__form flex w-full flex-col items-center justify-center gap-5"
        >
            {state.errors.length >=
            1 ? (
                <Alert
                    message={
                        state.errors[1]
                    }
                    status="error"
                />
            ) : state.succeeded ? (
                <Alert
                    message={
                        "Terimakasih Telah Mengirimkan Pesan!"
                    }
                    status="sucess"
                />
            ) : (
                ""
            )}
            <Input
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                className="!border-0 !bg-form text-blue-gray-500 ring-2 ring-transparent placeholder:!font-poppins placeholder:text-blue-gray-200 focus:!border-primary focus:!border-t-primary focus:ring-primary"
                labelProps={{
                    className: "hidden",
                }}
                containerProps={{
                    className:
                        "min-w-[100px]",
                }}
                required
            />
            <ValidationError
                prefix="Text"
                field="username"
                errors={state.errors}
            />
            <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                className="!border-0 !bg-form text-blue-gray-500 ring-2 ring-transparent placeholder:!font-poppins placeholder:text-blue-gray-200 focus:!border-primary focus:!border-t-primary focus:ring-primary"
                labelProps={{
                    className: "hidden",
                }}
                containerProps={{
                    className:
                        "min-w-[100px]",
                }}
                required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <Textarea
                id="message"
                name="message"
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
                required
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button
                type="submit"
                disabled={
                    state.submitting
                }
                className="self-start rounded-bl-sm rounded-br-2xl rounded-tl-2xl rounded-tr-sm border-2 border-primary bg-primary px-8 py-2 text-sm text-white  transition-all hover:px-12 hover:shadow-2xl hover:shadow-primary"
            >
                Submit
            </button>

            <ValidationError
                errors={state.errors}
            />
        </form>
    );
}
