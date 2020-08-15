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
    "revision": "5a5531ccab3300a1588f00bcf58147ca"
  },
  {
    "url": "about/index.html",
    "revision": "09c182f2d9e0c55c1ac908d58086699c"
  },
  {
    "url": "archive/index.html",
    "revision": "1625122c9778df084d5937c4dae5d2fb"
  },
  {
    "url": "assets/css/0.styles.c1d3ccbe.css",
    "revision": "78bbecdeba064a7568f1ff970b0fc3db"
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
    "url": "assets/js/1.515cd288.js",
    "revision": "71104bc8a3fef4cfbd1f9724d9734254"
  },
  {
    "url": "assets/js/10.0aae44d3.js",
    "revision": "34e0e2ba865cb520dacac195a4c73c6b"
  },
  {
    "url": "assets/js/11.2155af2b.js",
    "revision": "15748371275127e266dd04446258d731"
  },
  {
    "url": "assets/js/12.f43b769b.js",
    "revision": "7ce96b471b325fd7f7b1094425251b98"
  },
  {
    "url": "assets/js/13.1259b9b4.js",
    "revision": "6e7319c15a94b98f1dff7d8141544d50"
  },
  {
    "url": "assets/js/14.2a6b7607.js",
    "revision": "1cc97ccb231d01b06742c0146b559e50"
  },
  {
    "url": "assets/js/15.88190951.js",
    "revision": "a84aded5cb75d87037dac3bd5b0dac64"
  },
  {
    "url": "assets/js/16.2a75b4a0.js",
    "revision": "4fad2924d3e66bcc164d1f18f6291b6d"
  },
  {
    "url": "assets/js/17.3dd04ce0.js",
    "revision": "ef7042bec109705c1717917b0c8c1f4f"
  },
  {
    "url": "assets/js/18.1c716ec8.js",
    "revision": "5a7f484842ac66f0873f6cfdddec762e"
  },
  {
    "url": "assets/js/19.2a75bb59.js",
    "revision": "747570a9a2bae2fd3a64f898da5404f8"
  },
  {
    "url": "assets/js/20.3a7f7a61.js",
    "revision": "3f981bc22d8a0d639a242d7f19b41d23"
  },
  {
    "url": "assets/js/21.082e7676.js",
    "revision": "e64a55b9eea3d860873aa6548073a166"
  },
  {
    "url": "assets/js/22.6e926ff9.js",
    "revision": "5775f109f1684892ee2f1a74da5846e5"
  },
  {
    "url": "assets/js/23.493756c7.js",
    "revision": "f74d1ee985009541237126e0efa4c26e"
  },
  {
    "url": "assets/js/24.4e2d5333.js",
    "revision": "5f7d73fee9087d719b94d7708bc35745"
  },
  {
    "url": "assets/js/25.75c28945.js",
    "revision": "5fa6ba556628d01f5e6597ba67e7a4f5"
  },
  {
    "url": "assets/js/26.105225a1.js",
    "revision": "c94a34a887e5bc3cdedc653723aa2342"
  },
  {
    "url": "assets/js/27.2b33197a.js",
    "revision": "06d5eafaba64f3d45b556ffad203dc3a"
  },
  {
    "url": "assets/js/28.20feac1c.js",
    "revision": "b028907570db3bf7fe6f185308c76051"
  },
  {
    "url": "assets/js/29.6f558f6e.js",
    "revision": "0c5b883e1580604ac7c5aefde77a9737"
  },
  {
    "url": "assets/js/30.b09408b0.js",
    "revision": "35e7811e4d48638f44fbd9c4646df959"
  },
  {
    "url": "assets/js/31.c6fdc3ba.js",
    "revision": "81369b6f7a0c0e74aa02edfa04fbd715"
  },
  {
    "url": "assets/js/32.4f6bde75.js",
    "revision": "f80ce7a4b7d46b643c4fcf3926c4e38a"
  },
  {
    "url": "assets/js/33.adef9cda.js",
    "revision": "6fd02454b11c65621c25fe651a8116d5"
  },
  {
    "url": "assets/js/34.b346eda2.js",
    "revision": "52942fd7daec8622f64d539c88bda9eb"
  },
  {
    "url": "assets/js/35.a3a99f95.js",
    "revision": "3f193f6a6b389beb7f03b186c36fab98"
  },
  {
    "url": "assets/js/36.7740f0f6.js",
    "revision": "08464dd440100e6015c6b6384d5e9e9e"
  },
  {
    "url": "assets/js/37.d10bc4ae.js",
    "revision": "3c421492474b3f64b6c1a8d81b18dd52"
  },
  {
    "url": "assets/js/4.be4ab401.js",
    "revision": "0af747dfe60b73998391223d72a34ab9"
  },
  {
    "url": "assets/js/5.62bebeec.js",
    "revision": "fa796561f1d65aba08f04d32a694ad14"
  },
  {
    "url": "assets/js/6.0dbe8d33.js",
    "revision": "ec07c64584beab680aec80f435e0d10e"
  },
  {
    "url": "assets/js/7.63e1b3b8.js",
    "revision": "a6464ee3d07c08e517846d22f4aeeb4c"
  },
  {
    "url": "assets/js/8.3b8d5b77.js",
    "revision": "f5a58d1381050b40606d96754932da92"
  },
  {
    "url": "assets/js/9.3ba174a0.js",
    "revision": "d654eb031dcc7a7e6d47cfe2987821b4"
  },
  {
    "url": "assets/js/app.5ee8e7a9.js",
    "revision": "45bca523a63160265b9a56f4344eb93f"
  },
  {
    "url": "assets/js/vuejs-paginate.89b993a3.js",
    "revision": "88204b768aa25be73521e160405c0d22"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "cbb9d78073bb293f7908030b4ed5a8f0"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "d4f65f402c82134c6786fce10d81ca78"
  },
  {
    "url": "category/index.html",
    "revision": "a01d226dbf456828d3826513d88f76e5"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "234404aab9798df9ce2cb17fcf5ac885"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "660f9675ead4e02af22fe26fb63d36f7"
  },
  {
    "url": "category/Note/index.html",
    "revision": "55926587c22b6bcb2537771f28d4ca54"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "677fbbde1bbe58eff5e049e3527fab29"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "1ea80a09541d87598eb7466af1e1bd33"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "125f0d393c7826e1d9301a7c29538310"
  },
  {
    "url": "category/网络/index.html",
    "revision": "e648a782cc745dfb00198495afab5224"
  },
  {
    "url": "codes/index.html",
    "revision": "edde319e218121dbe1b44b6f2f852fc8"
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
    "revision": "50d1a9783d12375bfa8052ac2ff4f8f9"
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
    "revision": "c749bd317c3b40671d3e863a4ed1ed28"
  },
  {
    "url": "index.html",
    "revision": "9f86d8725ebff7144157c4c3238d65f5"
  },
  {
    "url": "letter/index.html",
    "revision": "f591cbd65471fcddfd75637105d6cff1"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "6a4223c46445ad96f6d5269a2a4109ed"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "02c5b096b4257e0a2a048ae0a06febd5"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "28c308f943fd0e0f27d5fe71ad42a687"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "60feaf9988f7edce5aae691048a0f605"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "2ceaef08bca0d05efa1ae7a3b2888110"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "c160ee32e45134c4f7c013847e91c32a"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "34007eec75035a17831bc2cc4c58f117"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "21cf0c51248fcd36cb85975ed59e90eb"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "d166eb99d7b699f9f71a06c093e8ba82"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "cffc1dd4ac0068060e652c1da805c4a6"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "af54a559622b6b4319fdb09a6bde7f7f"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "31aec1f09547acc5ccc199a39d0b5a3b"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "055291c7a806a620a4044ff5dc117b30"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "8bcd82e5701a117f337aca63591e3b9d"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "068406c2ee6e1fd853e10706a472e5de"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "a2f99631da334777902a79fde5e15145"
  },
  {
    "url": "records/index.html",
    "revision": "37fbc4dabc1eb74d5884ca8cbbcb95c3"
  },
  {
    "url": "resume/index.html",
    "revision": "b473d5e52cdd8ed32ca396aff7c56485"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "c241f64e631f7fe2bc3f9290f4e5428d"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "c60ce3edc99b1dbf0cb50e9706f1b595"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "fd21a39152693cb3f4a3eb7eba01eaef"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "64290525a34a45efa8351a3220023cca"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "32e515ebfb441e35dddef5b6f9c3944f"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "42025509a79e70d8b863b4fe66dd3f30"
  },
  {
    "url": "tag/index.html",
    "revision": "607a496a4f69e2b03f0e080b1ed95741"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "e4dc94b0763f3c0c95acd82fe4610d11"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "e366942476ed46c132a4489fe3178d16"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "496d75150b171241de37c746d0793efa"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "50fcf70b7926205b99149043c58b7a64"
  },
  {
    "url": "tag/List/index.html",
    "revision": "def3fb31f47b629190ce4e7d7829b6da"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "d62b99aca993559874bb16ca58367472"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "9eebe17a405b2ca10649ba3eb95d1cd5"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "dc805e5980c934a40f2671292e2e921d"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "db82808e678dc312b3d048eb398a9844"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "f5559dd00984480faedd546e22c5a307"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "d7264809cc98a89006aff60ca85c175c"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "6251516eb69e722a4d921c23578b6136"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "d505ef0e4d6d8d49ea2934697243a5f7"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "dd511a53b1ef06621f8cecf099571c2a"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "91da0c392d114c9eb5efade942e63abe"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "376443dac78d3d7d2fbafb5b2f236ce9"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "06ac5b4c3b0ae58e3f8b9e8513eba421"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "6189974909de58bd20d4ef97cdbd171a"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "90b1fa2ce62291ec33ef28da788f90ad"
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
