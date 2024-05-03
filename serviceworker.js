var CACHE_NAME = "ParkingTicketSale";
var CACHED_URLS = [
  "index.html",
  "global.css",
  "IconResHigh.png",
  "IconResLow.png",
  "IconResMid.png",
  "Manifest.json",
  "ParkingTicketSale.js",
  "uADMIN.btn_login.Bitmaps.Bitmap.svg",
  "uADMIN.btn_login.Bitmaps.Bitmap_1.svg",
  "uADMIN.btn_search_magam.Bitmaps.Bitmap.svg",
  "uADMIN.btn_search_nabpum.Bitmaps.Bitmap.svg",
  "uADMIN.page_ctr.ButtonAppearance.CloseIcon.svg",
  "uADMIN.page_ctr.ButtonAppearance.InsertIcon.svg",
  "uADMIN.page_ctr.ButtonAppearance.ScrollNextIcon.svg",
  "uADMIN.page_ctr.ButtonAppearance.ScrollPreviousIcon.svg",
  "uADMIN.page_ctr.ButtonAppearance.TabListIcon.svg",
  "uADMIN.pnl_magam_top.wbwtmsg.Picture.gif",
  "uLOGIN.html"
  ];

self.addEventListener('install', function(event) {
                event.waitUntil(
                                caches.open(CACHE_NAME).then(function(cache) {
                                return cache.addAll(CACHED_URLS);
                })
                                );
});


self.addEventListener('fetch',function(event) {
   event.respondWith(
     fetch(event.request).catch(function() {
                   return caches.match(event.request).then(function(response) {
       if (response) {
                                   return response;
       } else if (event.request.headers.get("accept").includes("text/html")) {
                                   return caches.match("index.html");
                   }
                   });
   })
                   );
});