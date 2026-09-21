import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function githubPagesPlugin(): Plugin {
  return {
    name: 'github-pages-plugin',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      const notFoundPath = path.join(distDir, '404.html');
      const noJekyllPath = path.join(distDir, '.nojekyll');

      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
      }
      if (!fs.existsSync(noJekyllPath)) {
        fs.writeFileSync(noJekyllPath, '');
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/Ceylon_Tuk_Tuk_Tours/',
    plugins: [react(), tailwindcss(), githubPagesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
