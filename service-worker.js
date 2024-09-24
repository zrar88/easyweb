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
    "revision": "07f19825bfc43543b986cd302acda644"
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
    "url": "assets/js/100.0558cbe8.js",
    "revision": "864a85259b4a75b0a1c69c384433f0f7"
  },
  {
    "url": "assets/js/101.dbc0ca7f.js",
    "revision": "63771e6f06691d169fd776c264a9555d"
  },
  {
    "url": "assets/js/102.b518c334.js",
    "revision": "22a06dd44d09e9103c7e374dd2cd014d"
  },
  {
    "url": "assets/js/11.1a4bfc9a.js",
    "revision": "89eb5871dd188f600930ca1ce9388156"
  },
  {
    "url": "assets/js/12.27bfcf0b.js",
    "revision": "154658cc1438b95bfea5bfc7f86499b4"
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
    "url": "assets/js/17.f9be130d.js",
    "revision": "53c61dcf27d1222badc4a78b68694de0"
  },
  {
    "url": "assets/js/18.88297925.js",
    "revision": "de285fefb121bbddeefe1c828623bce3"
  },
  {
    "url": "assets/js/19.5dd71979.js",
    "revision": "32850a07872839ef53f2e81412d9e1df"
  },
  {
    "url": "assets/js/20.c21b5d57.js",
    "revision": "e10786c30435da2455ea2ac4435d54ed"
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
    "url": "assets/js/23.fd09e11c.js",
    "revision": "f023199a78717df2d300a204531829cc"
  },
  {
    "url": "assets/js/24.1f4613b5.js",
    "revision": "df431e9275ab00e1cc592a49774df033"
  },
  {
    "url": "assets/js/25.18af3d39.js",
    "revision": "2da09a421940ebcb760094debefb2f4b"
  },
  {
    "url": "assets/js/26.c8f3eea7.js",
    "revision": "41cd73c1ad327e27dca43322d1395400"
  },
  {
    "url": "assets/js/27.fd548dc2.js",
    "revision": "8249e8edb8ddbbd410bf42b3e95485b9"
  },
  {
    "url": "assets/js/28.15037b8f.js",
    "revision": "cfdbc1ec68d4e2bf9980ed29e80edd59"
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
    "url": "assets/js/35.f58e8d50.js",
    "revision": "c5acb48bceb2af8f027ef731fc443d0e"
  },
  {
    "url": "assets/js/36.143868f9.js",
    "revision": "15fed3b8f59781e5573c040bfb2f8c88"
  },
  {
    "url": "assets/js/37.7a548cdf.js",
    "revision": "281817c48395414a3938533081b421de"
  },
  {
    "url": "assets/js/38.9ea156c1.js",
    "revision": "d8898611a98ae3015a092cf9456881c3"
  },
  {
    "url": "assets/js/39.23845e0b.js",
    "revision": "82f499f732aa269aff052e446f3b0096"
  },
  {
    "url": "assets/js/40.45fac994.js",
    "revision": "6dfc1fec6efe4366aac907adcf3d499b"
  },
  {
    "url": "assets/js/41.61290db9.js",
    "revision": "17afdfb3b6e2aac000fc3a00be22674a"
  },
  {
    "url": "assets/js/42.356afa81.js",
    "revision": "3d548031df3ad28849f6ac6ce46ad9eb"
  },
  {
    "url": "assets/js/43.ec760fe3.js",
    "revision": "49e28ffeddb5d78e15a81e8e14513260"
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
    "url": "assets/js/46.a8ba7437.js",
    "revision": "229929fbee5ca0aa5a4bbf6ee312ca5e"
  },
  {
    "url": "assets/js/47.aa8f6421.js",
    "revision": "428e53bf418b9e2b14e7bdc595f5e754"
  },
  {
    "url": "assets/js/48.cbf2801e.js",
    "revision": "82dd2bc0a62a5b5657bc5c5afb24e05b"
  },
  {
    "url": "assets/js/49.eef14a87.js",
    "revision": "4524ad962a91da9ca2208313b5562e37"
  },
  {
    "url": "assets/js/5.e4161a44.js",
    "revision": "7a7cb95d3460b51904c5337ce42b2aaa"
  },
  {
    "url": "assets/js/50.60f5ba8c.js",
    "revision": "00cd686f1b276d3286e4776556e1c766"
  },
  {
    "url": "assets/js/51.2438728a.js",
    "revision": "aaa6c20dc4469f4d9cf785ba38643a96"
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
    "url": "assets/js/57.4dcfe9db.js",
    "revision": "ee39b13fc4a440f219ecaa70c837650b"
  },
  {
    "url": "assets/js/58.e9c36326.js",
    "revision": "298751771b8159ba9611d4658f23c66b"
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
    "url": "assets/js/60.b6abe2b1.js",
    "revision": "fd0894f0d9d8e224c210ddf2e7a4b1ca"
  },
  {
    "url": "assets/js/61.18058f87.js",
    "revision": "10647cafd02f0c9d334fe9ad6089c839"
  },
  {
    "url": "assets/js/62.4d1cd241.js",
    "revision": "6d64911a2b81c6f68a9c982213bcc818"
  },
  {
    "url": "assets/js/63.7ed7d2e2.js",
    "revision": "9abf9adbe6c3212fee362f7b681984a1"
  },
  {
    "url": "assets/js/64.2a021f07.js",
    "revision": "fa83e5df5d84d1a0f8c93670058dc3ba"
  },
  {
    "url": "assets/js/65.e97061ab.js",
    "revision": "a7a5b167ac4ec00b5df24b3a8594182d"
  },
  {
    "url": "assets/js/66.49e02b51.js",
    "revision": "603f257a4975b4c620518dd92064cb3a"
  },
  {
    "url": "assets/js/67.4a5ef356.js",
    "revision": "191ce464b65a346e0e71b50a061bb585"
  },
  {
    "url": "assets/js/68.aa7c2aca.js",
    "revision": "50fb7e8bfa785c2bf45c45ee7ddffd75"
  },
  {
    "url": "assets/js/69.63b1ca41.js",
    "revision": "abf4177f1f794f4de353ae835364e60e"
  },
  {
    "url": "assets/js/7.a0b797f9.js",
    "revision": "ca3fed496c5bb272c7aa7410c2df223e"
  },
  {
    "url": "assets/js/70.3582f33d.js",
    "revision": "ee3a54040006adf2f00c148f28a702a7"
  },
  {
    "url": "assets/js/71.00682102.js",
    "revision": "97226728de9922fbfbb8ff2fee971791"
  },
  {
    "url": "assets/js/72.f21182c2.js",
    "revision": "4509412529e84f4a42bf789640517325"
  },
  {
    "url": "assets/js/73.3d8f8810.js",
    "revision": "abe13ae62a10f55535b88ec653f334dc"
  },
  {
    "url": "assets/js/74.6b129139.js",
    "revision": "f1e03c9ff3e7286020a6baf852c5cf7a"
  },
  {
    "url": "assets/js/75.9db17431.js",
    "revision": "d80ffcc089db98bb6e709fc140161580"
  },
  {
    "url": "assets/js/76.a24ab56a.js",
    "revision": "462c140700bc06e895dc61b68b661d9f"
  },
  {
    "url": "assets/js/77.b6e3901c.js",
    "revision": "5b4fe9d2f23154854a96c7bbd1bd4f63"
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
    "url": "assets/js/83.940a268c.js",
    "revision": "6a14548d6d4ecae6ffd84091587d7b51"
  },
  {
    "url": "assets/js/84.05e546bf.js",
    "revision": "f5d34fbc08cb1ad3292ea8de7fc1657e"
  },
  {
    "url": "assets/js/85.84eb8435.js",
    "revision": "e567a8fd70998ad312a8e5e6264771b1"
  },
  {
    "url": "assets/js/86.c976c555.js",
    "revision": "0551a621c155b8e855e2f454846448f2"
  },
  {
    "url": "assets/js/87.e30ad2f7.js",
    "revision": "0f057cf70d9b71a6b0dbea8cb5914626"
  },
  {
    "url": "assets/js/88.dde419d4.js",
    "revision": "4739c28ac1a06782b6c33d68f1ecff89"
  },
  {
    "url": "assets/js/89.e8ca938d.js",
    "revision": "4c1ebdf9e3d33a3ae26c1680afe50224"
  },
  {
    "url": "assets/js/9.2e5a12bc.js",
    "revision": "71b5d58dd798772879d2ecc4e910f940"
  },
  {
    "url": "assets/js/90.b5508dd1.js",
    "revision": "67f9471f614b0063290cc4b92305d0b5"
  },
  {
    "url": "assets/js/91.7d33cd4f.js",
    "revision": "98f06d990c5e9b8796099edd75ad4ca7"
  },
  {
    "url": "assets/js/92.b2dd0780.js",
    "revision": "e6ab02fa6cc2ce1e2827ffe6cad616cf"
  },
  {
    "url": "assets/js/93.b5ff41a0.js",
    "revision": "f7c508f7917e6da2d435ef679b883e40"
  },
  {
    "url": "assets/js/94.ab24c112.js",
    "revision": "a04acdfe05c6bc003541348f07143f32"
  },
  {
    "url": "assets/js/95.0f36d118.js",
    "revision": "c3da2d517b04ec79b2b6a0af015f99e2"
  },
  {
    "url": "assets/js/96.57ef7ea2.js",
    "revision": "d26e59fb2a338add1e678f3977daf579"
  },
  {
    "url": "assets/js/97.50ce3baf.js",
    "revision": "46c62bf22fbe53996e1fdd26a36e0be0"
  },
  {
    "url": "assets/js/98.f63863d7.js",
    "revision": "843070141eab1acabc5f22626dcbc4d6"
  },
  {
    "url": "assets/js/99.8b8b7d99.js",
    "revision": "ac32248fe7cd852ca08d26bc679d9909"
  },
  {
    "url": "assets/js/app.35a2d17f.js",
    "revision": "705be3c14fb9ed0c9f361e5c36edccc5"
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
    "revision": "e7c9e5084117c4e96529f98e0c755201"
  },
  {
    "url": "en/api/node.html",
    "revision": "cc15dc80166e2d6b38a5557e1e7319a8"
  },
  {
    "url": "en/config/index.html",
    "revision": "decb50341a77bbda0a20b8d721caaf1a"
  },
  {
    "url": "en/faq/index.html",
    "revision": "9749f46a99699deadb82bab5219dabfe"
  },
  {
    "url": "en/guide/assets.html",
    "revision": "44de276d63676fb44421f7e3afd9097b"
  },
  {
    "url": "en/guide/basic-config.html",
    "revision": "4f49cb34fe731d36628ff2864e20df82"
  },
  {
    "url": "en/guide/deploy.html",
    "revision": "6df87280354fddd4348d97953402c140"
  },
  {
    "url": "en/guide/directory-structure.html",
    "revision": "e383a0da54150ab6746245060703e227"
  },
  {
    "url": "en/guide/frontmatter.html",
    "revision": "cb70c08e61ec165b60ee85e4ab4cc3f7"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "90d8bfd63f42e526985d7e8e115345e3"
  },
  {
    "url": "en/guide/global-computed.html",
    "revision": "daca968ee0209bbe85aa879e486a262e"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "08b627f645ce31fe58c81dd37c99b746"
  },
  {
    "url": "en/guide/index.html",
    "revision": "d1dada37e7120f938d796e910a4d96d4"
  },
  {
    "url": "en/guide/markdown-slot.html",
    "revision": "349160869a7b0fb699147b1dc96216e9"
  },
  {
    "url": "en/guide/markdown.html",
    "revision": "ca65321a577d713c63d2647453d1cc9a"
  },
  {
    "url": "en/guide/permalinks.html",
    "revision": "76c41d4e0b3f7d19901b29415a73c49f"
  },
  {
    "url": "en/guide/typescript-as-config.html",
    "revision": "59e07c88d931a2eb0a67d057844a4f12"
  },
  {
    "url": "en/guide/using-vue.html",
    "revision": "9a17413cb06bc0083d0149fcd408e385"
  },
  {
    "url": "en/index.html",
    "revision": "1196f6bbcc68a7073d8c7108fb291106"
  },
  {
    "url": "en/theme/blog-theme.html",
    "revision": "de749d55407650ed02128b2600315985"
  },
  {
    "url": "en/theme/default-theme-config.html",
    "revision": "2360cd7c2871b1e0cffb5a8d25d7de86"
  },
  {
    "url": "en/theme/index.html",
    "revision": "f34cd9cc09bf0138990853c2152fee7c"
  },
  {
    "url": "en/theme/inheritance.html",
    "revision": "1d0b0ba9e7080d2f75fb4e278addd01f"
  },
  {
    "url": "en/theme/option-api.html",
    "revision": "6705c516e0fb4e143e2b73324cd37774"
  },
  {
    "url": "en/theme/using-a-theme.html",
    "revision": "ade0384dfb529645262d33f36851f025"
  },
  {
    "url": "en/theme/writing-a-theme.html",
    "revision": "4dc379c862dcd20d5b5fb0dfefa29c47"
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
    "revision": "9628de431a5ac448410be6cc3032d362"
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
    "revision": "668d39cab22541bd1bc61dfb7ff22095"
  },
  {
    "url": "zh/api/node.html",
    "revision": "9984d1053bbfd5b7d0f1546456e9be83"
  },
  {
    "url": "zh/config/index.html",
    "revision": "b1144d0a62d06b7ddc391e8ccd15c849"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "9882d396e753df035440455df70835fe"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "7dd18c4318e712981e7e5fc62f76a02d"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "0cd8aa95e57ed892523e90573f88d2fe"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "14d98639218f1a02525c4cb08f441830"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "41df20dd59f86ecf99ffa729223407e8"
  },
  {
    "url": "zh/guide/engine.html",
    "revision": "105fc7c2edb0da667e02559c942407fb"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "75ebc2d5612e3460ab938f430b92f6b7"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "8bbbb01743b90a4499dd6002ed92d74f"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "ddac2c27da073e0eb05e31136d3b98c3"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "f2e4e2097b12a697f48e353bc90aded8"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "e026a1ca8320f8645f5548f5ddfbd67c"
  },
  {
    "url": "zh/guide/java.html",
    "revision": "2df51ee35135247f07617d880992f59a"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "60d10fbaa082838bcf9a75af06b03582"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "633bed517a7cfafec19f68ed4b90ed28"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "d4202ac0f4efd5b47ad52143349feb0e"
  },
  {
    "url": "zh/guide/typescript-as-config.html",
    "revision": "edba0aa580e5b311ad061fe962cf845e"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "381d97c8bb83607633ac8208c31bed4d"
  },
  {
    "url": "zh/guide/vue.html",
    "revision": "d38af1cb48014ae50b6b356b6b8dee87"
  },
  {
    "url": "zh/index.html",
    "revision": "2bbcab622362ca85dc7854b78cf95db1"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "11fd65eed8a309f741697463cfd72c5f"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "5144eadeb7389f163224acb334537c9c"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "97cfd4c815d8dd92931b9eaf8205aefd"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "3bc41335d61d5938930723162db5b878"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "1a4af5408b8f5295f277750f50baa960"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "3da2e990c8eb31f60418422d78b1a851"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "37d744f2ae7d2e3d764d70c93b849ed7"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "1631c025ea1b50080478bdcc5366a838"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "449f28888d912f10f8755680562bd227"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "78592b98dcef0dd4d57796418da4ff0e"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "01cdf07e326e7a18153157f56fc0d753"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "27f2acbe7ac690df306ef84878c8bb5c"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "fa2e2e3af29decd15cea9a04ab7ae388"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "60e346ac9173eabaa06b63549faa1ac7"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "1dff8aaa9e7ad28f1723e435d4c3a403"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "41bea872cb63d2d487870ae02074b69b"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "2a76deeebf7c7ce5be187035e9b05233"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "6f728f7190972cb0f851d194b0e71528"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "bf3dbd254b82e57f7d4ffa1a7b74f918"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "d6e6d84ff78fd1db3e42b403dc964199"
  },
  {
    "url": "zh/project/easyweb-3.0.0.html",
    "revision": "348fb169518e0da30adeb4908d64e11b"
  },
  {
    "url": "zh/project/easyweb-3.1.0.html",
    "revision": "1928839ced654d4ada593c543b817cfe"
  },
  {
    "url": "zh/project/easyweb-3.2.1.html",
    "revision": "e1e0d7adb9b9146b8613fa7853e1fac0"
  },
  {
    "url": "zh/project/index.html",
    "revision": "a427b9a107f62e70b553c060dfacf0eb"
  },
  {
    "url": "zh/project/nacos-2.4.0.html",
    "revision": "4d8add32452242a5feb8581728a63173"
  },
  {
    "url": "zh/project/sentinel-1.8.8.html",
    "revision": "54645e245a145fa21371a408186630e1"
  },
  {
    "url": "zh/question/bpm.html",
    "revision": "8aae751c555d1a7e92d2952423b51921"
  },
  {
    "url": "zh/question/index.html",
    "revision": "e915c29db6737dc23f900522a9f5e62e"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "04f2c41ff1e1162a9f4d81b15278a9e0"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "5d9aef30b68b74d3ce54eb9e57a172be"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "aac4f63c3442483df208a8ec1bf2e1c3"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "8d9e95370aadcfb964620ed794a7a7c4"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "8ae6184b4e2c9dcf9ad89a0f7358097f"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "2d720111d2edf1955c0f492a199b364b"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "1201c004e7ba4e745d5688331c53ad35"
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
