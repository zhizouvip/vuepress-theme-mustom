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
    "revision": "99e1f85df9f1557c37539ace80d2774d"
  },
  {
    "url": "about/index.html",
    "revision": "e1e55762ba14b085b872602afff85e4b"
  },
  {
    "url": "archive/index.html",
    "revision": "c72be100d52991d90a11cb6abc432267"
  },
  {
    "url": "assets/css/0.styles.42d50882.css",
    "revision": "76ba3009a55bce16dabdca3f5e952a11"
  },
  {
    "url": "assets/fonts/fa-brands-400.8300bd7f.ttf",
    "revision": "8300bd7f30e0a313c1d772b49d96cb8e"
  },
  {
    "url": "assets/fonts/fa-brands-400.ad527cc5.woff",
    "revision": "ad527cc5ec23d6da66e8a1d6772ea6d3"
  },
  {
    "url": "assets/fonts/fa-brands-400.e2ca6541.eot",
    "revision": "e2ca6541bff3a3e9f4799ee327b28c58"
  },
  {
    "url": "assets/fonts/fa-brands-400.f075c50f.woff2",
    "revision": "f075c50f89795e4cdb4d45b51f1a6800"
  },
  {
    "url": "assets/fonts/fa-regular-400.3c6879c4.woff",
    "revision": "3c6879c4f342203d099bdd66dce6d396"
  },
  {
    "url": "assets/fonts/fa-regular-400.49f00693.ttf",
    "revision": "49f00693b0e5d45097832ef5ea1bc541"
  },
  {
    "url": "assets/fonts/fa-regular-400.4a74738e.woff2",
    "revision": "4a74738e7728e93c4394b8604081da62"
  },
  {
    "url": "assets/fonts/fa-regular-400.b01516c1.eot",
    "revision": "b01516c1808be557667befec76cd6318"
  },
  {
    "url": "assets/fonts/fa-solid-900.205f07b3.ttf",
    "revision": "205f07b3883c484f27f40d21a92950d4"
  },
  {
    "url": "assets/fonts/fa-solid-900.4451e1d8.woff",
    "revision": "4451e1d86df7491dd874f2c41eee1053"
  },
  {
    "url": "assets/fonts/fa-solid-900.8ac31674.eot",
    "revision": "8ac3167427b1d5d2967646bd8f7a0587"
  },
  {
    "url": "assets/fonts/fa-solid-900.8e1ed89b.woff2",
    "revision": "8e1ed89b6ccb8ce41faf5cb672677105"
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
    "url": "assets/img/fa-brands-400.2f122423.svg",
    "revision": "2f12242375edd68e9013ecfb59c672e9"
  },
  {
    "url": "assets/img/fa-regular-400.3602b7e8.svg",
    "revision": "3602b7e8b2cb1462b0bef9738757ef8a"
  },
  {
    "url": "assets/img/fa-solid-900.664de393.svg",
    "revision": "664de3932dd6291b4b8a8c0ddbcb4c61"
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
    "url": "assets/js/15.ae74635f.js",
    "revision": "ec154c514abd6714ed8eceb3bc6452b4"
  },
  {
    "url": "assets/js/16.af41cb64.js",
    "revision": "9837c8c50757c31f16fad3b0f200b50a"
  },
  {
    "url": "assets/js/17.68f40267.js",
    "revision": "f5c9a83d79a49fd11484e1aa9be0a9d3"
  },
  {
    "url": "assets/js/18.d7b1b7a7.js",
    "revision": "4898765f99efc83e6308db29855c8f19"
  },
  {
    "url": "assets/js/19.1c35ea95.js",
    "revision": "5e173c8abc8e474d25bbf9368069bdd9"
  },
  {
    "url": "assets/js/20.d5944f01.js",
    "revision": "bf92fb0a25909da3f520277307d34713"
  },
  {
    "url": "assets/js/21.a11ddcae.js",
    "revision": "f1e0e75d41ce3dec0a4054e47998f793"
  },
  {
    "url": "assets/js/22.e1c05e88.js",
    "revision": "3d9dcba1377b185e518aaf2f10d25daf"
  },
  {
    "url": "assets/js/23.b6ee7489.js",
    "revision": "7180da489e49e0661727f056f001179e"
  },
  {
    "url": "assets/js/24.dda1115a.js",
    "revision": "fc85b9db724c19faf09df07aa61b9dbe"
  },
  {
    "url": "assets/js/25.92bfee80.js",
    "revision": "c7d84c13256ad14f8e1f938d78880922"
  },
  {
    "url": "assets/js/26.971ed043.js",
    "revision": "685abbca04b776bbeb0d97fec8da8453"
  },
  {
    "url": "assets/js/27.a55acd89.js",
    "revision": "25ec9a7e87db1ced486bc569c78539e9"
  },
  {
    "url": "assets/js/28.050f44d9.js",
    "revision": "7b0faadf8d7186371ec5f1f415863084"
  },
  {
    "url": "assets/js/29.af2e78f4.js",
    "revision": "be882cf060decf3d096b1b5411651929"
  },
  {
    "url": "assets/js/30.0bcd0598.js",
    "revision": "7acd604b244566f7d7bb0f93a65ebff7"
  },
  {
    "url": "assets/js/31.47682903.js",
    "revision": "b6c01b031a2962a070303f41159d84da"
  },
  {
    "url": "assets/js/32.9583930b.js",
    "revision": "f6108e6ed253a0e8e3bf1dadecacf17c"
  },
  {
    "url": "assets/js/33.54b61907.js",
    "revision": "5355b68484a62720c9208431db11c09c"
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
    "url": "assets/js/app.fb7df246.js",
    "revision": "b432acb0896b4f9ef9cfd37bb4b50720"
  },
  {
    "url": "assets/js/vuejs-paginate.e464217d.js",
    "revision": "f6124c4d00ea453132257903ec878832"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "428188efb9c799cfb926b77b16cf889c"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "05f695cc441c1bbda63a7c9ac93ec862"
  },
  {
    "url": "category/index.html",
    "revision": "f9f683782f49f287868b4cd56411da86"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "e3ec5986bb8dbcd69fed420c627bcb9b"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "782b080075277029ebd04f32d434acc5"
  },
  {
    "url": "category/Note/index.html",
    "revision": "a6532b99842567ce1896bc4673fbb058"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "28d6c9b449fc038770a1bbd87b3112b8"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "c732068ba328969e3e47eb2f674c469a"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "61b9b46db1b14ab8221a46accce01456"
  },
  {
    "url": "category/网络/index.html",
    "revision": "bee8b577235784bcf7def21c3de9f593"
  },
  {
    "url": "codes/index.html",
    "revision": "805815520ce1eb33adec9dbf6e51fbb0"
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
    "revision": "76b257af81905a8abe3ceb2bcdf5f377"
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
    "revision": "66f5b9263c688611c793f5bca924d534"
  },
  {
    "url": "index.html",
    "revision": "bdcfbe6adaa13f806343fc84e5152031"
  },
  {
    "url": "letter/index.html",
    "revision": "e781280a3ee68710a912cd82dc21b239"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "77ee9fc6ec6b6a63e85f995e21e19ab0"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "5f0a4c6b8ee1ebc439e4eb99edeadf67"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "50d9f0cfc1f2b3b95af4c3cd55672e5d"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "727b331cea5e951bc9ea4e745f7da832"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "068c56dcb17730cb5d09a71cb81d53e8"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "9f363fc6bffeeb09ee30af1ea6883d84"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "0bae7b804e180739ded160ddb46764ec"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "dd49bcd2ee72f8737984f72cfe3f1300"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "cb45d82693e80c0ee9829a4692e065a8"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "ccc911bb069dbc7dbf1951ccac994b53"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "4de8fb4d4691104c780376bcc7935492"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "d6aa5159e4d0835ceedec8bdad5d8f1b"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "e2dbd0c8da1fd8417a5a081653eae6be"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "96e2070e9186e636134a40ef6213907b"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "8e13fdb6520a9a96f3233b29f9de39f5"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "e5b389adc16e887529d135ff404956e6"
  },
  {
    "url": "records/index.html",
    "revision": "6cf5bb8ca27ad7946aa3325f6fa30910"
  },
  {
    "url": "resume/index.html",
    "revision": "51af08789cc14207a75bf110b4264243"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "810f0349bde7d7e62cbf88164e818d37"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "ff692abcb3e7fc77f3da183a4f9e9786"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "4639e1d41f70bc701b6ea74aabff999c"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "8968f7f18211eada5b26d1f3c3bd7bfd"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "c35a2345f0620075446c83d1cefcf880"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "4412438dda7d54ae6911d896a3ac7929"
  },
  {
    "url": "tag/index.html",
    "revision": "80be99b005dd6d7721fa958a54cde310"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "7f8926617d82d008ca6b98b64b7575a5"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "9c752469bedec6dd24528e3052e23725"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a7fe0eb27842af6aa16c63e7d446715f"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "8ab0284ffa382f6a139857dfc9a36a3d"
  },
  {
    "url": "tag/List/index.html",
    "revision": "82cd6f84e12ddb4393b42f5e9c7d50d7"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "896e048e4c767c526779e7952178dfef"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "309245dc54611cb8908419d24c61f42b"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "4ccb3adf5ba55f5cbbc8b2ceb186e4cf"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "b5733693e564ae496f9787ecf86c8f93"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "45548abacf84df66af2e0728fbd8c5b5"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "fc2146a990faccccfcaaac8d50a3559c"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "f02c63bd806c4a23ddafcca6ba7a574d"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "146c0d88d6011170a280c6775019e047"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "c5bebe443d2af010d08c4752f1c246a7"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "2180900742df4c60902ee9eb47bea4b3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ac82ce3813a3df3e9d9934a38cd880ff"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "b767721b2c9bc84657fa2571fffccf08"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "818d5c7a337f9b10d1d0c9a6d0dd2e24"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "4707e8316a5f0aced152122d8937fbd0"
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
