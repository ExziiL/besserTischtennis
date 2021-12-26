import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
const { resolve } = require('path');

export default defineConfig({
	build: {
		outDir: 'build',
		rollupOptions: {
			input: {
				main: resolve(__dirname, './index.html'),
				about: resolve(__dirname, '/src/pages/überMich/index.html'),
			},
		},
	},
	plugins: [reactRefresh()],
});
