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
    "revision": "9464a8b6b8a9ed25404d1fd60804a808"
  },
  {
    "url": "about/index.html",
    "revision": "07be34d241de8d24a1316b807f23c4fe"
  },
  {
    "url": "archive/index.html",
    "revision": "7e869cc5ab342356cbd5e014f52740fe"
  },
  {
    "url": "assets/css/0.styles.f1cb0206.css",
    "revision": "e253926fc8ae3d223d21bdfa12ead649"
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
    "url": "assets/js/11.5fcab406.js",
    "revision": "f8198ed1b8145599e8ca8d31501ad41e"
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
    "url": "assets/js/15.c08d72bb.js",
    "revision": "3d9600c6219b70eb836e1633630d8372"
  },
  {
    "url": "assets/js/16.ee98ab82.js",
    "revision": "0648700a2f102dba6f7a172fc5a46eaa"
  },
  {
    "url": "assets/js/17.f5dde5ec.js",
    "revision": "0b105a69cf62b94c38a14339aa360dd1"
  },
  {
    "url": "assets/js/18.e49b6463.js",
    "revision": "b15ecb945c45ecc3c18df906c2451bcb"
  },
  {
    "url": "assets/js/19.bbe2b93f.js",
    "revision": "623496b4ff2a0ea1b5e55064cebd625f"
  },
  {
    "url": "assets/js/20.e70eff30.js",
    "revision": "04169130ce797dbdcc35008553bc421d"
  },
  {
    "url": "assets/js/21.62b5eb46.js",
    "revision": "3b2f32358e3c442e9d4bff7083fe05c7"
  },
  {
    "url": "assets/js/22.627431bc.js",
    "revision": "5b3a0e00109f00f68d5c1382e5a1083f"
  },
  {
    "url": "assets/js/23.d385c2c3.js",
    "revision": "be75700d95b75568d467a53fb8324565"
  },
  {
    "url": "assets/js/24.2dd53124.js",
    "revision": "a2fc9c60bf7dbc921251bb402244e416"
  },
  {
    "url": "assets/js/25.92bfee80.js",
    "revision": "c7d84c13256ad14f8e1f938d78880922"
  },
  {
    "url": "assets/js/26.5e37f0cf.js",
    "revision": "148ede7e35606c6736606475b1cee5fa"
  },
  {
    "url": "assets/js/27.4be8df55.js",
    "revision": "5f594145b740a188204c2c73fc541684"
  },
  {
    "url": "assets/js/28.c40b84de.js",
    "revision": "2940630d4c1e9f3fd769c68f10b90c44"
  },
  {
    "url": "assets/js/29.9acc9f32.js",
    "revision": "d7411891a6a978fc57ef30d4f0c1411d"
  },
  {
    "url": "assets/js/30.14584e38.js",
    "revision": "c932b68e2319288d1123819567dc4a03"
  },
  {
    "url": "assets/js/31.7ee1f520.js",
    "revision": "76365b0e47499e5fc3f4263cbf9c1258"
  },
  {
    "url": "assets/js/32.a2bbc8db.js",
    "revision": "5838da30ee42d6892f5f29be910abcd6"
  },
  {
    "url": "assets/js/33.f9291619.js",
    "revision": "006090a2490d759055fd6456e082ddf9"
  },
  {
    "url": "assets/js/34.68f0e6df.js",
    "revision": "73c0934d0df5b1bb7dd6dcf2c3eaf507"
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
    "url": "assets/js/6.3235d4a5.js",
    "revision": "7267965879198460c1eb957bb035299b"
  },
  {
    "url": "assets/js/7.1edbcfec.js",
    "revision": "cb56e36ea885e26a6450ac7588bc279e"
  },
  {
    "url": "assets/js/8.5b346b13.js",
    "revision": "199cda0d2f83ef08c48cecc9a4e5e016"
  },
  {
    "url": "assets/js/9.f982c719.js",
    "revision": "ae6e375c3f7337e4533ad6edb87ac85b"
  },
  {
    "url": "assets/js/app.04e938db.js",
    "revision": "161a362d73a0177a1c06fd13def37725"
  },
  {
    "url": "assets/js/vuejs-paginate.e464217d.js",
    "revision": "f6124c4d00ea453132257903ec878832"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "2bc79bb20d350cbfd9a611c188c50513"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "20a6fa0760c7463a823cbfbef0470c4d"
  },
  {
    "url": "category/index.html",
    "revision": "cf9ebb666a074a472138961a71ba24df"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "235537f6b45a4b193561753f5c590d4a"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "97304f0c33361be89b7851961754a043"
  },
  {
    "url": "category/Note/index.html",
    "revision": "2471919ba103bf6982e481b6366a856b"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "dfe4d1b74fda5bc06fc01c6de06ab542"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "62cf207c41d60b42d6c9e46f2fa5827c"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "263c51b8c5cfb294ee61948757e3467d"
  },
  {
    "url": "category/网络/index.html",
    "revision": "c53445e4584f6166c45862324bdfd838"
  },
  {
    "url": "codes/index.html",
    "revision": "98976164e73ec355d704b26e9768ab79"
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
    "revision": "c19bddfb2a195d28320034ead562eccc"
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
    "revision": "03deab5458a1e794e64ecea0910a51a5"
  },
  {
    "url": "index.html",
    "revision": "d00642aa6d70f3e9bcac4dcba00a94ba"
  },
  {
    "url": "letter/index.html",
    "revision": "36f49ee30b85cc70e6a14940f5e44599"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "06213e4f0b10a8e58a1a74c1ef27e658"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "97697972e1be98227c0e20259f1bd1ff"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "4e0cc90a9770bed35164e376462175e4"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "607cc607b9e08dde1ecfe04b64f0cf57"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "e350a50d8f5bf1ca5400f1695a6a74c8"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "5472006821d370df81af41f742ed1ec5"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "9e139ba238900486fcb057a3c02cb8da"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "57e2494a813efca1c649dd8c0d48f5f0"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "7dcc974a26afe833391675ffd733f06e"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "f33d2632f4014418b9907f5fb85e203d"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "b218606ae40aae2ab462f845434d4529"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "d85f1c69ff06fdd9f32024046bb18b03"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "14804ab33eef7f64a5cc4c0ea5617ba5"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "a84193f29f3ee267ae696c7b362bc377"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "b86652e8ec6ee08fde9ea5933f34ea58"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "1cbed4979275c39f21b763192c23d4f3"
  },
  {
    "url": "records/index.html",
    "revision": "695061a73ec544517f64304f4ff20aaf"
  },
  {
    "url": "resume/index.html",
    "revision": "31915fdfeca9abeae0e6a4e6451cc6aa"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "28a441a753274980e5cb39e73ee8dde5"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "3946fa784ec94ea2b9b82b41632a03e6"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "cf4a208c61aed6fd969671bd41b4829e"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "99a45d8178f34239b6ac71b27ca716f3"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "d52de6ed33ebb18540de4a01d22788d6"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "1c3bca9278dfbcb28ac581dc3274d5ab"
  },
  {
    "url": "tag/index.html",
    "revision": "09d6ec930cbad5a7aacb2dce5691e14e"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "9018e1bbad91c1cce41f6980592f535f"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "1ac4b12552a801d8f55604d2b9b96593"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "8e6ced3475da7ffac523c3cae8c110cc"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "a18da3391e77ec9879afc2b39eec6067"
  },
  {
    "url": "tag/List/index.html",
    "revision": "c7616a2d0bc0e09601331c1eb376339a"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "b5c36582e45ff861120674783b24af88"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "9f3cac56f28434d1980ec05a3be41cfb"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "b0040df68418a125673973e4ed95de51"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "faa7864a609d5a62b9a266c4dad93a41"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "93b3957107a071cb68dc8da59a1b6c8a"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "9d990cf986ba15184cb980b524cce526"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "fd4ccd8b5d5424fc021deba2c7c913ca"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "70289f53237a993c828b245d05f690ef"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "67ada9320e78d9420341b1a290e59602"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "7c3246c6bee213889362527c63fab038"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "2fbd8c7837db5142b4a0c42effda5cdc"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "5df77aa39e54682ceb8d71f71cd78521"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "9c061da36ce616940cabc32318b50970"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "b851eb979ae38bb96d81f93ffa73c9b6"
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
