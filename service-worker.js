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
    "revision": "1f9fd093b2729e80740e04a0390cab96"
  },
  {
    "url": "about/index.html",
    "revision": "30a7b904e9b39d3371d94341e63e826d"
  },
  {
    "url": "archive/index.html",
    "revision": "a21161c939edd07d2cb5797209ebfd70"
  },
  {
    "url": "assets/css/0.styles.682c6110.css",
    "revision": "68567b45c8e5116eb9f89828a562a3ec"
  },
  {
    "url": "assets/fonts/fa-brands-400.085b1dd8.ttf",
    "revision": "085b1dd8427dbeff10bd55410915a3f6"
  },
  {
    "url": "assets/fonts/fa-brands-400.0fabb660.eot",
    "revision": "0fabb6606be4c45acfeedd115d0caca4"
  },
  {
    "url": "assets/fonts/fa-brands-400.cac68c83.woff2",
    "revision": "cac68c831145804808381a7032fdc7c2"
  },
  {
    "url": "assets/fonts/fa-brands-400.dc0bd022.woff",
    "revision": "dc0bd022735ed218df547742a1b2f172"
  },
  {
    "url": "assets/fonts/fa-regular-400.05b53beb.woff",
    "revision": "05b53beb21e3ef13d28244545977152d"
  },
  {
    "url": "assets/fonts/fa-regular-400.1a78af41.ttf",
    "revision": "1a78af4105d4d56e6c34f76dc70bf1bc"
  },
  {
    "url": "assets/fonts/fa-regular-400.3a3398a6.woff2",
    "revision": "3a3398a6ef60fc64eacf45665958342e"
  },
  {
    "url": "assets/fonts/fa-regular-400.ad3a7c0d.eot",
    "revision": "ad3a7c0d77e09602f4ab73db3660ffd8"
  },
  {
    "url": "assets/fonts/fa-solid-900.781e85bb.ttf",
    "revision": "781e85bb50c8e8301c30de56b31b1f04"
  },
  {
    "url": "assets/fonts/fa-solid-900.89bd2e38.eot",
    "revision": "89bd2e38475e441a5cd70f663f921d61"
  },
  {
    "url": "assets/fonts/fa-solid-900.c500da19.woff2",
    "revision": "c500da19d776384ba69573ae6fe274e7"
  },
  {
    "url": "assets/fonts/fa-solid-900.ee09ad75.woff",
    "revision": "ee09ad7553b8ad3d81150d609d5341a0"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/ad.png",
    "revision": "f83672204fdc9dc1363f01e3fb7145fb"
  },
  {
    "url": "assets/img/android-chrome-192x192.png",
    "revision": "9dc784a560d2f0756dfd483bb7f74d7e"
  },
  {
    "url": "assets/img/android-chrome-512x512.png",
    "revision": "4336a8bbda285df76c6df998d09c21f9"
  },
  {
    "url": "assets/img/apple-touch-icon.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/avatar.44903107.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/avatar.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/background.png",
    "revision": "b52da4f7c0e1bc5424245b8a0b1e79fd"
  },
  {
    "url": "assets/img/brand.a6838b12.png",
    "revision": "a6838b126aeae1009be079395b9e8f60"
  },
  {
    "url": "assets/img/brand.png",
    "revision": "a6838b126aeae1009be079395b9e8f60"
  },
  {
    "url": "assets/img/by-nc-sa.03dda63e.svg",
    "revision": "03dda63e80b9508d421e792236239ef1"
  },
  {
    "url": "assets/img/empty.png",
    "revision": "596be35cb3b05083be5a8d7c4177c669"
  },
  {
    "url": "assets/img/fa-brands-400.ccfdb9dc.svg",
    "revision": "ccfdb9dc442be0c629d331e94497428b"
  },
  {
    "url": "assets/img/fa-regular-400.e75dfd90.svg",
    "revision": "e75dfd904d366a2560c63c23cfc98ef8"
  },
  {
    "url": "assets/img/fa-solid-900.03ba7cb7.svg",
    "revision": "03ba7cb710104df27f1c9c46d64bee4e"
  },
  {
    "url": "assets/img/hitokoto.left.7d59b2d0.png",
    "revision": "7d59b2d074309127019c6dcc093005d7"
  },
  {
    "url": "assets/img/hitokoto.left.png",
    "revision": "7d59b2d074309127019c6dcc093005d7"
  },
  {
    "url": "assets/img/hitokoto.right.d80507e4.png",
    "revision": "d80507e476ea08c105a11e6b6951af8d"
  },
  {
    "url": "assets/img/hitokoto.right.png",
    "revision": "d80507e476ea08c105a11e6b6951af8d"
  },
  {
    "url": "assets/img/qq.png",
    "revision": "b2fcc67452f144ad13bd6c347400fbb2"
  },
  {
    "url": "assets/img/records.2ade8ac9.png",
    "revision": "2ade8ac9e3a351cfee0345aebe5a421e"
  },
  {
    "url": "assets/img/records.png",
    "revision": "2ade8ac9e3a351cfee0345aebe5a421e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat.png",
    "revision": "d7aaeb7652a86820babdf501c01621a2"
  },
  {
    "url": "assets/js/1.672067d1.js",
    "revision": "0dc55d878717681877a2d4d6d40c2aee"
  },
  {
    "url": "assets/js/10.86aef547.js",
    "revision": "75f19ecf137cb4d6572bf2eac9aec404"
  },
  {
    "url": "assets/js/11.508264ff.js",
    "revision": "6be45d81e1619a01d7aeb33ddb6ae756"
  },
  {
    "url": "assets/js/12.ace79a4a.js",
    "revision": "a2599476de81885044f33508173207a0"
  },
  {
    "url": "assets/js/13.e197e95c.js",
    "revision": "fe06bf3c389e93fad5cb23417490948c"
  },
  {
    "url": "assets/js/14.7803fc77.js",
    "revision": "c14a372bfd036197485c5325c8f26893"
  },
  {
    "url": "assets/js/15.2a65663a.js",
    "revision": "6bfba73fe76467b12ea9e5003cc12130"
  },
  {
    "url": "assets/js/16.234967d6.js",
    "revision": "3f6b427f1ce8c17415f103819707fde0"
  },
  {
    "url": "assets/js/17.57b073d4.js",
    "revision": "64fcd6d12e430b013b24d14ef12a70d9"
  },
  {
    "url": "assets/js/18.865e0945.js",
    "revision": "c8dd291a7884b8b046512e3029096a9a"
  },
  {
    "url": "assets/js/19.447e6383.js",
    "revision": "89d4f3a3e10de68a52a15b4eef2b10c7"
  },
  {
    "url": "assets/js/20.d5944f01.js",
    "revision": "bf92fb0a25909da3f520277307d34713"
  },
  {
    "url": "assets/js/21.3be9f010.js",
    "revision": "ec0c726ec5f73cfdba5f6743482b9e42"
  },
  {
    "url": "assets/js/22.627431bc.js",
    "revision": "5b3a0e00109f00f68d5c1382e5a1083f"
  },
  {
    "url": "assets/js/23.5132fdd9.js",
    "revision": "5dcb1010aadfc08ee5c4438d2c25ce8f"
  },
  {
    "url": "assets/js/24.fa6f3cc4.js",
    "revision": "9c156f2802dc12a01116709d9c3df137"
  },
  {
    "url": "assets/js/25.92bfee80.js",
    "revision": "c7d84c13256ad14f8e1f938d78880922"
  },
  {
    "url": "assets/js/26.efc935aa.js",
    "revision": "bf3417baa364d48a595ec4653b7656a8"
  },
  {
    "url": "assets/js/27.a55acd89.js",
    "revision": "25ec9a7e87db1ced486bc569c78539e9"
  },
  {
    "url": "assets/js/28.c40b84de.js",
    "revision": "2940630d4c1e9f3fd769c68f10b90c44"
  },
  {
    "url": "assets/js/29.d6ed496c.js",
    "revision": "0067891934ac82d2d14ce27bc650315f"
  },
  {
    "url": "assets/js/30.06e7bca4.js",
    "revision": "016701a5f003e2656ca3e2999dcff741"
  },
  {
    "url": "assets/js/31.19b2f4ff.js",
    "revision": "a60e3bc3499d8ac562e2fe495b634b8b"
  },
  {
    "url": "assets/js/32.a2bbc8db.js",
    "revision": "5838da30ee42d6892f5f29be910abcd6"
  },
  {
    "url": "assets/js/33.d367901e.js",
    "revision": "f98d9cafd79e3aeda6f2f458cb3a6a6b"
  },
  {
    "url": "assets/js/34.43f57dca.js",
    "revision": "66a21aa2cd4c6daf0792643972f6e177"
  },
  {
    "url": "assets/js/35.bd2cd2c0.js",
    "revision": "1a525d90f5cff2a6b5a118d38217c619"
  },
  {
    "url": "assets/js/36.12b95e36.js",
    "revision": "9442d5f7887ddd43aad1bd8ccde85ef7"
  },
  {
    "url": "assets/js/37.a433a1ae.js",
    "revision": "817ad84aa511faad4b37442f843d2eaa"
  },
  {
    "url": "assets/js/4.1beab966.js",
    "revision": "182e79168caba9650137e004e27a3eef"
  },
  {
    "url": "assets/js/5.20c66713.js",
    "revision": "ac0a90498dd9d132bcb5ae279dea0b0b"
  },
  {
    "url": "assets/js/6.ed22e716.js",
    "revision": "30ae78fd804c0a97866a1604a6dba2ac"
  },
  {
    "url": "assets/js/7.1edbcfec.js",
    "revision": "cb56e36ea885e26a6450ac7588bc279e"
  },
  {
    "url": "assets/js/8.521ddc97.js",
    "revision": "0d025bf83c49fed91754622838ba52a4"
  },
  {
    "url": "assets/js/9.9e0a1692.js",
    "revision": "478999bb51cbde312d2ef31f04d3cfaf"
  },
  {
    "url": "assets/js/app.a5e9f5f6.js",
    "revision": "1ff350825de4e70ce26b975537126aa1"
  },
  {
    "url": "assets/js/vuejs-paginate.e464217d.js",
    "revision": "f6124c4d00ea453132257903ec878832"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "254ee69d2e25861ea96bcb06001d79ab"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "eebe5d89868dbe2ba345d7513708fbf4"
  },
  {
    "url": "category/index.html",
    "revision": "bf4ba7c3a25c1688852fc7f5a92f56f5"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "ec166ca9753495f680ccc839c878bd4b"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "df283936d064bf25027c3de691b5c058"
  },
  {
    "url": "category/Note/index.html",
    "revision": "e39a6a16968f4280da4b31d4fa71346b"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "1d44f289f6ffbb50e32351ed7847b3f1"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "19904a1596a4eeea971a821bb7326459"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "555aac0835c138acd1f2f52cb4efb404"
  },
  {
    "url": "category/网络/index.html",
    "revision": "d869384900e8e7d908a64220a86bf60d"
  },
  {
    "url": "codes/index.html",
    "revision": "8a09d65070d32880b619ca0de613e9d9"
  },
  {
    "url": "gallery/data-structure-linked-list-normal.png",
    "revision": "1db30e017d3e0009ddf12311d31b2ae5"
  },
  {
    "url": "gallery/data-structure-linked-list-static-to-normal.png",
    "revision": "4643d5dd42eebf640134ab8d9df2e137"
  },
  {
    "url": "gallery/data-structure-queue.png",
    "revision": "db91100f07f4d68b2ae73b73baa34614"
  },
  {
    "url": "gallery/data-structure-random-linked-ram.png",
    "revision": "89bfac4f6ce9c3abb572dfff77a78a34"
  },
  {
    "url": "gallery/data-structure-stack.png",
    "revision": "7067ca734d65393dcd3fc3340310f787"
  },
  {
    "url": "gallery/FaceQ1583444636773.png",
    "revision": "a25a8ffa90c5b10c42e4e6992e1bc2f0"
  },
  {
    "url": "gallery/http-request-example.jpg",
    "revision": "3ad3cb077e4d852be159c0ce7d1a7e92"
  },
  {
    "url": "gallery/http-request-format.png",
    "revision": "3aeef0f8d0b869a5c3f4d47ee41d3c90"
  },
  {
    "url": "gallery/http-response-example.jpg",
    "revision": "c3cf8d2890449b9138527011ae403b49"
  },
  {
    "url": "gallery/http-response-format.png",
    "revision": "ea246cd67c5878fdb5f440e4657bd7a1"
  },
  {
    "url": "gallery/index.html",
    "revision": "0262ac06f3b7a325ccb88d4b6f313d8d"
  },
  {
    "url": "gallery/tcp-ip-ipv6-prefix.jpg",
    "revision": "527c1e33dd1752265990fdaf101e224e"
  },
  {
    "url": "gallery/tcp-ip-router-network.jpg",
    "revision": "6d35c987bd9240b925d8e80f60331396"
  },
  {
    "url": "gallery/tcp-ip-router-subnet.jpg",
    "revision": "ac9c9b39b390465be42f7f946243b459"
  },
  {
    "url": "gallery/yao2048-0.jpg",
    "revision": "b68678816508660ea9c32a813d1d769e"
  },
  {
    "url": "gallery/yaoplayer-0.jpg",
    "revision": "acb68980b34d9666841b8939d78ee967"
  },
  {
    "url": "icons/index.html",
    "revision": "f6717ae5f06ac5e995f9765bc14449e8"
  },
  {
    "url": "index.html",
    "revision": "8233cb5bc58b2e323a5a86142be808e4"
  },
  {
    "url": "letter/index.html",
    "revision": "a7febe436a12ce7c4c8daad5fbf1e8f6"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "28f62aabe2cf0da1d8922567ff0019d0"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "c847198000adb8e6cccc096f5fa60892"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "567b8b0d2c8a97a7fb671612efd2e5f7"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "71f46114db988478bfa33617d4390b03"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "b42fba726a435517d2e0cf7f0d3a03a0"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "fe09cae6bd44131657d832a3abccc3cc"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "10d4ec0111791360722ff429cde08294"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "322527565348e04778c542f4b89430b9"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "93bac1b3da542287a0b948dfa7c741a2"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "840b0075005be938a2c55ddb2416d728"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "ba536c883fc8e9f8dd0e1c8ea6d88f26"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "5b9489e99077ac27f330c0e6f30d16cc"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "fae068cb57ae49155351ad81f7eda40f"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "2ca9958c21e8ecc41b0b2221b95195c1"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "02f5dce765bb29c7c82effa04373df64"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "aa724d4ece343293aebd4ec15430dc76"
  },
  {
    "url": "records/index.html",
    "revision": "eaabd022dc2b832286081a308729f0e7"
  },
  {
    "url": "resume/index.html",
    "revision": "b70e7828be794c502b2522d743024132"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "e78df5c060265515c7681cc923e9900a"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "039584bdba51a10f92a217782471bfcd"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "bcaf3d4503d7ab3bfdf1df4d74971ae4"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "d5ca1d8da54345ae02e4a657b196ed08"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "10eb6d420133d9ab7c681bbceecd7dab"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "20a22d1280759cd9718db6882df573ec"
  },
  {
    "url": "tag/index.html",
    "revision": "79701421329a242b3594dc022e91eac0"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "d656bf53ceabc46e700e3a3541b82074"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "08f6975c77fc206bb1e1d3a56bb9d779"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "3c7b9d0c13f9dc4161414a1d8df0cdd6"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "1e52a4bab8b8dd40577f7f95f00c5220"
  },
  {
    "url": "tag/List/index.html",
    "revision": "f7412b02eca69910eb31186e3f6363d0"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "ed8f0a56f5a8339b32e66f44f9e77dcf"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "4935e5fa9591aee67360d70b3f0bee2e"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "ccea0cacba07ad5d283af17df58902e2"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "0c07094e2a0e41462fd2b0cf8eb5b88a"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "1046222ba7b7488e037e55dcd2d84f54"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "7b085fa869cbb56d02dc402ff30eb3d1"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "c4d0aa2a0bd63f962ec52b0ca827052d"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "04d90ae0869caae0b275b49e50ea3f2e"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "941b07f000e87a4a8f8d300e003ea497"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "0ddf7e1d1f048300216b22dcdda06797"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "07c34346eb73e501b51c089386a42b5f"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "2dfb5cd784d4c6c79c3f98cbcd283cc0"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "d01348313c41d7b3b9a1351cd1fdbd9b"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "2ca37aaff48a9cfb8bb6ebaff1836c47"
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
