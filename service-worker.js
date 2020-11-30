importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
  console.log(`Workbox berhasil dimuat`);
else
  console.log(`Workbox gagal dimuat`);

workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '1' },
    { url: '/style.css', revision: '1' },
    { url: '/js/script.js', revision: '1' },
    { url: '/manifest.json', revision: '1' },
    { url: '/js/script.js', revision: '1' },
    { url: '/icons/favicon.ico', revision: '1' }

]);