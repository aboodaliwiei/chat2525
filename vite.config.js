import { defineConfig } from 'vite'

// نحاول استيراد plugin-react إذا كانت متوفرة
let reactPlugin = []
try {
  reactPlugin = [require('@vitejs/plugin-react')()]
} catch (e) {
  console.warn('⚠️ @vitejs/plugin-react غير مثبت. يمكنك تثبيته بـ: npm install @vitejs/plugin-react')
}

export default defineConfig({
  plugins: reactPlugin,
  server: {
    host: '0.0.0.0',
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['chat2525.onrender.com'],
  },
})