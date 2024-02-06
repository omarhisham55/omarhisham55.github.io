'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "996d8af95902e6b0cbf6ff72fb19a12a",
"assets/AssetManifest.bin.json": "dc76ebbc8854eefd580110ad95e31ec3",
"assets/AssetManifest.json": "bbe52bb6cbdf1b836555fc69284e91d1",
"assets/assets/gif/done.gif": "e0a57371bc2accd27e687b98d1aecfef",
"assets/assets/images/about/aboutBg.png": "5e2528cb55ecfc8e58ab571d5566bf50",
"assets/assets/images/about/AUFS.png": "a87a54485aa4992ef8e22d2de5a44cef",
"assets/assets/images/about/cvScript.png": "b0182455055b6ebfb8b15fe72689ca38",
"assets/assets/images/about/github.png": "0b5a08329908daddeca171aa8d85a084",
"assets/assets/images/about/LinkedIn.png": "577709de6dee162495ed6d3c85bcd536",
"assets/assets/images/about/SIM.png": "a7a1d7ef416d648c4610f9dacdd7717f",
"assets/assets/images/certificates/flutter%2520with%2520abdullah%2520mansour.png": "d0000ff80e7283d77c256f31dbdfd38f",
"assets/assets/images/certificates/flutterCA.jpg": "95d6ea2259e02971f7fe957c2bf8f5a2",
"assets/assets/images/certificates/Gmind.png": "87ce210310f8ea3fce3df51a24a4082e",
"assets/assets/images/certificates/Intro%2520to%2520java.png": "e378adbb2ebfa46151c4a6e45ec5f0fe",
"assets/assets/images/certificates/JavaScript.png": "b1ede80638f27e358e14d577e764dc01",
"assets/assets/images/certificates/Java_Inheritance.png": "e9ec1fa146459ba12542ebb7d511a8c8",
"assets/assets/images/certificates/Java_OOP.png": "646e4eefb16b804d3cf777156ba1b945",
"assets/assets/images/certificates/kotlin.jpg": "24d8cc0e3fcd68ef907fb223dcef71d0",
"assets/assets/images/certificates/Meta_FED.png": "32718c99269b8f80c87c1874f3312eb4",
"assets/assets/images/certificates/web_design.png": "c92a44e2285b26226d917f989e29631a",
"assets/assets/images/projects/ecr.png": "ebbe2e6b181a4769c75088201901cc0b",
"assets/assets/images/projects/marvel.png": "168b7951683c8d4ffdbf68e8f96d2764",
"assets/assets/images/projects/maze.png": "81f3a08b286739514bf7fe6339aa2a53",
"assets/assets/images/projects/miniDataVolley.jpg": "6acaddc30b9e0968583f80e6843b3163",
"assets/assets/images/projects/pacman.png": "21796665eecdc10784c837c2fb6148e6",
"assets/assets/images/projects/pt.png": "a73ca20591df0842ca7b4b49914d544f",
"assets/assets/images/projects/sh.png": "17aa98bf0a7645025f1845eb85a9226c",
"assets/assets/images/projects/shopApp.png": "994138f7b170d548d1e4ef53471e52fb",
"assets/assets/images/projects/ticTacToe.png": "1425abbb913c9ac84cff354eea7f42d2",
"assets/assets/images/projects/tm.png": "5b8f1d0834b777f1b154be3e93d6c482",
"assets/assets/images/projects/trippy.png": "103d85b1ba231b2a8c97b664c83f1104",
"assets/assets/images/skills/development/adobeXd.png": "100cb99c82f5272e56733687a920de57",
"assets/assets/images/skills/development/androidStudio.png": "b1f355f370cb2d4dadedc6c0bd1e743d",
"assets/assets/images/skills/development/bloc.png": "e0427f1ea281191650332a591a600d24",
"assets/assets/images/skills/development/bootstrap.png": "28554d154d62417398fdc9b062464263",
"assets/assets/images/skills/development/firebase.png": "1fc5dc1f22ced3a82ee521d945eea6b1",
"assets/assets/images/skills/development/flutter.png": "e42b62bd5cc99137a27da350580e35dc",
"assets/assets/images/skills/development/laravel.png": "e791587324664fcf3ddc660cbc53dba2",
"assets/assets/images/skills/development/mongoDB.png": "0fbd04cba8e061b55e9da307a880f8f3",
"assets/assets/images/skills/development/unity.png": "e29b099f020c6696992ff93578533205",
"assets/assets/images/skills/development/vsCode.png": "8f7939593c81be0a9bb5129af5c302f6",
"assets/assets/images/skills/programming%2520Languages/c%2523.png": "005a313d8bd8c62356e752dc74d40ab6",
"assets/assets/images/skills/programming%2520Languages/c++.png": "abbf4a39c49bd6e9ae4c3dca55e1a656",
"assets/assets/images/skills/programming%2520Languages/css.png": "3bbe38ecdb84cb0d4ee47f334b1dd69d",
"assets/assets/images/skills/programming%2520Languages/dart.png": "625ef55a0acc6f6f8f62d5b271720a6a",
"assets/assets/images/skills/programming%2520Languages/html.png": "c2d6e9861f5bb81ecd0231e80adbfbe3",
"assets/assets/images/skills/programming%2520Languages/java.png": "4c11d260f83a89d550881aa6ea6325b4",
"assets/assets/images/skills/programming%2520Languages/js.png": "c5d6cd1dda1de371e865c217449036f2",
"assets/assets/images/skills/programming%2520Languages/kotlin.png": "840bb0e21f56bae7c51f860462df2edd",
"assets/assets/images/skills/programming%2520Languages/mySQL.png": "e71c89a81793a0583fccd64ecf140e71",
"assets/assets/images/skills/programming%2520Languages/nodejs.png": "4b452a9f14da28ded29c3aa256dc050f",
"assets/assets/images/skills/programming%2520Languages/php.png": "a0d0da8024cf16439267a8b2f27a937e",
"assets/assets/images/skills/programming%2520Languages/python.png": "2d02c13ffcbfa2f7715dc9cbed4c147c",
"assets/assets/images/trainings/Gmind.png": "57e753eb982b1a96bf5bb65db95af7bd",
"assets/assets/images/trainings/iti.png": "cbb0b53d5a82ac5c26fa2a737f186a0b",
"assets/assets/pdf/CV_Omar_Hisham.pdf": "ab2eb4d26253b50881b862a53d97e543",
"assets/assets/pdf/myCV.png": "ca5d55729cc1853dfa2ed4d542871286",
"assets/assets/videos/mobile%2520view/xo_mobile.mp4": "6212aafc68dcccbbee7a41df460e1bd0",
"assets/assets/videos/web%2520view/xo_web.mp4": "ad94b2f5fbe75c013ba702891bdb5809",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e205692f3e91817b8d6e62078a708140",
"assets/NOTICES": "d99bd94f87f293c43f42b24a82cbc2b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c4218ab21dd4b974f3e4581fb32f897e",
"/": "c4218ab21dd4b974f3e4581fb32f897e",
"main.dart.js": "fca8e278e5ae85684f1bcc66622bd3a3",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "528590cfb00fc1ca502120db4808bb64"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
