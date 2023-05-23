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
    "revision": "cf8004e6318ae3aff7b0eef65981410f"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/1.9-lang.png",
    "revision": "9a95306985d4954fe54bc8de5512d3ba"
  },
  {
    "url": "assets/1.9-official-plugin-options.png",
    "revision": "55243b507656a5c36b45b7d4b27c1cab"
  },
  {
    "url": "assets/1.9-official-plugin-tuple-usage.png",
    "revision": "252870643841d8bac56aac10d1a9d91f"
  },
  {
    "url": "assets/1.9-overview.png",
    "revision": "f3534cdf12b0474265fd296bdc82c225"
  },
  {
    "url": "assets/css/0.styles.c5745f4f.css",
    "revision": "80d7b1917bed1799af79a56fa3a72082"
  },
  {
    "url": "assets/img/bst.81343936.png",
    "revision": "81343936a4fa4b9bd36ec69eb9bb03ac"
  },
  {
    "url": "assets/img/codeGeneration.6597febd.png",
    "revision": "6597febddb25d3293a7cfea5a945e78e"
  },
  {
    "url": "assets/img/import.a0aca161.png",
    "revision": "a0aca161633826312c02a175d881d8fa"
  },
  {
    "url": "assets/img/jgt.65ba0082.png",
    "revision": "65ba0082c3d1431f22b212c8f588ca20"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/img/wrappingAndBraces.347b67f8.png",
    "revision": "347b67f8aad8a01d04a88a20c5845072"
  },
  {
    "url": "assets/img/yc.f1471335.png",
    "revision": "f14713350baa73bf3fc0bcfdf3a39f13"
  },
  {
    "url": "assets/js/10.16dddccf.js",
    "revision": "be890a81bf5d8c6786cf58862ccf2735"
  },
  {
    "url": "assets/js/11.a5f9cd7a.js",
    "revision": "995d47157ef8ae18b7810008cc343d87"
  },
  {
    "url": "assets/js/12.daabd91c.js",
    "revision": "7dfd64e2f1d9239612b7d7542026e583"
  },
  {
    "url": "assets/js/13.d72817a6.js",
    "revision": "fc7d347556805f157a6d2e179825ab0c"
  },
  {
    "url": "assets/js/14.7aa1beea.js",
    "revision": "6a133fc8e3bd6dd2a1b530c6003ce996"
  },
  {
    "url": "assets/js/15.d870bc42.js",
    "revision": "f2be38f44fc5856f44aee5370b12c413"
  },
  {
    "url": "assets/js/16.08c7b444.js",
    "revision": "bd29eacba986d1b49f440f0087f873c5"
  },
  {
    "url": "assets/js/17.bfddd348.js",
    "revision": "dae7f87bb6c423aa932501b864812df8"
  },
  {
    "url": "assets/js/18.83c5cf99.js",
    "revision": "c6e2ef8c11291411af07a48412ac80c8"
  },
  {
    "url": "assets/js/19.4aa16060.js",
    "revision": "5cd48f983e4778e2951d88dd48239dbb"
  },
  {
    "url": "assets/js/20.d1496872.js",
    "revision": "56d57f40e7552800dbfcedb4dd63b03f"
  },
  {
    "url": "assets/js/21.a9d27e5b.js",
    "revision": "a336e98dc9fd05e746fa46608a39a7ed"
  },
  {
    "url": "assets/js/22.1af6cb2e.js",
    "revision": "87e581f1575d9b7a2a92de11e588cbd2"
  },
  {
    "url": "assets/js/23.d75348d3.js",
    "revision": "52e63c754ed17d6c008d2e5ecd62dfdb"
  },
  {
    "url": "assets/js/24.8179016d.js",
    "revision": "5bde695e7f6218a1f4651adc359c8ba6"
  },
  {
    "url": "assets/js/25.553559f2.js",
    "revision": "204165a7a179d8dfb24da33c0fd8d88d"
  },
  {
    "url": "assets/js/26.84a7bb48.js",
    "revision": "7819b4b6b91b3b3be9ede429e3d943b2"
  },
  {
    "url": "assets/js/27.25e512d0.js",
    "revision": "098c20c4b968796cf2715e1d55f7fd0c"
  },
  {
    "url": "assets/js/28.1a9791a5.js",
    "revision": "a643b07fc37cc7560409c9dbb32771e7"
  },
  {
    "url": "assets/js/29.4bb9f4cd.js",
    "revision": "8ca2e02281f3a54b64816024e3bc2a66"
  },
  {
    "url": "assets/js/30.9e36a1e3.js",
    "revision": "4b10bf3c56c93ab40f70163e934042c2"
  },
  {
    "url": "assets/js/31.ffd27714.js",
    "revision": "63bf369317e5282cd34975da73e47406"
  },
  {
    "url": "assets/js/32.d7fb8548.js",
    "revision": "4b5af271fb44da8572c2de653430bcc8"
  },
  {
    "url": "assets/js/33.5f531c85.js",
    "revision": "5d585e634fc359da0dbf545b24241780"
  },
  {
    "url": "assets/js/34.c356e5fe.js",
    "revision": "8ba58b7bf3b979f3db95db199cfbd18c"
  },
  {
    "url": "assets/js/35.b15f3a84.js",
    "revision": "45f89208c8d40abfe6b89b527419ecdf"
  },
  {
    "url": "assets/js/36.036f25b0.js",
    "revision": "285562ef40ae92b6d992e250e7d2db1c"
  },
  {
    "url": "assets/js/37.3bcc82e6.js",
    "revision": "887437c9bf9a9024525f315b1f4d2081"
  },
  {
    "url": "assets/js/38.20b0d50a.js",
    "revision": "4c197e1f0ef43d15154d25792b2c4fb4"
  },
  {
    "url": "assets/js/39.90e665d0.js",
    "revision": "cca3fd41769dad473d1f3e6623e9ee62"
  },
  {
    "url": "assets/js/40.157afbb2.js",
    "revision": "59fce4a62b21420f85a721dce8ad3031"
  },
  {
    "url": "assets/js/41.9968cd29.js",
    "revision": "06d7514a20c1f05410e9d5b196c45286"
  },
  {
    "url": "assets/js/42.0d500142.js",
    "revision": "8a4bf549760719f480f94f30873e6884"
  },
  {
    "url": "assets/js/43.c549b43a.js",
    "revision": "cd8477d2e2450ab7dc09a500bfbd9439"
  },
  {
    "url": "assets/js/44.9bc00fe6.js",
    "revision": "777e434382f151912b31491b2d435aee"
  },
  {
    "url": "assets/js/45.3c08a99b.js",
    "revision": "93f262ef37ddc6381f45993c74422659"
  },
  {
    "url": "assets/js/46.149fc1cd.js",
    "revision": "7622d886d18c1bdad361d07c4a10a687"
  },
  {
    "url": "assets/js/47.518b8b60.js",
    "revision": "fc271f4ffcfd6fcd366349a517b3cf22"
  },
  {
    "url": "assets/js/48.bcc36e5b.js",
    "revision": "e58f0b99cada81fb54e324d80b076d85"
  },
  {
    "url": "assets/js/49.7830dd41.js",
    "revision": "8da68aa18953a81570dbcc6e069a06a2"
  },
  {
    "url": "assets/js/5.97841978.js",
    "revision": "478070ff2e364da922fd386b15b9ef04"
  },
  {
    "url": "assets/js/50.79246083.js",
    "revision": "49a1d848b6e620d03c7f847f1f080a07"
  },
  {
    "url": "assets/js/51.001c9af3.js",
    "revision": "fed2f15f39ffc2c6cad8150c4ea086f2"
  },
  {
    "url": "assets/js/52.cec73b01.js",
    "revision": "df644efb1ba72022f0e5e9069496b628"
  },
  {
    "url": "assets/js/53.03fe8d2f.js",
    "revision": "201f99c75f2a2fc315950bf64f994d07"
  },
  {
    "url": "assets/js/54.3deae936.js",
    "revision": "4a012e70478ce90d24bce8cc34318f36"
  },
  {
    "url": "assets/js/55.0b33e902.js",
    "revision": "02e26a5cd5a8d83792c796bba51e9877"
  },
  {
    "url": "assets/js/56.075b99cb.js",
    "revision": "c59fdbacb03421fb36f604673f10f1cb"
  },
  {
    "url": "assets/js/57.179f19d6.js",
    "revision": "81edab6b57416520a856ce12a4c2013d"
  },
  {
    "url": "assets/js/58.e27c4d52.js",
    "revision": "6af3922c5f59ece5f75dadc1ceddc9d5"
  },
  {
    "url": "assets/js/59.b4507617.js",
    "revision": "8ab06c08962d17669c396adc03929568"
  },
  {
    "url": "assets/js/6.0c31fde8.js",
    "revision": "569af47415d3c4beb04ff725855eb09b"
  },
  {
    "url": "assets/js/60.63184596.js",
    "revision": "aa6ddc890df6a7dc0ce57cf49fd663c9"
  },
  {
    "url": "assets/js/61.1febab86.js",
    "revision": "ed93d17327c7e6f2f03e59a5a78ece18"
  },
  {
    "url": "assets/js/62.aad032fc.js",
    "revision": "8a7badedcf471a48468fe36fe3219aee"
  },
  {
    "url": "assets/js/63.7f495f0a.js",
    "revision": "239881d787afb283a0a600f1ac9f848f"
  },
  {
    "url": "assets/js/64.2a66107a.js",
    "revision": "be9b3ea5ed05585a7f2b98ad29c37db1"
  },
  {
    "url": "assets/js/65.5813f084.js",
    "revision": "9e6775edd02144c78ec5b6441a48a2e4"
  },
  {
    "url": "assets/js/66.3b7b947c.js",
    "revision": "0521e43c7a70e3abb7dfd321baae803b"
  },
  {
    "url": "assets/js/67.306fa3b7.js",
    "revision": "fc6584096ef5ff690303a0221790d0ea"
  },
  {
    "url": "assets/js/68.ae7788c1.js",
    "revision": "8cccc150f83a36eb7aa871be557028da"
  },
  {
    "url": "assets/js/69.179db174.js",
    "revision": "d58b11b11b21f9b4970fb5bb26269e60"
  },
  {
    "url": "assets/js/7.d1719ee4.js",
    "revision": "55214f6e8d250f4dd1462ea8f73ee364"
  },
  {
    "url": "assets/js/70.08456861.js",
    "revision": "f2e700bd3792c0757a49b27365993c10"
  },
  {
    "url": "assets/js/71.62316704.js",
    "revision": "7b2a40bb8da4fe56f3cadd5878f02ea9"
  },
  {
    "url": "assets/js/72.5ec56a54.js",
    "revision": "82456805f79376af0093edb7baf068f6"
  },
  {
    "url": "assets/js/73.8c1ca0f7.js",
    "revision": "82da86a8f237604e4eb7e4e05f25759a"
  },
  {
    "url": "assets/js/74.086b2334.js",
    "revision": "05f1f376bff47daf5e3c7b416b3c1195"
  },
  {
    "url": "assets/js/75.0fe90a50.js",
    "revision": "95ecd978b2351581e5fb2f9e957299a2"
  },
  {
    "url": "assets/js/76.b6c48282.js",
    "revision": "cc27446992f1cb8a569765888298cde9"
  },
  {
    "url": "assets/js/77.a417940f.js",
    "revision": "d50dbec9f8da375bc956b82bf304a064"
  },
  {
    "url": "assets/js/78.078097be.js",
    "revision": "9741777b3b04294d74eb8246fc4287ca"
  },
  {
    "url": "assets/js/79.a658ead3.js",
    "revision": "76fca08f906c71549fb780644ae38ccf"
  },
  {
    "url": "assets/js/8.e858cf3a.js",
    "revision": "31c9f4844367fa4e56968478b5bd3b85"
  },
  {
    "url": "assets/js/80.9c3177b5.js",
    "revision": "7ed4b7361c0d4be169595835a81f09de"
  },
  {
    "url": "assets/js/81.a37588fc.js",
    "revision": "95524b80bb9b4f73bef9e52f6b1bdb1b"
  },
  {
    "url": "assets/js/82.c3a17c7b.js",
    "revision": "05110424ee5146bc964f58974254c95a"
  },
  {
    "url": "assets/js/83.f13bed93.js",
    "revision": "af1c7d02ee68a0ee793d6b72972ab9d4"
  },
  {
    "url": "assets/js/84.6718e8bc.js",
    "revision": "19adb6fd42876913e335551ebe0c72bb"
  },
  {
    "url": "assets/js/85.aeaaa009.js",
    "revision": "dae9f133b1b19531acec36ededb09f1e"
  },
  {
    "url": "assets/js/86.56b3650c.js",
    "revision": "30c1ce417245b1d8546da6c3c9cad7c5"
  },
  {
    "url": "assets/js/87.76d2ca9f.js",
    "revision": "c204d2aa899f136fee6be480b7b08cec"
  },
  {
    "url": "assets/js/88.5069ac5a.js",
    "revision": "f73b68afe79e57d536df1df2d2af8442"
  },
  {
    "url": "assets/js/89.8d283ded.js",
    "revision": "cd9eb482379afa4f856bcda5c579b6ad"
  },
  {
    "url": "assets/js/9.877378c9.js",
    "revision": "232a7a50b67455bc6a778835c4e458ea"
  },
  {
    "url": "assets/js/90.0fd0032f.js",
    "revision": "805e932596e0aa35d132e3929c00f45d"
  },
  {
    "url": "assets/js/91.8c537071.js",
    "revision": "9105c5489c3043105a40d78eec9a074c"
  },
  {
    "url": "assets/js/92.c99d9024.js",
    "revision": "5796e6760a54f27b5d29eacc68220b89"
  },
  {
    "url": "assets/js/93.9e4fdc63.js",
    "revision": "4791dd6241cb6f8a742db87fec65a6f4"
  },
  {
    "url": "assets/js/94.875e6a45.js",
    "revision": "8f79dca924ea0ee0f311e53ab944420e"
  },
  {
    "url": "assets/js/95.bbf86df2.js",
    "revision": "fc9a947f5b771318f99d7bb74e830db8"
  },
  {
    "url": "assets/js/96.43a5f238.js",
    "revision": "0db078b1200b3cc73347b3909b119f85"
  },
  {
    "url": "assets/js/app.e8a8a662.js",
    "revision": "dff4c1711a44acd4fb02843265ab75aa"
  },
  {
    "url": "assets/js/vendors~docsearch.3f80bb7f.js",
    "revision": "2595aed2322f11f247f17daf4d3566bf"
  },
  {
    "url": "assets/js/vendors~flowchart.237cf119.js",
    "revision": "256c72cf883d78769b7217465b14538e"
  },
  {
    "url": "assets/js/vendors~notification.e09fda73.js",
    "revision": "76e288891f7c3816bf655750f057a04c"
  },
  {
    "url": "en/api/cli.html",
    "revision": "3d4c310d3c42965300e71ac1cf065bce"
  },
  {
    "url": "en/api/node.html",
    "revision": "4ace1216444e1a1573654f0c9080ab5a"
  },
  {
    "url": "en/config/index.html",
    "revision": "20b7896fcc555b9a103f4d702d43256c"
  },
  {
    "url": "en/faq/index.html",
    "revision": "2047609f3a0ed0d03f8e791015cc8c15"
  },
  {
    "url": "en/guide/assets.html",
    "revision": "6dfee380e74977d65c01b30fc46c57cc"
  },
  {
    "url": "en/guide/basic-config.html",
    "revision": "f69edfbe4966e45d892729a04e39f385"
  },
  {
    "url": "en/guide/deploy.html",
    "revision": "c426808616e09a1568218ab61bd630e4"
  },
  {
    "url": "en/guide/directory-structure.html",
    "revision": "d769f3ea6cc2297b87a221c19fe496f4"
  },
  {
    "url": "en/guide/frontmatter.html",
    "revision": "f166ea007140d0a71438af38f09b3c2a"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "7353855d6bd10f76e15f77f0b922042e"
  },
  {
    "url": "en/guide/global-computed.html",
    "revision": "df616e4b4a33cb5ea538f750300ee283"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "8726598edd343cb5714cd65e56734f1a"
  },
  {
    "url": "en/guide/index.html",
    "revision": "1aa6c9d582f255ecd769c28c8f5eb096"
  },
  {
    "url": "en/guide/markdown-slot.html",
    "revision": "642f7c55e288035213025e20f81be060"
  },
  {
    "url": "en/guide/markdown.html",
    "revision": "ac8ade7359bc82a8e592e1e136a47447"
  },
  {
    "url": "en/guide/permalinks.html",
    "revision": "140f25e0e6d492b5f3d0447486c89860"
  },
  {
    "url": "en/guide/typescript-as-config.html",
    "revision": "76a4c7d3b4ddeae7ad24b1b23413a771"
  },
  {
    "url": "en/guide/using-vue.html",
    "revision": "140f2bd97c396fc49375ed6388dda66e"
  },
  {
    "url": "en/index.html",
    "revision": "76413810f58053dd14d658fe15254473"
  },
  {
    "url": "en/theme/blog-theme.html",
    "revision": "6941ba46f6ead2222379a8728fe393c7"
  },
  {
    "url": "en/theme/default-theme-config.html",
    "revision": "b5d22a63b88ce44bfaec2a6cc70a8dde"
  },
  {
    "url": "en/theme/index.html",
    "revision": "4ccab1d260fffcedb306d9fe9d5466c8"
  },
  {
    "url": "en/theme/inheritance.html",
    "revision": "6f6c7cad9eeacf2499a1a11fe63f909d"
  },
  {
    "url": "en/theme/option-api.html",
    "revision": "5b1c66f4ef5496673bca4227dda8e45e"
  },
  {
    "url": "en/theme/using-a-theme.html",
    "revision": "63310e19b8a7f4e8dbd9826fecb975ab"
  },
  {
    "url": "en/theme/writing-a-theme.html",
    "revision": "fc90a7c475e060fe3f8b88b2ed3ab63a"
  },
  {
    "url": "hero.png",
    "revision": "456046b993e4c36f31992663518ecbca"
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
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "images/hero1.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "images/logo.png",
    "revision": "456046b993e4c36f31992663518ecbca"
  },
  {
    "url": "index.html",
    "revision": "7206c89db1168324183e5b2316a1d553"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "45e35790cd8a398fbaf3e575b9e1b1f2"
  },
  {
    "url": "zh/api/node.html",
    "revision": "0e65f9dbf69e147372256d5ad6e632de"
  },
  {
    "url": "zh/config/index.html",
    "revision": "25663ccedfddfab242c247c9752605a2"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "1e656c74502b1efb66d7bbd1ed44c385"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "4d9e8324bc9871f06e4a4d9346a7497a"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "6828974f0dc62613a3d94d089c896dd7"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "ab243da47d05db70a98d38ecd038bf55"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "da1ca45fa90854ac5237aec7bde5526f"
  },
  {
    "url": "zh/guide/engine.html",
    "revision": "a2930aaa2872445bf4fa6a1be53f4220"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "f841cf540341cc101a4c05a7b0ada33c"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "a2c6a96d54d63c1cb46a7768b867c1c2"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "ae3173dd817870e24f0eeec4031aa608"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "967d2ef754d407ad1519f30a2078330b"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "071829d518c818593b7ee389eaafdb45"
  },
  {
    "url": "zh/guide/java.html",
    "revision": "1079d0ecc4d9934d2f2f0039ae8d89a7"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "37fe07fd831dcf7446b0f4e39655aeaa"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "1e235339447fc653c550aae8e4b84f68"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "15c884790b587cbe6a3b783dea10e0d6"
  },
  {
    "url": "zh/guide/typescript-as-config.html",
    "revision": "c3d86a97cc9dae29363a4ca281a90d80"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "e76f9d82ab54d3d5856c021cdf639ca7"
  },
  {
    "url": "zh/guide/vue.html",
    "revision": "05e962127e9a80c1de13adb9894bd9ff"
  },
  {
    "url": "zh/index.html",
    "revision": "d56a5f1bbbd46b513c751f2fe37ae530"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "beee8d0d89a2d19c36f3f1ecdbdde3c0"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "583c0da47b1a83db4afcdf63fc55a369"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "cd3e2cb78cdce7b6051a6ef1b2a9feab"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "4a6b66f2146c86048e8c504566b01fa7"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "001fcef83d7a2340a2600577e5d9ecd8"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "df621e0a843b555fb066a1e928d56d2b"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "859d57ea19398a65144c23633dd25099"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "acdd2a18fab905f27c3205d46202ccb9"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "bb8d9ca47aed13d777070e09a02efef2"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "269a34ed6fd3db754bd39e68bc846f55"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "34809808653237b645cad1468f57f8d5"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "28231fd98135a17e333903bc3793d720"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "efd491c8eaa1f7e297221675497c1ccd"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "2d26d7cbd871c30323d85a0e27b8af94"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "d719c5907510c5bb5288ccce569a6bc1"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "c8f2ed402ca8090dd7fcceb9f1da13f6"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "6442af642ecf9e1b55258ed6a3712477"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "9633db54813711aa2edc50ff4e6eae5c"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "5951a4b0adc197d1f346060b11ab5984"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "2b33e0f3a03a9668b25fce95b3e5af7a"
  },
  {
    "url": "zh/question/bpm.html",
    "revision": "c51dbce06039dbb431318a57bbf02997"
  },
  {
    "url": "zh/question/index.html",
    "revision": "29aafb41f6b0af0520a4e62e3fd82d8e"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "87b29438668adf5e3e717c2c8d359ad1"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "49ac81c6f3b2ca46df8db6ee7b469204"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "e424ea59e855e02302859e0fa559df31"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "abf781523847e4bb9f5f5b9530cd57f0"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "d158eba7f6de90528c28af35e2f6b45e"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "88ea3f53bff765b2a3eefbd32a8c4016"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "5fecbad4252f9f5f33aa62f644b7a3ca"
  },
  {
    "url": "zh/version/index.html",
    "revision": "1c26cea1a63ca2026a40b38979bd538a"
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
