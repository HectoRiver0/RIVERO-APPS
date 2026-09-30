const CACHE = "rivero-apps-v1";
const ASSETS = ["./","./index.html","./styles.css","./config.js","./app.js","./manifest.json","./icon.svg","./hero.svg"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
