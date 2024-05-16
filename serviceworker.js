var CACHE_NAME = "ParkingTicketSale";
var CACHED_URLS = [
  "index.html",
  "global.css",
  "IconResHigh.png",
  "IconResLow.png",
  "IconResMid.png",
  "img/calt_logo.png",
  "img/d.png",
  "img/m.png",
  "img/select.svg",
  "img/t.png",
  "img/the_hd.png",
  "img/w.png",
  "img/y.png",
  "Manifest.json",
  "ParkingTicketSale.js",
  "uADMIN.btn_login.Bitmaps.Bitmap.svg",
  "uADMIN.btn_search_magam.Bitmaps.Bitmap.svg",
  "uADMIN.page_screens.ButtonAppearance.CloseIcon.svg",
  "uADMIN.page_screens.ButtonAppearance.InsertIcon.svg",
  "uADMIN.page_screens.ButtonAppearance.ScrollNextIcon.svg",
  "uADMIN.page_screens.ButtonAppearance.ScrollPreviousIcon.svg",
  "uADMIN.page_screens.ButtonAppearance.TabListIcon.svg",
  "uADMIN.pnl_magam_top.wbwtmsg.Picture.gif",
  "uCUST.btn_login.Bitmaps.Bitmap.svg",
  "uCUST.btn_pay.Bitmaps.Bitmap.svg",
  "uCUST.btn_search_carno.Bitmaps.Bitmap.svg",
  "uCUST.btn_search_sale_his.Bitmaps.Bitmap.svg",
  "uCUST.html",
  "uCUST.page_screens.ButtonAppearance.CloseIcon.svg",
  "uCUST.page_screens.ButtonAppearance.InsertIcon.svg",
  "uCUST.page_screens.ButtonAppearance.ScrollNextIcon.svg",
  "uCUST.page_screens.ButtonAppearance.ScrollPreviousIcon.svg",
  "uCUST.page_screens.ButtonAppearance.TabListIcon.svg",
  "uCUST.wbwtmsg.Picture.gif",
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