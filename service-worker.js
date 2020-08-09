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
    "revision": "6428c3fc7aa5ba526767c53463cbafdc"
  },
  {
    "url": "about/index.html",
    "revision": "65b7949996cadb1b3b9d047c8f858805"
  },
  {
    "url": "archive/index.html",
    "revision": "1d7b952a9a4b1bd5578493b63b9313bc"
  },
  {
    "url": "assets/css/0.styles.830d16fd.css",
    "revision": "f626bf6cc6dd1d22a08b1928d1c95b9e"
  },
  {
    "url": "assets/fonts/fa-brands-400.4a5d4d85.eot",
    "revision": "4a5d4d855d11fae79cc864bdacb2f479"
  },
  {
    "url": "assets/fonts/fa-brands-400.4c1da237.ttf",
    "revision": "4c1da237bdae0773309df93b2cd48e09"
  },
  {
    "url": "assets/fonts/fa-brands-400.5734d789.woff",
    "revision": "5734d789b25228cbafc64a58ae971aca"
  },
  {
    "url": "assets/fonts/fa-brands-400.91a23e8b.woff2",
    "revision": "91a23e8bf2b4b84c39311cb5eb23aaa0"
  },
  {
    "url": "assets/fonts/fa-regular-400.260be4f2.ttf",
    "revision": "260be4f29c0b2ce47480afb23f38f237"
  },
  {
    "url": "assets/fonts/fa-regular-400.5c674c92.woff2",
    "revision": "5c674c9216c06ede2f618aa58ae71116"
  },
  {
    "url": "assets/fonts/fa-regular-400.6b20949b.eot",
    "revision": "6b20949b3a679c30d09f64acd5d3317d"
  },
  {
    "url": "assets/fonts/fa-regular-400.d44ad00c.woff",
    "revision": "d44ad00c44e46fd29f6126fa7d888cde"
  },
  {
    "url": "assets/fonts/fa-solid-900.412a43d6.woff2",
    "revision": "412a43d6840addd683665ec12c30f810"
  },
  {
    "url": "assets/fonts/fa-solid-900.9a1672a8.eot",
    "revision": "9a1672a8a8d91fbf82c71f451d495253"
  },
  {
    "url": "assets/fonts/fa-solid-900.c65d1548.ttf",
    "revision": "c65d154888aa166982dac3e72e7380ec"
  },
  {
    "url": "assets/fonts/fa-solid-900.f3a7d3b5.woff",
    "revision": "f3a7d3b5880544a91e9a7e6f8f35d4d2"
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
    "revision": "24274e52d435f217d998a1c0f8e547e6"
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
    "url": "assets/img/fa-brands-400.778b1f25.svg",
    "revision": "778b1f251bea7412048da95b87bf816f"
  },
  {
    "url": "assets/img/fa-regular-400.66578cdb.svg",
    "revision": "66578cdbb6dc01f527a53971051b3e85"
  },
  {
    "url": "assets/img/fa-solid-900.48685310.svg",
    "revision": "486853107489520b3265b19b191626f8"
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
    "url": "assets/js/10.a1247f8c.js",
    "revision": "526f6c9851f1bdde649fa1008240539d"
  },
  {
    "url": "assets/js/11.948554fb.js",
    "revision": "b07524a5dee29f2fbab6d49bbea28634"
  },
  {
    "url": "assets/js/12.8ae00816.js",
    "revision": "daeda0acd7025d8a5a37e3bb01578f83"
  },
  {
    "url": "assets/js/13.6dee9015.js",
    "revision": "5af63cf2e9a44b322d1664bf01ec012e"
  },
  {
    "url": "assets/js/14.ceed5fc6.js",
    "revision": "722642f4467002519a920f5314ef7bb1"
  },
  {
    "url": "assets/js/15.bf5feb56.js",
    "revision": "ba5527fb3d08f2f1da61892319b73a4d"
  },
  {
    "url": "assets/js/16.dcfd3443.js",
    "revision": "ced9dc4e308633288b5dc305b9f8ff1b"
  },
  {
    "url": "assets/js/17.a1945e62.js",
    "revision": "cd423aaa30c422ccfb549ab04f83afd8"
  },
  {
    "url": "assets/js/18.ab2531ae.js",
    "revision": "9789020cbafdd75eab051a28e6791b28"
  },
  {
    "url": "assets/js/19.e2db55c4.js",
    "revision": "55295479e16cd712186e861e24bd4163"
  },
  {
    "url": "assets/js/20.05e511ab.js",
    "revision": "58109357ed710da786a9abe0046e1703"
  },
  {
    "url": "assets/js/21.551eda1b.js",
    "revision": "3bf41c7a039251eca51381d2805de356"
  },
  {
    "url": "assets/js/22.7a305ffe.js",
    "revision": "1bd3bb4d8f51790609f1c29a1d0b4447"
  },
  {
    "url": "assets/js/23.b1a849e4.js",
    "revision": "c49507685303193579c289f1dd8a7f2d"
  },
  {
    "url": "assets/js/24.42e8ed46.js",
    "revision": "c25125e48efd948e1ea85e07c881c8ef"
  },
  {
    "url": "assets/js/25.7adcdbde.js",
    "revision": "ad7e011a27291fffcae106bc6c75a06a"
  },
  {
    "url": "assets/js/26.d40dc3f3.js",
    "revision": "e37731e40dbefc01dc99c88449f749cb"
  },
  {
    "url": "assets/js/27.169d2c4c.js",
    "revision": "f02aa4a02bad4200bea4bc7a5ae380ac"
  },
  {
    "url": "assets/js/28.973497a9.js",
    "revision": "58bfba80bf3e64dbad8cb16b6e4f5fd9"
  },
  {
    "url": "assets/js/29.b503158b.js",
    "revision": "6131b882659b8d88d8b8b04cae75df19"
  },
  {
    "url": "assets/js/3.28ebaa30.js",
    "revision": "66e3c820f9779a45e0df81f27173abe3"
  },
  {
    "url": "assets/js/30.fe99650a.js",
    "revision": "fe76ae41486d5a3db933891be60a7dc2"
  },
  {
    "url": "assets/js/31.ce07934a.js",
    "revision": "4c87b968839672b251259ff633b792e9"
  },
  {
    "url": "assets/js/32.1ee9baae.js",
    "revision": "509b6b61248799bea722408ca4654e36"
  },
  {
    "url": "assets/js/33.738a269e.js",
    "revision": "db65bb41e123f70d7137d4cd8afce277"
  },
  {
    "url": "assets/js/34.75967790.js",
    "revision": "484a9c45f0b4e0a8f3fc9a351ae1cc99"
  },
  {
    "url": "assets/js/35.0f1d65e7.js",
    "revision": "c77304c603912ff71634497121b00210"
  },
  {
    "url": "assets/js/36.c14dbeb2.js",
    "revision": "71b42dcee9ebe478f89306fbfa260bf3"
  },
  {
    "url": "assets/js/4.c35927bd.js",
    "revision": "a02b711e5cd95e6eaa9003c26d8555e7"
  },
  {
    "url": "assets/js/5.1210db7d.js",
    "revision": "a5fc43e636e3ee5e5c6a8da9948e48e7"
  },
  {
    "url": "assets/js/6.8b35c455.js",
    "revision": "919a69ba940b0b4d94d0f8f403f165e4"
  },
  {
    "url": "assets/js/7.eb080198.js",
    "revision": "adaff43168e87616fca073b3f961333c"
  },
  {
    "url": "assets/js/8.a3adc313.js",
    "revision": "5faa29ecba4cbaa75151380d9a662f13"
  },
  {
    "url": "assets/js/9.5590643f.js",
    "revision": "15dc1fe08747368b0e9d078dbb407d6e"
  },
  {
    "url": "assets/js/app.8483071a.js",
    "revision": "a9e08ea74bad10b19879e9405ae8e899"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "620782e43301279d19147c28969aac7b"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "15ffff152b7585b379f6660007dca715"
  },
  {
    "url": "category/index.html",
    "revision": "a2b2b6b31202a0f53fe4fb72e2d1dc55"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "748b157e9ee06015b838188457925622"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "444ca5a7f834754413386140a8f60a92"
  },
  {
    "url": "category/Note/index.html",
    "revision": "2ac7d1d0899fa83f97b92f8617f833ff"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "d0542b18260c10c0c7f3cdd943747fcf"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "d5f6a0ab0bcdf3a31d087d79cf03af06"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "c2780fe3dc6951e1da03f131b326c740"
  },
  {
    "url": "category/网络/index.html",
    "revision": "363e4f3bc70ab145d747e9eb3c887d72"
  },
  {
    "url": "codes/index.html",
    "revision": "c79f342bdaa8cb9710e245ed5a6d6c14"
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
    "revision": "92739b9232e4824e34ae76a61d95c1cb"
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
    "revision": "cd1e0e51cf57d03d4e1047af8c8de0a7"
  },
  {
    "url": "index.html",
    "revision": "979c85908651dc932705ba2ef4d73012"
  },
  {
    "url": "letter/index.html",
    "revision": "790f4bdcb03c719d03ed3244103dd077"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "ba60f89b003c7767c15ca182d2dff0ff"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "52d097d745337f041e088a3fdb4f01b6"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "20d0d0feeaccd6492ec3b9486573ef7d"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "bb6438fe00c70a04c8054850d8612d2f"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "85b183bcace9ae2ea57dfd79701ebc89"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "c3d2b9d0e9c1c093ff0ddf33d307f6a5"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "7ad82fc426e4c0df87a13a18b6dde4eb"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "d2be8849d9d095c0168fd6d0acefcc25"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "716e85fe1cd278245d343fe09df85d59"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "d6c59bacbbd590613fd26bc649846428"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "872c32e8fde746bf9f1b176ad8a4de14"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "20fb4e89f37b5982a484aee9bfcc195f"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "47848243eadc1a2148b31830facb7216"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "a172b46dcdf82987f161d9653ac62ea6"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "ae8ec1b19c202ca38218b7fb667c5cc5"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "2196bce56ffdaba2294de761df6fc71e"
  },
  {
    "url": "records/index.html",
    "revision": "61ea5e870d89638d2263253a7974da4d"
  },
  {
    "url": "resume/index.html",
    "revision": "5a1e8447526610f4cdb4afb93437ba7c"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "e0ec45f6929c9c68dcdd4f92545f3f0d"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "0eb80a9de593d14235ea209ee62739f2"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "a0690425c31737a761bc859ae0573cdc"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "d223f9ba8534dd996721441fb340d4de"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "547f3d884bfbad54c89e9ee2a041b79b"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "27e942fc9704be69b032133b3a319c86"
  },
  {
    "url": "tag/index.html",
    "revision": "30d29304d5c478f7eb31b167940fb9e2"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "fc1db26ff0b57396d1ea076c47354569"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "677f0e806a880daa09e5d6950931d934"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "c934d74ea07edc80f75fe1e31d296ea3"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "5c971ed98fc8517cca4a7dbb2b718891"
  },
  {
    "url": "tag/List/index.html",
    "revision": "2427ebdf4f4a29601c1282e08b2c1651"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "06969d783c2ee049d0f49546c2cfa4af"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "76f2e5f4d70661437ddcb31afa2641e1"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "7254e1f0bbe7883a7776976c2b5d4295"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "ea42874e14073f054560d622be06f057"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "9e5011e8d7f753ea3a3e0aa481692d8b"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "4f003c44c1a45bf807b7ab2687eb6148"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "30910f9302dfe42301754e3cfc8ab411"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "10a242e1d1e294108b3ee35f2c065072"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "56105595fad6b59bf8f319040d84d5fd"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "ab6122cb4a482fef910c06850c99d27e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "18862b9d4d7b86552fceb128b9655eeb"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "0adc0f3b80d1ccef4ba545b25ed17f04"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "e16f3223c34372dfa2fc1989a29800fe"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "672e77fc754d8ee145a6f22294e8062e"
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
