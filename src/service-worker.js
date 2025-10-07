self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app-lista-cache").then(cache => {
            // Adiciona apenas os arquivos que realmente precisam ser armazenados no cache
            return cache.addAll([
                "index.html",
                "autenticacao.html",
                "paginaprensenca.html",
                "manifest.json",
                "icon-192.png",
                "icon-512.png"
            ]);
        })
    );
});


self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // Caso não tenha uma resposta no cache, tenta fazer a requisição pela rede
            return response || fetch(event.request);
        })
    );
});
