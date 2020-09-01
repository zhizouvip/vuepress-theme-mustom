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
    "revision": "fc0f01e345e8fc3665e02f72cfd10818"
  },
  {
    "url": "about/index.html",
    "revision": "0bd0509bc39e14c784d31fae3b78e55f"
  },
  {
    "url": "archive/index.html",
    "revision": "6d9200c34be64aa0a8db6f90a88e6c58"
  },
  {
    "url": "assets/css/0.styles.01e7ab6f.css",
    "revision": "3d178e2c188105f0c750deaa60c907f9"
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
    "url": "assets/js/12.ccdf163a.js",
    "revision": "b1891870bebd6d69a17c526831e31412"
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
    "url": "assets/js/15.1e32ff7d.js",
    "revision": "9a612e0fa081011213d18e88046b10f5"
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
    "url": "assets/js/22.7a305ffe.js",
    "revision": "1bd3bb4d8f51790609f1c29a1d0b4447"
  },
  {
    "url": "assets/js/23.6dd2a9da.js",
    "revision": "70dca67744f1ab7fb0b09b4c6126e8f1"
  },
  {
    "url": "assets/js/24.575d98c6.js",
    "revision": "a1a150c4bc17a28ef46d72ded38e0e56"
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
    "url": "assets/js/28.ef48394c.js",
    "revision": "4871e95a0b5ae88cc5a05a80bab3d3c2"
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
    "url": "assets/js/30.8883cce7.js",
    "revision": "d39fdb65871168cffc7f11213e18e0ad"
  },
  {
    "url": "assets/js/31.d0849374.js",
    "revision": "9a2480935dd8d1550a755e19afc41c12"
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
    "url": "assets/js/app.0784d35f.js",
    "revision": "e6af6e6a3e892e754e9f4423f1b2e069"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "0d5fb1f78a9b7cf5fe94439791f4fd74"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "cf97c312a5643650ca6c6ffd21bd2865"
  },
  {
    "url": "category/index.html",
    "revision": "db235aff0c2fb0c8631be518b46d3708"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "8e03e5bd9d96687525848dc1a88b8ba8"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "77780a7ecfdbd6dfc72cddf691ddd328"
  },
  {
    "url": "category/Note/index.html",
    "revision": "cfdae56afc8cbab32a56a342a85f51e2"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "ded5957eb3ae93c4dd540fbd438380d3"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "f76c79597138355ee22c3b8f91a0f406"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "1d97fdee794fd448f904df00cd5e607c"
  },
  {
    "url": "category/网络/index.html",
    "revision": "0736c2b7b06e18876d5e3c85b4f7bcbc"
  },
  {
    "url": "codes/index.html",
    "revision": "35eb4e2372292953c9adcec7acc4bf9c"
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
    "revision": "c8853208b1ff6f32ca759aaed7b97b08"
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
    "revision": "6c92494e981272d05b6a227d08c7df66"
  },
  {
    "url": "index.html",
    "revision": "63cbd8921d08469c4ff2111c88b51040"
  },
  {
    "url": "letter/index.html",
    "revision": "b7213daf3fb08bf6a44d0a472829689c"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "bd613aabefa3a92cfdd92e70add433af"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "4b03d1a6f8def88661ca74f467d926ef"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "abe3a982db506896d51c58bb57f06a41"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "04c24c4cd0a0e209cef1fdaa13906e49"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "5c7e98c7320503011cb48dc5803b1755"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "4fb824bf1cf52d61617b45a2dc6e6647"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "4c986a99de568f325f3766ee7daa997e"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "159f67af19b77836e8c9754aec2315a6"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "adf5cee383c8cf95718ea60b0dd1d26f"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "4a0076569720879aed0a632e19761b26"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "79a27161123aebfa31c19ccfd87cc3b0"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "e2a7dc59ce425f9806c50e00a2a4ad3d"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "23bcc1e2539655f4ad49c1d4bc79c151"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "3266b0f82bdbf2743fb5cfa55d95e114"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "1d004a1dd134c57c79a15a4a35f2f3cf"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "a943890fda58eaec4b6f13b2d8d9fe85"
  },
  {
    "url": "records/index.html",
    "revision": "95e899b5670206a8b74c478aaabc62eb"
  },
  {
    "url": "resume/index.html",
    "revision": "ca628acdf85b186d5f69ff52de383a2d"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "0efc59d699e6845addf3fac2b6ea3caf"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "182a0ac2ea111cd3575970de43990201"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "e572f91ed332e4e5ac9cfe6130bc11b4"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "aad4f505861b27ded8ee4001f8f5136b"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "ae6facc5a77474174281b3b6c9e6af7d"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "f456f79ad664b16aae22cf97e69da43c"
  },
  {
    "url": "tag/index.html",
    "revision": "84161342c08eb58e9214246df7231c0f"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "9635ccad144478d97b103a5ec39cf68f"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "ba00c1b930af97a7c5e475059e3a1bf2"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "069996828cb9992c2f1246620e70c682"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "673e2474cdc0dbeb24773a1db3f3fcf6"
  },
  {
    "url": "tag/List/index.html",
    "revision": "585698c0f3d0869d65a128975e671fa9"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "aef2b51485e0ccd5a845c459338a7198"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "de63578b11c2a769dcce6a7358ea6fa4"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "90cf399fb97b1318a00344c413d6833d"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "01ecca1c6147f6018c84c0286aa51bc1"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "414486cca5a5992821460e3e7b85082d"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "c62ec7a26dec4b8a49c297890e33a297"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "0068a3fcac8963266ce6ad28716f07bf"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "f01429bde9c01a7045c25a9eb3624fa9"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "89ebf4484292a84402c75f94d7c963d0"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "598ae752e8f2fcfd9758c5ee98334862"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a41f6273019ab069aa20da6caf1fcb9d"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "3aeb0755d416ac79cc51560eb7d87fe1"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "9305e24c00084fc0e09414a7c9cf1a9e"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "1caac5bd685695e902e7f5e655d07cd3"
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
