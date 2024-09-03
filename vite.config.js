// IMPORTS
import solid from 'solid-start/vite'
import { defineConfig } from 'vite'
import md from 'vite-plugin-solid-markdown'

// CONFIG
const config = defineConfig({
	plugins: [
		md(),
		solid({
			extensions: ['.mdx', '.md'],
		}),
	],
});

// EXPORTS
export default config;