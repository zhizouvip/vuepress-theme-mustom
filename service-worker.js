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
    "revision": "ea91bb5e1b50d7c967f9f10067acd1b6"
  },
  {
    "url": "about/index.html",
    "revision": "ee4f05cfc6669b18c8108f91e28d705c"
  },
  {
    "url": "archive/index.html",
    "revision": "fab58b004b81aeb2e8d43ab1e929f8d8"
  },
  {
    "url": "assets/css/0.styles.6e4ef689.css",
    "revision": "72d0fd7cd23a12d7d45c15a5bacbcce9"
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
    "url": "assets/js/14.70f03f84.js",
    "revision": "115fa0805260af7d1f86568ef7459651"
  },
  {
    "url": "assets/js/15.88190951.js",
    "revision": "a84aded5cb75d87037dac3bd5b0dac64"
  },
  {
    "url": "assets/js/16.31b3a38d.js",
    "revision": "6bd6a277142abb0b5102b4e27f0c6284"
  },
  {
    "url": "assets/js/17.9aaa9e9f.js",
    "revision": "53847653e55734a7f78975ceaf850cbc"
  },
  {
    "url": "assets/js/18.aaed6f66.js",
    "revision": "79f12d12a2dfaea7d9bd1cef4712b01d"
  },
  {
    "url": "assets/js/19.4b752c0c.js",
    "revision": "4f37ff44c4aab607c3cdd8216ed5a088"
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
    "url": "assets/js/25.d2532161.js",
    "revision": "00eaacac7dcbfc2c13cfdee40480483e"
  },
  {
    "url": "assets/js/26.56519b2e.js",
    "revision": "dacf6faa519d919c2b3c25b94cbbf9d5"
  },
  {
    "url": "assets/js/27.428767b8.js",
    "revision": "ea508efa11e81e199f30b0facd0721d7"
  },
  {
    "url": "assets/js/28.b416b37c.js",
    "revision": "ffbcd1e4d8ecc8538abce90b97a98340"
  },
  {
    "url": "assets/js/29.11d17d75.js",
    "revision": "a73998c8a045cba5ae0ba14e38568f38"
  },
  {
    "url": "assets/js/30.b09408b0.js",
    "revision": "35e7811e4d48638f44fbd9c4646df959"
  },
  {
    "url": "assets/js/31.2c4a0a00.js",
    "revision": "063eb1bec3a4b457d2a43e1490a44d15"
  },
  {
    "url": "assets/js/32.33139ba9.js",
    "revision": "5a771d301de27f2030b812101db7e193"
  },
  {
    "url": "assets/js/33.adef9cda.js",
    "revision": "6fd02454b11c65621c25fe651a8116d5"
  },
  {
    "url": "assets/js/34.b24d44f8.js",
    "revision": "d012f48529024b5d599fef1aade9c81b"
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
    "url": "assets/js/app.b0834ca1.js",
    "revision": "cc6404ff2b670731b26282b2624afcc1"
  },
  {
    "url": "assets/js/vuejs-paginate.89b993a3.js",
    "revision": "88204b768aa25be73521e160405c0d22"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "d182436d3aa2e75ee01812326cd2ade9"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "fd5283bac4cd87a8751d92e4ef432019"
  },
  {
    "url": "category/index.html",
    "revision": "11e503b1450189a6f52795464041e838"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "8f33a5ec43363bad6ecb30656fe36bf9"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "66ff1872cad671a4dbb7737d783cd642"
  },
  {
    "url": "category/Note/index.html",
    "revision": "004897da8b1295b4cb2a22f10ee87f20"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "9bce0e001effb1370739e55440c778a7"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "ca2764caa7c8eb459aba4245c1f1f265"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "8597fdfbaca3d96689824d6c9a533117"
  },
  {
    "url": "category/网络/index.html",
    "revision": "c7119002342b9d695a0580f360feb8ed"
  },
  {
    "url": "codes/index.html",
    "revision": "fbad444d5aecc3713b8cba4d5b94fa68"
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
    "revision": "a1e8258d8e04dc1bb3abbe0cf14b5e3d"
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
    "revision": "fe54382af4943e555762390c149d3048"
  },
  {
    "url": "index.html",
    "revision": "83e2e006df4b206ecb3774c0eaa6128d"
  },
  {
    "url": "letter/index.html",
    "revision": "c559d5e5a8f214079701cae71353ff2f"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "e53ece9b63e7bfa5ac5b1112a337cd36"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "edc4498921ce081d8b419b8c149b066a"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "af6d66b7d22f6b8565b42f339d939e17"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "391f2c1f8b13259ca9479aed130355c5"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "3cb5116a61fe929637de2402de199c65"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "4006902dc928c104febd5ec0beddffc7"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "0eabad1b2ff65ff3224ecb94e0191f14"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "cd206893c9319032c3cfe02870520ef3"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "dcccbea7eacf6f02532aa0092c346238"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "0867bebe5df94fe0c5594782ff14df98"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "5a192cc72253eaad3684a56b7198efd8"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "186f4f60ce130c76671fc34484de8e46"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "a83f626c004c6ace3ef29b51e8eaaeb7"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "ec26416beec1e3820a9ffe7674595bc1"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "2291df52fad08935c1634585b8fb16df"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "e8e3f203b2d56059375151d93a8aa3fd"
  },
  {
    "url": "records/index.html",
    "revision": "92aa2acd8ef8c68102a684e88b0984ec"
  },
  {
    "url": "resume/index.html",
    "revision": "27f3fcd37fb6da86f4fcb08cf420eb2d"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "d20dd8b0f8a05402848d56bb3c9c1457"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "9b1942554d68ce03e5299504146ea50e"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "a830f9a3dfbec10fd824dc401c4e5cba"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "c82bda2b66356f6c110ef3ea55f00120"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "b6573d06b27535d4c95fb1a329c5bfa8"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "936501e0da31d1606ebd306de813d7ff"
  },
  {
    "url": "tag/index.html",
    "revision": "a08d676fafd443748f4364f37cbcd9e6"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "59c1ca64d30d8b6ca9d24999ce1e9d97"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "b7993faa46b34b529c6846c6d14caa24"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "939d57c4e09d08a4773d5bf38d874b0c"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "b436a8f62e7396f73303dd963b66e824"
  },
  {
    "url": "tag/List/index.html",
    "revision": "3d977b09e4ca866aa21977899ccee1f0"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "66fc817daf0ec81efde070429a3b5bd0"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "c3a73d0ae51f4a662407e438b0594c58"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "a7fd57f1897a9960763a3ae615699c7d"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "121caa2b7823738baf469b557262c7e6"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "d6bc64220f4c2496f529a48c33e42a62"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "196be948433e9fbaebf9bb77bc64a592"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "d37a9c3f304a743d10f5e2ca425ae43d"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "d0aba6890bbdb396e4c539ad1595415f"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "16c550336ac06a00021bbfbd5cba3e6e"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "c6035ebdec3c1edc92c071b1617439b0"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "735df0f66e813a6b05a430099c64c2b6"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "956acce9d6beafbf6f31ecabf848977d"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "80ce78537ed13a190be3fb12d0e2f5c6"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "aeb3457ffccd8d32e19a45af4ed65708"
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
