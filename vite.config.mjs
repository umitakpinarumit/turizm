import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/index.tsx'],
            refresh: true,
        }),
        react(),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                // Eğer `variables.scss` dosyanız yoksa, bu satırı kaldırın.
                // Eğer varsa, doğru yolu belirtin.
                // additionalData: `@import "src/styles/variables.scss";`,
            },
        },
    },
    esbuild: {
        loader: 'tsx', // JSX/TSX dosyalarını yüklerken kullanılır
    },
    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            'react/jsx-dev-runtime'
        ],
    },
});
