/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            poppins: [
                "var(--font-poppins)",
            ],
        },

        extend: {
            colors: {
                primary: "#12AAFF",
                secondary: "#313131",
                tertiary: "#6B6B6B",
                form: "#F9F9F9",
            },
            backgroundImage: {
                hero: "url('/hero.webp')",
            },
            content: {
                line: "url('/line.svg')",
                green: "url('/green.svg')",
                blue: "url('/blue.svg')",
                orange: "url('/orange.svg')",
                greenShape:
                    "url('/greenShape.svg')",
                blueShape:
                    "url('/blueShape.svg')",
                orangeShape:
                    "url('/orangeShape.svg')",
            },
        },
    },
    plugins: [],
});
