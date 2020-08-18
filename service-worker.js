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
    "revision": "b80e77d83ca9d1bfff6a4208640b8105"
  },
  {
    "url": "about/index.html",
    "revision": "fff2b9dd8da90e691bfc9464da600002"
  },
  {
    "url": "archive/index.html",
    "revision": "c212693b7235acde15d70a23dbf251f1"
  },
  {
    "url": "assets/css/0.styles.10a65496.css",
    "revision": "b73a55c8246aa2db8e48ab534d873f83"
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
    "url": "assets/js/14.c6c5585c.js",
    "revision": "a576832ee79817ab30cabe068a9fa982"
  },
  {
    "url": "assets/js/15.9352cbff.js",
    "revision": "ab9430ba10127b2a14083af1100bdce9"
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
    "url": "assets/js/22.5e660cc7.js",
    "revision": "fa3cae2d60dfa4f03e5d9f61df41c6fc"
  },
  {
    "url": "assets/js/23.75a65d40.js",
    "revision": "9877f61ed45b4159f1b24d7a5af8546b"
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
    "url": "assets/js/28.044551ef.js",
    "revision": "dd6090bec4d9d2ed85abae30860dd1fe"
  },
  {
    "url": "assets/js/29.4abf2f19.js",
    "revision": "46c4617572b4a1919a0335bc8483a6dd"
  },
  {
    "url": "assets/js/3.d9b6aa03.js",
    "revision": "3278b7a6ed1e0246d40bf0f6ae1e34d9"
  },
  {
    "url": "assets/js/30.76b3a638.js",
    "revision": "016701a5f003e2656ca3e2999dcff741"
  },
  {
    "url": "assets/js/31.b239ef51.js",
    "revision": "945e7e06007950f464bafc47fc7a54f5"
  },
  {
    "url": "assets/js/32.8f8caca7.js",
    "revision": "9636176d47054dbdfd05224084d2d425"
  },
  {
    "url": "assets/js/33.2c319c84.js",
    "revision": "553740b69b798a4398327386fa12dfe7"
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
    "url": "assets/js/4.773bb435.js",
    "revision": "fde8e7cd463e5f0f7dad2e171e1d58cb"
  },
  {
    "url": "assets/js/5.24610e7c.js",
    "revision": "5077a3a172bc392e521ef1043d6bd504"
  },
  {
    "url": "assets/js/6.64636763.js",
    "revision": "6c44813d0c31caebc3f22458ad46e0e8"
  },
  {
    "url": "assets/js/7.eb080198.js",
    "revision": "adaff43168e87616fca073b3f961333c"
  },
  {
    "url": "assets/js/8.a29e5d23.js",
    "revision": "f2d7bcf10e4e6bd56301261aa3c9a9d4"
  },
  {
    "url": "assets/js/9.5590643f.js",
    "revision": "15dc1fe08747368b0e9d078dbb407d6e"
  },
  {
    "url": "assets/js/app.71248ca7.js",
    "revision": "0cfe534699dcb5541fb142e195f491c8"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "e4b375ceb21883ee3c0a69ddcdad4014"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "479a665ea8ce7e3c517f5f2116b7faa2"
  },
  {
    "url": "category/index.html",
    "revision": "4f150ef0888b365d4d26fd374d8b9a73"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "b9388b438cfbd05b397a05ab9c7ce17b"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "734ef827ab039b695547dbe3135670e2"
  },
  {
    "url": "category/Note/index.html",
    "revision": "b6fa4430c14763b6e2b4ad4c1b5137b5"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "7e923042102702c156249e1694f29250"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "f7392d31b8cf64b5ef4be24891dcf6de"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "156c7f5acc962d0b9375a9e24d25d4c6"
  },
  {
    "url": "category/网络/index.html",
    "revision": "7a183c36b3270d4e81bbb792ca7fbccc"
  },
  {
    "url": "codes/index.html",
    "revision": "87931d4c14a47855ce95d2dab6d10561"
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
    "revision": "c131c0078b7013ba4d20d0912f7b5e8f"
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
    "revision": "b19549bbdde2313086af7599689a3729"
  },
  {
    "url": "index.html",
    "revision": "469deceeb8f56ba94c2ed969eac4c333"
  },
  {
    "url": "letter/index.html",
    "revision": "9e29c032da0cf0cc7f8e3cc3b1f16849"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "97110a1b1d407b3838196bec00c54865"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "ab29a59dc63df42953bc021e7ea06a87"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "117ad8e542947424b8d0b6e3887fac51"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "63dc505f0388aad1c2822598e070350c"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "cfbc691d6a34a1948b0c97b79cf48f19"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "91c625ccdc91ef79d383fceceb8d760f"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "b668ecc94402db22bbf8e5a08384959a"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "22cbb759f0980e238b484065c96fbb9b"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "a561a2c222ee57a1b6259d4fba852687"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "34adb24a9edd196bfe1a5b8a24417350"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "4a8436e441d45e4d65817bd18df2e057"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "f35a58b7dc0a496548b444a6f66a0370"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "f74c0775ed7b27522bc7c402ace62abb"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "9487f8f4709f36b391b7251af319fb16"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "62ad5a1344b4dd1f236dda347653fbc1"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "1bc0561e6603c1ff90d2ac4c22b00a1a"
  },
  {
    "url": "records/index.html",
    "revision": "dd733fd5ff4f7812d769ca3a3c98b385"
  },
  {
    "url": "resume/index.html",
    "revision": "42fa891e07e410c39acea240492ed40f"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "e0a47e2ff223b221809bd4683a85eef7"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "01db61f902bd496cc58368f10bf618cf"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "fc6fb408623c487b47bc9f1e429de13d"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "ee51b6c33720406d66ad62a4131576da"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "b9c15f087689e1ac51e56cb3e50f07b0"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "706f477b89e983b0c435a15583e7404f"
  },
  {
    "url": "tag/index.html",
    "revision": "84b632a5668202ace88626f1432afccf"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "38704db99b46f7c49ac7ccf8a31afcd9"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "7d17daf79fc689d238af50b332b6f4da"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "afdbb4dff67ebd2042c690efc0d9b156"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "9f22d191bd88ba8d7a624f74304ad190"
  },
  {
    "url": "tag/List/index.html",
    "revision": "480608bd05b6aff1d7a62c389a1b60ef"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "61486597e493fdc9f960e1876cbfa697"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "a2952e5cdb2983bfe5e23d33d9948dca"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "543828b3c501a1b53093e6b052ab8b64"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "3bd1ab7f94d9184e06fe8dca0040cc55"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "7bc02f0c279743c288d2b44b54192612"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "a700bdfab726e64e32e14277ddecbf18"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "9524f37573ffba2cd4b6ae968957c10e"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "d6908d9984cd52650ce42cdf56d295dd"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "f61166487aa7bf94c8d9ffc4dbcda591"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "aa92919ce918e5e522b681639d727557"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "8dad1747641143cb0d48c10cd637f118"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "09d626edca44c9d31994f0d6e9e214a9"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "9c3a13e51f8ebd2d5e054227db26a2fd"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "f64959a5e989e0411519de558a27daa5"
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
