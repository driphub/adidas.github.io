importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a825b53d663c7d3b336.js",
    "revision": "8b92ebc8e097d5cb4deab49f94b8ffbf"
  },
  {
    "url": "/_nuxt/246cfd6ac1ac90f4eee8.css",
    "revision": "4abe2a73f9ec32fcef618388e2d3fe5b"
  },
  {
    "url": "/_nuxt/258e256b6e87f0054fda.css",
    "revision": "ed57c4bbaa04e3b6e99553d8b0ef94e2"
  },
  {
    "url": "/_nuxt/33991ea11002162c9366.js",
    "revision": "8533aecdb7e5d18d0d087b61a5867746"
  },
  {
    "url": "/_nuxt/3eecb02ae967a1f7ffe8.css",
    "revision": "4f0f09191b778e1aa7b94f26a4fe8f42"
  },
  {
    "url": "/_nuxt/47bf19d68ea6a8095d99.js",
    "revision": "c7f1c4d629b094041837fc96f9cacf8c"
  },
  {
    "url": "/_nuxt/641299f8e1d9d3f65ca3.js",
    "revision": "89a83dd328c50f8c54890dfa2143cef1"
  },
  {
    "url": "/_nuxt/74728b0f7e8b020fdaea.js",
    "revision": "17ae1d31fa32dbd32bceb21824112ead"
  },
  {
    "url": "/_nuxt/7c7bf230cfc1a0e88d57.js",
    "revision": "239f8cbd741e54bd73affb103e0297d9"
  },
  {
    "url": "/_nuxt/8215d1ffe7f8a3873694.js",
    "revision": "84313cd926d70d5e81dc960ffe426258"
  },
  {
    "url": "/_nuxt/9270bf13df5f0af441e2.js",
    "revision": "7a18230de614fa57f48b148f130a7de9"
  },
  {
    "url": "/_nuxt/ad7125b20431b7ddbbe0.css",
    "revision": "6aa4f359bc71497c736030f1d4e602de"
  },
  {
    "url": "/_nuxt/b51797562600bea68f8f.js",
    "revision": "13d606d3a18c6e210da793316fb640fc"
  },
  {
    "url": "/_nuxt/d6e8903d878d7a261d94.js",
    "revision": "d797b1cc60e6dff5046ffffe9eb6e309"
  },
  {
    "url": "/_nuxt/de976dfe2f158b1f097f.js",
    "revision": "c5511bda36c49e7f7dbfd75f2e970c40"
  }
], {
  "cacheId": "adidas-github-io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
