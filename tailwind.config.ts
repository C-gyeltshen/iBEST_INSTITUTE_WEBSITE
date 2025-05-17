import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: '390px',
			// => @media (min-width: 640px) { ... }
		
			md: '768px',
			// => @media (min-width: 768px) { ... }

			mdx:'912px',
		
			lg: '1050px',
			// => @media (min-width: 1024px) { ... }
		
			xl: '1280px',
			// => @media (min-width: 1280px) { ... }
		
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			dropShadow: {
				'3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
				'4xl': [
					'0 35px 35px rgba(0, 0, 0, 0.25)',
					'0 45px 65px rgba(0, 0, 0, 0.15)',
				],
			},
			keyframes: {
				slideRight: {
					"0%": { opacity: "0", marginLeft: "-250px" },
					"100%": { opacity: "1", marginLeft: "0" },
				},
				slideLeft: {
					"0%": { opacity: "0", marginRight: "-250px" },
					"100%": { opacity: "1", marginRight: "0" },
				},
				scroll: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(calc(-192px * 8))" },
				},
			},
			height: {
				'128': '32rem',
				'192': '48rem', 
				'256': '64rem', 
			},
			boxShadow: {
				'top': '0 -4px 5px rgba(0, 0, 0, 0.25)',
			},
			
			animation: {
				slideRight: "slideRight 1s ease-in-out",
				slideLeft: "slideLeft 1s ease-in-out",
				scroll: "scroll 30s linear infinite",
			},
			colors: {
				bb: '#aac5e1',
				blue: '#ecfeff',
				color: '#1ca2e9',
				blueDark: '#043853',
				bblue: '#C2DFE7',
				lightStrok: '#E8E3E3',
				lightBlue: '#ddf3fd',
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
			},

			backgroundImage: {
				homepage_image: "url('./images/building.webp')",	
				testamonial1: "url('./images/drKarma.webp')",
				image1: "url('./images/dasho1.webp')",
				passu: "url('./images/passu.webp')",
				Aboutus: "url('./images/aboutus.webp')",
				traning: "url('./images/traning.webp')",
				about: "url('./images/about.webp')",
				one: "url('./images/one.webp')",
				two: "url('./images/two.webp')",
				three: "url('./images/three.webp')",	
				four: "url('./images/four.webp')",	
				five: "url('./images/five.webp')",	
				six: "url('./images/six.webp')",	
				seven: "url('./images/seven.webp')",	
				this: "url('./images/this.webp')",
				co: "url('./images/co.webp')",
				c1: "url('./images/1.webp')",
				c2: "url('./images/2.webp')",
				c3: "url('./images/3.webp')",
				c4: "url('./images/4.webp')",
				c5: "url('./images/5.webp')",
				c6: "url('./images/6.webp')",
				c7: "url('./images/7.webp')",
				c8: "url('./images/8.webp')",
				c9: "url('./images/9.webp')",
				c10: "url('./images/10.webp')",
				c11: "url('./images/11.webp')",
				c12: "url('./images/12.webp')",
				c13: "url('./images/13.webp')",
				c14: "url('./images/14.webp')",
				c15: "url('./images/15.webp')",
				cc1: "url('./images/c1.webp')",
				cc2: "url('./images/cc2.webp')",
				courses1: "url('./images/courses1.webp')",
				lifeSkill: "url('./images/lifeSkill.webp')",
				leader: "url('./images/leaders.webp')",
				management: "url('./images/management.webp')",
				finance: "url('./images/finance.webp')",
				en: "url('./images/en.webp')",
				media: "url('./images/media.webp')",
				flim: "url('./images/flim.webp')",
				mo: "url('./images/mo.webp')",
				ict: "url('./images/ict.webp')",
				ooo: "url('./images/leaders.webp')",
				baba: "url('./images/baba.webp')",
				man: "url('./images/man.webp')",
				fin: "url('./images/fin.webp')",
				multi: "url('./images/multi.webp')",
				tep: "url('./images/TEP.webp')",
				le: "url('./images/le.webp')",
				it: "url('./images/it.webp')",
			},

			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
				'6xl': '3rem',
				'8xl': '4rem',
				'10xl': '5rem',
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
			addUtilities({
				".paused-animation": {
					animationPlayState: "paused !important",
				},
			});
		},
	],
};

export default config;