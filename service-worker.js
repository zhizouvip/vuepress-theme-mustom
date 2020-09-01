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
    "revision": "744844fcb07c0e454ed58d7aa0592813"
  },
  {
    "url": "about/index.html",
    "revision": "7254efe793da77dbf4ab513cf6cf33b7"
  },
  {
    "url": "archive/index.html",
    "revision": "9cd721bfc15e32cec41b6831bc107367"
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
    "url": "assets/js/12.8ae00816.js",
    "revision": "daeda0acd7025d8a5a37e3bb01578f83"
  },
  {
    "url": "assets/js/13.88ab2cd4.js",
    "revision": "518dcfa478a42523c89fde27b03fc868"
  },
  {
    "url": "assets/js/14.ceed5fc6.js",
    "revision": "722642f4467002519a920f5314ef7bb1"
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
    "url": "assets/js/17.a6b21440.js",
    "revision": "e9a158267738de944029faccf89f9aac"
  },
  {
    "url": "assets/js/18.a33f4282.js",
    "revision": "d59dc5d8338eff34fffa8140b5bb6fcc"
  },
  {
    "url": "assets/js/19.29bd601f.js",
    "revision": "5942e1b7ad92af1e5742d1bd59d03596"
  },
  {
    "url": "assets/js/20.abcfe450.js",
    "revision": "e85033405f74fbc19ebd135d3b58c855"
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
    "url": "assets/js/23.75a65d40.js",
    "revision": "9877f61ed45b4159f1b24d7a5af8546b"
  },
  {
    "url": "assets/js/24.a9d8e0a4.js",
    "revision": "061091cae9db7b811232dc13a01f4b67"
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
    "url": "assets/js/28.973497a9.js",
    "revision": "58bfba80bf3e64dbad8cb16b6e4f5fd9"
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
    "url": "assets/js/app.85a9f715.js",
    "revision": "bb5624eb2aa1d33ba1464adf9b1acd7b"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "317eb1821e6a5de2aaaac48f33a431f1"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "ef8047748178cd77ae177d25849e0e9b"
  },
  {
    "url": "category/index.html",
    "revision": "95f7e0d3ea9d3c98a17f32f520155df6"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "63f9f0ab00782a450f677e10d3d149ce"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "8f84c38fe4fdd029639229d86cf0d12b"
  },
  {
    "url": "category/Note/index.html",
    "revision": "325d7bf7cf1389172c34961a82442d43"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "aa465ea6cf57fc039e31f3cfaa78d4aa"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "caa6de59b884cc73d89766442162359d"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "d505e97c7df8f07343b49ef9f1bd89c6"
  },
  {
    "url": "category/网络/index.html",
    "revision": "f4405d1d0a93ff886479a25fe52834a1"
  },
  {
    "url": "codes/index.html",
    "revision": "22ce9bc127b412112d7f687a474e3d35"
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
    "revision": "df2ecf41df2b89c0cdf4f5f6ebc5882f"
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
    "revision": "13e4f17bb4838033fc5ed7c015ac142a"
  },
  {
    "url": "index.html",
    "revision": "9f37ff27b641bacb1c9e4807e8b9dbf5"
  },
  {
    "url": "letter/index.html",
    "revision": "15e49c21d388fe68a64d593bc8b0dbd4"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "ec450d76d4375b828138a0d49c5fa2d3"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "1fa8e8fc278329dfbe8b73bcbeb53200"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "bb0221445729aa870d9fdaa5164b612e"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "2d49ac49089e50a3923be5cc016b0699"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "67c1e2a5fca20e1c6847f8fa3e46d713"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "6996b9b98eb2002728591ec8ab59c07c"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "95749b294d3a27de4290fb7efa63d605"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "8f7b0f05111423bc312701312a24e056"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "38dcc725ce0df95b9bc95468072b06a2"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "1bbb695e7e43bc606fa09bc2d6940da8"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "06f30de4b1454c8aa19230e23df2d6d7"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "265da4f196db5728018fcec99e688cf9"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "65f9474df921f6fe9f2c5b582b589082"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "b1573608bbe64d0d866c9fa310433461"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "46ffa66ff29ac0ed58b3102187f416e8"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "61a1b91e67b61b0f609054d81a6e3043"
  },
  {
    "url": "records/index.html",
    "revision": "c297d49237b0f2dec785087193e08d20"
  },
  {
    "url": "resume/index.html",
    "revision": "e3654922f7f531809b5bc47094b96a71"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "28a7ecaa77667704b1cf3b537e653857"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "e9458ec1bb6f8f9c6c5064dca80cc425"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "4df3734b7074ed4fa16e91e57fe6650f"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "8b2eac39f59688af532f56f93242c6ee"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "49511f25d90cdb4739658de8e225b911"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "f9dbb1d451caab19bf87c7b67e1ae595"
  },
  {
    "url": "tag/index.html",
    "revision": "f90ec3a8c23f28d04f11fb34092b32f4"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "68436c19c6ad656cb08dd041967c89c7"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "e250f9a9aa0e2bb20f649802b0761406"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "fc6574fb6524c8aeb1a5eb470446dbe1"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "e334336ea0245dec805bcab15f5f2cb6"
  },
  {
    "url": "tag/List/index.html",
    "revision": "5a80b764484bd261372865f05ea85855"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "270fa73149e9cf251694f4150f639c42"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "1026e4500badc15446d40e6546d6a440"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "25c563d086c281ad0672596a0f89bdbc"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "edf5cdf5b9410cc69feacef6af1d7dd1"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "8ce16620a5ea0c7ba2e27e58d3e65f3c"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "40a780500a123a523f2d87d383d2cd11"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "85716d41221f5902becd812603732b42"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "7d2529a9069516ade73eddbe34e5ed94"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "8032d2a6f10205d0a1153169d11fd3cf"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "f32ffc667cae19fa824fc24c78790a3e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "1ca0dad3a776f9993334350eab34a0fa"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "cb240f2a124a08b34f5fa989509f92d6"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "05b33f0992fa66fee5721e86fc2fa7b3"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "3be11fc4c12a9fb8a79d5aa7f289cad8"
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
