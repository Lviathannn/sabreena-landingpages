/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite-react/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#12AAFF',
                'secondary': '#313131',
                'tertiary': '#6B6B6B'
            },
            backgroundImage: {
                'hero': "url('/hero.webp')",
            },
            content: {
                'line': "url('/line.svg')",
                'green': "url('/green.svg')",
                'blue': "url('/blue.svg')",
                'orange': "url('/orange.svg')",
            },
        },
    },
    plugins: [require('flowbite/plugin')],
}
