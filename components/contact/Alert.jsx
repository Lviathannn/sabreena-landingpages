import {
    Alert as AlertComponent,
    Button,
} from "@material-tailwind/react";

import {
    ExclamationTriangleIcon,
    CheckBadgeIcon,
} from "@heroicons/react/24/solid";

import { useState } from "react";

export default function Alert({
    message,
    status,
}) {
    const [open, setOpen] =
        useState(true);

    return (
        <>
            <AlertComponent
                className={`${
                    status == "sucess"
                        ? "!bg-primary"
                        : "!bg-red-500"
                }  !font-poppins`}
                open={open}
                icon={
                    status ==
                    "sucess" ? (
                        <CheckBadgeIcon className="h-6 w-6" />
                    ) : (
                        <ExclamationTriangleIcon className="h-6 w-6" />
                    )
                }
                action={
                    <Button
                        variant="text"
                        color="white"
                        size="sm"
                        className="!absolute right-3 top-3"
                        onClick={() =>
                            setOpen(
                                false
                            )
                        }
                    >
                        Close
                    </Button>
                }
            >
                {message}
            </AlertComponent>
        </>
    );
}
