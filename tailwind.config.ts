import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	fontFamily: {
  		inter: [
  			'Inter',
  			'sans-serif'
  		],
  		'edu-sa': [
  			'Edu SA Beginner',
  			'cursive'
  		],
  		mono: [
  			'Roboto Mono',
  			'monospace'
  		]
  	},
  	colors: {
  		white: '#fff',
  		black: '#000',
  		transparent: '#ffffff00',
  		richblack: {
  			'5': '#F1F2FF',
  			'25': '#DBDDEA',
  			'50': '#C5C7D4',
  			'100': '#AFB2BF',
  			'200': '#999DAA',
  			'300': '#838894',
  			'400': '#6E727F',
  			'500': '#585D69',
  			'600': '#424854',
  			'700': '#2C333F',
  			'800': '#161D29',
  			'900': '#000814'
  		},
  		richblue: {
  			'5': '#ECF5FF',
  			'25': '#C6D6E1',
  			'50': '#A0B7C3',
  			'100': '#7A98A6',
  			'200': '#537988',
  			'300': '#2D5A6A',
  			'400': '#073B4C',
  			'500': '#063544',
  			'600': '#042E3B',
  			'700': '#032833',
  			'800': '#01212A',
  			'900': '#001B22'
  		},
  		blue: {
  			'5': '#EAF5FF',
  			'25': '#B4DAEC',
  			'50': '#7EC0D9',
  			'100': '#47A5C5',
  			'200': '#118AB2',
  			'300': '#0F7A9D',
  			'400': '#0C6A87',
  			'500': '#0A5A72',
  			'600': '#074B5D',
  			'700': '#053B48',
  			'800': '#022B32',
  			'900': '#001B1D'
  		},
  		caribbeangreen: {
  			'5': '#C1FFFD',
  			'25': '#83F1DE',
  			'50': '#44E4BF',
  			'100': '#06D6A0',
  			'200': '#05BF8E',
  			'300': '#05A77B',
  			'400': '#049069',
  			'500': '#037957',
  			'600': '#026144',
  			'700': '#014A32',
  			'800': '#01321F',
  			'900': '#001B0D'
  		},
  		brown: {
  			'5': '#FFF4C4',
  			'25': '#FFE395',
  			'50': '#FFD166',
  			'100': '#E7BC5B',
  			'200': '#CFA64F',
  			'300': '#B89144',
  			'400': '#A07C39',
  			'500': '#88662D',
  			'600': '#705122',
  			'700': '#593C17',
  			'800': '#41260B',
  			'900': '#291100'
  		},
  		pink: {
  			'5': '#FFF1F1',
  			'25': '#FBC7D1',
  			'50': '#F79CB0',
  			'100': '#F37290',
  			'200': '#EF476F',
  			'300': '#D43D63',
  			'400': '#BA3356',
  			'500': '#9F294A',
  			'600': '#841E3E',
  			'700': '#691432',
  			'800': '#4F0A25',
  			'900': '#340019'
  		},
  		yellow: {
  			'5': '#FFF970',
  			'25': '#FFE83D',
  			'50': '#FFD60A',
  			'100': '#E7C009',
  			'200': '#CFAB08',
  			'300': '#B69507',
  			'400': '#9E8006',
  			'500': '#866A04',
  			'600': '#6E5503',
  			'700': '#553F02',
  			'800': '#3D2A01',
  			'900': '#251400'
  		},
  		'pure-greys': {
  			'5': '#F9F9F9',
  			'25': '#E2E2E2',
  			'50': '#CCCCCC',
  			'100': '#B5B5B5',
  			'200': '#9E9E9E',
  			'300': '#888888',
  			'400': '#717171',
  			'500': '#5B5B5B',
  			'600': '#444444',
  			'700': '#2D2D2D',
  			'800': '#171717',
  			'900': '#141414'
  		}
  	},
  	extend: {
  		maxWidth: {
  			maxContent: '1260px',
  			maxContentTab: '650px'
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			tertiary: {
  				DEFAULT: 'hsl(var(--tertiary))',
  				foreground: 'hsl(var(--tertiary-foreground))'
  			},
  			subtle: {
  				DEFAULT: 'hsl(var(--subtle))',
  				foreground: 'hsl(var(--subtle-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			'heading': [
  				'var(--font-aeonik)'
  			],
  			'default': [
  				'var(--font-inter)'
  			]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'grid': {
  				'0%': {
  					transform: 'translateY(-50%)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
  			'wiggle': {
  				'0%, 100%': {
  					transform: 'translateX(0%)',
  					transformOrigin: '50% 50%'
  				},
  				'15%': {
  					transform: 'translateX(-4px) rotate(-4deg)'
  				},
  				'30%': {
  					transform: 'translateX(6px) rotate(4deg)'
  				},
  				'45%': {
  					transform: 'translateX(-6px) rotate(-2.4deg)'
  				},
  				'60%': {
  					transform: 'translateX(2px) rotate(1.6deg)'
  				},
  				'75%': {
  					transform: 'translateX(-1px) rotate(-0.8deg)'
  				}
  			},
  			'spinner': {
  				'0%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			'blink': {
  				'0%': {
  					opacity: '0.2'
  				},
  				'20%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0.2'
  				}
  			},
  			'shimmer': {
  				'0%, 90%, 100%': {
  					'background-position': 'calc(-100% - var(--shimmer-width)) 0'
  				},
  				'30%, 60%': {
  					'background-position': 'calc(100% + var(--shimmer-width)) 0'
  				}
  			},
  			'image-glow': {
  				'0%': {
  					'opacity': '0',
  					'animation-timing-function': 'cubic-bezier(.74, .25, .76, 1)'
  				},
  				'10%': {
  					'opacity': '0.5',
  					'animation-timing-function': 'cubic-bezier(.12, .01, .08, .99)'
  				},
  				'100%': {
  					'opacity': '0.7'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			'marquee': {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'flip': {
  				to: {
  					transform: 'rotate(360deg)'
  				}
  			},
  			'rotate': {
  				to: {
  					transform: 'rotate(90deg)'
  				}
  			},
  			'caret-blink': {
  				'0%,70%,100%': {
  					opacity: '1'
  				},
  				'20%,50%': {
  					opacity: '0'
  				}
  			},
  			'loading': {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'grid': 'grid 15s linear infinite',
  			'wiggle': 'wiggle 0.75s infinite',
  			'spinner': 'spinner 1.2s linear infinite',
  			'blink': 'blink 1.4s infinite both',
  			'shimmer': 'shimmer 5s infinite',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			'image-glow': 'image-glow 4s ease-out 0.6s forwards',
  			'marquee': 'marquee var(--duration) linear infinite',
  			'flip': 'flip 6s infinite steps(2, end)',
  			'rotate': 'rotate 3s linear infinite both',
  			'caret-blink': 'caret-blink 1.25s ease-out infinite',
  			'loading': 'loading 0.5s linear infinite'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    // require("tailwind-scrollbar-hide"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
export default config;
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};
