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
    "revision": "069b10c1836dd42bb3c4abbf87c4d03c"
  },
  {
    "url": "about/index.html",
    "revision": "37f61e2f8121a556ed16f07f561cd1d7"
  },
  {
    "url": "archive/index.html",
    "revision": "bd16e5657977da9823180bd525055515"
  },
  {
    "url": "assets/css/0.styles.b89159bb.css",
    "revision": "77e8fcf3cc023d4a24d2f3d09b4d9ac4"
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
    "url": "assets/js/14.c6c5585c.js",
    "revision": "a576832ee79817ab30cabe068a9fa982"
  },
  {
    "url": "assets/js/15.9352cbff.js",
    "revision": "ab9430ba10127b2a14083af1100bdce9"
  },
  {
    "url": "assets/js/16.014a476c.js",
    "revision": "18a56b73e2b4e863bbd4ce56b0fd5b8c"
  },
  {
    "url": "assets/js/17.a1945e62.js",
    "revision": "cd423aaa30c422ccfb549ab04f83afd8"
  },
  {
    "url": "assets/js/18.a33f4282.js",
    "revision": "d59dc5d8338eff34fffa8140b5bb6fcc"
  },
  {
    "url": "assets/js/19.b6a51e61.js",
    "revision": "4ee7c8cd7b00ecb1d1610873cbb20746"
  },
  {
    "url": "assets/js/20.2b46ccc1.js",
    "revision": "e9a2c078e8585e082cd4aacf6c915d6b"
  },
  {
    "url": "assets/js/21.551eda1b.js",
    "revision": "3bf41c7a039251eca51381d2805de356"
  },
  {
    "url": "assets/js/22.d69058e3.js",
    "revision": "48dd024897669ae0baddca3af139ccfa"
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
    "url": "assets/js/25.527ff220.js",
    "revision": "46f4ec7b5f8ddd34570882bb99a1db94"
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
    "url": "assets/js/28.ef48394c.js",
    "revision": "4871e95a0b5ae88cc5a05a80bab3d3c2"
  },
  {
    "url": "assets/js/29.4abf2f19.js",
    "revision": "46c4617572b4a1919a0335bc8483a6dd"
  },
  {
    "url": "assets/js/3.a147bd93.js",
    "revision": "4805429a05b3b9699d14e4c5c975a059"
  },
  {
    "url": "assets/js/30.fe99650a.js",
    "revision": "fe76ae41486d5a3db933891be60a7dc2"
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
    "url": "assets/js/8.a29e5d23.js",
    "revision": "f2d7bcf10e4e6bd56301261aa3c9a9d4"
  },
  {
    "url": "assets/js/9.5590643f.js",
    "revision": "15dc1fe08747368b0e9d078dbb407d6e"
  },
  {
    "url": "assets/js/app.461f02ed.js",
    "revision": "38a25b49d6024e1137a5c8b434a6cd5a"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "444cf7e47947212e0f8fc08896f773ca"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "ef20323b7b0761aaf92df217f49e53bc"
  },
  {
    "url": "category/index.html",
    "revision": "a5c4e336f9338332149d6b007127c7ef"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "9ac8e65d2a7f2e36af0915eaa0c6e0a0"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "6a76d1817ff53caef2eef75f9b604c07"
  },
  {
    "url": "category/Note/index.html",
    "revision": "54bf28e72797cccb8f48956007f0468a"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "6b91b161b165cea369d0254bfea4a6aa"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "7b98cc1e542eac4a6b9dd3c48f85ce16"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "5df0bd1983a0f888b3030f2db3e1500f"
  },
  {
    "url": "category/网络/index.html",
    "revision": "19b8a8b7ef696f1ccaa9e2c633619651"
  },
  {
    "url": "codes/index.html",
    "revision": "6d16572323674d50b38c223dd3805e8f"
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
    "revision": "dfe2498826ede3f77e2c80105f9c4328"
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
    "revision": "a8b32a92957da3db81923cf176145c0f"
  },
  {
    "url": "index.html",
    "revision": "091afcc79489980fe0d3c632d0e00523"
  },
  {
    "url": "letter/index.html",
    "revision": "434b93e2ca31a707b2791e0db9ff1723"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "953521b064bb5b3014cb411adae443ad"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "8cb43f6f69e285511715cae4ba086edb"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "c36d6ffa0dfa79460657496828100791"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "3c8bfa611db73b451c85faf8d640bdda"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "44733c681700ac1e72e411f967ceb01c"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "5010e0767337a9f33297187e7115a21b"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "f8bed7919f3f81513bd46b191da254f9"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "82792c55c9c14538d32185ac1463c13d"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "770bf36b2a991dc3a3ebe131caea1aa8"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "bbf21059edc930ff73904dcee5e4a53d"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "6f67fd34d46e276a0afceb9b7567f8d7"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "dc7410e030a3bb5dd74c2f831299d843"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "133f2d8325bc15e6312aafe73a8ba42b"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "b5344e3d76575ecfbc614d8b8e6682af"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "d8361d6c8132b577707c16c4dc6a2700"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "95248a424160a151811849f750b90374"
  },
  {
    "url": "records/index.html",
    "revision": "34078bf71b218d6404e848fd647183a3"
  },
  {
    "url": "resume/index.html",
    "revision": "863b15f29aa898cf8e6e2e41aae3b42c"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "c2757ee1cdb17e290508921592f56516"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "5ee50ddd5e9770506138fd2958faa971"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "09c50f87237982b56d5f6644bf8651c6"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "633384ec5645f9edeff96a48a49d5daf"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "a26178334de0b6b64897a51b116cf5b8"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "121ef618761ef22b3286700ecd16e3a0"
  },
  {
    "url": "tag/index.html",
    "revision": "0f034e63a106b8ffe2490902c1321e6c"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "5ee12d3e6920ed4017fc8ec091995816"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "ae1cca829690dddf9ed58aad8671fa8a"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "78b9f46b018859ed54dfd883173e680a"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "d3937242df79ad8d6b9eb508d6d3b99c"
  },
  {
    "url": "tag/List/index.html",
    "revision": "73ebe94c36963a8b16827d8ec017bfe0"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "dbc2b7329d63b9725709ee326096589a"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "12fa49f320e17f2476a7ebd4d4812339"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "fe93483b805ecb11830f6dfa153b15c0"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "d041801122c03edce2bf93a197f272b7"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "5c747493d24e45b96a48eeebca890b2c"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "a495156a528aa0317decfd688ee363d6"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "77cea866819e28a55e3f78e722533803"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "899a86610318c91e7a7806df5968e7ed"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "96e11e139abcf2dc8b2470823289f7d5"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "b2c25fa1f39207b20947461dd4e19c6e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a6ee8b7359b80921c353af4b83ce37c1"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "2a11b967743d120bf49beb7e92fcef1e"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "54b584a3ac308ca0ef0dd1ab7343016d"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "199a9eb67cbff7528b991138cccf73ec"
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
