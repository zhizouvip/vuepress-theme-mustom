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
    "revision": "891bd141704b010fd03d6b35929d1883"
  },
  {
    "url": "about/index.html",
    "revision": "7985c0d1399afa026ec9a0887ec66175"
  },
  {
    "url": "archive/index.html",
    "revision": "1e1f061fa874cb4fd7b5fa54627dfa46"
  },
  {
    "url": "assets/css/0.styles.c9ab7a06.css",
    "revision": "2fe6dfc2070a3d8d7de884fd9d1f095d"
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
    "revision": "24274e52d435f217d998a1c0f8e547e6"
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
    "url": "assets/js/14.57d48b65.js",
    "revision": "1fe5bd9a620f2c33ec8d69d9972c1e77"
  },
  {
    "url": "assets/js/15.4652cf5a.js",
    "revision": "aa08d735907e67b1932b1736884c4496"
  },
  {
    "url": "assets/js/16.d3be88e0.js",
    "revision": "92c3bbfd0f68c2860fb270ce2b6b9f81"
  },
  {
    "url": "assets/js/17.a6b21440.js",
    "revision": "e9a158267738de944029faccf89f9aac"
  },
  {
    "url": "assets/js/18.ab2531ae.js",
    "revision": "9789020cbafdd75eab051a28e6791b28"
  },
  {
    "url": "assets/js/19.01476ca1.js",
    "revision": "40fd37b4190e399726a7f04fd826ba22"
  },
  {
    "url": "assets/js/20.05e511ab.js",
    "revision": "58109357ed710da786a9abe0046e1703"
  },
  {
    "url": "assets/js/21.a3fc7482.js",
    "revision": "2af830eeb4e21b54e9c0e283330bfa33"
  },
  {
    "url": "assets/js/22.35d3da49.js",
    "revision": "ab172e567c916ea555d4b8576e318450"
  },
  {
    "url": "assets/js/23.b1a849e4.js",
    "revision": "c49507685303193579c289f1dd8a7f2d"
  },
  {
    "url": "assets/js/24.179efe93.js",
    "revision": "a955ec2d3a741da6fd8715bea36251cc"
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
    "url": "assets/js/27.8becea09.js",
    "revision": "bd8cda26056f9595dc52b518a3b54f7d"
  },
  {
    "url": "assets/js/28.c964f6f5.js",
    "revision": "654b8cd9bf522b4c543e0e1666b5ea3c"
  },
  {
    "url": "assets/js/29.4abf2f19.js",
    "revision": "46c4617572b4a1919a0335bc8483a6dd"
  },
  {
    "url": "assets/js/3.63cfe4f8.js",
    "revision": "96b9b47382d776246683ac59042a597c"
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
    "url": "assets/js/4.c35927bd.js",
    "revision": "a02b711e5cd95e6eaa9003c26d8555e7"
  },
  {
    "url": "assets/js/5.ca1bf003.js",
    "revision": "3925e22efcc1aa1b65cab5d1bc04706c"
  },
  {
    "url": "assets/js/6.8b35c455.js",
    "revision": "919a69ba940b0b4d94d0f8f403f165e4"
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
    "url": "assets/js/app.528b800a.js",
    "revision": "9aadfcd9e182423287837309c28e1843"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "39c4ca1b3656a711048539b1ae102445"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "5f7d7a341993f888bb3064250eb6a2f1"
  },
  {
    "url": "category/index.html",
    "revision": "4f9fa8e45721b9c61940f1aa1c4963d5"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "959ce6b8f753f598656c676ffdf6a229"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "ce0a36c5c3ff24a758cb9ee5c3c7aaad"
  },
  {
    "url": "category/Note/index.html",
    "revision": "f8ec485f87f50245831800738440682d"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "12662f9636f6ab5a1c0cb4989a1693a0"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "45876812e22ad8f469fa87fa3ace4c30"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "51dd3382e569ee745aecef256a5635e8"
  },
  {
    "url": "category/网络/index.html",
    "revision": "8811aa75c7faba2b6140439ab0c493ec"
  },
  {
    "url": "codes/index.html",
    "revision": "8da0ca7b8115b6924c032c04106de260"
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
    "revision": "53541bdc661fce12e8eb3719595ba244"
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
    "revision": "2d3e54f8699aae7cd97910b3d7cbd25c"
  },
  {
    "url": "index.html",
    "revision": "4b4026049782b644d0a956a3ef3dc2c7"
  },
  {
    "url": "letter/index.html",
    "revision": "5af61c0d41149dd285fea44a77f7aed8"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "026a8b5460d1326d9985c08fcc509c28"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "8d9faebded4b5bed9c8b81f1567419e6"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "588c36598dcdafeda5c7dd230fccba16"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "9c7f0804f7b98747a3a401b1fa0820ba"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "6e05ffb42b9bac9a23b72d3f55e17ff0"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "3773590a45a19be926f889c09cb0a569"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "f85c157321bc9de8eb55e80cdf0767c6"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "540169245c427f1fcdcb7d63fb84d406"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "f51c294c73bee165bf78660448d73204"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "820bc0808e435753aefaeebf55b975a3"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "4e5883f23f37ad81175ed3dc88bf49ee"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "17fd668034e843d759014e34596594d0"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "552010a639af43e606f06902c23d754c"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "905ebf12a1a504e1f5d4927975b68830"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "8bcbcd396041fe57d50025cc3866f06c"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "544b9bdde88d215428ba183f405425bb"
  },
  {
    "url": "records/index.html",
    "revision": "edeeb803068947c1b52ad1815a9e6ad5"
  },
  {
    "url": "resume/index.html",
    "revision": "03955ed7711d9eeca044bc18910bc221"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "f928d4a404a789c40878abab668fa130"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "56965baa3123e7319d261905d64d4cd9"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "250ca6ca33d233b1234f0e76820d71e3"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "1e8f56e2f21d445686c944fd5ef35a55"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "fb0ed0e6d723512822c63c1a4bb1f563"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "871f9a7238e8d76a6fd282ec57aa01ab"
  },
  {
    "url": "tag/index.html",
    "revision": "701e6cb9cbcfa0d0e217b0bfdf92c88b"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "a7fe0a388474e8d12411f565414a89b1"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "5cd3d5384c51d756f1165df0e95fa2aa"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "905fee42af34b91edc1acefa258f8769"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "2b4d90f95e1a0fa8bfed3f355df7a978"
  },
  {
    "url": "tag/List/index.html",
    "revision": "ceea4bbd3b997e257248bb8da81b5a50"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "53030f87d837339c27be9dc9c53167ae"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "9f708d2a79c85d185855c906a7327096"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "0d2dc2e2e3949e5281d79639f1b1d787"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "af8c4dd039a82c08135c163fdff1dceb"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "4acb0acde7edd21465faba5aafed4085"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "549e26438a07270f5279a2530fe8bc54"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "64773de4c8cc1e8e1707829c70949cb0"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "d267b0bbd1e3223b1781ff60f10b2ac6"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "346f8cc02e8f82251f3a8205bc96a3f7"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "5bdf67e728ee253c5688812fd124c3cf"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "4794b22e351c00862a82eeabb15e99ef"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "ee55082af2e2bf0d1d6c771220e49bc0"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "e398a3737b1ed86f52b092fa5d18d45b"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "ef4529ccaa3fd3f348b21bbc30c2337f"
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
