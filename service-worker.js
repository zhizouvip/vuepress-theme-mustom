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
    "revision": "9383d37c46fc04895b3f3b5a5c752064"
  },
  {
    "url": "about/index.html",
    "revision": "ab1c22b2c0e588c91f97ca8318054d44"
  },
  {
    "url": "archive/index.html",
    "revision": "44fb073adc8eb58c0799d64221469fa5"
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
    "url": "assets/js/14.c6c5585c.js",
    "revision": "a576832ee79817ab30cabe068a9fa982"
  },
  {
    "url": "assets/js/15.9352cbff.js",
    "revision": "ab9430ba10127b2a14083af1100bdce9"
  },
  {
    "url": "assets/js/16.dcfd3443.js",
    "revision": "ced9dc4e308633288b5dc305b9f8ff1b"
  },
  {
    "url": "assets/js/17.a1945e62.js",
    "revision": "cd423aaa30c422ccfb549ab04f83afd8"
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
    "url": "assets/js/21.a3fc7482.js",
    "revision": "2af830eeb4e21b54e9c0e283330bfa33"
  },
  {
    "url": "assets/js/22.d69058e3.js",
    "revision": "48dd024897669ae0baddca3af139ccfa"
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
    "url": "assets/js/26.585137d3.js",
    "revision": "bc4cb7fe79c1ea91b5c20a8b423ae96c"
  },
  {
    "url": "assets/js/27.169d2c4c.js",
    "revision": "f02aa4a02bad4200bea4bc7a5ae380ac"
  },
  {
    "url": "assets/js/28.973497a9.js",
    "revision": "58bfba80bf3e64dbad8cb16b6e4f5fd9"
  },
  {
    "url": "assets/js/29.6d2a076f.js",
    "revision": "52fa3e215f02669189bd1fa0dfabe967"
  },
  {
    "url": "assets/js/3.d9b6aa03.js",
    "revision": "3278b7a6ed1e0246d40bf0f6ae1e34d9"
  },
  {
    "url": "assets/js/30.76b3a638.js",
    "revision": "016701a5f003e2656ca3e2999dcff741"
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
    "url": "assets/js/app.0d36ed1e.js",
    "revision": "23f68f7ba3d277b9d97f48d030081e76"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "c6a4b70f5f70d0177cc4726434d7e03a"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "d6fc558e2c01fdcdaab3fc60a9fa92bf"
  },
  {
    "url": "category/index.html",
    "revision": "dfa2485abb49af718306ddf64ba406ce"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "5d7d1918d58659babb011deb940e0801"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "11e550779fc78f728034b0a8ed7f01fc"
  },
  {
    "url": "category/Note/index.html",
    "revision": "a0276b90596d4604377e8ca5f92ff8d4"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "5e5641b6008c85a9d61f5be9397a5c17"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "27e31c54b3a3b923884d33c36d4e8f1a"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "27366c2d427850335c221dad96c127b5"
  },
  {
    "url": "category/网络/index.html",
    "revision": "8eff99973b0870688660647abcf8b646"
  },
  {
    "url": "codes/index.html",
    "revision": "3688815c598db2e26de9b52423b6dac8"
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
    "revision": "79a3016f95fed9dc28681b65fef34c60"
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
    "revision": "82445bf836556229f45c9d23e1b7827b"
  },
  {
    "url": "index.html",
    "revision": "c6c3336560dc566c5f378393df71173a"
  },
  {
    "url": "letter/index.html",
    "revision": "a1589929b84ab9a45cff92c7c597b57d"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "9a989497a8b784ce8bf72bff18b66ece"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "9cce42ae01d8b3c95de42665ed4ef826"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "91d550a3028c1be921f097a9b6a4131d"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "928e4fcb39586a4b414ebcb153bb42f5"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "d266f62794ad2a0f08a99720a4993527"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "21de165d33979aca56b4f031b507bc5a"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "c1bcd4b1ccdf6ef58a61e52c4b8c89b9"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "c1e91e38dd25641d675d0dc65ecb7e5b"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "717a0e0095cf880a5aaa496c74b4190e"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "130bdefc82142ed0c87a1e39129a082a"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "d752b1067fb4e8216b563b4a76bce8f8"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "7ef986f7a018759394d1d4a049e57f3f"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "0c88d30ca3c8cdfabd0b8b7937f9e4eb"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "56b30c33d2feba76261c7a751bb6b25a"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "7658ecd12cf6d594715d98cd1da231b0"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "d36564ee15b6e96457e9c2b045e530ec"
  },
  {
    "url": "records/index.html",
    "revision": "c2f98f18c12cf4c26a31b645c105a5ef"
  },
  {
    "url": "resume/index.html",
    "revision": "4c7e5e7254a7ca2aa30a44e437425c29"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "da7823cf51a98a2ab4791c79649cc97e"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "a05697276de5218d7c4585de4827a2f6"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "fe335b1805996da5b054474546fc1538"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "c686dca4c474b902a55646e0a3dbae17"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "ccc8ad0abcafaa1f2028f32aed9f085b"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "a0514e4993b5520e4698c09bb03a70d9"
  },
  {
    "url": "tag/index.html",
    "revision": "96778d4292da239cd71ccdbb7552275f"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "e4c043271cc0428a141e63cd72f7d46a"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "32726cd2e45a147cf6e98bb108ed16d9"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "23d78ac92aff5e3a6ff5e53b4d73a08e"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "14d6eccd38388a9c0e27395966048ef1"
  },
  {
    "url": "tag/List/index.html",
    "revision": "b12d0fe3e47e46b7a11cc4b05431b85d"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "32149d6181095dddad4fbccc2ebb3cf9"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "c4646e69ae83613228fcea780d8652c0"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "f129d9e0bc3ae6ec50ac8266a1593d8c"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "936a5a32ff29bfd7cd8543606e354680"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "754af19322b05959774cc24f7a787e0e"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "075d19ee0266850099c76673ca060955"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "874bce703f26fe14027a3e22974ad2a6"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "8b05fcfcc6a65dfcfbc31c693bad2b06"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "34d7367d1cb818778d760ba196aec3ba"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "9ed968ee3ef8ad73baf5825ce0e44dca"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "20bf3d01f80560996042c76f800deb6a"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "d72020dd3887c41b57a6db81199dd861"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "8e203c99ae859a0ebd29014c4ea596b7"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "1ed7e574940f38cd5d62ffd66dc16d18"
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
