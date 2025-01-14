const CACHE_NAME = "smart-home-cache-v1";
const urlsToCache = [
    "./index.html",
    "./styles.css",
    "./script.js",
    "./manifest.json",
    "./icons/icon-192x192.png",
    "./icons/icon-512x512.png"
];

// Install the service worker and cache files
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Opened cache");
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch files from the cache or fallback to network
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

// Activate the service worker and delete old caches
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log("Deleting old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(registration => {
                console.log("Service Worker registered with scope:", registration.scope);
            })
            .catch(err => {
                console.log("Service Worker registration failed:", err);
            });
    });
}
