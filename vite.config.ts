import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
const { resolve } = require('path');

export default defineConfig({
	build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				main: resolve(__dirname, './index.html'),
			},
		},
	},
	plugins: [reactRefresh()],
});
