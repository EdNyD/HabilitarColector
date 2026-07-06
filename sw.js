// Service Worker - Gestión Académica PWA
const CACHE_NAME = 'portal-academico-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Red de paso (Network-first) para asegurar conexión con Apps Script
    event.respondWith(fetch(event.request).catch(() => {
        return new Response('Sin conexión a internet. Revisa tu red.');
    }));
});