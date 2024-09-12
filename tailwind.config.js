/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'dark': '#323232',
                'dark-secondary': '#191919',
                'granite-gray': '#636363'
            }
        },
    },
    plugins: [],
    important: true,
}

