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
    "revision": "add2fbf9f726599a94fe30545ea2cece"
  },
  {
    "url": "about/index.html",
    "revision": "7babe089f6703c2502e672509c1b627b"
  },
  {
    "url": "archive/index.html",
    "revision": "fb4778480148fbcbf4288f9845a85dc4"
  },
  {
    "url": "assets/css/0.styles.36c52c5d.css",
    "revision": "dffeaf93abbd96c36b6bdb1ba0b56651"
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
    "url": "assets/js/12.ccdf163a.js",
    "revision": "b1891870bebd6d69a17c526831e31412"
  },
  {
    "url": "assets/js/13.4429a667.js",
    "revision": "2834ef2655fb1b692ced959136f4e010"
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
    "url": "assets/js/20.eaf50e2c.js",
    "revision": "ba05736d3d25360846dc4d5598cdcb97"
  },
  {
    "url": "assets/js/21.57f0fe0a.js",
    "revision": "782e97262b830b17ddeee0cd2c002f9b"
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
    "url": "assets/js/27.8becea09.js",
    "revision": "bd8cda26056f9595dc52b518a3b54f7d"
  },
  {
    "url": "assets/js/28.1ff425bf.js",
    "revision": "97fa667ca33ee3e26bdac07ecb458cf3"
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
    "url": "assets/js/app.2995f97f.js",
    "revision": "c4f7a2ef3fe93a70ae6ccbdad65f30ac"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "385f8ea764627afd5f0d4adb532c8b51"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "b9d1ec6365f9baf20a67b0382775d5f1"
  },
  {
    "url": "category/index.html",
    "revision": "c892289ac59772493c265b7e04f80c7e"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "425ff196b32730ad15bbf86767e5942a"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "a531c6f8ef045757f28d8786cd6395c3"
  },
  {
    "url": "category/Note/index.html",
    "revision": "e60f9b96b404accc6db67a42eba4d5a9"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "520b101b8636fb56f05e54d57dc3836c"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "0e2db342da18bd5ec1398d5f313ec519"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "20a86b4eb5394fe790402d072f898de4"
  },
  {
    "url": "category/网络/index.html",
    "revision": "eea5cf909fca729383a8604ff602c6d8"
  },
  {
    "url": "codes/index.html",
    "revision": "00453563ae7596c3926db3d9671a89c7"
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
    "revision": "74792c645c0c2cba25ff00d2a9d4151d"
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
    "revision": "dc84f600f7fe4de098b39e612b3840b2"
  },
  {
    "url": "index.html",
    "revision": "c8bd40510a05e29109bbea54f0237004"
  },
  {
    "url": "letter/index.html",
    "revision": "4f3ca91af1ef5d202a9cbbb18ee72e9a"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "353fe4283358c56c3efa50be80e9638d"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "93ba9372ce417e84b82aabe0173d42e8"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "572216f901b1d9bc5a8915d0e4f191c9"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "a083e86301268a063128aa1f7cb94701"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "e9c343a84add994a20271bb69daf661d"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "3f514c732c8d291eae39015358fcbc20"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "d65f6a08e4bc42a6607a42b2ab0c64a3"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "e74c18a260f042e9b0a728d1a1ecd74a"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "00c3c0c441057cc10dafd96a2064ec0b"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "b67c2308386078c9dc63de6c03c949d7"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "ac3f822fb06dedcf74063f3c8f507a5e"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "ec42443a3fa0de8bb95b13c8a270810f"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "d8e7016623cc448185cf8d2e3b603d00"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "b43eaa14506ad9cb66096f495a9b3410"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "444fe6cb8ef7a8fa631a2a28518752ff"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "44ae297bb8ff95cc9dfbf9d390915d2d"
  },
  {
    "url": "records/index.html",
    "revision": "ac64bf1cddc4817e4a0dd01426359413"
  },
  {
    "url": "resume/index.html",
    "revision": "cd66c40ee01fecd04f1974f92cee5a75"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "5202c5974cb593a2468b47597508926b"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "89fd8312b793b6a747d1691fd4dac799"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "853ae7e81784d6afaeb4d8438778d141"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "7efda940274fd5e88ddd2503ff42d376"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "1eea0e71ef661e6c133fa0648af320e2"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "cbe27b90c1cb5b0466ff27f48a997500"
  },
  {
    "url": "tag/index.html",
    "revision": "a7a710a3ae14058cce07f45f7ec794c3"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "776e81d7ea6041caa29b7bcd03fa82b0"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "40114f7f3806a5c515001685b25e7318"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "2b85a1af27cf1c3729f0adce31e08c59"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "e12d6519c2381e5750ef1121d11a3830"
  },
  {
    "url": "tag/List/index.html",
    "revision": "52fc3a2a35566fbd081278289f0fbf33"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "6ee4816fed37d86e41e13c94c0836d2d"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "6556fb9cd1f18d2b7c74b652664d549b"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "fb335d2d518dd25e3aa723eca3a1e6ff"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "3e18c9247f438fa88696d8220e21c66d"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "229e6f798363585cdc4ccfadc63931bd"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "6c3c76c26db32ed07cf0b858bba10179"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "2407b336d5aeea7b75b76d452417e41e"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "b023d3547ad767e3b680f6c94deabc90"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "779caca2081933dc8302b9d47485ca8a"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "b13282c2ca4cbed13943b2a88c9d656d"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "7e34771aa7ab8871fcf54facdfe60675"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "6d64c52f9c6bb5ea1cd236082cd28e9b"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "74b463471d5ca804c20d680c6edab779"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "d3dbb4ecf1e1a7db429e1e3f4a74075f"
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
