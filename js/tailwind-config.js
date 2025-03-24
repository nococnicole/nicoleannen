// Tailwind configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#9ac5b1',
                    foreground: 'hsl(210 40% 98%)',
                },
                secondary: {
                    DEFAULT: 'hsl(150 20% 92%)',
                    foreground: '#9ac5b1',
                },
                muted: {
                    DEFAULT: 'hsl(150 30% 95%)',
                    foreground: 'hsl(150 20% 40%)',
                },
                border: 'hsl(214.3 31.8% 91.4%)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
            },
        },
    },
}