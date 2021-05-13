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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

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
    "revision": "fe6272c050378f65325a1e41f1b7002d"
  },
  {
    "url": "about.html",
    "revision": "1a1fac6a5ba01c41c44e47d6db37e7b3"
  },
  {
    "url": "assets/css/0.styles.172c2be5.css",
    "revision": "f879a744a7357651b19548285e2a44c5"
  },
  {
    "url": "assets/img/1.021fd2f0.svg",
    "revision": "021fd2f0cd05c98a6ad02bbb0cbd9afa"
  },
  {
    "url": "assets/img/1.9714328b.png",
    "revision": "9714328b3234822c5a180bcd5bbc146a"
  },
  {
    "url": "assets/img/11.305727db.svg",
    "revision": "305727db985a6489f9bf59183c378b58"
  },
  {
    "url": "assets/img/2.18965506.svg",
    "revision": "189655060548dbc26cf40ee26e2e3c5d"
  },
  {
    "url": "assets/img/2.5a493adb.jpeg",
    "revision": "5a493adbad990c4cb35d110cbbb9149c"
  },
  {
    "url": "assets/img/2.84bdf8e6.jpeg",
    "revision": "84bdf8e691bd403e0c0fe84868a79f5b"
  },
  {
    "url": "assets/img/3.0fd92ccf.svg",
    "revision": "0fd92ccf4088a7c439c83cbce99a1f19"
  },
  {
    "url": "assets/img/3.eaed9d1e.jpeg",
    "revision": "eaed9d1e262741e211ece970181ed20d"
  },
  {
    "url": "assets/img/4.4c996b17.jpeg",
    "revision": "4c996b17bdef99e089b5bdbad31d963a"
  },
  {
    "url": "assets/img/4.6f30c900.svg",
    "revision": "6f30c90046b6e08d77eaf72b1e99d310"
  },
  {
    "url": "assets/img/5.0b71b7a7.svg",
    "revision": "0b71b7a7bf94e5921d83903f3a2ba906"
  },
  {
    "url": "assets/img/5.ec3af9d6.jpeg",
    "revision": "ec3af9d6714bce3057fe6b0d71d1efd2"
  },
  {
    "url": "assets/img/59cf84079d9ff4f9.c3cb8642.jpg",
    "revision": "c3cb86428ca95ea7809e4d036b128f88"
  },
  {
    "url": "assets/img/6.a49b1da1.jpeg",
    "revision": "a49b1da11c1d62f651b5b54181184ba4"
  },
  {
    "url": "assets/img/7.55a23f0b.svg",
    "revision": "55a23f0ba589def11d722a76b4672052"
  },
  {
    "url": "assets/img/7.666a0b6c.jpeg",
    "revision": "666a0b6c4ef82d8a3d2e3d5119c64d71"
  },
  {
    "url": "assets/img/8.f9490d9b.jpeg",
    "revision": "f9490d9bcea796c88df7d8846de8338b"
  },
  {
    "url": "assets/img/9.689d1811.svg",
    "revision": "689d1811ccce36a5a25636190c9b6c86"
  },
  {
    "url": "assets/img/add1.3b0eb6fd.png",
    "revision": "3b0eb6fd1e19998ae07b2fdda0d18b47"
  },
  {
    "url": "assets/img/add2.48f229d5.png",
    "revision": "48f229d5b0bd038dfbece7976c43dedd"
  },
  {
    "url": "assets/img/add3.16924c71.png",
    "revision": "16924c71bf4b945a9112a3ba55f30f99"
  },
  {
    "url": "assets/img/apply.28a537cd.png",
    "revision": "28a537cd708e65a5d834b9e37c4747ec"
  },
  {
    "url": "assets/img/bb-due-gcal.e5c077e0.png",
    "revision": "e5c077e040e029439b4683b77e1f269c"
  },
  {
    "url": "assets/img/bb-due-macos.1528a39b.png",
    "revision": "1528a39b7e152972bd7d6efcb733fa91"
  },
  {
    "url": "assets/img/busline2.d007a398.png",
    "revision": "d007a398c9483d2e223ecef841927ba8"
  },
  {
    "url": "assets/img/cas-login.dfbae961.png",
    "revision": "dfbae961438fb4f789ee70f463722b1e"
  },
  {
    "url": "assets/img/CC-BY-SA_icon.af17d52a.svg",
    "revision": "af17d52ad72e6d1015d183d060e68046"
  },
  {
    "url": "assets/img/chrome-browser-desktop.e1f4ef5c.png",
    "revision": "e1f4ef5cf06ca958ec117aca49c74b98"
  },
  {
    "url": "assets/img/copy-1.d1179d13.jpeg",
    "revision": "d1179d13dadd129e538969f331d12c19"
  },
  {
    "url": "assets/img/copy-2.93c70e3c.jpeg",
    "revision": "93c70e3ce5a88a41be3bc48fbb8fd1a8"
  },
  {
    "url": "assets/img/copy-3.f2a2463b.jpeg",
    "revision": "f2a2463b987942bb98f2c494193d7662"
  },
  {
    "url": "assets/img/copy-4.75679705.jpeg",
    "revision": "75679705724e0880efb6619a40b5e799"
  },
  {
    "url": "assets/img/copy-5.d09dcb21.jpeg",
    "revision": "d09dcb21d3fb931a2835def7933d4a28"
  },
  {
    "url": "assets/img/database.ff3c4edf.png",
    "revision": "ff3c4edfbf324af9136e6ea8d0df7ed2"
  },
  {
    "url": "assets/img/discount.8bc3f011.png",
    "revision": "8bc3f0114babaeb594603c8d41908a76"
  },
  {
    "url": "assets/img/english-vocabulary-daka.be106d43.png",
    "revision": "be106d43bcc04ec57a0c2a30f2d3d96f"
  },
  {
    "url": "assets/img/get-link.1b5d1f7e.png",
    "revision": "1b5d1f7ebe1db58a46500502648b0b38"
  },
  {
    "url": "assets/img/ics-url.d32d371c.png",
    "revision": "d32d371c2de86a4f5d528421cb2cb09a"
  },
  {
    "url": "assets/img/IMG_20210123_205049.50b37749.jpg",
    "revision": "50b3774914c541b0bf82c53bbf7babd6"
  },
  {
    "url": "assets/img/IMG_20210126_195515.6e5798e8.jpg",
    "revision": "6e5798e838b6316c0d63516bf2217f14"
  },
  {
    "url": "assets/img/IMG_20210126_195546.64da6a29.jpg",
    "revision": "64da6a297e623bba762e4611a17e307b"
  },
  {
    "url": "assets/img/IMG_20210126_195856.50b26fe4.jpg",
    "revision": "50b26fe4593d88ec4236396acf71ccac"
  },
  {
    "url": "assets/img/IMG_20210126_195932.cc16b5b6.jpg",
    "revision": "cc16b5b6cc7b5d3b418cb6ef3b59f00c"
  },
  {
    "url": "assets/img/IMG_20210126_200439_edit_7106211807769.679c984e.jpg",
    "revision": "679c984e3cc616f2a894b628a7da95b0"
  },
  {
    "url": "assets/img/IMG_20210126_205402.5b5d2cc1.jpg",
    "revision": "5b5d2cc105685e7f0fc1ad80559701cc"
  },
  {
    "url": "assets/img/IMG_20210126_205908.73ed6cb5.jpg",
    "revision": "73ed6cb55530f8bd19980029946ca663"
  },
  {
    "url": "assets/img/IMG_20210126_210458.2062dad8.jpg",
    "revision": "2062dad8c05bf3a6dd2ac50c61f734a6"
  },
  {
    "url": "assets/img/IMG_20210126_210550.b0ee9b5a.jpg",
    "revision": "b0ee9b5ac13f8c02b4bf84f11bef0e73"
  },
  {
    "url": "assets/img/IMG_20210126_210622.042c5b47.jpg",
    "revision": "042c5b47ddbb72825795dfe663af5eec"
  },
  {
    "url": "assets/img/IMG_20210126_211345.589c64df.jpg",
    "revision": "589c64df659620fda62d9d557cdd4680"
  },
  {
    "url": "assets/img/interior.e8186b41.jpg",
    "revision": "e8186b41f73e27f8554f9988ead92470"
  },
  {
    "url": "assets/img/ios.6e324d40.png",
    "revision": "6e324d4040e2d29fcc549444a2add317"
  },
  {
    "url": "assets/img/major-overview.69f3f2bd.png",
    "revision": "69f3f2bd127892b13703668e936b73aa"
  },
  {
    "url": "assets/img/matlab.6a9a3ca4.png",
    "revision": "6a9a3ca471ac2e10c6f3d350d1bd8e8d"
  },
  {
    "url": "assets/img/matlab1.018a0124.png",
    "revision": "018a0124c9d67f0fe8c543dda354a7f7"
  },
  {
    "url": "assets/img/matlab2.85b35081.png",
    "revision": "85b350811cd6417c96ee3d74c78998fa"
  },
  {
    "url": "assets/img/print-1.8902bf97.jpeg",
    "revision": "8902bf97cbc83b9f2a3158d11b1eda0e"
  },
  {
    "url": "assets/img/print-2.e9461c36.jpeg",
    "revision": "e9461c36834331858f4b0a2ad3c4a700"
  },
  {
    "url": "assets/img/print-3.9838ff94.jpeg",
    "revision": "9838ff941e662f46b79806025aa25b7b"
  },
  {
    "url": "assets/img/print-4.5c5882e8.jpeg",
    "revision": "5c5882e8656470e0dbd8d53f638a964b"
  },
  {
    "url": "assets/img/print-5.b5a75bea.jpeg",
    "revision": "b5a75bea7870bd0f6aec19c11de265f0"
  },
  {
    "url": "assets/img/print.ed9d4bc4.png",
    "revision": "ed9d4bc42a8226325e3849a683d8a984"
  },
  {
    "url": "assets/img/qr-code.ccaefe4a.jpg",
    "revision": "ccaefe4a0f839087e7ded77788a6e2df"
  },
  {
    "url": "assets/img/reader-service.0c0368aa.png",
    "revision": "0c0368aaf3a1423f0441e1f2728d0d9d"
  },
  {
    "url": "assets/img/sakai-1.9434888c.png",
    "revision": "9434888c9903637674a80eb1acd56248"
  },
  {
    "url": "assets/img/sakai-2.b1ee0463.png",
    "revision": "b1ee04633413694907cfd5ddd1b8061a"
  },
  {
    "url": "assets/img/sakai-3.675e389c.png",
    "revision": "675e389c8d6a658aca6f0e363ce88557"
  },
  {
    "url": "assets/img/sakai-4.000dd574.png",
    "revision": "000dd5749f386829df97c37217d9ce86"
  },
  {
    "url": "assets/img/sakai-5.f244a3a4.png",
    "revision": "f244a3a419620ac52ea8a1e63e14ff8f"
  },
  {
    "url": "assets/img/scan-2-0.1bf9e6b7.jpeg",
    "revision": "1bf9e6b7f13351ecb87300c17f04ced5"
  },
  {
    "url": "assets/img/scan-2-1.303453b4.jpeg",
    "revision": "303453b48a1feb7e2d35ed91e191d23e"
  },
  {
    "url": "assets/img/scan-2-2.bf12b859.jpeg",
    "revision": "bf12b8599e3e0d18b56878b2891c067d"
  },
  {
    "url": "assets/img/scan-2-3.e9ebc852.jpeg",
    "revision": "e9ebc852daaaac202876b7e0d86c1941"
  },
  {
    "url": "assets/img/scan-2-4.712fafef.jpeg",
    "revision": "712fafef765953fb853a0cbd450576a5"
  },
  {
    "url": "assets/img/schedule.abad98f6.png",
    "revision": "abad98f699a0ee9a82c7c5eff0d3ac6f"
  },
  {
    "url": "assets/img/Screenshot_20210128_114248_com.MobileTicket.b64a9636.jpg",
    "revision": "b64a9636ad938d85cb54a89e599c7c36"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/unifound-1.4fc26bc0.jpeg",
    "revision": "4fc26bc067ff1b178e7c9f6d0e9fd22f"
  },
  {
    "url": "assets/img/unifound-10.06ec06f8.png",
    "revision": "06ec06f80c28ba2c7a086c3bb9d56b01"
  },
  {
    "url": "assets/img/unifound-2.f8330e27.jpeg",
    "revision": "f8330e2761ddaa20d77c26dec687c213"
  },
  {
    "url": "assets/img/unifound-3.e57013fa.jpeg",
    "revision": "e57013fa465673457e84fd49f63b9b9d"
  },
  {
    "url": "assets/img/unifound-4.d7973763.png",
    "revision": "d79737638f38b299730b23da98c57a1b"
  },
  {
    "url": "assets/img/unifound-5.aae7e2e8.jpeg",
    "revision": "aae7e2e80661c5e94c074a86a74994bb"
  },
  {
    "url": "assets/img/unifound-6.ef5f24ab.jpeg",
    "revision": "ef5f24ab859fb25b31843238882bb53d"
  },
  {
    "url": "assets/img/unifound-7.22b69a1f.jpeg",
    "revision": "22b69a1fae5b8174bcd3da791b61ba4f"
  },
  {
    "url": "assets/img/unifound-8.3855edb9.jpeg",
    "revision": "3855edb91e2079cc340263fdbfeeebc5"
  },
  {
    "url": "assets/img/unifound-home.0e1673b8.png",
    "revision": "0e1673b82b15322a2296223af80247f4"
  },
  {
    "url": "assets/js/10.4d9fed30.js",
    "revision": "c4bea59a618141e9ac4a5731e16f21f8"
  },
  {
    "url": "assets/js/11.38aa5528.js",
    "revision": "12f2d58d3bcc0db7ae38100c2c393660"
  },
  {
    "url": "assets/js/12.d5e95156.js",
    "revision": "9d3a17dd9f6718a753bcc7dd9b7c1cc9"
  },
  {
    "url": "assets/js/13.94c4ef4f.js",
    "revision": "6aea944d15a5c9641d25c1bbcc8c1239"
  },
  {
    "url": "assets/js/14.54f645be.js",
    "revision": "be9266d6fd3b88d77f78fbdc02d45c25"
  },
  {
    "url": "assets/js/15.6c9e4091.js",
    "revision": "4a5c9f904f57b442cec5e3cfc451349b"
  },
  {
    "url": "assets/js/16.fdaebbf7.js",
    "revision": "be2264824a1facb791be3b997d277f59"
  },
  {
    "url": "assets/js/17.a41c5d7f.js",
    "revision": "93e7cafb2e0aa29499d0d6887f16a75b"
  },
  {
    "url": "assets/js/18.9f155c0f.js",
    "revision": "516cd846777e838b0fae14ef28ca708a"
  },
  {
    "url": "assets/js/19.22d769b2.js",
    "revision": "16abe1c124653f499d0b2b32ec2a3f5d"
  },
  {
    "url": "assets/js/2.6301134a.js",
    "revision": "52ef02840577d59026f4780ed32fd173"
  },
  {
    "url": "assets/js/20.0932bc68.js",
    "revision": "0b911ede026ec72ef77f1599bbfce7da"
  },
  {
    "url": "assets/js/21.c35428db.js",
    "revision": "42cbaaf0810f9a17cccea23d7c3b22ae"
  },
  {
    "url": "assets/js/22.9b89927c.js",
    "revision": "f627c81c89f5f9d964abbc4d109423c6"
  },
  {
    "url": "assets/js/23.ef1a29dc.js",
    "revision": "ddb063a19d0dc8a6656816914da4760b"
  },
  {
    "url": "assets/js/24.b7764df6.js",
    "revision": "c796bc57464370bd486248c5e1f08471"
  },
  {
    "url": "assets/js/25.16e7180d.js",
    "revision": "55e8a88a462eefa0284742e08e6aea9f"
  },
  {
    "url": "assets/js/26.a345d273.js",
    "revision": "ac47f1b5866637914a66c8203c9748d0"
  },
  {
    "url": "assets/js/27.9abc9ad1.js",
    "revision": "d3847b3c582ef19bfbcb06a1dc5779fd"
  },
  {
    "url": "assets/js/28.903311ce.js",
    "revision": "03d44c1ae8ea17d666bd3f0ef45629eb"
  },
  {
    "url": "assets/js/29.63774a1c.js",
    "revision": "8a3b5894a344e620bdc782d57dad3a51"
  },
  {
    "url": "assets/js/3.f6a84dce.js",
    "revision": "50073f2994cd84361765bd70a5884145"
  },
  {
    "url": "assets/js/30.3035d89c.js",
    "revision": "9f9186a9bea916550f07ee9c9c7f728b"
  },
  {
    "url": "assets/js/31.e088f165.js",
    "revision": "e6a8a7d5170350c282e93fcf6c4098ea"
  },
  {
    "url": "assets/js/32.a37b634b.js",
    "revision": "6a61ceea3f8ed3f28b76a2237c1c55ac"
  },
  {
    "url": "assets/js/33.653264ac.js",
    "revision": "69f03539f4e538c4ef229ac4f245fd5c"
  },
  {
    "url": "assets/js/34.cca2e67f.js",
    "revision": "b8f9d7fb238f79d445c009badb4cf192"
  },
  {
    "url": "assets/js/35.f218f395.js",
    "revision": "0d69962e715e95e670305215f3a8e462"
  },
  {
    "url": "assets/js/36.08518732.js",
    "revision": "d4cb9c00a841783f62a6ed9c8277d219"
  },
  {
    "url": "assets/js/37.60fc1f24.js",
    "revision": "53a9d07c06f5c1a95817549a3190d0f0"
  },
  {
    "url": "assets/js/38.f070a7e0.js",
    "revision": "0aad59ad38f616dd19aabba5b95b90dc"
  },
  {
    "url": "assets/js/39.e559ed1e.js",
    "revision": "99c540702b5d04099cc0d2e24ed42201"
  },
  {
    "url": "assets/js/4.26322740.js",
    "revision": "fe3b6bff66b29495deedeed659e1be8c"
  },
  {
    "url": "assets/js/40.36194478.js",
    "revision": "0217608e83495c1d68d5552f40a874f9"
  },
  {
    "url": "assets/js/41.1dcaddd4.js",
    "revision": "d931ac1cb6e2dd364191bd53a9778c4b"
  },
  {
    "url": "assets/js/42.1771f5c7.js",
    "revision": "62428f46eb40bf118e2438426a7be030"
  },
  {
    "url": "assets/js/43.a335fdb4.js",
    "revision": "a6050f71d862df019e872b9fb2cc6c83"
  },
  {
    "url": "assets/js/44.dd92380d.js",
    "revision": "1c261e4fde7473de3bd58f9f262533e4"
  },
  {
    "url": "assets/js/45.72da1a55.js",
    "revision": "25f1ce2b52fb39b8cab058a6d9bff164"
  },
  {
    "url": "assets/js/46.1e6a89ff.js",
    "revision": "57af6e4ad476d4df3a049bbaa476c6f5"
  },
  {
    "url": "assets/js/47.b606ab56.js",
    "revision": "f9cd6459f4ed0c6c2beb50fa16260819"
  },
  {
    "url": "assets/js/48.cea3dbde.js",
    "revision": "b0f8ba1ed68854c93c8edff6ca52a72c"
  },
  {
    "url": "assets/js/49.50005a82.js",
    "revision": "75303e78e560fbdc322ce36279c94472"
  },
  {
    "url": "assets/js/5.c1d9da70.js",
    "revision": "0f2bab00f45281e346de74cb7c898f39"
  },
  {
    "url": "assets/js/50.7069eae6.js",
    "revision": "821f7efd20773e0526d241013a4fa54c"
  },
  {
    "url": "assets/js/51.5e51a284.js",
    "revision": "76256fa19a071803f3f9c4daadba0d9a"
  },
  {
    "url": "assets/js/52.f9c14522.js",
    "revision": "e1f1a0c569123c8eb7b99f1401321d2e"
  },
  {
    "url": "assets/js/53.c6ada179.js",
    "revision": "6e508839e2fd99893a00ea392b8205a4"
  },
  {
    "url": "assets/js/54.66f2fffd.js",
    "revision": "44b726e6d789f53a74168ab17fcb24fc"
  },
  {
    "url": "assets/js/55.1f32d7ed.js",
    "revision": "c535c48657ab8003d0a2fbe741587f2a"
  },
  {
    "url": "assets/js/56.c7d99ed4.js",
    "revision": "aad05e506d7438e3d035c39083f005ce"
  },
  {
    "url": "assets/js/57.e99417c8.js",
    "revision": "8cfa8ae4a12483ef79ad7c90ea877aa4"
  },
  {
    "url": "assets/js/58.74e5c87b.js",
    "revision": "6fc02209388d28f3c1b9b340b611c49a"
  },
  {
    "url": "assets/js/59.793e5817.js",
    "revision": "abb69659c23849c5b58776ab3bcc030c"
  },
  {
    "url": "assets/js/6.71d60a2f.js",
    "revision": "cb059b3b96c7dc78690527bd1338d070"
  },
  {
    "url": "assets/js/7.9c34cea1.js",
    "revision": "19413e565267a72a321777c74abcf4c4"
  },
  {
    "url": "assets/js/8.a0f23096.js",
    "revision": "56b21c67bd73e6e989bfae3db4845d69"
  },
  {
    "url": "assets/js/9.ab621e6f.js",
    "revision": "ede225e2651600658b11e2a7907adf19"
  },
  {
    "url": "assets/js/app.99a9be06.js",
    "revision": "ab082b0c3245c9b34a32cfd077c7dbe6"
  },
  {
    "url": "baidu_verify_yQSeRkHJla.html",
    "revision": "e34a6f863c56b8f0ccc227edb4e462b0"
  },
  {
    "url": "calendar/2018-2019.html",
    "revision": "54a367ab422b58c5a5f6232513da652e"
  },
  {
    "url": "calendar/2019-2020.html",
    "revision": "929f2a20afd3e483cd723d44a15fdbf3"
  },
  {
    "url": "calendar/2020-2021.html",
    "revision": "b64e0b4008373fd9dfc2c91c67e1f3b5"
  },
  {
    "url": "calendar/2021-2022.html",
    "revision": "c039775ef0317872d130f970e4ac22b7"
  },
  {
    "url": "calendar/index.html",
    "revision": "0df41e330394ff6a755306afbabb881c"
  },
  {
    "url": "contact/index.html",
    "revision": "3f099ef687d8f4e673300a1aba0bd39b"
  },
  {
    "url": "emergency/index.html",
    "revision": "c564209d22861ad69f39c95b5e40e01d"
  },
  {
    "url": "facility/index.html",
    "revision": "ed5235d0562ac64810704d3650a7dfb9"
  },
  {
    "url": "facility/panolens.html",
    "revision": "c75963bc5d3931aef71cc7303f6f9d20"
  },
  {
    "url": "if-you-are-a-freshman.html",
    "revision": "8601ce0b9bd7b0ab2b6456af2be74050"
  },
  {
    "url": "index.html",
    "revision": "c8171722b45d4503d87c05cacdf3938a"
  },
  {
    "url": "life/catering/index.html",
    "revision": "b63bf489a74efb28cdabc9cc6b9f1461"
  },
  {
    "url": "life/dormitory/index.html",
    "revision": "5f157c14c4365770a1c99dbc388e7f8b"
  },
  {
    "url": "life/freshman-register/index.html",
    "revision": "aea73420f5631f94886cf8c3537d6728"
  },
  {
    "url": "life/index.html",
    "revision": "868a8e08e33fda29613002249012c8c2"
  },
  {
    "url": "life/sports-facility/index.html",
    "revision": "f4847b316f5bc99d6b0152746406a642"
  },
  {
    "url": "logo-assets/touch/homescreen144.png",
    "revision": "51742628b96a4d2c587eab560373962b"
  },
  {
    "url": "logo-assets/touch/homescreen168.png",
    "revision": "741edd656b98963d2ef2881ff00a7610"
  },
  {
    "url": "logo-assets/touch/homescreen192.png",
    "revision": "7182aab7d4c78e800943f2c59e57e5a0"
  },
  {
    "url": "logo-assets/touch/homescreen48.png",
    "revision": "34bcad7cabc11efd8a6859f4cc6d2526"
  },
  {
    "url": "logo-assets/touch/homescreen512.png",
    "revision": "0206c3548fcda8dd59055f45eb2f3f35"
  },
  {
    "url": "logo-assets/touch/homescreen72.png",
    "revision": "e93cd5bbf2dc0ad83e2e37938d0120ee"
  },
  {
    "url": "logo-assets/touch/homescreen96.png",
    "revision": "cd04040f900f20c8a4e2e204218a1c57"
  },
  {
    "url": "media/index.html",
    "revision": "d2b727514c089615294ebde6f13bfcb6"
  },
  {
    "url": "news/index.html",
    "revision": "016c0440564681eeb098dc01a1d6d687"
  },
  {
    "url": "organizations/index.html",
    "revision": "c80e799038dda8332f6f6b2e3ceabfc0"
  },
  {
    "url": "organizations/registered-organization-2019.html",
    "revision": "9510ebb550dda64d034209bf09cb6eda"
  },
  {
    "url": "organizations/registered-organization-2020.html",
    "revision": "328b50cb3f3f381aaba3fb859b02a078"
  },
  {
    "url": "service/blackboard/retrive-ics-url/index.html",
    "revision": "41c9b1a325f3bd7bb11e216d35a91e32"
  },
  {
    "url": "service/campus-card/index.html",
    "revision": "17c3f724ace997cfbf4b55ffd7502919"
  },
  {
    "url": "service/email/index.html",
    "revision": "d902090f05230719722154b7e3c5cd68"
  },
  {
    "url": "service/index.html",
    "revision": "5fdaa6e02b2571b6a6f6d2958387a571"
  },
  {
    "url": "service/mail-and-express/index.html",
    "revision": "8e65cd7000ffd75db9dcccf9909b3dc0"
  },
  {
    "url": "service/matlab/index.html",
    "revision": "bb991ebb2af6893c2e0b6f5c52719c8b"
  },
  {
    "url": "service/medical-treatment/index.html",
    "revision": "e004fce1bb2606abb7c00248bb7fce6c"
  },
  {
    "url": "service/network/apply-for-vpn/index.html",
    "revision": "dd9a97e8b5fbd4a310aec51ca1616477"
  },
  {
    "url": "service/network/choose-a-pad/index.html",
    "revision": "29370f42e7ece702e787816a76f8f824"
  },
  {
    "url": "service/network/choose-a-router/index.html",
    "revision": "d2f00d29b276ffb2a2ff42911d2e1f36"
  },
  {
    "url": "service/network/eduroam/index.html",
    "revision": "f79b612d5133096ecc1bb8fcf467a43c"
  },
  {
    "url": "service/network/index.html",
    "revision": "a806d2e7f37020cb2c8b8726096f3910"
  },
  {
    "url": "service/network/remote-desktop/index.html",
    "revision": "68875286f4fadcf77e0490d419ff4910"
  },
  {
    "url": "service/sakai/index.html",
    "revision": "3a66c0178c589df2c478db914a7fa09d"
  },
  {
    "url": "service/sid/index.html",
    "revision": "edb383f1d046ba4fe69935af3d4dfa70"
  },
  {
    "url": "service/ssc/index.html",
    "revision": "3b2fb2abdbf74117a937ca29f6d28d00"
  },
  {
    "url": "service/student-train-ticket/index.html",
    "revision": "d2f4cb880a51c552ade2649a74ea0641"
  },
  {
    "url": "service/unifound/index.html",
    "revision": "eb906a8dfccb2cef2a1e820d2b0fe757"
  },
  {
    "url": "service/work-wechat/index.html",
    "revision": "d12f4798937957ac5c4a330aaba3fd79"
  },
  {
    "url": "site-help/index.html",
    "revision": "8cc66e4405a3bfa3cdf1c59c89dfd129"
  },
  {
    "url": "study/book-list-by-prof-yuan/2018/index.html",
    "revision": "0f77cc780997e9bf99f5e76849f88871"
  },
  {
    "url": "study/borrow-books/index.html",
    "revision": "85078ac825898ef04985a6d8b8e975da"
  },
  {
    "url": "study/by-shude-college/advice-on-study.html",
    "revision": "529406dd5fa24595bae19769a369e9b1"
  },
  {
    "url": "study/by-shude-college/info-on-study.html",
    "revision": "10cad50b09dd24066888ac086b815473"
  },
  {
    "url": "study/index.html",
    "revision": "d2f28f9a3c94fe6e4dfb3d1afee63ebd"
  },
  {
    "url": "surroundings/index.html",
    "revision": "7a254024cb0c566aabc1a9ffa670bf7b"
  },
  {
    "url": "transport/holiday.html",
    "revision": "05c28463082a8dfa827719c1633145db"
  },
  {
    "url": "transport/index.html",
    "revision": "cb0ca49bcecbb7896cc2ff62ce813648"
  },
  {
    "url": "transport/workday.html",
    "revision": "304cec7db7bf92b07cd1e251eb5119bd"
  },
  {
    "url": "wx_helper.js",
    "revision": "09d67f229a32659f1acf7d55a767e962"
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
