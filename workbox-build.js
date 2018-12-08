const swBuild = require('workbox-build');

swBuild.generateSW({
    navegateFallback: 'index.html',
    globDirectory: './dist',
    globPatterns: [
        'index.html',
        '**.js',
        '**.css',
        'assets/avatar.png',
        'assets/sda-control.svg',
        'assets/super-store.svg',
        'assets/games/**',
        'manifest.json'
    ],
    swDest: 'dist/sw.js',
    templateUrls: {
        '?utm_source=pwa': ['index.html'],
    }
}).then(() => console.log('Service Worker generated'))
.catch(error => console.error(error, 'Falha ao gerar o Service Worker '));