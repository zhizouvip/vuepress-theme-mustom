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
    "revision": "fd655ede4fd60547261acbc713a9c5b9"
  },
  {
    "url": "about/index.html",
    "revision": "73408c0dd6fd33c7f63a715479b23f9f"
  },
  {
    "url": "archive/index.html",
    "revision": "a80d0a781b310b57a0887dd8c959446d"
  },
  {
    "url": "assets/css/0.styles.c5277c3d.css",
    "revision": "5b5a8f04335c1406d76520e442bb66d3"
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
    "url": "assets/js/12.98abf4ed.js",
    "revision": "c525213a5eb05e39427492d81b594950"
  },
  {
    "url": "assets/js/13.6dee9015.js",
    "revision": "5af63cf2e9a44b322d1664bf01ec012e"
  },
  {
    "url": "assets/js/14.733fb7cc.js",
    "revision": "100f10e329a98d914c7cc978078004f1"
  },
  {
    "url": "assets/js/15.bf5feb56.js",
    "revision": "ba5527fb3d08f2f1da61892319b73a4d"
  },
  {
    "url": "assets/js/16.cebd882a.js",
    "revision": "9a0648a699e27a46099c62d6f8f35bc5"
  },
  {
    "url": "assets/js/17.045c4e9c.js",
    "revision": "d9ddcce0d09e201e06cb00c220026c1c"
  },
  {
    "url": "assets/js/18.a33f4282.js",
    "revision": "d59dc5d8338eff34fffa8140b5bb6fcc"
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
    "url": "assets/js/24.6747fcc1.js",
    "revision": "d5dbe88ae21ff443f72207f85364e05b"
  },
  {
    "url": "assets/js/25.a4fdf6f1.js",
    "revision": "9f9617b8894dc2c75520622509a4ef5f"
  },
  {
    "url": "assets/js/26.585137d3.js",
    "revision": "bc4cb7fe79c1ea91b5c20a8b423ae96c"
  },
  {
    "url": "assets/js/27.6e768996.js",
    "revision": "e2303da8745997806bd65f7b535d072c"
  },
  {
    "url": "assets/js/28.044551ef.js",
    "revision": "dd6090bec4d9d2ed85abae30860dd1fe"
  },
  {
    "url": "assets/js/29.b503158b.js",
    "revision": "6131b882659b8d88d8b8b04cae75df19"
  },
  {
    "url": "assets/js/3.baab6c8e.js",
    "revision": "6e531b1c632a8e98fbe839afb1383914"
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
    "url": "assets/js/4.8e0e8a4d.js",
    "revision": "45f023989caca2da37eb163098525151"
  },
  {
    "url": "assets/js/5.bd762cdd.js",
    "revision": "b13ca9b21fe91c319170020698aa11cd"
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
    "url": "assets/js/app.2d2b7e49.js",
    "revision": "fa287aa9ced236e8dff4a610d486b978"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "382bd4f66f1be26835631ee6332cad1d"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "440e29b093b470d02003dd3dae0068bf"
  },
  {
    "url": "category/index.html",
    "revision": "4a42e3b3610f78738da50c924549868b"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "7d87c98933523f197a1882d532e37be4"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "03a7ae8567ba84da0cd58138c3afd20c"
  },
  {
    "url": "category/Note/index.html",
    "revision": "de75a83361a2fe9ec35c16cc9e2b9de0"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "2dae4a28c0c261c0bdec890ac1b9522f"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "ff4a5702bd525930ab837423cfb432b8"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "4794a9088979fdf1ef25a5538b475ffa"
  },
  {
    "url": "category/网络/index.html",
    "revision": "ab131aa85d14fbdbc8754e4dfd2ae555"
  },
  {
    "url": "codes/index.html",
    "revision": "83648444cdcee784b153a12b9216f8de"
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
    "revision": "74895fdc7ce1cc4bf7c10a7ed4ba7f0f"
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
    "revision": "e545b4ff85199975ca218e85cb9d3625"
  },
  {
    "url": "index.html",
    "revision": "e4450d76ad43d852485599fc5e90cb36"
  },
  {
    "url": "letter/index.html",
    "revision": "5d777db24f075fb226eaef21e5e0718b"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "b13a73009d23a7335dbd0cb0481fdac4"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "a40b0ebd8fe026461d26a2fbbbeb591a"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "991a8831cb4f23ea6541d74923a8a429"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "99cc4e27aae6b7d2d8f4fe320b93477f"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "8640a34bd82dfef87007148f58921dee"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "7798c76e9a58f45788874c15f0f60b32"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "23c1699e1094ae79c87fb27b6f9c03cb"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "e90e893567461edaa5fb65c93f9abe89"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "99cdebdbd324ae0532a693ed6b8522e7"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "8df5a8d2c77a2a1c52251e62324334d5"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "ff3a1b4c242df6b5827e3201701dc011"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "a8a7a9bf7b4c9615dd7fd0ecb0b5590c"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "0925fed9cc9a10abecef32825cedc4d6"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "23d7e7039738fbb2f9d6377f17179393"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "cef0a45d7b0f5bced364335a72020fa3"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "e28a7071a552a8128068ac82792118fa"
  },
  {
    "url": "records/index.html",
    "revision": "67477d5e57ef02f26d6ad633735a9c2e"
  },
  {
    "url": "resume/index.html",
    "revision": "0483bf0263c550d1419e434ca6b3f06b"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "7bfc5459af353b6269c5a555c149027b"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "41dd8447a401ed609b4863723b8a99d4"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "7634d590c379e16d91c6b5d314363a9d"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "0d109fa1652b703c4dbcba96bcaf348a"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "c40acafb50621e02ebaa885250f86045"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "ccac65989a1709317a2d150d19394c3f"
  },
  {
    "url": "tag/index.html",
    "revision": "111abc3df54440f724ace13dd6e54b1f"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "5227f980ad7032582f1f510ba83d66db"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "e41c7c98f38ba3c385e9d78a59a7a8f8"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "37d50610ff37384a0dc4b8242721a2cc"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "ea8f809318907348387aaf98572c05b4"
  },
  {
    "url": "tag/List/index.html",
    "revision": "c4006a6390fd424838876cd9ebd1ad47"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "0b9bddbe6de6685b0153990b78fef2b6"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "b5084523567a05ad1471ab0356aae0c9"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "f5c43dfbd42efbf93bf3b66271a35c8d"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "95f40aebc7d43e58f4fcbb3a9f8d915a"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "10a928d6dfb8f9eb1c669b568aa21d95"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "04ee6447916eb630825bdc7af94bcee1"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "b37b7dcf7d64ecce7b828fcd1ca35a4c"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "46e6bf06e06d2f98ddf26ebf6515ae40"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "3ac230e8365adf9d26c35cb8fe3574dd"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "47bac9e5ce775059f414a344a46cdd50"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a9d9e38c414d9fdc043d6e9719842687"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "57a60db083e3e4f03024d070b07b296a"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "ac0168d7aee40985c8f83404a982334f"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "11e6b351650bb8c48e221a502eda9221"
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
