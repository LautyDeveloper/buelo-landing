import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 Esto permite que escuche en todas las interfaces
    port: 5173, // 👈 Podés cambiar el puerto si querés
  },
});
