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

      const routes = [
        'tuk-tuk-tours-sri-lanka',
        'negombo-tuk-tuk-tour',
        'negombo-city-tour',
        'colombo-city-tour',
        'negombo-lagoon-tour',
        'local-food-culture-tour',
        'sri-lanka-private-tours',
        'gallery',
        'about',
        'contact',
      ];

      if (fs.existsSync(indexPath)) {
        const indexHtml = fs.readFileSync(indexPath, 'utf-8');

        for (const route of routes) {
          const routeDir = path.join(distDir, route);
          fs.mkdirSync(routeDir, { recursive: true });

          const routeHtml = indexHtml
            .replaceAll('./assets/', '../assets/')
            .replaceAll('./logo.png', '../logo.png')
            .replace(
              '<link rel="canonical" href="https://ceylontuktuktours.com.lk/" />',
              `<link rel="canonical" href="https://ceylontuktuktours.com.lk/${route}/" />`
            )
            .replace(
              '<meta property="og:url" content="https://ceylontuktuktours.com.lk/" />',
              `<meta property="og:url" content="https://ceylontuktuktours.com.lk/${route}/" />`
            );

          fs.writeFileSync(
            path.join(routeDir, 'index.html'),
            routeHtml
          );
        }

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
    base: './',
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
