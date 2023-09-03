import { resolve }  from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src');
const aboutMe = resolve(__dirname, 'src', 'pages', 'AboutMe');

const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  root,
  aboutMe,
  // base: "./",
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        // design: resolve(root, 'pages', 'Design', 'index.html'),
        // illustrations: resolve(root, 'pages', 'Illustrations', 'index.html'),
        test: resolve(root, 'test.html'),
        aboutMe: resolve(aboutMe, 'index.html'),
        // about: resolve(root, 'pages', 'AboutMe', 'index.html'),
      }
    }
  }

})
