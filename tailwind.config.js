/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'], // Optional if we switch to Pairing B, but using Inter primarily
            },
            colors: {
                brand: {
                    DEFAULT: '#003579', // The requested Navy Blue
                    light: '#2a5dab',
                    dark: '#00224f',
                },
                slate: {
                    850: '#003579', // Matching brand for legacy refs
                    950: '#020617',
                },
                amber: { // Keeping for safety but minimizing usage
                    450: '#003579', // Intentionally remapping amber-450 to Brand Blue to instantly fix all instances, then we cleanup
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
