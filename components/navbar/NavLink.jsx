import { Link } from "react-scroll";

export default function NavLink({
    target,
}) {
    return (
        <li>
            <Link
                to={target}
                className="text-sm font-medium text-secondary"
                activeClass="!text-primary"
                smooth={true}
                spy={true}
                offset={
                    target == "Home"
                        ? -50
                        : -15
                }
            >
                {target}
            </Link>
        </li>
    );
}
