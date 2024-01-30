import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				primary: '#0D1D55',
				light: '#FFFFFF',
				dark: '#131313'
			},
			fontSize: {
				'10xl': '10rem'
			},
			fontFamily: {
				title: ['argelha'],
				main: ['felix']
			},
			dropShadow: {
				text: '2px 2px 2px rgba(0, 0, 0, 0.4)'
			},
			boxShadow: {
				box: '2px 2px 4px rgba(0, 0, 0, 0.4)'
			}
		}
	},
	plugins: []
};
export default config;
