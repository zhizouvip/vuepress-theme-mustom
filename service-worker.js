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
    "revision": "cd925258240ae4017aa632778f78df43"
  },
  {
    "url": "about/index.html",
    "revision": "f0a6a3e3d28bc8e133314f4713812c6e"
  },
  {
    "url": "archive/index.html",
    "revision": "6cbf1eb4e05e1eae85de173ea4be637a"
  },
  {
    "url": "assets/css/0.styles.0176969c.css",
    "revision": "ba04ee2958792732890b6b51a279eb3e"
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
    "url": "assets/js/15.bf5feb56.js",
    "revision": "ba5527fb3d08f2f1da61892319b73a4d"
  },
  {
    "url": "assets/js/16.1eac3d80.js",
    "revision": "e95c707aa0deb038e40844849cba2dcd"
  },
  {
    "url": "assets/js/17.4418e24d.js",
    "revision": "06e61f5c243f2898c77f1ad7c7a60602"
  },
  {
    "url": "assets/js/18.6b19dc2d.js",
    "revision": "0bf5b112c9970548a6ac8518dfc826a7"
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
    "url": "assets/js/21.551eda1b.js",
    "revision": "3bf41c7a039251eca51381d2805de356"
  },
  {
    "url": "assets/js/22.837479f8.js",
    "revision": "72abacacef519ead881754779a7d4412"
  },
  {
    "url": "assets/js/23.b1a849e4.js",
    "revision": "c49507685303193579c289f1dd8a7f2d"
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
    "url": "assets/js/26.585137d3.js",
    "revision": "bc4cb7fe79c1ea91b5c20a8b423ae96c"
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
    "url": "assets/js/3.a147bd93.js",
    "revision": "4805429a05b3b9699d14e4c5c975a059"
  },
  {
    "url": "assets/js/30.fe99650a.js",
    "revision": "fe76ae41486d5a3db933891be60a7dc2"
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
    "url": "assets/js/app.55ab1db0.js",
    "revision": "e1d14fac70f4933ae3d26917af546439"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "857296a222256c84db795b6b819079cf"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "55b12d0c86b9ee48ad7c8fa964626c62"
  },
  {
    "url": "category/index.html",
    "revision": "0d503ce3d9d4982ab9262b7adb5022fd"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "d08931f313142a472a5ec038f2c86a17"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "cb893aa097b343172262be10eebae003"
  },
  {
    "url": "category/Note/index.html",
    "revision": "a738888205d9852733293f901b890672"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "b398202ff9e86f300c5d155dfb2be8ee"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "60d58b3c948ca60db901aaf2d7a5bdd7"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "f26c8d2e468f7f35ced4ad78162497c3"
  },
  {
    "url": "category/网络/index.html",
    "revision": "0695e225c8f785c4188f3ba726fbec2d"
  },
  {
    "url": "codes/index.html",
    "revision": "e0204bc2c71377486ac353ea3396d3c4"
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
    "revision": "1584f5a4683a1eeb8831371a38ced0b8"
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
    "revision": "b94b32af77d3a3b0d6dc86f213637b55"
  },
  {
    "url": "index.html",
    "revision": "baee0151605a3528f8809a0b0b40f697"
  },
  {
    "url": "letter/index.html",
    "revision": "a1c86e793ed421daa785a56110469f3c"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "d64a28ae27bff93383e9d1d7b2145b98"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "d21939b41ddd93a3f5d159a78d2e67f8"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "e46b412a0a90cc6f19ece385ba8fa9ee"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "f61b5842003c22b6bb208bc3fb054259"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "e242071dd1c0a258d87123ecde311704"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "1d5a3bcf6b0ccb7fc814775ab0e7a6aa"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "1366f8fefd347812d7e4dfad2fd729c7"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "7d29e207658cd070160c8ff9c0287d42"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "362890f30b2197964a4bf82c9a99121c"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "fcc550b39cadf3257231a437a2971f31"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "2eb5cd71cd8a97dc8be023b795c4d74a"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "196e8749015372db08510b8b6d4caa73"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "7409aab933a111819301c5063abe6f7d"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "7a660c5a0134e3848bb2a1a1648163f7"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "fe4d9d970024f74cc242a7623e8cf885"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "15e60b750a2cbb8c35ee4f719ac1acfe"
  },
  {
    "url": "records/index.html",
    "revision": "cf365c1e52b7bd638cb997987039b32b"
  },
  {
    "url": "resume/index.html",
    "revision": "ddfdb4abc4bbcd6d761b243474e333fe"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "87fc569f40bbf840f884c48c979b7e98"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "e33d9a78dab8067280e1d0cb0d56e7ef"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "064944f00b438e2e608371b727e6bfbc"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "c352bf7517fd648ff4845e0e08f2c569"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "4d1959f073cd00ad703e22ea9217dd47"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "c414c316fb7f159ba19bbaddf61a4e6c"
  },
  {
    "url": "tag/index.html",
    "revision": "6f085575d9894b7f1298aaf577047ebf"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "9d4eb71d17056ab42aff04b351e9f136"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "f2ff16cfe404bc4cf49439e0087f49fe"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "8e960bf821905ba974e9d215c1c1bf18"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "b0976b1a17f58f130694e97023cfd0b9"
  },
  {
    "url": "tag/List/index.html",
    "revision": "d2d06f4b486ac90f7c8d8b06252f6188"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "f0de797555d7e3c9014d6900f5dd0b50"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "5059eaf41aae9feb15831573145ac79f"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "836bf295fff1af1aa58f95022da43048"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "1061f59292588810f588d82fd0fea3d9"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "5ec99717a2738f87d030e7441d36c04f"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "e548a08361367f534313c4bdaa0627bd"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "167d6579c7501d4457cc03f203e2086f"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "26aafedab51c95ca67d97855656b421d"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "6a0aae137406eddbaaf6505bdbb1ad99"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "b22b994b333c239df8c63a53293a43eb"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "2f01cbebe577a2c131f82b0a75bf95ff"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "046265cdaa3d840eaa45fa85a352fae5"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "558c7eba99b26ccb8de7a500cd611dcf"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "a01bc5641c8e0060cc486ceea22190ef"
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
