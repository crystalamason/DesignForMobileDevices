var CACHE_NAME = 'gih-cache';
var CACHED_URLS = [
  'offline.html',
  'mystyles.css',
  'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://code.getmdl.io/1.3.0/material.teal-red.min.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
      
    var catchFunction = function() {
      return caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        } else if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('offline.html');
        }
      });
    };
                                            
    if (event.request.url.indexOf('https://code.getmdl.io') !== -1) {
         fetch(event.request).catch(catchFunction, {mode: 'no-cors'});
    }
    
    fetch(event.request).catch(catchFunction);
  );
});



//fetch(request, {mode: 'no-cors'})
//.then(function(response) {
//  console.log(response); 
//}).catch(function(error) {  
//  console.log('Request failed', error)  
//});
//
//
//self.addEventListener('fetch', function(event) {
//  if (event.request.url.indexOf('https://code.getmdl.io') !== -1) {
//    event.respondWith(
//      fetch('gerbil.jpg')
//    );
//  }
//})
