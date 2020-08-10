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
    "revision": "2983986c654028044bcab09c43d71d7a"
  },
  {
    "url": "about/index.html",
    "revision": "b8d1d0bad85e97c9eaf1b2cd8871bbb0"
  },
  {
    "url": "archive/index.html",
    "revision": "fe9c8011266ac6f57f7aa4c1f65b7d17"
  },
  {
    "url": "assets/css/0.styles.86ab05d0.css",
    "revision": "67664f5da820315cedd72dc5f66002fd"
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
    "url": "assets/js/12.8ae00816.js",
    "revision": "daeda0acd7025d8a5a37e3bb01578f83"
  },
  {
    "url": "assets/js/13.4429a667.js",
    "revision": "2834ef2655fb1b692ced959136f4e010"
  },
  {
    "url": "assets/js/14.57d48b65.js",
    "revision": "1fe5bd9a620f2c33ec8d69d9972c1e77"
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
    "url": "assets/js/17.a6b21440.js",
    "revision": "e9a158267738de944029faccf89f9aac"
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
    "url": "assets/js/27.8becea09.js",
    "revision": "bd8cda26056f9595dc52b518a3b54f7d"
  },
  {
    "url": "assets/js/28.1ff425bf.js",
    "revision": "97fa667ca33ee3e26bdac07ecb458cf3"
  },
  {
    "url": "assets/js/29.4abf2f19.js",
    "revision": "46c4617572b4a1919a0335bc8483a6dd"
  },
  {
    "url": "assets/js/3.05c9fc2a.js",
    "revision": "59626e1333c16e4035c5ad1beeba1140"
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
    "url": "assets/js/8.a29e5d23.js",
    "revision": "f2d7bcf10e4e6bd56301261aa3c9a9d4"
  },
  {
    "url": "assets/js/9.5590643f.js",
    "revision": "15dc1fe08747368b0e9d078dbb407d6e"
  },
  {
    "url": "assets/js/app.98ce8c76.js",
    "revision": "4230fd65ab8e7dc067210ec507a27984"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "97656dad6905b63c802ca5f70a31a0a4"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "1c2336620e18c18329611c5c23a33440"
  },
  {
    "url": "category/index.html",
    "revision": "d1364504200071b6296acc8b77464702"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "74d0cf8e24e845b01069992b075044f7"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "5ef76112f77a80a50395f12b984f124a"
  },
  {
    "url": "category/Note/index.html",
    "revision": "eb92c310c78190d69d916567309dc0dd"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "16e0e7ae49413a979d8493af23b7a761"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "f8aeadd2dce58e5fabadbf1d5ada4cf9"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "2b6e15a490760f0e1e1b56778cd0280c"
  },
  {
    "url": "category/网络/index.html",
    "revision": "06616b9c7ca2db782e9a6a4d0d56e26a"
  },
  {
    "url": "codes/index.html",
    "revision": "b3c7f1963ed3f0e714e31385bd04dea8"
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
    "revision": "ae4ff9f6d1d26cdfa8d6ee5769f811b7"
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
    "revision": "a81813eb6a764262ee9303ce90cdf1b2"
  },
  {
    "url": "index.html",
    "revision": "8740549c95678b715cbf7ffffea5507e"
  },
  {
    "url": "letter/index.html",
    "revision": "16a2b18f42a6d55ff0acf9901b302579"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "cc4ceb72e76d5fb15335164da1e8666a"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "5f79002ee054e9ced70bf5e8dce37d42"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "703840eda2a14cc67976890a89cccc04"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "68bcf5cb5ee2ff20e40fa9478f6e04d8"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "27f7c7a7fe65e62957e9464db645ad60"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "ed09d741b185f9bc647eca1689c5c48d"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "d94b57c8408c06cfb2ed2980cbf9fb43"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "10448b835cfed41520b6ed7e40e63133"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "6d1204dc77310458b76d822c3755db3a"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "0156054f82bcc4b92a4213452ff681f6"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "3059ac60613d2d70405867c101ebb84c"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "4c0ae0030134408cdc49006152e06684"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "bc6b2c24f658fa73fc2c3de61bde13f3"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "fe39846ef19587333ec402ad22234b0e"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "3d2ae3cb16f9e8e5305e889205ab0cd8"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "278a6ad642a2337b2ac79ce683d5bf6b"
  },
  {
    "url": "records/index.html",
    "revision": "1bbca9a9034ba6a5617ab1a73c382637"
  },
  {
    "url": "resume/index.html",
    "revision": "1bc96ce4a4d480375fd670eb99014fff"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "33730261d5afc697ad471480bf3ddbb4"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "c4c4a23977bc3b3abc961f4490133aae"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "5c1dd1c435dcc2b9a50aaeb5ca364368"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "a0ebf2b8630205a47a20e47a9acd7d51"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "148470284aca1c37f4686c0240b404de"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "9c509753cef3bebc73f0843584a2865b"
  },
  {
    "url": "tag/index.html",
    "revision": "5ccbac168da46e0396c5f2004275eeb8"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "269e37c772b16943ba9a32dbc264795c"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "0f1d2dd4cfc3f2a19e81f1ad286c1397"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "e80dd9e98601b692c2353c3400bca837"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "c4bd0a7cedade4ca2fac8adb524dec56"
  },
  {
    "url": "tag/List/index.html",
    "revision": "6cb54f34ef2ba312113f14488c86cac7"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "afb7dd9066c7cdcc4392152726829e6b"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "67917b38e7f4ebaf34bca2a7d6224782"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "7b196d675c968cea3fb827228be35875"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "9d91c53fc8bc1077a3ed30f2195e3a48"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "bb0c4be652e8139f4473f9279cd55dba"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "f73b545866cdcccc515c806ef4563047"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "20518214d8473df3d8e2e2652d20d862"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "5c443e8610626549fdbc727d62a06588"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "68379826f02c23715550f529f1f3a8db"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "1aa6f8c1925e19674dd4fa301b680832"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "b053d8701781b741242ced72ca93b015"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "97d9d0df32b9e911cdd5a2a360664ead"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "1bbf1f6af1c34be0bdfbd680c15bcfa5"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "f55f5401ede8ebc934f8b90861321a53"
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
