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
    "revision": "718ec8d7697ca4467b4db52db3bc036a"
  },
  {
    "url": "about/index.html",
    "revision": "6eea3c36efec54906c48967c2e93dc33"
  },
  {
    "url": "archive/index.html",
    "revision": "d876e02b4561682a7fbb940648a72951"
  },
  {
    "url": "assets/css/0.styles.a201ba49.css",
    "revision": "a706c6b4c41cf19705f85bf9050f0ca9"
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
    "url": "assets/js/24.81d1e2e0.js",
    "revision": "5bcb76d716b3fe6de6a7898a248d58ef"
  },
  {
    "url": "assets/js/25.a4fdf6f1.js",
    "revision": "9f9617b8894dc2c75520622509a4ef5f"
  },
  {
    "url": "assets/js/26.7a16f465.js",
    "revision": "bb094ea375d07feec5cd6b39b92f1b8b"
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
    "url": "assets/js/29.115fee78.js",
    "revision": "96a49abd786f1cf94e1b8922caae48c4"
  },
  {
    "url": "assets/js/3.05c9fc2a.js",
    "revision": "59626e1333c16e4035c5ad1beeba1140"
  },
  {
    "url": "assets/js/30.8883cce7.js",
    "revision": "d39fdb65871168cffc7f11213e18e0ad"
  },
  {
    "url": "assets/js/31.ce07934a.js",
    "revision": "4c87b968839672b251259ff633b792e9"
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
    "url": "assets/js/4.c35927bd.js",
    "revision": "a02b711e5cd95e6eaa9003c26d8555e7"
  },
  {
    "url": "assets/js/5.0e47a72c.js",
    "revision": "2720c12606934996d9274e36dd0dba70"
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
    "url": "assets/js/8.a346728c.js",
    "revision": "6210edd60a05026f54fb2d910640e845"
  },
  {
    "url": "assets/js/9.5aafa7d5.js",
    "revision": "25dc580fb2ec68d82c8387c460eeb000"
  },
  {
    "url": "assets/js/app.ee0bbd7d.js",
    "revision": "fb2a05ef9bb33cc3942810cd649fc834"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "940d43e1dee0c44cd2ffdea09151b9b4"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "abefb9c187543e943f79b33171018884"
  },
  {
    "url": "category/index.html",
    "revision": "d86026b5686face03365125737ec1bd7"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "622ad722cb4eab1a65f50c5ed74e454f"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "9c5fed42d742b0016444e0ae6c977992"
  },
  {
    "url": "category/Note/index.html",
    "revision": "aa38b609917956c72ac741992636d3a4"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "95f69f494fd1e2931c697a052cd58722"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "17733afd5a16a16b18f7ccd9182322f9"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "25a4c4d2085c47bf410df6288ff3eeea"
  },
  {
    "url": "category/网络/index.html",
    "revision": "65ac3ed749fe8851410bfccfdf84bc86"
  },
  {
    "url": "codes/index.html",
    "revision": "78bc4c041dd3d1d48b62a5935bc3dc37"
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
    "revision": "f6dde786b6111b9e3c1e7258bc958339"
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
    "revision": "3d28a452db0282614f4f45feab23018e"
  },
  {
    "url": "index.html",
    "revision": "27d8267af537eb21195beddb99edea30"
  },
  {
    "url": "letter/index.html",
    "revision": "ce7ec531710bebaaffad9c44cbb0caf5"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "537a13a82a28d2129562f364de1bf3a0"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "7ac8e0e9d6c1bb1680c8c2f1f0fd23df"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "233e89e8024244253b8c5afcf3bea512"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "e6ab2abc5d3fa9d5d508e2c42720469e"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "5492d7bb463209edb6d7ac56e7b31361"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "4fe8e331eacb6644f2ed47300d0ec8b8"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "7dbfffac7490d6aea194ebd4c4e8393e"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "fb8cd0ced10b1897c7305f1d324e57d1"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "ac1e82bd6ef9462606429f8f522c1a3e"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "717c544b08b5688d81c4c262a03d0e7e"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "a4b844f426fa5d677996acc616217545"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "33a9076fc767493f1b4e744185ac06f3"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "38670b2f1aa5677a8c09bc0df0a18552"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "536346cb0362f3fb09f1199f22b4350d"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "ee77125789dd40e20e74af365adb41aa"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "993aff49d04f77c2706f43daafa39065"
  },
  {
    "url": "records/index.html",
    "revision": "1e4a75423af8e2f3312731fbe37963d7"
  },
  {
    "url": "resume/index.html",
    "revision": "1a202e386a5569a22949fea3d4e4ad8e"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "fc57ab4bce321e8eb81be51f03db2a07"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "2f2dba6959e3705bbcc7c0b6ff4d2d22"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "73f06e3440f14345f2a5584d79910bd5"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "806799067afc33074625cfa0f072019e"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "480a8fc31c4106042ae4eb5def2d502f"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "0c79d9ef1e345f23821687b2fbf18dd8"
  },
  {
    "url": "tag/index.html",
    "revision": "294865d6f1779128356977f2fb7bb9a4"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "9fcab1bd4b80831375962eb91be36d32"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "7ad65f7707cdf613f8fb3d703e830ce3"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "72a1e58ccadfefaa844f823d72d1726b"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "3d13ffa70f46a688d50f5d70c403b49d"
  },
  {
    "url": "tag/List/index.html",
    "revision": "23bbc3c180c69a8824906fa2115e09af"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "89e48663329b4a6b34e650e29c543732"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "3276a42486a4b837cdeac0de979b2b71"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "832074735425065c5e71fd5725a64a88"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "d3fc7843612c062c3f7d012c5b3f5e32"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "85595edfccf27037b828fcf79df806a3"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "08a7708c92a892e4ae644cb5aaa6764e"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "7910cbce4fa3a6dea288c2da62c97363"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "06e0fd9f9cd7b02bd04874a67876b336"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "8c95d7eefcbf707fb1c5ecad07a4f661"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "782aa1e9b6c33d2a9373680009e51a2a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f0654bc1337942dccbf055af9d3fca59"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "84915d2008d7cd63293e93f568c16a4e"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "3e33a0ed1b393f049ad20c242e8d7c1a"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "08ab7dd0432db594f6eba5369221a995"
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
