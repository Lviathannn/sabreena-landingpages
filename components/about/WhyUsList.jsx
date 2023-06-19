import { useMemo } from "react";
import TextCaption from "../TextCaption";

export default function WhyUsList({
    id,
    text,
    shape,
}) {
    const memoizedContentClass =
        useMemo(
            () =>
                shape == "blue"
                    ? "before:content-blueShape"
                    : shape == "green"
                    ? "before:content-greenShape"
                    : shape == "orange"
                    ? "before:content-orangeShape"
                    : shape == "cyan",
            [shape]
        );

    return (
        <div className="flex justify-center gap-6">
            <h4
                className={`relative text-[42px] font-semibold leading-tight before:absolute before:-left-4 before:-z-10 before:sm:-left-12 before:md:top-3 ${memoizedContentClass}`}
            >
                {id}
            </h4>
            <TextCaption
                customClassName="lg:max-w-md"
                text={text}
            />
        </div>
    );
}
