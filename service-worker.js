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
    "revision": "9ba4bb1c90f19d3c0053e0b5233550c7"
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
    "url": "assets/css/0.styles.7cdbc532.css",
    "revision": "6e5a2f190e2a74f8f8810b6afb2ff5b7"
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
    "url": "assets/js/10.ce54699d.js",
    "revision": "0bca85b879800baacd9350a0a665e584"
  },
  {
    "url": "assets/js/11.5501e72e.js",
    "revision": "bd454e18d07c060133ee7ded87321699"
  },
  {
    "url": "assets/js/12.644a3ea3.js",
    "revision": "ac85e577a0f1e27631d3635214db0fe8"
  },
  {
    "url": "assets/js/13.dd5b0cc4.js",
    "revision": "3795f3be46f4d0e477f3c6c44cb1ff91"
  },
  {
    "url": "assets/js/14.0de77cc6.js",
    "revision": "944edaf3b9963b0bee1d89b2a880e889"
  },
  {
    "url": "assets/js/15.496a06a0.js",
    "revision": "88a0831f010dde65e462df6fc866dfaa"
  },
  {
    "url": "assets/js/16.291ac3ed.js",
    "revision": "cef4ef0780091e9751e4ba1fa89fb809"
  },
  {
    "url": "assets/js/17.46c022eb.js",
    "revision": "51f5d77ba8f601ed3044e86483ec32be"
  },
  {
    "url": "assets/js/18.a991b6bf.js",
    "revision": "b719a3ed4b6d94f3dd7d5aa8b30a7c09"
  },
  {
    "url": "assets/js/19.1f8ac72d.js",
    "revision": "12f23925dbcb8fbbe23c42e434ed96b8"
  },
  {
    "url": "assets/js/20.3fa062c8.js",
    "revision": "91c7c48380c97b172a7ebe8ccf41540d"
  },
  {
    "url": "assets/js/21.ba14c506.js",
    "revision": "418e8c898db90d55bf8cc2aad0c4337b"
  },
  {
    "url": "assets/js/22.61c3b375.js",
    "revision": "88e96f1442c124267bd890e3386bfa67"
  },
  {
    "url": "assets/js/23.71030b95.js",
    "revision": "cb78ab815f28e14d63f612eb5b94b8f1"
  },
  {
    "url": "assets/js/24.df3eedf0.js",
    "revision": "467feaf1941034bf9d0c32c869f06153"
  },
  {
    "url": "assets/js/25.b4e29219.js",
    "revision": "688ff111b2a1b7bd1d70ae33d1975378"
  },
  {
    "url": "assets/js/26.af800b76.js",
    "revision": "28378af726da6ff1e1f6bedecdf8b9a4"
  },
  {
    "url": "assets/js/27.fa2787dc.js",
    "revision": "e8cbc39ae5207ed282d3b07b9551afdb"
  },
  {
    "url": "assets/js/28.9d7e3fa1.js",
    "revision": "ef3a08c1307542c16bd15165a5819707"
  },
  {
    "url": "assets/js/29.5931aa09.js",
    "revision": "78be39f1b295cea443f475c502c734e0"
  },
  {
    "url": "assets/js/30.8e96e6e5.js",
    "revision": "f95993493910b04840ccb3962902b1b1"
  },
  {
    "url": "assets/js/31.e437277d.js",
    "revision": "6c95f8069b80c86a777c8526f1afdbbe"
  },
  {
    "url": "assets/js/32.d7fb8548.js",
    "revision": "4b5af271fb44da8572c2de653430bcc8"
  },
  {
    "url": "assets/js/33.7cc77608.js",
    "revision": "2b0defb62edc104e9e73aee92f9b684e"
  },
  {
    "url": "assets/js/34.136780be.js",
    "revision": "f1a6281b122c188a5c13b27c99cfdbe1"
  },
  {
    "url": "assets/js/35.6c71412c.js",
    "revision": "dd9991f8eac24a74f3ad89048b79a191"
  },
  {
    "url": "assets/js/36.036f25b0.js",
    "revision": "285562ef40ae92b6d992e250e7d2db1c"
  },
  {
    "url": "assets/js/37.01dc3882.js",
    "revision": "abe66e9b105bf74860390b8d440207f4"
  },
  {
    "url": "assets/js/38.a3976d01.js",
    "revision": "5cba855c255642d2c8b008aad3336ae7"
  },
  {
    "url": "assets/js/39.42eb5e6e.js",
    "revision": "915dc3af007105d3a6f562120fe83ace"
  },
  {
    "url": "assets/js/40.157afbb2.js",
    "revision": "59fce4a62b21420f85a721dce8ad3031"
  },
  {
    "url": "assets/js/41.b2d57c8f.js",
    "revision": "dcd64309f690cdcf2fe8f163daf4ceb2"
  },
  {
    "url": "assets/js/42.9b6126d1.js",
    "revision": "e0aedd18e79d8e876dbf9ea4d8a48fcd"
  },
  {
    "url": "assets/js/43.6c66d604.js",
    "revision": "8a8de999fd1181b9a124adf8d11368d2"
  },
  {
    "url": "assets/js/44.47ad583c.js",
    "revision": "5b158c8b7afee6ea82936dfcfff631ec"
  },
  {
    "url": "assets/js/45.754ee25c.js",
    "revision": "37afb69a508d5a28babb0e8e4f544fca"
  },
  {
    "url": "assets/js/46.6c68a49c.js",
    "revision": "b8d479f876203b945ee50d36343ed4c4"
  },
  {
    "url": "assets/js/47.3f4ecc7d.js",
    "revision": "837101b246d26f95a1e45b01092636bc"
  },
  {
    "url": "assets/js/48.49ef9626.js",
    "revision": "587eed7f631e6bc8952cf3f5c5adf28e"
  },
  {
    "url": "assets/js/49.66b65269.js",
    "revision": "deb0132b09cc3eee784390ecd2891d55"
  },
  {
    "url": "assets/js/5.b73864ca.js",
    "revision": "d5b908783f442a3b4be2f3259cd8ede3"
  },
  {
    "url": "assets/js/50.8696e636.js",
    "revision": "f7a32690aee15194ff720ec09e4fb463"
  },
  {
    "url": "assets/js/51.f051a74e.js",
    "revision": "153e28124ab6392186bdb29c374187bf"
  },
  {
    "url": "assets/js/52.2d56433d.js",
    "revision": "08d52318fdce0f156e534b5a16e36276"
  },
  {
    "url": "assets/js/53.855f00f6.js",
    "revision": "02c0fd2928010132cae8329b786289cc"
  },
  {
    "url": "assets/js/54.2901f09e.js",
    "revision": "4c58b01411d014c90009b4150584feb0"
  },
  {
    "url": "assets/js/55.02c3abb6.js",
    "revision": "4817171fc0bbb2f49791f586c6a1a775"
  },
  {
    "url": "assets/js/56.6c7a1d84.js",
    "revision": "411c1785502fb8d2922bcb7cc12ac3ff"
  },
  {
    "url": "assets/js/57.6d0e6563.js",
    "revision": "4a3cd8d7ef37338c405aa98488632639"
  },
  {
    "url": "assets/js/58.6acb7821.js",
    "revision": "01618d303199344752f156ba0e647532"
  },
  {
    "url": "assets/js/59.b4507617.js",
    "revision": "8ab06c08962d17669c396adc03929568"
  },
  {
    "url": "assets/js/6.b02f6820.js",
    "revision": "bb3642d5076e985beb5f796732203e87"
  },
  {
    "url": "assets/js/60.063dccd6.js",
    "revision": "b7ab30552ca1f3e6aa3e329ad4306a74"
  },
  {
    "url": "assets/js/61.1c3d3e47.js",
    "revision": "e9b0f3fbfe1582e1a2ae0e742601d430"
  },
  {
    "url": "assets/js/62.bebac621.js",
    "revision": "c5fcc3e62141e3eb187ad44da5d45b05"
  },
  {
    "url": "assets/js/63.a41a062f.js",
    "revision": "6db785a9e9990f8cc3db877d5306849c"
  },
  {
    "url": "assets/js/64.4131a149.js",
    "revision": "baa194912238e11530a0b3c1889babd2"
  },
  {
    "url": "assets/js/65.13ffc8e5.js",
    "revision": "97eb961c89ec3abb8add8be8ec793b1a"
  },
  {
    "url": "assets/js/66.176a5c02.js",
    "revision": "af7d391b21a59cf2e7034606cfc44908"
  },
  {
    "url": "assets/js/67.01f896c7.js",
    "revision": "22326aa0635af347944f88f846396644"
  },
  {
    "url": "assets/js/68.f83bb4fb.js",
    "revision": "b89efc4545cc8d987bd64c6b3a1604e4"
  },
  {
    "url": "assets/js/69.40a031d2.js",
    "revision": "afcb3713e524421c7e45bb151c2acd17"
  },
  {
    "url": "assets/js/7.deca52d1.js",
    "revision": "0e3c51980d0ef8cf573f848cdf2ea34d"
  },
  {
    "url": "assets/js/70.ec45077f.js",
    "revision": "e8a08bb76a14913c67700645c479c8fa"
  },
  {
    "url": "assets/js/71.e5e30d13.js",
    "revision": "c65fe12bcde72040ed2027c77eaa641d"
  },
  {
    "url": "assets/js/72.a7e0fdec.js",
    "revision": "eea5e5f5a2816141371ef8268a690216"
  },
  {
    "url": "assets/js/73.79ebe0d6.js",
    "revision": "e0de984df927920f91f9e68ee8bdb9e0"
  },
  {
    "url": "assets/js/74.cd5661f9.js",
    "revision": "ee9d2c0908e8dc9b877feb2a94ebd8f5"
  },
  {
    "url": "assets/js/75.b23969b1.js",
    "revision": "2b8082e502ba9e6c9a70bca40df3f6ff"
  },
  {
    "url": "assets/js/76.58824865.js",
    "revision": "17c47c1cd3dac43206df4b7511834186"
  },
  {
    "url": "assets/js/77.ed073d83.js",
    "revision": "4ab723fb6225d16383e2bfce43df050d"
  },
  {
    "url": "assets/js/78.d3e625f1.js",
    "revision": "a8abcecac729905b53a9249b0cbe5445"
  },
  {
    "url": "assets/js/79.b9ace7d1.js",
    "revision": "f5a0c35b54568da194139cae242f9d1f"
  },
  {
    "url": "assets/js/8.ec34003c.js",
    "revision": "be50c7f0958dabf6ea0f0e968fa1c899"
  },
  {
    "url": "assets/js/80.5ed5a04a.js",
    "revision": "4b538c5c13a9271d68072fdecea7f713"
  },
  {
    "url": "assets/js/81.5ecce274.js",
    "revision": "d04d299838adafd1fb72579e522b9b84"
  },
  {
    "url": "assets/js/82.63a5f8ba.js",
    "revision": "64590e9554a577bd8acc92e8007bdd89"
  },
  {
    "url": "assets/js/83.2a44cf68.js",
    "revision": "4f5534207a7aa420448f43099c49cb4a"
  },
  {
    "url": "assets/js/84.d24bf39e.js",
    "revision": "099e102f0c57adfd43483134c9b680d7"
  },
  {
    "url": "assets/js/85.aeaaa009.js",
    "revision": "dae9f133b1b19531acec36ededb09f1e"
  },
  {
    "url": "assets/js/86.43052942.js",
    "revision": "39195be1e3ee2bec62bdd72167fcd46d"
  },
  {
    "url": "assets/js/87.2ecc2eb3.js",
    "revision": "8b4913ae15e2dca4a7557fbd327bb2b7"
  },
  {
    "url": "assets/js/88.065fd158.js",
    "revision": "f836bcb408bbfa47101cb8d320e42afd"
  },
  {
    "url": "assets/js/89.5ff16955.js",
    "revision": "97ec8381f3ae914f4fe8eec26acbb8df"
  },
  {
    "url": "assets/js/9.92ecb17d.js",
    "revision": "ff28568d2328570f309665e13337b6c2"
  },
  {
    "url": "assets/js/90.0f431572.js",
    "revision": "969d42349d04eed5155e2f2dd18a5e00"
  },
  {
    "url": "assets/js/91.29a8491a.js",
    "revision": "8b056b0afd4f9646f02d72c8a4380ffc"
  },
  {
    "url": "assets/js/92.f69e57b4.js",
    "revision": "6ed1244fbcdf66b0ecb65b29840a1ceb"
  },
  {
    "url": "assets/js/93.fd7c93d8.js",
    "revision": "3cb7420862a1f80666c680d9cb41836b"
  },
  {
    "url": "assets/js/94.e1faa2cf.js",
    "revision": "f41bc8d18176133759c837157af7b143"
  },
  {
    "url": "assets/js/95.1a486bee.js",
    "revision": "2367772d3afa3b40c237c9dcf62cd535"
  },
  {
    "url": "assets/js/96.4885e613.js",
    "revision": "997dc3d9cb8ffdf30474313ac2d7bb44"
  },
  {
    "url": "assets/js/app.ca66faec.js",
    "revision": "152e48b7a4d3b64f802163c5cfc369fb"
  },
  {
    "url": "assets/js/vendors~docsearch.7e7c1afb.js",
    "revision": "efe0ab0200d4d8288d53312d8c4cb51a"
  },
  {
    "url": "assets/js/vendors~flowchart.d974dce4.js",
    "revision": "08bfbf0897407f397ad4f2d3f6fed812"
  },
  {
    "url": "assets/js/vendors~notification.80c00980.js",
    "revision": "0d65ff39ed7730bbb882c838787e23b4"
  },
  {
    "url": "en/api/cli.html",
    "revision": "bff61bfcdc36dae565c024b070e6f7ce"
  },
  {
    "url": "en/api/node.html",
    "revision": "fa09d89d6f1244d85cfdd86728d2edce"
  },
  {
    "url": "en/config/index.html",
    "revision": "88d5cbd075b735dbe0e8a6c098358559"
  },
  {
    "url": "en/faq/index.html",
    "revision": "a3da0a6892d5ce18865283a77e48138e"
  },
  {
    "url": "en/guide/assets.html",
    "revision": "4ea9e5e8eae5ebd8a0c793ff2272b5f7"
  },
  {
    "url": "en/guide/basic-config.html",
    "revision": "caf18c79d5de24ccb032ad18c22a18c0"
  },
  {
    "url": "en/guide/deploy.html",
    "revision": "97b1d88688f1e5e48a7cb185c3892cc9"
  },
  {
    "url": "en/guide/directory-structure.html",
    "revision": "7870b5caf6f4c0578994838064686f6d"
  },
  {
    "url": "en/guide/frontmatter.html",
    "revision": "c2bc102d4392516bb7e8aede8f5b3f7b"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "8d38d5b816066c449b7dc26031bd5dd1"
  },
  {
    "url": "en/guide/global-computed.html",
    "revision": "2a8b99143248980031c75e4d74fc69b3"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "d7f1ed0a728072d9b0fdc8227cc3f8e2"
  },
  {
    "url": "en/guide/index.html",
    "revision": "9a42c5797c4305864cce72eee83829ba"
  },
  {
    "url": "en/guide/markdown-slot.html",
    "revision": "6464be74e57fb24e82bc4cef34a38c87"
  },
  {
    "url": "en/guide/markdown.html",
    "revision": "d4bd312c262754af4cdf2c18c3589fab"
  },
  {
    "url": "en/guide/permalinks.html",
    "revision": "b9f4dc36f629787e43c4f0842be21e2e"
  },
  {
    "url": "en/guide/typescript-as-config.html",
    "revision": "c661def02e17dc7ef4d70cb44ac8a559"
  },
  {
    "url": "en/guide/using-vue.html",
    "revision": "3ce89962ef257427212dff6d7f80e75b"
  },
  {
    "url": "en/index.html",
    "revision": "423f9b7b7af938994b4a2f8bffbec53f"
  },
  {
    "url": "en/theme/blog-theme.html",
    "revision": "736bcf73ffa1e903443b71066b1302c5"
  },
  {
    "url": "en/theme/default-theme-config.html",
    "revision": "bde8990c4235956aa424d18d9b6a07d8"
  },
  {
    "url": "en/theme/index.html",
    "revision": "5565ffb8fb0132010dd4cd25f4edf54d"
  },
  {
    "url": "en/theme/inheritance.html",
    "revision": "7e40eb3ac431be83344b3e069401d12b"
  },
  {
    "url": "en/theme/option-api.html",
    "revision": "4ef7d3a1590e1b5d7551b34f5587ddc5"
  },
  {
    "url": "en/theme/using-a-theme.html",
    "revision": "308b169a30e0590d90fbdf7f373dd009"
  },
  {
    "url": "en/theme/writing-a-theme.html",
    "revision": "c075e87fd2faaf484f04df36c12d2c06"
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
    "revision": "e67530211e2f024423620d84f0e54996"
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
    "revision": "957d6c6e4b45c7733f1e2277dc8ef5c1"
  },
  {
    "url": "zh/api/node.html",
    "revision": "9cb0397241f23261af0a1f8fe14de1ab"
  },
  {
    "url": "zh/config/index.html",
    "revision": "94422f820f61d978acc538ae250c1b6d"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "e7df5de8bcb7d0290ff9bbf28c294f23"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "afa6a4fb577f034ec1cdd907a730eb99"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "816c3b082abdec97e86be977feb718db"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "d2e85724d40b5ca28debe6e28545686d"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "e580c99cb10692a414cb9ceaa4808d77"
  },
  {
    "url": "zh/guide/engine.html",
    "revision": "2b91128f933b56b07817710c68bf3c62"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "8b5c09bcfc7361fa3908090d3d4ac5d8"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "fce3155753f6ab82fbbbccb7ead50943"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "23a9fb89897369032ae9417a8ceae091"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "4730245fb52f3fa44827faaff2cb400a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "e8f2a57353801b83cc0c8f8744fe6776"
  },
  {
    "url": "zh/guide/java.html",
    "revision": "8471017353819cf332d3ae4a30b36587"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "f59a5d20f817fa9a51cd5f549785f287"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "be8a72a6092326c1d6a3d7189fbbd9b9"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "f9e3caeb26ea00155addbf728a2654d3"
  },
  {
    "url": "zh/guide/typescript-as-config.html",
    "revision": "2a99a3673187f68466b943a07d46003d"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "7446d2b80e6789a860023849ff4a9146"
  },
  {
    "url": "zh/guide/vue.html",
    "revision": "967ca01667ece0bf887653325e7d6896"
  },
  {
    "url": "zh/index.html",
    "revision": "2dfb332d42c3389ab95d3412e884c2b5"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "1fcd4b5b4d8ad19d098886d8c0daa1b2"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "e8f2cbb83413104ab6bbce16fa18eb12"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "3a0542df48421a87677f03fa769a7ea0"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "d59e9789a3c631217292a273b5c2794d"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "90505a1a4a3893aa79f7447e6b968c05"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "089d9a0b81631be50a239dc524f6c0fe"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "bcbfb9a95b7730690289f1829044d6fa"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "b0e55bc56318e0eec3cb9a47746040a4"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "334b612ec992ce6e75b2aa639e06726d"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "9eb8073e12fee604343efc1889ac7554"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "a396b412205caad4a53ba3ca851fdd3f"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "a2d4273a67d051fd1d6014a88895e6b2"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "bb01f39c5eacd440a780f9c7b59cc04a"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "2f06fdc03a49369954168c869019aed0"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "215da74a0c74cc7ad40c9cf6d7689d78"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "692046986ed8290f2ad635840bf591b7"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "2a41dee8a9db3bfafa0333f79f4ef924"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "fff92cca1c3ad193e8b6cae6947c5056"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "91360653d25d61f75cb3c7e6f3e6d3cb"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "099caa5db43d4eff711f54a60a411fe0"
  },
  {
    "url": "zh/question/bpm.html",
    "revision": "db2676fb6bffb72129af4fa9aabd848b"
  },
  {
    "url": "zh/question/index.html",
    "revision": "524a5a7d1f15bf5949b65e74a6d59d98"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "9073a1c2b7f5a6d72f6a964dc4afd10e"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "914ba2194049814cb1e40f46dcdc4e04"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "5d6c6c3dd058d756425e68fbd7d0ecf3"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "d4359347de7cb38121cb58d4343ec08f"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "b823b0c43e23658f54cd24b0b7a4a46a"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "e40c9a8fae3c89940e5da15eb0c03a81"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "22816b049883f0f92cdf9d9f4e38c9ec"
  },
  {
    "url": "zh/version/index.html",
    "revision": "eeaf8bc1ef7bff67f132a27d3507888d"
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
