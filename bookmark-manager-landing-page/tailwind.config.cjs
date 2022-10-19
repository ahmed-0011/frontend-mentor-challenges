/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        fontFamily: {
            sans: ["Rubik", "sans-serif"]
        },
        fontSize: {
            xs: "0.6rem",
            sm: "0.8rem",
            base: "18px",
            "base-mobile": "16px",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.5rem"
        },
        extend: {
            colors: {
                white: "#ffffff",
                blue: "hsl(231, 69%, 60%)",
                red: "hsl(0, 94%, 66%)",
                "blue-gray": "hsl(229, 8%, 60%)",
                "blue-dark": "hsl(229, 31%, 21%)"
            },
            maxWidth: {
                "6xl": "1280px"
            },
            spacing: {
                1: "0.25em",
                2: "0.5em",
                3: "0.75em",
                4: "1em",
                5: "1.25em",
                6: "1.5em",
                7: "1.75em",
                8: "2em",
                9: "2.25em",
                10: "2.5em",
                11: "2.75em",
                12: "3em",
                13: "3.25em",
                14: "3.5em",
                15: "3.75em",
                16: "4em",
                17: "4.25em",
                18: "4.5em",
                19: "4.75em",
                20: "5em",
                28: "7em"
            },
            borderRadius: {
                sm: "2px",
                md: "6px",
                lg: "8px"
            },
            inset: {
                "1/5": "22%"
            },
            screens: {
                sm: "375px",
                md: "768px",
                lg: "1280px",
                xl: "1440px"
            },
            backgroundImage: {
                dots: "url('../src/assets/bg-dots.svg')"
            },
            boxShadow: {
                card: "0px 15px 10px 1px rgba(181, 181, 181, 0.09), 0px 25px 25px 6px rgba(194, 205, 255, 0.2)",
                error: "0px 0.3em 0px 0px #fa5757, inset 0px 0px 0px 2px #fa5757"
            }
        }
    },
    plugins: []
};
