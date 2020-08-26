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
    "revision": "686ee9e356e0ae6f1268c9d77266813b"
  },
  {
    "url": "about/index.html",
    "revision": "10318523dd28e99b66d535488013f97a"
  },
  {
    "url": "archive/index.html",
    "revision": "a389e4f15afe635009a4c1e3345030f3"
  },
  {
    "url": "assets/css/0.styles.cae8042a.css",
    "revision": "10c4629b9823288a5a05b80f91752e64"
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
    "url": "assets/js/10.e9a52456.js",
    "revision": "b38014db8b41dd60d1359746996636af"
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
    "url": "assets/js/16.6e8dcb90.js",
    "revision": "6cfca6dc89c730d4f3f8aa8683af59d3"
  },
  {
    "url": "assets/js/17.a6b21440.js",
    "revision": "e9a158267738de944029faccf89f9aac"
  },
  {
    "url": "assets/js/18.a33f4282.js",
    "revision": "d59dc5d8338eff34fffa8140b5bb6fcc"
  },
  {
    "url": "assets/js/19.f877e0c5.js",
    "revision": "1108e014fed2ecb725bc89125eca1b91"
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
    "url": "assets/js/25.0332ceb2.js",
    "revision": "eda5148d913e5c1fdfed40ce7d7c89a4"
  },
  {
    "url": "assets/js/26.beae3aae.js",
    "revision": "2a0f1801c8d3d5b6c7dd198382b7c447"
  },
  {
    "url": "assets/js/27.8becea09.js",
    "revision": "bd8cda26056f9595dc52b518a3b54f7d"
  },
  {
    "url": "assets/js/28.c964f6f5.js",
    "revision": "654b8cd9bf522b4c543e0e1666b5ea3c"
  },
  {
    "url": "assets/js/29.c8d3e5b1.js",
    "revision": "761f28785eede9137bf9aad1bec37b9a"
  },
  {
    "url": "assets/js/3.a147bd93.js",
    "revision": "4805429a05b3b9699d14e4c5c975a059"
  },
  {
    "url": "assets/js/30.a5cee98f.js",
    "revision": "caecd6d6a33dc5ecd8c8de03b21595ff"
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
    "url": "assets/js/4.eecb7e4f.js",
    "revision": "0182679d7cbe4ddeb7f8cac675871320"
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
    "url": "assets/js/8.a346728c.js",
    "revision": "6210edd60a05026f54fb2d910640e845"
  },
  {
    "url": "assets/js/9.5aafa7d5.js",
    "revision": "25dc580fb2ec68d82c8387c460eeb000"
  },
  {
    "url": "assets/js/app.2c719025.js",
    "revision": "5c233985f909aad3e2a2a71ebcdadf4f"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "6fdcfd93f7e8b25e18b6ef80857fc5a9"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "52c2a30ba4068ed2410b85ba2c3ea378"
  },
  {
    "url": "category/index.html",
    "revision": "dd1137d8da22dde65ac98d3d7a6dc6f5"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "65187fff90a43fe9d1a9f37af74fecdb"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "e6e7156cb88c16a05ed439897c625ff9"
  },
  {
    "url": "category/Note/index.html",
    "revision": "0586dac61ee48bced80ed4842b2d5b9f"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "e45eba5eab486a240ca105cd966133b6"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "3d8dcb9a71c58e64991ff1b4469839f5"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "e605408506503fb20396d6eead21b366"
  },
  {
    "url": "category/网络/index.html",
    "revision": "778b2ba592aeb7951c8f04fe94791cdf"
  },
  {
    "url": "codes/index.html",
    "revision": "ad6cf8fd7558297cb937b8b5efc94a5d"
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
    "revision": "9a8e6943fc14da1a7092121d58f0d644"
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
    "revision": "02abcc34522bab2d9eeff404b367d319"
  },
  {
    "url": "index.html",
    "revision": "a2fe5f3e0ce839803746df7f91d8ea30"
  },
  {
    "url": "letter/index.html",
    "revision": "7d3170988e0645e5c90106fc9f3ac7c3"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "7fb6b91af208f50717d9bc6973f39a7b"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "ff97afb9261f302d49d789cdf6b5b6e2"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "4b4a2d76a6266d22f44c1e97f94c29e0"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "8cfb24d7752270a9cf9fed600c99d683"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "7bfb5cf31e787c250e1bcf6aff8faf4a"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "40dd001574288d387ced4c5e89faa572"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "786abab8ebec1590a00e369f4b577e82"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "350b096a946f9a02c80a076bd1d68940"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "818a37e676ac4cbf5d7ac1482e8f3e15"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "1ae8d82aca9b77c4016e182a7bf0a0ce"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "b2d43929138eadd0c13659e7e4e0368f"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "818cddc6ffaac51535e43f26b9c380b2"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "86c1ee589b44fe46e81a6429d308f6d8"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "e12fd7e119d8e850b319b9bad637956b"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "002daef435ccd223fb627e52b4c69285"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "8527506fc16c344adc1918543c966511"
  },
  {
    "url": "records/index.html",
    "revision": "bbc83bafcfa69f72872eb4738191d93f"
  },
  {
    "url": "resume/index.html",
    "revision": "936a722202cce007b784f6a34c618bfa"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "38f44689e2895dd74d1cd5393c6b43e5"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "a59d4064e67cc9b2697a90317c53f144"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "82ab1154caa7b930161afdeba572e62d"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "e2ba1aacfb82fb83f3f3a4e464de776e"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "48a9319ef25de27a8130de3c4da939cd"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "221fb65a57a28a22190b4ab9063028a1"
  },
  {
    "url": "tag/index.html",
    "revision": "d5c99104a30a4d275bf9ea48d14cbba6"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "7af28de75f5a357c8beabe269d8835b2"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "f34b868c1fa513b088498bdc45f9fe42"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "406eac002367f952e53eee8f5b97e3ae"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "8b8ee77ea5bd8b7d422dc6a951dbc071"
  },
  {
    "url": "tag/List/index.html",
    "revision": "54d06ac0ee82799cfbad81b403592f91"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "ace3a0eea476bbf8ddff96daf4a2aba9"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "2fd96fcc2c00be4f3eeb6917f0cb8775"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "43b2fd185b3f76011bb3fd2143af01e9"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "7da965a3cc73c7e4322fe353f0fe5397"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "499a27ff6c1eb911e6e9c28adc96c771"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "d932fdfe2f9ff43c05bf0903240c341e"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "05745710aaccc2e4dbc4efce123688f4"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "19e307612aa88d9c46c7ee016b14310d"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "ecc8079c99c979764a189c4b44607f1b"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "dbf47f26ae58571a6be0c2ae73cc4d83"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "184d965f09478e2625a6d4affbf66a60"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "985dadd09ad6f62cde73decff3654d0a"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "3de876d5ee3fc4353e37773d762676da"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "b8c489f64a95465a0520775054486f70"
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
