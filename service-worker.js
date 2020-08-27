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
    "revision": "7b1e8318280f9d692a5723f0d8d5ea03"
  },
  {
    "url": "about/index.html",
    "revision": "df44754c46caed03de2b9223bd8d75ef"
  },
  {
    "url": "archive/index.html",
    "revision": "becccec8e436650f10fdb04b27751da2"
  },
  {
    "url": "assets/css/0.styles.2349437b.css",
    "revision": "ca5fcf2a4e874b5a2ef5b6b8f8fe6281"
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
    "url": "assets/js/13.4429a667.js",
    "revision": "2834ef2655fb1b692ced959136f4e010"
  },
  {
    "url": "assets/js/14.c6c5585c.js",
    "revision": "a576832ee79817ab30cabe068a9fa982"
  },
  {
    "url": "assets/js/15.709ef8d1.js",
    "revision": "f297f8f55a8f52d52f20df5392000cb3"
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
    "url": "assets/js/20.eaf50e2c.js",
    "revision": "ba05736d3d25360846dc4d5598cdcb97"
  },
  {
    "url": "assets/js/21.e56fe763.js",
    "revision": "09e91cb60d8fb2ca20540de1ec81ce1d"
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
    "url": "assets/js/24.3579c775.js",
    "revision": "067833426f4f1b2760850ee5b05b009d"
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
    "url": "assets/js/28.044551ef.js",
    "revision": "dd6090bec4d9d2ed85abae30860dd1fe"
  },
  {
    "url": "assets/js/29.b503158b.js",
    "revision": "6131b882659b8d88d8b8b04cae75df19"
  },
  {
    "url": "assets/js/3.d7644f94.js",
    "revision": "8242d3d7190ed07f10f4cf2618321bba"
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
    "url": "assets/js/4.df6e32d4.js",
    "revision": "72b01d47daf00de7a19e15d48a54f852"
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
    "url": "assets/js/app.3befdf02.js",
    "revision": "da943bc2542b3f2f491a56203aeef1ac"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "82e026440ac890c136021abd5f4967b4"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "59a7fbc35e3910d4768cb62e32305ffa"
  },
  {
    "url": "category/index.html",
    "revision": "769f22cfb98d6de151d7209622da81ff"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "febdface2cb713cce8c97a0dad32708f"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "5344f2ea6a2c2b6d82dc886741d57c65"
  },
  {
    "url": "category/Note/index.html",
    "revision": "256ea625db686cc5000b7f4c06073929"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "61c7a89f1f6fa0aaef55e25520801df3"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "9e625ceb69f1f4143d7c96df6c279c2e"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "a82714a85afbfab05bb7f53cb5d4faf2"
  },
  {
    "url": "category/网络/index.html",
    "revision": "506cf4090b8e3d047f49f780ffa8a28f"
  },
  {
    "url": "codes/index.html",
    "revision": "388803b077285b9029890e6ec0c4f255"
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
    "revision": "27bd434503a8fb89d5e72e5a0a063af8"
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
    "revision": "c9d46f2ffb528be2af0ddc30ffb36949"
  },
  {
    "url": "index.html",
    "revision": "9847cb00299d1c04628f2f950fde762c"
  },
  {
    "url": "letter/index.html",
    "revision": "15afab962db2cf7713da87c4b26b8a3c"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "784e07651124ed2fd91a8a8d413ff4f1"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "3903596501a9954f7a091b10574051b7"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "25bd96ca63cd574cff6412912c11c418"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "bf301b1a7487524eb614017fda721e03"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "291dced940c2aba32194d63f22503cab"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "fde11736fb7811483a1a2e82fb28a91a"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "65c0882e98e77fd7fee3c379a3025ce8"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "875944972c9e6f763bcf3984528f1c4c"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "4cb2b8ade08c135435127e3b2c2a4ada"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "9914602e0c60a9e8c647f7c81d16bb45"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "fea9646a5f8f3e5aeb4afa66f59f5f83"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "cbb8183c27c40a006568962755f2a939"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "db58b783a6cd0d52bd3104081945de75"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "cdd35809d370903c037143df13fd1274"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "719744e1cee4f5e665aa92ba53c791c5"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "bed6c82edc6f13aa401d94f6fb77103c"
  },
  {
    "url": "records/index.html",
    "revision": "6845248cec66d458e738be6c5c9322dd"
  },
  {
    "url": "resume/index.html",
    "revision": "eb1b0664bc18b06541d830b58a34a729"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "4dfc155b648b0818615119516d8e4d2d"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "86c68be18a4bdcedb137bbe82773d7ab"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "3206b2f3861ed2167deadb6b8b3f85e8"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "160998010b7f0e168bc489ebc37edbf7"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "2bac14f1506fc04ecdcf3cf44ec663ae"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "f1ad725ac342d6f3293d424ce5d44f4c"
  },
  {
    "url": "tag/index.html",
    "revision": "9ff56343894b00c9379097abc088b6ca"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "6cebc25eb0dd27ed15ce150982bcf37b"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "1281ec59f7d0f773e9d5dad6004c8bb0"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "53f58bcd8f1f1718849ab77715b3702a"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "9d1872d58177b91078035a9e4172add1"
  },
  {
    "url": "tag/List/index.html",
    "revision": "26ed83609972f047b78164c58f66e4e9"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "9a5a8c8db6f4de016ab77f3e992d8e94"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "21c8bdd37a025982310c3248f982d3b3"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "dc4a5188d4db8f7f84ee5f4a5251bcab"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "1e83256ed00783be2be4e32d8b12db88"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "91855d4d4b3e05963d8670ee6edf753e"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "da139af1b78db18f0749b2a2a6c2ce64"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "f0a9253ef56ac53f9e5686827f968cfd"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "781954b7920a5863540c5090f986a7cb"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "d21607a904680fbd6527079c24417b5f"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "e89d5cb56bcd4b0e983f1b33c8c50405"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "2f7f2ad50a68228116d043b6f47604e1"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "9fe6a638dd6104b3926a6915751e9059"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "4a8a584d113c650a29adea2cefcbb5cd"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "f300bbbf23f473626bfc013a382fcce3"
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
