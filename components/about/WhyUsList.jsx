import TextCaption from "../TextCaption";

export default function WhyUsList({
    id,
    text,
    shape,
}) {
    return (
        <div className="flex justify-center gap-5">
            <h4
                className={`relative text-[42px] font-semibold leading-tight before:absolute before:-left-8   before:top-3 before:-z-10 before:md:-left-12 before:content-${shape}`}
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
