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
    "revision": "d8628e887708706cf5e4425e8cf92578"
  },
  {
    "url": "about/index.html",
    "revision": "f63bd203c874264ff5a88057f39fc1be"
  },
  {
    "url": "archive/index.html",
    "revision": "cfb8e1878335444e89ea1834bdd7cb32"
  },
  {
    "url": "assets/css/0.styles.01de9769.css",
    "revision": "10322c3958a6e42c4c86990d8ae17c4a"
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
    "url": "assets/js/12.e5c7f950.js",
    "revision": "05c3e7b3979000ce8a5ddc4401805af8"
  },
  {
    "url": "assets/js/13.2ebe250d.js",
    "revision": "13ceba19b470ffebd0e7f9676a8dcacc"
  },
  {
    "url": "assets/js/14.ceed5fc6.js",
    "revision": "722642f4467002519a920f5314ef7bb1"
  },
  {
    "url": "assets/js/15.4652cf5a.js",
    "revision": "aa08d735907e67b1932b1736884c4496"
  },
  {
    "url": "assets/js/16.6b18731e.js",
    "revision": "2e4ef65402b9e8a1ca58ba9e0e418616"
  },
  {
    "url": "assets/js/17.ff6ebb67.js",
    "revision": "a05d916ed3e44e0e0775d8781ebbac73"
  },
  {
    "url": "assets/js/18.e5aee7e5.js",
    "revision": "ebfa3926639a40457fdf2e3aee31b8d2"
  },
  {
    "url": "assets/js/19.f673608d.js",
    "revision": "a75d823f5aead0cf1935f2065de4ea39"
  },
  {
    "url": "assets/js/20.2b46ccc1.js",
    "revision": "e9a2c078e8585e082cd4aacf6c915d6b"
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
    "url": "assets/js/23.94a58285.js",
    "revision": "7b198a90931f8dce4f96a74b75771c5e"
  },
  {
    "url": "assets/js/24.3579c775.js",
    "revision": "067833426f4f1b2760850ee5b05b009d"
  },
  {
    "url": "assets/js/25.a4fdf6f1.js",
    "revision": "9f9617b8894dc2c75520622509a4ef5f"
  },
  {
    "url": "assets/js/26.beae3aae.js",
    "revision": "2a0f1801c8d3d5b6c7dd198382b7c447"
  },
  {
    "url": "assets/js/27.6e768996.js",
    "revision": "e2303da8745997806bd65f7b535d072c"
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
    "url": "assets/js/3.baab6c8e.js",
    "revision": "6e531b1c632a8e98fbe839afb1383914"
  },
  {
    "url": "assets/js/30.a5cee98f.js",
    "revision": "caecd6d6a33dc5ecd8c8de03b21595ff"
  },
  {
    "url": "assets/js/31.e6e8b61a.js",
    "revision": "0ba1b4254ace34e0d7dcad609cea9bd3"
  },
  {
    "url": "assets/js/32.1ee9baae.js",
    "revision": "509b6b61248799bea722408ca4654e36"
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
    "url": "assets/js/8.a29e5d23.js",
    "revision": "f2d7bcf10e4e6bd56301261aa3c9a9d4"
  },
  {
    "url": "assets/js/9.5590643f.js",
    "revision": "15dc1fe08747368b0e9d078dbb407d6e"
  },
  {
    "url": "assets/js/app.27e004bd.js",
    "revision": "d79376bfc51c58b179890c3474b8a611"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "3e080166fe9da83af5aacc94fddb2180"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "1cef6e6cfd0d6d8f3e7b91a14971e6da"
  },
  {
    "url": "category/index.html",
    "revision": "892e375b97adb3939acb8e4004397ee5"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "eb4316785162ba76a39166d27880dcb0"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "e5cd04402c992e45a07b8c3cb67ec7f3"
  },
  {
    "url": "category/Note/index.html",
    "revision": "75534731953437d1e7da3a516ad1407b"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "22d450cd70cd307dc6ff32bdb9b12ae9"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "590b676e965d80658515d73e871b7829"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "08680169fb425f8538dc22666b48a2d5"
  },
  {
    "url": "category/网络/index.html",
    "revision": "fccc2ec8a2cd23bad182611944adc8f5"
  },
  {
    "url": "codes/index.html",
    "revision": "0de4973593a63b6c2354cbee89ff28bd"
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
    "revision": "d3363d546679e80d46acb6c8699a4914"
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
    "revision": "90b7e5796b900e2e6c5fb81f56d818a8"
  },
  {
    "url": "index.html",
    "revision": "cbaa577cacea37cf53cd83792a741b11"
  },
  {
    "url": "letter/index.html",
    "revision": "4aae5f86326c14f05a6dce4929c22a11"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "b8889361acd415e3c7204449595f4fa9"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "dc39b8f423a28f0f8b5bb76cf2c9a05a"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "804653c186f85c2e431280dd44c86e32"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "6e40dac69c2526218e0057be2945de0d"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "7df0953caf729770f9919b04cae1cf43"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "97f78e3ca53e3adac084ee4450ea1769"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "e64d221cc6a3cb2edb739ae1610c0d9a"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "b7a9d32bdbae2d0e75c26b12a0ef6987"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "00c7143c88171e728e27d06509627fb2"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "f0bb619e52facd725b0fbe0d2f208240"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "2995b276bcd9a4564c9f44434ba259c2"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "f90d1759f4b815a65b9b8411f912e7f5"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "00d91f3f4c58c2faee6e756e88fbf495"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "adb04ad2d07acd4ce3e47721c7640487"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "c1655873e5ab9203b0c5864c484ce8e9"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "131d493de67f4b9daff9b7b5ce253f79"
  },
  {
    "url": "records/index.html",
    "revision": "559d55324532cc6d011c4b619b4cc33d"
  },
  {
    "url": "resume/index.html",
    "revision": "fd4762e0c0bb43b51ef70fe30dbfc343"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "03050cad2cc8d3e95439504e7917028e"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "7163df8d41d3d56644fe939483275622"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "04e6431f6ba28882c3623e3a22443ad2"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "1d29322a1c696c481940dc68e9bf4793"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "74736751f666590cf8af639f55e5ec1e"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "809eaba2d6873bdab781c99ccaec7e70"
  },
  {
    "url": "tag/index.html",
    "revision": "82aa48538e132240840f53dff90a3051"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "1cf6a635941ddc0ef2fd7eaf4fb8d6c5"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "9e63af750314df374bda3550f753823f"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "446ec3a867c9203b253f70f169bc3f8c"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "5df2577eee4ce84397c2e57383915ad6"
  },
  {
    "url": "tag/List/index.html",
    "revision": "ddd8bbc7db1fa68ca6002f66f454a5a7"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "8e2cce04063bffee78a51e212a3e6105"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "70bd506fd34578bcf0be619e61f02e9b"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "9430ff1a09f693a6d11ca084b50bdc69"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "f13a5cdd0f5a1e7b0babbcfd470db1f4"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "ea83e9eaa17d040bc47ee614f7d15a33"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "7f6552da1453b6a53a16e39d2173ec15"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "15f2c97988b182fb35cdc900b9125072"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "82fe39e98bd5685f2c4953c39288d159"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "08246ff95801d3cda700f9fb2890b192"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "94790a5e3aca49e456bb364c8592659a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "9783cac1e75f7db8aa2271380ec45d65"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "96877c354b930d464c1f2cf5713b1132"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "3f03e34bd44517a0a9e3ec0b6bba1c1e"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "7dac9fbeab2460e4845dcfff11549231"
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
