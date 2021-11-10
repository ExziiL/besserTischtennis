import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
// const { resolve } = require('path');

export default defineConfig({
	build: {
		outDir: 'build',
		// rollupOptions: {
		// 	input: {
		// 		main: resolve(__dirname, 'src/main.tsx'),
		// 		about: resolve(__dirname, 'src/about.html'),
		// 	},
		// },
	},
	plugins: [reactRefresh()],
});
