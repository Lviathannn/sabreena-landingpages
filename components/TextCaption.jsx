export default function TextCaption({
    text,
    customClassName,
}) {
    return (
        <p
            className={`${customClassName} max-w-xl text-sm leading-loose text-tertiary lg:max-w-2xl`}
        >
            {text}
        </p>
    );
}
