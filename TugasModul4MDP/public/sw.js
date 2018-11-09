self.addEventListener('install', function (event) {
    console.log('SW Installed');
    event.waitUntil(
        caches.open('static')
            .then(function (cache) {
                cache.addAll([
                    '/',
                    '/app.js',
                    '/manifest.json',
                    '/about.html',
                    '/index.html',
                    'sw.js',
                    '/icon/nahari.jpg',
                    '/icon/nisrina.jpg',
                    'icon/32.ico',
                    'icon/96.ico',
                    'icon/128.ico',
                    'icon/192.ico',
                    'icon/256.ico',
                    'https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                    'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
                    'https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
                    'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
                    'https://unpkg.com/axios/dist/axios.min.js',
                    'https://kodepos-2d475.firebaseio.com/kota_kab/k46.json?print=pretty',
                    'icon/Pulau-Cinta-Gorontalo.jpg',
                    'https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&h=350',
                    'https://1.bp.blogspot.com/-ruXt7J3TXBQ/UXJotrg2V5I/AAAAAAAANLw/zG0d2FLanG8/s1600/LOGO+KABUPATEN+POHUWATO.png'
                ]);
            })
    );
});

self.addEventListener('activate', function () {
    console.log('SW activated');
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});