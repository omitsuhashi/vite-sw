self.addEventListener('install', (event: ExtendableEvent) => {
  console.log('Service worker install event!', event);
});

self.addEventListener('activate', (event: ExtendableEvent) => {
  console.log('Service worker activate event!', event);
});

self.addEventListener('fetch', (event: FetchEvent) => {
  console.log('Fetch intercepted for:', event.request.url);
  // ここにキャッシュ戦略を実装
});
