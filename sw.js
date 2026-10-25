const CACHE = "ingles-prov-v21";
const ASSETS = [
  "./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png",
  "content/k.js", "content/n0.js", "content/n1.js", "content/n2.js", "content/w.js", "content/n3.js", "content/n4.js", "content/n5.js", "content/n6.js",
  "content/x-k.js", "content/x-n0.js", "content/x-n1.js", "content/x-n2.js", "content/x-w.js", "content/x-n3.js", "content/x-n4.js", "content/x-n5.js", "content/x-n6.js", "content/videos.js", "content/emoji.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;               // la sincronización (POST a Supabase) va directo a la red
  const url = new URL(req.url);
  if (url.hostname.endsWith("supabase.co")) return;

  // Página y contenido del curso: primero la red (para recibir mejoras), si no hay internet usa la copia guardada
  const isPage = req.mode === "navigate";
  if (isPage || (url.origin === location.origin && url.pathname.endsWith(".js") && !url.pathname.endsWith("sw.js"))) {
    e.respondWith(
      fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(isPage ? "index.html" : req, copy)); }
        return res;
      }).catch(() => caches.match(isPage ? "index.html" : req, { ignoreSearch: true }))
    );
    return;
  }

  // Íconos, manifest y fuentes: primero la copia guardada
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (url.origin === location.origin || url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com")) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }))
  );
});
