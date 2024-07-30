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
    "revision": "0fac2d2cedbdd246b8eb65a7d83c2588"
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
    "url": "assets/css/0.styles.7d14fee4.css",
    "revision": "432ab64622b030e347b8fa9565ef110b"
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
    "url": "assets/img/jgt.4d94a1ca.png",
    "revision": "4d94a1ca49d2eb3f26283c34d74815ec"
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
    "url": "assets/img/xlfwpz.9b728ce3.png",
    "revision": "9b728ce39a7705925f06642ae460080a"
  },
  {
    "url": "assets/img/yc.f1471335.png",
    "revision": "f14713350baa73bf3fc0bcfdf3a39f13"
  },
  {
    "url": "assets/js/10.ff210ff0.js",
    "revision": "4cd9bd845c7e9094a6b9566d5fccd1e4"
  },
  {
    "url": "assets/js/100.a58f1dd3.js",
    "revision": "93e5e028613865ec64f53eae7e790882"
  },
  {
    "url": "assets/js/101.c772fadc.js",
    "revision": "59df99ef48ab844ab6a4c39c3e7da806"
  },
  {
    "url": "assets/js/11.1a4bfc9a.js",
    "revision": "89eb5871dd188f600930ca1ce9388156"
  },
  {
    "url": "assets/js/12.22b2b4bd.js",
    "revision": "3b2125dbe5309fdbc55e60c9f14d47b2"
  },
  {
    "url": "assets/js/13.1e038166.js",
    "revision": "bfe07e4465b28ea2603ad0f7faf29415"
  },
  {
    "url": "assets/js/14.ab42cc32.js",
    "revision": "6d6f9780c54789229a614714982779c3"
  },
  {
    "url": "assets/js/15.35d89ba8.js",
    "revision": "29794b9154e40275b8cd2dc8fa7e6f64"
  },
  {
    "url": "assets/js/16.a3c8bba3.js",
    "revision": "52a7dc5e01b0ab5a7de7fddd65b029be"
  },
  {
    "url": "assets/js/17.830832c8.js",
    "revision": "130945775ad87fc5a0f5a20c812f7cea"
  },
  {
    "url": "assets/js/18.88297925.js",
    "revision": "de285fefb121bbddeefe1c828623bce3"
  },
  {
    "url": "assets/js/19.96810f61.js",
    "revision": "ff694b9b33f35a5cb7ff376f089ca4b7"
  },
  {
    "url": "assets/js/20.1789bc2a.js",
    "revision": "c906b598a733b711864a1cdc427a0566"
  },
  {
    "url": "assets/js/21.9c8e800c.js",
    "revision": "b96cf9ccf817d763ead2fdfa419461b0"
  },
  {
    "url": "assets/js/22.6110ecd1.js",
    "revision": "9c1526c659e150bba44cbc00cb80a017"
  },
  {
    "url": "assets/js/23.aa3b9e3f.js",
    "revision": "ddab2ba56923ad731a022972013a15f9"
  },
  {
    "url": "assets/js/24.1f4613b5.js",
    "revision": "df431e9275ab00e1cc592a49774df033"
  },
  {
    "url": "assets/js/25.912eea07.js",
    "revision": "eb9d2039a899ea3ba43fc8bc49861d53"
  },
  {
    "url": "assets/js/26.6fdb7bb7.js",
    "revision": "de7f55543f517ef9a557a4bab253ec4a"
  },
  {
    "url": "assets/js/27.2e7521eb.js",
    "revision": "4157fb1b9c2e32e0663a4c87f131e3f2"
  },
  {
    "url": "assets/js/28.3bdf40a3.js",
    "revision": "233e6118f30bb72cf2ddabf05c10331a"
  },
  {
    "url": "assets/js/29.f7333a62.js",
    "revision": "beba02c37965a847951462c0449de5db"
  },
  {
    "url": "assets/js/30.0748022e.js",
    "revision": "a03b844ec4cea6c34c6b2b0326929683"
  },
  {
    "url": "assets/js/31.1902535c.js",
    "revision": "987fb31972886243988e214509a50818"
  },
  {
    "url": "assets/js/32.6c4179a5.js",
    "revision": "530b0af9c4fbb1372d1d7ac95de17011"
  },
  {
    "url": "assets/js/33.b6d8f44b.js",
    "revision": "7fad31cc09c23b52096fafc9da924349"
  },
  {
    "url": "assets/js/34.024dc6c0.js",
    "revision": "68da9a12a42f4b259344e1e56e3e4659"
  },
  {
    "url": "assets/js/35.4f449e00.js",
    "revision": "fa86bb9ebf16c81dd8c5e174b268d3cd"
  },
  {
    "url": "assets/js/36.4e08edb6.js",
    "revision": "9c89d77d536e48b3a9106f50f0f74cdd"
  },
  {
    "url": "assets/js/37.a844b5b7.js",
    "revision": "74c88d845d863f9f40c7c1419643a6d2"
  },
  {
    "url": "assets/js/38.e6d6b1e8.js",
    "revision": "2e980733b7bb92032f986ea78bdebe52"
  },
  {
    "url": "assets/js/39.aa0fb4a8.js",
    "revision": "cf7cc671e169dc97fb8b090a38cd12b0"
  },
  {
    "url": "assets/js/40.c353b891.js",
    "revision": "a8d496cd3f3c815d0dd6011790935d4c"
  },
  {
    "url": "assets/js/41.61290db9.js",
    "revision": "17afdfb3b6e2aac000fc3a00be22674a"
  },
  {
    "url": "assets/js/42.5c1d574a.js",
    "revision": "557f4b9960bcf9fdb67fabc887ebe6e6"
  },
  {
    "url": "assets/js/43.70a77561.js",
    "revision": "099979afe661ae1988dfc2fadafb6152"
  },
  {
    "url": "assets/js/44.c560ea5e.js",
    "revision": "070d8f7b7bbc8bf4b74272328825ac50"
  },
  {
    "url": "assets/js/45.0fc5cdb1.js",
    "revision": "4431d158239e46e5ef7ba346f765cba4"
  },
  {
    "url": "assets/js/46.7ec0df67.js",
    "revision": "3737f7712a56ba91eeea5421d4d2184b"
  },
  {
    "url": "assets/js/47.aa8f6421.js",
    "revision": "428e53bf418b9e2b14e7bdc595f5e754"
  },
  {
    "url": "assets/js/48.20782496.js",
    "revision": "f09a1ea9a2c6400da9d5f164c37b96aa"
  },
  {
    "url": "assets/js/49.660197a6.js",
    "revision": "dca844e3382ae8ac3e688a9383ae8fcd"
  },
  {
    "url": "assets/js/5.e4161a44.js",
    "revision": "7a7cb95d3460b51904c5337ce42b2aaa"
  },
  {
    "url": "assets/js/50.a675fbab.js",
    "revision": "91c22b670d822bbc9c7203fef858c122"
  },
  {
    "url": "assets/js/51.99ef347d.js",
    "revision": "5a2dee67557a8fa630199a8d17c514be"
  },
  {
    "url": "assets/js/52.6d974146.js",
    "revision": "4086940db6cfa738216f8071ff5aaaa3"
  },
  {
    "url": "assets/js/53.d1911f3d.js",
    "revision": "16ffa2022d7c32997ae55ccc0dfe35ab"
  },
  {
    "url": "assets/js/54.e8012196.js",
    "revision": "cdd44ff3f0fc385321c40905ad51397a"
  },
  {
    "url": "assets/js/55.f4abb04a.js",
    "revision": "71eadea7ebcd9eee04482539dcb1754a"
  },
  {
    "url": "assets/js/56.b46d4e10.js",
    "revision": "7a390ea1cc9bc70bbf80fdd8ae412398"
  },
  {
    "url": "assets/js/57.2cb619f0.js",
    "revision": "0dc99ae0c6aaf6cb592ce424898b21c1"
  },
  {
    "url": "assets/js/58.7cce6cdb.js",
    "revision": "eac737fe7cdc6d72b265456bbf61bdea"
  },
  {
    "url": "assets/js/59.4b10a1c8.js",
    "revision": "6ce464dc557994b301e5fc6f461ea368"
  },
  {
    "url": "assets/js/6.cdeb2b30.js",
    "revision": "0dab5728238a95a3b9a7aa25f4898c01"
  },
  {
    "url": "assets/js/60.131ea481.js",
    "revision": "b9ce22c8fbaf3b9d03af2bc90da1ca90"
  },
  {
    "url": "assets/js/61.67415b78.js",
    "revision": "64806acb0b93f286495d2481a8abd04f"
  },
  {
    "url": "assets/js/62.4d1cd241.js",
    "revision": "6d64911a2b81c6f68a9c982213bcc818"
  },
  {
    "url": "assets/js/63.019b08e3.js",
    "revision": "c2dd92564cc836ddea3e65451274a466"
  },
  {
    "url": "assets/js/64.a5507181.js",
    "revision": "a588ad287d213026888d9b6c69de8d7d"
  },
  {
    "url": "assets/js/65.e97061ab.js",
    "revision": "a7a5b167ac4ec00b5df24b3a8594182d"
  },
  {
    "url": "assets/js/66.7fc5e356.js",
    "revision": "db62de85ad9c17f6dbd1d40771d33816"
  },
  {
    "url": "assets/js/67.4a5ef356.js",
    "revision": "191ce464b65a346e0e71b50a061bb585"
  },
  {
    "url": "assets/js/68.1fe0478f.js",
    "revision": "2acfed1d8a5b5be842391373469df1e5"
  },
  {
    "url": "assets/js/69.63b1ca41.js",
    "revision": "abf4177f1f794f4de353ae835364e60e"
  },
  {
    "url": "assets/js/7.a9406ad0.js",
    "revision": "7cff73747fe675676561c65450b5e7f9"
  },
  {
    "url": "assets/js/70.3582f33d.js",
    "revision": "ee3a54040006adf2f00c148f28a702a7"
  },
  {
    "url": "assets/js/71.16e8eb3a.js",
    "revision": "33464bb242fe0ccc1969bf9928bd9380"
  },
  {
    "url": "assets/js/72.cdb02e69.js",
    "revision": "516271ce75ae447ab08ade736c00add6"
  },
  {
    "url": "assets/js/73.3d8f8810.js",
    "revision": "abe13ae62a10f55535b88ec653f334dc"
  },
  {
    "url": "assets/js/74.7599d0e6.js",
    "revision": "fbc5b235cbbdcb55d78db6bc0c7a0518"
  },
  {
    "url": "assets/js/75.000d8f5c.js",
    "revision": "a1c7a123b8f7fd716fb0645d98c09059"
  },
  {
    "url": "assets/js/76.1cd98531.js",
    "revision": "a3c10d47e8062ef642c624d05bbd743e"
  },
  {
    "url": "assets/js/77.49a9308c.js",
    "revision": "408ea2914b8ca2205acb11466dc170a0"
  },
  {
    "url": "assets/js/78.a8b8d40f.js",
    "revision": "5523345d1dea7b79d3b44c20953616c3"
  },
  {
    "url": "assets/js/79.b0635d30.js",
    "revision": "f5fa28d4c885cf634e4365c896428de2"
  },
  {
    "url": "assets/js/8.9a193c71.js",
    "revision": "7e3956d9cf3401a57472f69b455330d1"
  },
  {
    "url": "assets/js/80.9225d2a1.js",
    "revision": "230cf40bce69852cae12e771ee666e6c"
  },
  {
    "url": "assets/js/81.b921abeb.js",
    "revision": "382013e1bbe91fa14c28bc5dc7287e02"
  },
  {
    "url": "assets/js/82.c87be1d5.js",
    "revision": "99148eb4785b0719876544bd3d93c4d3"
  },
  {
    "url": "assets/js/83.7eb21b00.js",
    "revision": "fe139119751a71ed5279c089c2c177d5"
  },
  {
    "url": "assets/js/84.2c3138f5.js",
    "revision": "c0dbe02e6cd42711bca1d092f3670ad5"
  },
  {
    "url": "assets/js/85.25e3c5ab.js",
    "revision": "a547a5d4c635c5aca81a4944b02503c0"
  },
  {
    "url": "assets/js/86.298d21d9.js",
    "revision": "a3cfd1a531270f21a4ce9386ea0a1712"
  },
  {
    "url": "assets/js/87.3677a8d8.js",
    "revision": "229f06814ea6010660bab97248787e35"
  },
  {
    "url": "assets/js/88.e5164866.js",
    "revision": "febf2eb70cbc423de1279f4d546c9a4c"
  },
  {
    "url": "assets/js/89.89860e73.js",
    "revision": "5e2a96b2c318ea7392853936555ef142"
  },
  {
    "url": "assets/js/9.dc644ef5.js",
    "revision": "f215006a64b944959b3e528240a8b70f"
  },
  {
    "url": "assets/js/90.83fa4ecb.js",
    "revision": "75b1087fe2cb267a64d4010e5b0a4f30"
  },
  {
    "url": "assets/js/91.7d33cd4f.js",
    "revision": "98f06d990c5e9b8796099edd75ad4ca7"
  },
  {
    "url": "assets/js/92.c113aba3.js",
    "revision": "b2c0a236635156bfcb3114bf0202aa2e"
  },
  {
    "url": "assets/js/93.45f84c08.js",
    "revision": "a964c0a8a0ff4a92f2b19c26424cf988"
  },
  {
    "url": "assets/js/94.7e0f65c4.js",
    "revision": "58095c519870bc5ade7021ee759689ac"
  },
  {
    "url": "assets/js/95.ea5be76b.js",
    "revision": "99c9f8adf1c5f84ef2bbd03d7cd04cd9"
  },
  {
    "url": "assets/js/96.b238275d.js",
    "revision": "5176a6263207c72565bfca2c21c37b6e"
  },
  {
    "url": "assets/js/97.7febbcfb.js",
    "revision": "08b275691b90c50164d08928dac980bb"
  },
  {
    "url": "assets/js/98.f420f00b.js",
    "revision": "6fd76468b0183dca0652c1ae39b56867"
  },
  {
    "url": "assets/js/99.2af30b10.js",
    "revision": "fcbb02065db702fbc3c31b0db27272f3"
  },
  {
    "url": "assets/js/app.5b2d9638.js",
    "revision": "100d6f98c076c2ae20a9856963d85d50"
  },
  {
    "url": "assets/js/vendors~docsearch.3f80bb7f.js",
    "revision": "2595aed2322f11f247f17daf4d3566bf"
  },
  {
    "url": "assets/js/vendors~flowchart.4f56b28a.js",
    "revision": "65511b54908e54a0a35567e983c77863"
  },
  {
    "url": "assets/js/vendors~notification.e09fda73.js",
    "revision": "76e288891f7c3816bf655750f057a04c"
  },
  {
    "url": "en/api/cli.html",
    "revision": "dc8e9d87e0cbe24762480a13a68ec53a"
  },
  {
    "url": "en/api/node.html",
    "revision": "a0f226feece13ba3996c9ad2c03fdcf5"
  },
  {
    "url": "en/config/index.html",
    "revision": "72fe12a1f5a0619673945d16d1380a9a"
  },
  {
    "url": "en/faq/index.html",
    "revision": "b971403c0b46960fc0fadfe3b9228cfc"
  },
  {
    "url": "en/guide/assets.html",
    "revision": "39479e864ee715815ee769078e1af4f0"
  },
  {
    "url": "en/guide/basic-config.html",
    "revision": "aa069d70dd2b1f72533abcb4b1ccdb79"
  },
  {
    "url": "en/guide/deploy.html",
    "revision": "a9445997a1a586919f06da226c22b783"
  },
  {
    "url": "en/guide/directory-structure.html",
    "revision": "05cabcff265ece5fb68541ed29987c55"
  },
  {
    "url": "en/guide/frontmatter.html",
    "revision": "04fd617738a8bb2c59f8d10c8c8e5443"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "84a0c48bb6c34826b33c3beb60ecf201"
  },
  {
    "url": "en/guide/global-computed.html",
    "revision": "e4739ed8c72068cd029f6c1681719976"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "a9b2ae64b9744cb7ed539dbcc1baceb0"
  },
  {
    "url": "en/guide/index.html",
    "revision": "9567f9970db07ba61a630f115f786580"
  },
  {
    "url": "en/guide/markdown-slot.html",
    "revision": "abdaaccbd4a46c48fc876dff8c3cdbea"
  },
  {
    "url": "en/guide/markdown.html",
    "revision": "f31ce3e98fad9375f425f4fc231ed9a2"
  },
  {
    "url": "en/guide/permalinks.html",
    "revision": "1d01dfc8fb22013068f56dece2af5347"
  },
  {
    "url": "en/guide/typescript-as-config.html",
    "revision": "c6fbd912ab8bdd389ccd65c47316bb5b"
  },
  {
    "url": "en/guide/using-vue.html",
    "revision": "0ea9dd34ca2547c578d3cd45245d3e39"
  },
  {
    "url": "en/index.html",
    "revision": "8b6d3dc04e163e52b7fd4e96ef4b3a6c"
  },
  {
    "url": "en/theme/blog-theme.html",
    "revision": "038afaf964f8530ce005ec8dc10e300f"
  },
  {
    "url": "en/theme/default-theme-config.html",
    "revision": "64cdb392482e7722982b6e3790b6f4f2"
  },
  {
    "url": "en/theme/index.html",
    "revision": "ed8e7991f6adcab199e5dffa7a0e408b"
  },
  {
    "url": "en/theme/inheritance.html",
    "revision": "f3a30d57247f32e154a0f99fed6dfcb6"
  },
  {
    "url": "en/theme/option-api.html",
    "revision": "a1966685240e582944e3ad96cf221920"
  },
  {
    "url": "en/theme/using-a-theme.html",
    "revision": "c7e8a1078d797590d965d0b063d56d66"
  },
  {
    "url": "en/theme/writing-a-theme.html",
    "revision": "244764f3d3f7c1ca6090cb06c847df0d"
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
    "revision": "9d8699fa6beb258ca109ca5ef6c78a95"
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
    "revision": "30d3651b28ccb0c6f5948c62e6345bef"
  },
  {
    "url": "zh/api/node.html",
    "revision": "7a06bfa0e42c386b9b357c0694498bee"
  },
  {
    "url": "zh/config/index.html",
    "revision": "fc8b66d5d84f6ca868c95827bb0b436a"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "3db7a60185ae109becd0ba87516e999f"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "41aca32019a766ec5655f7f6f23ddaf1"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "1e4e9b4ee6bffbc4874b735d4136a7e4"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "677df8233733091234443a676c59fc88"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "166206a6cb87b16bfd6edd6cf3df6e5a"
  },
  {
    "url": "zh/guide/engine.html",
    "revision": "8d35a16677ab6827039493f8347b5b2f"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "aff4ccbe2e1a8efcc886105a180b9382"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "fe5f56a56ae1d4e2e746be56c77d9ca1"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "59a2256bad44f9c7a63c2f5e8c47dc76"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "decdd2167c59381eb9884def959614f3"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "462c56ceade367bc8eedd56c4ec806b5"
  },
  {
    "url": "zh/guide/java.html",
    "revision": "3815a741dc753227b45032954de06a9d"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "16c22dd23909ecbff3350f9ad0b4f589"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "f9f213fa0bd5687c3fe7a51f208791d6"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "04a6ee09320e95836575943706cb095a"
  },
  {
    "url": "zh/guide/typescript-as-config.html",
    "revision": "2fc0456139f34b1b7008c4358311c990"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "7386a6e832f61a157e073fcfebea3312"
  },
  {
    "url": "zh/guide/vue.html",
    "revision": "2607621072e9207e019f4e3cf7adde30"
  },
  {
    "url": "zh/index.html",
    "revision": "0402f7ca56ef817139e5157589881e5e"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "d9bf7c481dbfea99feabc627a4d62ccb"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "dec3b521a08c7671a3c0f3ba36cea36c"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "b950162003194b2575a286e361c75c2a"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "01aaacb64a25ac1af56d6bca038ab00f"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "ade1dbc38a83100c3ca0b58c2596e3fc"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "84f80c133b235a479d0b520d8389a948"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "e75ce529a91675b5bd000272384e308c"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "3e27f74155c9bc2a9697152c82828d0a"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "9b4d97ef427c7552c0f47fd5ef23484e"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "ef5ce45464982312a0212187b6be193b"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "b1bfed79f196e70653216a89a3839965"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "014511e425f86caf012b0a16b4240a4b"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "85027aa671dd4c1bc5b2c4f360bba396"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "896f754ace13ca9bd9d3bd4a3ad09951"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "a067a83510eb897c159cb4cf1fb08406"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "38c857ec092bafc40f2bb2245da8d1c8"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "ed133634271e97eafbaefff423d35c08"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "08329f3a5741c1815833659f7737eb30"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "bcd9cbaa0551f60f032d6fdd4d123bff"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "054c17f1ef9128a3d889eed47fde0f41"
  },
  {
    "url": "zh/project/easyweb-3.0.0.html",
    "revision": "8492a2c14848312e56eb271c4a1b3292"
  },
  {
    "url": "zh/project/easyweb-3.1.0.html",
    "revision": "60586191f3eebf13a70af88bdef64a82"
  },
  {
    "url": "zh/project/index.html",
    "revision": "c2d9a4f4ecc2f7989110b838f3f2f938"
  },
  {
    "url": "zh/project/nacos-2.4.0.html",
    "revision": "1bf1f064461f838599a32b5a5d55f5c5"
  },
  {
    "url": "zh/project/sentinel-1.8.8.html",
    "revision": "b3928b968039de3ce30b8d2fb1f26e07"
  },
  {
    "url": "zh/question/bpm.html",
    "revision": "2b765d93c3350c164173a384482eac48"
  },
  {
    "url": "zh/question/index.html",
    "revision": "c00d2094206bb7c889d6fff31d6adda1"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "3b8262d10bdd186c5ca73bee0353fcae"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "1e501874eb7ce187116c1c41d51a9569"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "e84164518a9272e178a93549b2b6cbe0"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "bb05dee6855e55bfcdf0bfb4afe36950"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "a61136fb5837a83d2957d68c676d6661"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "3916db804519f485701c53c8f1d16b15"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "fd043c86c5458d5b9c551dfd0ed1ba55"
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
