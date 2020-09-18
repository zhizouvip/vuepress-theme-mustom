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
    "revision": "159984b247b7f0efd63d922b507d366c"
  },
  {
    "url": "about/index.html",
    "revision": "8bce402ef4b6726f9d9adb3874c1ad50"
  },
  {
    "url": "archive/index.html",
    "revision": "8a01d33e8275d19d0a0072468b1be69b"
  },
  {
    "url": "assets/css/0.styles.b4a0356c.css",
    "revision": "26efb2425f1627f2df4a8b3dce02a374"
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
    "url": "assets/js/12.ccdf163a.js",
    "revision": "b1891870bebd6d69a17c526831e31412"
  },
  {
    "url": "assets/js/13.2ebe250d.js",
    "revision": "13ceba19b470ffebd0e7f9676a8dcacc"
  },
  {
    "url": "assets/js/14.59cfcbfb.js",
    "revision": "139e9019c41ebef8501313ef1dc67f21"
  },
  {
    "url": "assets/js/15.9352cbff.js",
    "revision": "ab9430ba10127b2a14083af1100bdce9"
  },
  {
    "url": "assets/js/16.40cc8108.js",
    "revision": "f669c5ad1e0bf408506f01f0b80f7b35"
  },
  {
    "url": "assets/js/17.a1945e62.js",
    "revision": "cd423aaa30c422ccfb549ab04f83afd8"
  },
  {
    "url": "assets/js/18.f80a2413.js",
    "revision": "375e5c6ce88cf43eba5067b481eb26f6"
  },
  {
    "url": "assets/js/19.01476ca1.js",
    "revision": "40fd37b4190e399726a7f04fd826ba22"
  },
  {
    "url": "assets/js/20.4560ddef.js",
    "revision": "20fc1da07fc6198d4e55c7e9cdfb0352"
  },
  {
    "url": "assets/js/21.84041153.js",
    "revision": "4453cb8357f243b9b2b7cea0b5197427"
  },
  {
    "url": "assets/js/22.35d3da49.js",
    "revision": "ab172e567c916ea555d4b8576e318450"
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
    "url": "assets/js/25.f5dc7a1c.js",
    "revision": "15a91c3b82d22454c0f94e7fcc87e51d"
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
    "url": "assets/js/28.973497a9.js",
    "revision": "58bfba80bf3e64dbad8cb16b6e4f5fd9"
  },
  {
    "url": "assets/js/29.0725b7e8.js",
    "revision": "0604724db75a36f84f3b4e96735b4515"
  },
  {
    "url": "assets/js/3.baab6c8e.js",
    "revision": "6e531b1c632a8e98fbe839afb1383914"
  },
  {
    "url": "assets/js/30.f5f88bd6.js",
    "revision": "c932b68e2319288d1123819567dc4a03"
  },
  {
    "url": "assets/js/31.d19c9868.js",
    "revision": "5322683118d32ceac2dac3ce872dfe64"
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
    "url": "assets/js/8.a29e5d23.js",
    "revision": "f2d7bcf10e4e6bd56301261aa3c9a9d4"
  },
  {
    "url": "assets/js/9.5590643f.js",
    "revision": "15dc1fe08747368b0e9d078dbb407d6e"
  },
  {
    "url": "assets/js/app.06a5ae80.js",
    "revision": "22d7b97caf5e08e863bb42112d20ceb6"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "a94ddb78191d9d6867bbbaaa975ff33f"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "37abf0cf66d6cd3a686b8354ae970d3c"
  },
  {
    "url": "category/index.html",
    "revision": "2e3c72bc8aff7141def6abdb3eeec466"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "83727fb35f7a1e50303c649837b79d90"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "93a6220856e32054d996751d7a4bdb8a"
  },
  {
    "url": "category/Note/index.html",
    "revision": "abdaf68d737e663de270f5abfdeaaee2"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "ea2759dafed665a2f2c61f29174e54d4"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "be0d50c9f29f5b66fcb5a6268508e398"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "afa56784fc55ce18c0a0e87925f77f59"
  },
  {
    "url": "category/网络/index.html",
    "revision": "1e4975c58550d1a49cba5c686ac99433"
  },
  {
    "url": "codes/index.html",
    "revision": "780873b807d4fca5a72bebb20321e349"
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
    "revision": "bc34c0244b32b3181c312041f0c46022"
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
    "revision": "52b1a375be1c06420dadb769d8b95663"
  },
  {
    "url": "index.html",
    "revision": "71b0651cf60fd2f980a244a632559757"
  },
  {
    "url": "letter/index.html",
    "revision": "3ae464cf31b3950d84fb4a2a93438e9d"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "fd8e3954892b200fb3bc54eddec4ef73"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "7b27b7d398b34b28c8656ae58318a7c8"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "f5706fcb5299bd2312a6dd462f2cc591"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "b6b57eb7d55c9f05557035c1776fd30a"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "4ed5a7729ed0f7da4b05e9d49c269d8f"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "1b70fade14e89331dcae6af990e2ca50"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "0663199339860dba5b20834de41492ce"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "5ce567e388dcdb1c47cb2e5f74650cbf"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "407119cf294e171575aee8baedbcd250"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "3a40fe0f0726e5f0f43f0dafb14b000d"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "26fb78793e2aee6658320711e4989a88"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "a23052059d107f17eae483ac86f55454"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "9d9c3ad6cfc5dd07b70a1b1057600d6c"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "050686f3e94863c732272bf942864221"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "51ab133cf885f1b1d30e4d8e790f1224"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "b27cf1d1a188a3aa27a75416441e1f61"
  },
  {
    "url": "records/index.html",
    "revision": "3115ec0c1368656a99a5330945557bbc"
  },
  {
    "url": "resume/index.html",
    "revision": "5210b00bce3bbb5355f0c09945224494"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "dde2e0fbe826d3a99a3839a750d12408"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "0c9ea43103fdc4e9c8adef70a6edce82"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "ca7fd0b8b6c00bad72a6a756544e0ab1"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "99b365e72a4e4f703fef4a289c68b9b8"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "1dae17b956f3f6c483ae6b66dbaa2b4e"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "013f4f6ebb91a664d1c05d4a166a33fe"
  },
  {
    "url": "tag/index.html",
    "revision": "ee03e14822fc8c84b13433c95e19c13f"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "ddd689d3d11d395d4246166f7d6717d6"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "89902a18119c1a1b26e5ff04a8597cb4"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "d8c369532750f1263e132bd653ed037c"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "b3d7692f37af9689aee8630a378fcc68"
  },
  {
    "url": "tag/List/index.html",
    "revision": "b91cfec2af5740d1744cc7498d66913f"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "e1608aa52bd34abd5ea0d21dd7da7e73"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "c4fa5d79957da8bb8767a2b5a8485335"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "a95f61c517118c18f288258537a24d23"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "33e759f7324d46012d95908d7bf198d3"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "8e2d3a936f2bd02dc9c443485c687316"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "353164a69a14a8af6d2db31c5e7710a9"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "60f23baf33c4b1a7e0599cb5c62d18f0"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "c5cee9eac03e4ff7c17ae5f2420311fe"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "c9d670f67bc2de2df009a3290e428824"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "f90754bd682e58658c48580a5192071e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "3a3df1d3e21c2dec8193a0be291a440e"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "38f730d515de45df1f97fc83797138eb"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "c6a6306992dc78fbb2321c73a9d281f7"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "e5c0788a12c7d9e072fe7bc9feaf00cb"
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
