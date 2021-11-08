/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "57bd76a7b74fc431653cf1ca9717e8f9"
  },
  {
    "url": "about.html",
    "revision": "a36b9d45fb862ca2033eaea020d7d43e"
  },
  {
    "url": "about2.html",
    "revision": "eb400f11d21f22c2d632a0922e465211"
  },
  {
    "url": "assets/css/0.styles.a05aacfc.css",
    "revision": "0634eca22a4d18ccd7dc2edb4778af52"
  },
  {
    "url": "assets/img/229EBF47586EB812E0BDB0A8343227FD.jpg",
    "revision": "229ebf47586eb812e0bdb0a8343227fd"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.37c13638.js",
    "revision": "989c5401d5d7e26fc0e85e3c14f2cf2d"
  },
  {
    "url": "assets/js/11.920462a8.js",
    "revision": "88419ff0d28c523f1a53e8f3afc6d57b"
  },
  {
    "url": "assets/js/12.4ec4bdd6.js",
    "revision": "80e093bb90399aaf18c1d788bdca5125"
  },
  {
    "url": "assets/js/13.78a09c36.js",
    "revision": "59c1d379fdc98116b7740ae94868e53f"
  },
  {
    "url": "assets/js/14.bbc55ce3.js",
    "revision": "f15fabb366aeaa0610ad4356ac2710be"
  },
  {
    "url": "assets/js/15.839a7604.js",
    "revision": "79e3e456c3ee6045c9caf45101c833b1"
  },
  {
    "url": "assets/js/16.27b9caeb.js",
    "revision": "cbca26b74e11fa5c1ed15336cb8400f2"
  },
  {
    "url": "assets/js/17.d9972985.js",
    "revision": "47af338478866ceaf5ebf9d5326377ff"
  },
  {
    "url": "assets/js/18.ab427266.js",
    "revision": "5ac40d8bbcd7b72e3d2acf8aa0800d1c"
  },
  {
    "url": "assets/js/19.5e62a07a.js",
    "revision": "e987411acdf4f2a26a0d5b1a0b72d74d"
  },
  {
    "url": "assets/js/2.3d01849e.js",
    "revision": "b8e66cc4685cc655a22bea547b2be877"
  },
  {
    "url": "assets/js/20.b535327f.js",
    "revision": "7b6a45153cd193b0519fe9422220a8a5"
  },
  {
    "url": "assets/js/21.e9da2689.js",
    "revision": "ac9348488a3992d7b8016dcc16f5a593"
  },
  {
    "url": "assets/js/3.6d320543.js",
    "revision": "36c6870ea3709df1d33776c0593a66ed"
  },
  {
    "url": "assets/js/4.ee2aab3d.js",
    "revision": "4822549ead4b9cc66188da7171da009f"
  },
  {
    "url": "assets/js/5.54f1f3a9.js",
    "revision": "1f2bea57a08d4212bf9f2abf87cadbf8"
  },
  {
    "url": "assets/js/6.dbc887e0.js",
    "revision": "a3429332dd99d2d8386b6ff314940f0c"
  },
  {
    "url": "assets/js/7.0bf590bb.js",
    "revision": "fed2cceab862e921c1858857c3839f04"
  },
  {
    "url": "assets/js/8.95927881.js",
    "revision": "2ce0ed02787b3826ab1bd4ab4c582dfa"
  },
  {
    "url": "assets/js/9.5f695955.js",
    "revision": "8550b4da30b834661674f19fe25e699f"
  },
  {
    "url": "assets/js/app.f29e827c.js",
    "revision": "401db99841e083844b895aab1ab2ee32"
  },
  {
    "url": "css/aaa.html",
    "revision": "5bbdc8ee97e6cc2a2d3a33259e2758ee"
  },
  {
    "url": "css/bbb.html",
    "revision": "d7d6736582460c1e7ad1f60f20c2cd3c"
  },
  {
    "url": "css/ccc.html",
    "revision": "56674fa7eedcece7587c536d3557b217"
  },
  {
    "url": "css/index.html",
    "revision": "d67b4dfa2273f889768e27772a44b42a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "2af9def4701fd806cb1be7c48cdd9804"
  },
  {
    "url": "js/aa.html",
    "revision": "33d758cc472a490a235e379bdb3e3cd0"
  },
  {
    "url": "js/bb.html",
    "revision": "3ddffaff42f9ccbca27716971a885432"
  },
  {
    "url": "js/cc.html",
    "revision": "ab5007c0c2267ffd41f1d7e2ccba8771"
  },
  {
    "url": "js/index.html",
    "revision": "98569c28737fb939707d170a8843bb50"
  },
  {
    "url": "quanxue.html",
    "revision": "c6ba21e6522d91b5d75c4441ee59a7a6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
