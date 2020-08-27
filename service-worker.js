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
    "revision": "03fd9392d4a9feeb95120db2944da99f"
  },
  {
    "url": "about/index.html",
    "revision": "eb5711c038f42b67ecadfcdc04a7449e"
  },
  {
    "url": "archive/index.html",
    "revision": "d9553af2dd20044b63c7ba181bf941a3"
  },
  {
    "url": "assets/css/0.styles.e786ab95.css",
    "revision": "7c69df40ff5f499a4c9becc222ee2672"
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
    "url": "assets/js/16.cebd882a.js",
    "revision": "9a0648a699e27a46099c62d6f8f35bc5"
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
    "url": "assets/js/23.ad8ebc71.js",
    "revision": "83cf9b44a6834dc6601a6b0692ecd259"
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
    "url": "assets/js/28.044551ef.js",
    "revision": "dd6090bec4d9d2ed85abae30860dd1fe"
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
    "url": "assets/js/8.a29e5d23.js",
    "revision": "f2d7bcf10e4e6bd56301261aa3c9a9d4"
  },
  {
    "url": "assets/js/9.5590643f.js",
    "revision": "15dc1fe08747368b0e9d078dbb407d6e"
  },
  {
    "url": "assets/js/app.61ab1827.js",
    "revision": "0a3eb3e3c718d79f6145c01646efb553"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "4838ebd7257cf0fb98c27c5a59274490"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "753a14f06fd9b3e366f705ddd06ea85e"
  },
  {
    "url": "category/index.html",
    "revision": "385c71733aa946b2a8632be05b9a6407"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "97eeec19b91875eb2b1d77c5a7d54b32"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "5ba3bafe7253e5766a08b28acc3f0f93"
  },
  {
    "url": "category/Note/index.html",
    "revision": "e22e237b3cd1c5fdb66e45427a498718"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "643f857b7a01f5376f786054a24c1525"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "85934c339129c030e212ba0cb996ddeb"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "305bbbb2500c10c94bfbfa24a2061fcd"
  },
  {
    "url": "category/网络/index.html",
    "revision": "abecb065722930372ab4926c1ac2bfc1"
  },
  {
    "url": "codes/index.html",
    "revision": "8ea144c8bc746081de9617f6d261d3a0"
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
    "revision": "5adfed77daec7c2c8e8041e00e81a2f4"
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
    "revision": "ee37d010d4bb4a6b03f887a77c62271a"
  },
  {
    "url": "index.html",
    "revision": "97c98ae010528e593fc375611c7eb9db"
  },
  {
    "url": "letter/index.html",
    "revision": "645f4feb41cdfa58d0060317a5f4f286"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "19e00edbb98ef96117c856ff1280d6bf"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "5151d7988a6ac7227d75c5a0d8ad9d4e"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "831c09ecc8b32df0906e7e8544087891"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "b4d395cb4d01a181978dc6b3bd246a9f"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "1d9a4066570c2fce18b1a9a639dfa946"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "79c8d7bbf61470d504c7791af90e4a41"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "eee483ffa0f4c8aa1395a941423bc0a8"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "a6a53a603adfcb3adda8e99ddb2269c6"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "cdd4bd56744d2e29f86f9f613733d789"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "fd89abccc2e601735372ad0ebbf155b1"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "337b89775dc5d1dbcf69fcfc07fa227e"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "7f98551c20e29b4c04e02ed115664dd4"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "96d8a04ffd6ccadd14f46165ab3b8186"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "099c810190db74ffcd28d93bb376b305"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "071cef1ae92e16152424a3d9570c2b34"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "774c910570bed332896d807b2a171ded"
  },
  {
    "url": "records/index.html",
    "revision": "e423e700f8b1e0f31217c722d0d917e7"
  },
  {
    "url": "resume/index.html",
    "revision": "13b47cf3ceadad993c70bc203b17cd4c"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "89ee9b0c9449010872b4a49af7d58ba1"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "ff89b3583f3b26856cd55cb8d8aa5308"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "956fdbdf3de5b3a2510593f996798577"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "971d44e6920738d9366d793b067779e6"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "6fe37c0315de26af92683737cdd06cde"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "1d69c4a85cbad228902c5f693a26b982"
  },
  {
    "url": "tag/index.html",
    "revision": "7f0eafb5b3c531180f810157462ecb30"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "276a48c03ee7bc36fc85de31c194da61"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "e78f60aa00f9e11f552a0550cee24e23"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "0e7866eecab4cb4b3454745b0644b699"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "87bf0b5c74c08a6594d3e55401c9657f"
  },
  {
    "url": "tag/List/index.html",
    "revision": "7900bcc25b84ff5574ae1a0b3383e773"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "1186a38b5e9fa40d9d5afe6ea770a9c9"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "178a9b51164754eaafb8963a7bee5885"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "41bf7db7e369d55b73b96386f4f3ea63"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "7744c61da21c078d637d44aa9c72f650"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "fbc2be0d6fa7eed08fae18799ce7168d"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "ccc5fc32eaee483c70b6774130b1568c"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "b8cd9a9d406550cbeefe4dd024ce2ddb"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "481798323cf9d7866dd518ef98173c05"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "2d533f66391867cf273e1389740644d9"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "504c2c2b09773f31288c1da024f2f00c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "d3f4be6c775760c12138396bdaf52371"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "43efc974a1a2b9b25132e6bd5a914d27"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "477ce46eb9f9ee117783449d4317d971"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "da1a60df74ec6b332beb09b671c960ea"
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
