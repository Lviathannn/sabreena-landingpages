export default function CaptionTitle({
    firstWord,
    secondWord,
    subtitle,
}) {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <h2 className="text-[38px] font-semibold leading-normal text-secondary">
                {firstWord}{" "}
                <span className="text-primary">
                    {secondWord}
                </span>
            </h2>
            <h3 className="text-sm text-tertiary">
                {subtitle}
            </h3>
        </div>
    );
}
