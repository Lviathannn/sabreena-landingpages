import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-scroll";

export default function NavLink({
    target,
}) {
    return (
        <Typography
            variant="small"
            color="blue-gray"
            className="p-1 !font-poppins font-medium"
        >
            <Link
                to={target}
                className="flex items-center"
                smooth={true}
            >
                {target}
            </Link>
        </Typography>
    );
}
