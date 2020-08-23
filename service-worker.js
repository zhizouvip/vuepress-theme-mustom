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
    "revision": "1321318b3560af33ddb34332d028d77c"
  },
  {
    "url": "about/index.html",
    "revision": "4cb803cf4e14e107eab4b8def542e272"
  },
  {
    "url": "archive/index.html",
    "revision": "07b2cc6b3df14811caed23f72f8ef253"
  },
  {
    "url": "assets/css/0.styles.cdd16a03.css",
    "revision": "e00d4404adf85d180d3872ab13ffde68"
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
    "url": "assets/js/14.ceed5fc6.js",
    "revision": "722642f4467002519a920f5314ef7bb1"
  },
  {
    "url": "assets/js/15.cb832aee.js",
    "revision": "2b505f74d6462ff5377d06391dfc800f"
  },
  {
    "url": "assets/js/16.cebd882a.js",
    "revision": "9a0648a699e27a46099c62d6f8f35bc5"
  },
  {
    "url": "assets/js/17.c347ff28.js",
    "revision": "89923a9b39ec9fd8a591e2d45d7bb323"
  },
  {
    "url": "assets/js/18.d8ffaa48.js",
    "revision": "83aef387c400be61d72855475f1109fb"
  },
  {
    "url": "assets/js/19.29bd601f.js",
    "revision": "5942e1b7ad92af1e5742d1bd59d03596"
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
    "url": "assets/js/22.5e660cc7.js",
    "revision": "fa3cae2d60dfa4f03e5d9f61df41c6fc"
  },
  {
    "url": "assets/js/23.72da4870.js",
    "revision": "c054636b99338fd2aadd9b1cf3c1da0d"
  },
  {
    "url": "assets/js/24.81d1e2e0.js",
    "revision": "5bcb76d716b3fe6de6a7898a248d58ef"
  },
  {
    "url": "assets/js/25.94c45f3d.js",
    "revision": "bad808b3b2a15252d3e8b52021c5597d"
  },
  {
    "url": "assets/js/26.bac5a933.js",
    "revision": "f8b495ac5723a7df622168eb0cc4aea1"
  },
  {
    "url": "assets/js/27.169d2c4c.js",
    "revision": "f02aa4a02bad4200bea4bc7a5ae380ac"
  },
  {
    "url": "assets/js/28.d46fec01.js",
    "revision": "6611016560bbdf37e7d61f2d43688904"
  },
  {
    "url": "assets/js/29.dd3334dc.js",
    "revision": "ddcc10a712b108d9bef4430a693c44ab"
  },
  {
    "url": "assets/js/3.d9b6aa03.js",
    "revision": "3278b7a6ed1e0246d40bf0f6ae1e34d9"
  },
  {
    "url": "assets/js/30.8883cce7.js",
    "revision": "d39fdb65871168cffc7f11213e18e0ad"
  },
  {
    "url": "assets/js/31.d19c9868.js",
    "revision": "5322683118d32ceac2dac3ce872dfe64"
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
    "url": "assets/js/app.d7d47d19.js",
    "revision": "da62365569548f10d189889c33369d56"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "0897d8d06f8f2a3dbe78bad7be54e3b9"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "c00f7a7bf608923949910bb399fc8b11"
  },
  {
    "url": "category/index.html",
    "revision": "bc4d7f37004d80832dd7871d0becc14e"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "72d20b3e54d5266a75a830554e82e5cd"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "eaa80a7136ebc295f6958316d30defd7"
  },
  {
    "url": "category/Note/index.html",
    "revision": "8a1c1d3209b092be96db0538d4435617"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "4d88dd45931439b77c4995f4f8c18791"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "345ac86b4b5c1abd8dc8873cdf49ed09"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "1a04bcd772d26438e6c25538f465a8b9"
  },
  {
    "url": "category/网络/index.html",
    "revision": "32ea37e000001bcc1fabd097485a6d44"
  },
  {
    "url": "codes/index.html",
    "revision": "b6980d1ff45c71c4575296da5a2b6e17"
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
    "revision": "2d175f804b4f7972aa155eb08a71d0bb"
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
    "revision": "e0f45801f19ce151b70280c44cfea657"
  },
  {
    "url": "index.html",
    "revision": "b814d637891f58d8187d9074ac78b133"
  },
  {
    "url": "letter/index.html",
    "revision": "ec09360504200f16c04f5ad92dc5bacd"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "1c1a0de4964d54dac1d0e235397b8a9d"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "2e2bf1793e691d409b239997dfbd9164"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "d4ab05e7d3cb28bedd42440dbba8151a"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "2df82d9fcd0fac7f734726f456b977ed"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "62da2209537b0329f5073e3b6ded1a0b"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "ca7ea1b6076fcf054e072a37873df6c9"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "dce064b1302226d87555ef11c81072c2"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "e7340b93bb72bb5938630ae3f4ab0742"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "be11fe81d1080f8dea60511778917ec9"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "74cce4a66a73c2602859377e393623ff"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "1009ed85321de5d537ed499af941eca1"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "6ebbf0c806b416bfd64e3d2b08f16128"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "a0e1003b64d08a04db2af238c40be904"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "493f35a3e78ef359257c296385660ddc"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "192d2ca7f7add1c415f10947c6221cea"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "ab5e8bb9c951547a5d1a0bffd5624a76"
  },
  {
    "url": "records/index.html",
    "revision": "206490ced40050d9379eafa390142900"
  },
  {
    "url": "resume/index.html",
    "revision": "2893ee4118efd87738aba7302c95c596"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "eb792183bdb3c60a6341ab7c91e291c0"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "592f74bb63d79179b652599de95362f1"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "560a543e716ed5b908792331cb7933f8"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "489ec5a1b61fc0effadf63c3b44ac658"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "f2987a147feed517dd6aab74e1ce0a9a"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "d63b99ba8eec2891e70a3b43c355e1e1"
  },
  {
    "url": "tag/index.html",
    "revision": "53c8a5d16b96d5148e4a9d47fe25c52b"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "47033bf0413f87b3ee175d8bf81ad623"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "db1e36ee0b97b96ee7afd0b87f8b103d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "b692f53f60ce1f7f76e8fb54acf22015"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "fcf6e9e0774ebf01cf1b514aa369e59a"
  },
  {
    "url": "tag/List/index.html",
    "revision": "b19287b3813d3f77da9e57ffb8f37230"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "e7aea81ce10118934590215e46ca7b0c"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "408b9b5d0a8284f7ff273e239e971990"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "01d2a3d7c3d8bb342089887b8f293c16"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "7f750a7a21866203d16d83ddfd644d0e"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "191406b942f2172fca4937b5b6f59adc"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "ebbc21062f6e78684f5c52b6541a8f9c"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "ac89e9a665a3b21770ede4ad0ac6224a"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "327f5753607760c80f2a82b9b393a31c"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "0f9a691cf80b3da43295d88424291d27"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "605c71bccc5a1d710fb579822b811aa6"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "110dffd006af9d23e6413caf2478349e"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "6039ba910a2dec43befe15390a0124be"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "fcd90b346ba19d249e1b96b94a021180"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "e1d1f88347e13f83da1f002be322da64"
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
