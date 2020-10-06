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
    "revision": "2a26799d9415c5b96c716f873bdbeca1"
  },
  {
    "url": "about/index.html",
    "revision": "7f0fc48f3a4bfdebcefcde1a1c843a12"
  },
  {
    "url": "archive/index.html",
    "revision": "cd0388fe17d49575c71ec254e6812ac5"
  },
  {
    "url": "assets/css/0.styles.1a03af0a.css",
    "revision": "12c1e7ad69df30f4aa4034cb5a43accd"
  },
  {
    "url": "assets/fonts/fa-brands-400.085b1dd8.ttf",
    "revision": "085b1dd8427dbeff10bd55410915a3f6"
  },
  {
    "url": "assets/fonts/fa-brands-400.0fabb660.eot",
    "revision": "0fabb6606be4c45acfeedd115d0caca4"
  },
  {
    "url": "assets/fonts/fa-brands-400.cac68c83.woff2",
    "revision": "cac68c831145804808381a7032fdc7c2"
  },
  {
    "url": "assets/fonts/fa-brands-400.dc0bd022.woff",
    "revision": "dc0bd022735ed218df547742a1b2f172"
  },
  {
    "url": "assets/fonts/fa-regular-400.05b53beb.woff",
    "revision": "05b53beb21e3ef13d28244545977152d"
  },
  {
    "url": "assets/fonts/fa-regular-400.1a78af41.ttf",
    "revision": "1a78af4105d4d56e6c34f76dc70bf1bc"
  },
  {
    "url": "assets/fonts/fa-regular-400.3a3398a6.woff2",
    "revision": "3a3398a6ef60fc64eacf45665958342e"
  },
  {
    "url": "assets/fonts/fa-regular-400.ad3a7c0d.eot",
    "revision": "ad3a7c0d77e09602f4ab73db3660ffd8"
  },
  {
    "url": "assets/fonts/fa-solid-900.781e85bb.ttf",
    "revision": "781e85bb50c8e8301c30de56b31b1f04"
  },
  {
    "url": "assets/fonts/fa-solid-900.89bd2e38.eot",
    "revision": "89bd2e38475e441a5cd70f663f921d61"
  },
  {
    "url": "assets/fonts/fa-solid-900.c500da19.woff2",
    "revision": "c500da19d776384ba69573ae6fe274e7"
  },
  {
    "url": "assets/fonts/fa-solid-900.ee09ad75.woff",
    "revision": "ee09ad7553b8ad3d81150d609d5341a0"
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
    "url": "assets/img/fa-brands-400.ccfdb9dc.svg",
    "revision": "ccfdb9dc442be0c629d331e94497428b"
  },
  {
    "url": "assets/img/fa-regular-400.e75dfd90.svg",
    "revision": "e75dfd904d366a2560c63c23cfc98ef8"
  },
  {
    "url": "assets/img/fa-solid-900.03ba7cb7.svg",
    "revision": "03ba7cb710104df27f1c9c46d64bee4e"
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
    "url": "assets/js/1.672067d1.js",
    "revision": "0dc55d878717681877a2d4d6d40c2aee"
  },
  {
    "url": "assets/js/10.86aef547.js",
    "revision": "75f19ecf137cb4d6572bf2eac9aec404"
  },
  {
    "url": "assets/js/11.508264ff.js",
    "revision": "6be45d81e1619a01d7aeb33ddb6ae756"
  },
  {
    "url": "assets/js/12.ace79a4a.js",
    "revision": "a2599476de81885044f33508173207a0"
  },
  {
    "url": "assets/js/13.a111e1d8.js",
    "revision": "b53cf64e8b0087db0df92de0bbc433e8"
  },
  {
    "url": "assets/js/14.6fbad346.js",
    "revision": "cd4564a555dcd3ebd564e0ddb2c7d731"
  },
  {
    "url": "assets/js/15.03ca0117.js",
    "revision": "6af1940e6950ad28a3a6aab34ccd3505"
  },
  {
    "url": "assets/js/16.ee98ab82.js",
    "revision": "0648700a2f102dba6f7a172fc5a46eaa"
  },
  {
    "url": "assets/js/17.22a76265.js",
    "revision": "3cec7fc9527665a8bd894d92327de183"
  },
  {
    "url": "assets/js/18.865e0945.js",
    "revision": "c8dd291a7884b8b046512e3029096a9a"
  },
  {
    "url": "assets/js/19.b9b32ff2.js",
    "revision": "36c1012d696a854d33fe6e12b273a514"
  },
  {
    "url": "assets/js/20.e70eff30.js",
    "revision": "04169130ce797dbdcc35008553bc421d"
  },
  {
    "url": "assets/js/21.62b5eb46.js",
    "revision": "3b2f32358e3c442e9d4bff7083fe05c7"
  },
  {
    "url": "assets/js/22.1c03e5d3.js",
    "revision": "ec9990f49030bc8ff1a2ea9d4b01fac7"
  },
  {
    "url": "assets/js/23.01a487ad.js",
    "revision": "28ba999f7cec24e7e109faa4af23ecaa"
  },
  {
    "url": "assets/js/24.fa6f3cc4.js",
    "revision": "9c156f2802dc12a01116709d9c3df137"
  },
  {
    "url": "assets/js/25.eca66fb8.js",
    "revision": "b010d6f86864f9792fe00b3829ac12d9"
  },
  {
    "url": "assets/js/26.b0806bb0.js",
    "revision": "ed489ef0f462399f5bff7013bf386171"
  },
  {
    "url": "assets/js/27.a55acd89.js",
    "revision": "25ec9a7e87db1ced486bc569c78539e9"
  },
  {
    "url": "assets/js/28.320640be.js",
    "revision": "f35582c438888fb3dc6efb941d478e83"
  },
  {
    "url": "assets/js/29.0c14897e.js",
    "revision": "1ad2671cba0455d8071cb3f1ce38e1d3"
  },
  {
    "url": "assets/js/30.7a00d4b4.js",
    "revision": "d39fdb65871168cffc7f11213e18e0ad"
  },
  {
    "url": "assets/js/31.19b2f4ff.js",
    "revision": "a60e3bc3499d8ac562e2fe495b634b8b"
  },
  {
    "url": "assets/js/32.a2bbc8db.js",
    "revision": "5838da30ee42d6892f5f29be910abcd6"
  },
  {
    "url": "assets/js/33.d367901e.js",
    "revision": "f98d9cafd79e3aeda6f2f458cb3a6a6b"
  },
  {
    "url": "assets/js/34.43f57dca.js",
    "revision": "66a21aa2cd4c6daf0792643972f6e177"
  },
  {
    "url": "assets/js/35.bd2cd2c0.js",
    "revision": "1a525d90f5cff2a6b5a118d38217c619"
  },
  {
    "url": "assets/js/36.12b95e36.js",
    "revision": "9442d5f7887ddd43aad1bd8ccde85ef7"
  },
  {
    "url": "assets/js/37.a433a1ae.js",
    "revision": "817ad84aa511faad4b37442f843d2eaa"
  },
  {
    "url": "assets/js/4.1beab966.js",
    "revision": "182e79168caba9650137e004e27a3eef"
  },
  {
    "url": "assets/js/5.20c66713.js",
    "revision": "ac0a90498dd9d132bcb5ae279dea0b0b"
  },
  {
    "url": "assets/js/6.3235d4a5.js",
    "revision": "7267965879198460c1eb957bb035299b"
  },
  {
    "url": "assets/js/7.1edbcfec.js",
    "revision": "cb56e36ea885e26a6450ac7588bc279e"
  },
  {
    "url": "assets/js/8.521ddc97.js",
    "revision": "0d025bf83c49fed91754622838ba52a4"
  },
  {
    "url": "assets/js/9.9e0a1692.js",
    "revision": "478999bb51cbde312d2ef31f04d3cfaf"
  },
  {
    "url": "assets/js/app.6617e3ae.js",
    "revision": "a11a19116c8f625646d74694512414f9"
  },
  {
    "url": "assets/js/vuejs-paginate.e464217d.js",
    "revision": "f6124c4d00ea453132257903ec878832"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "7446e2cdaf5a911db817e123d0a6c477"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "a7686bc0853083d1fddb71973a81be47"
  },
  {
    "url": "category/index.html",
    "revision": "6d3a4ecff3c1dbf89f98ca181be092a0"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "bcc83f41242232faace1a4e90ef77bcd"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "3172d0f5be8227df0fea2a0d2fea1d42"
  },
  {
    "url": "category/Note/index.html",
    "revision": "2378680c1306d9c82504ee6ec2c2ffdc"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "5e92b315d63bbf58f1b23ba4eb2ff4b1"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "126f947e69832b0d524db48fe66b4bcf"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "335832663c7a9cf609999ea4e81b67f4"
  },
  {
    "url": "category/网络/index.html",
    "revision": "54f4e75c62088ba00982ac6602711b3e"
  },
  {
    "url": "codes/index.html",
    "revision": "0b6956657057d9363adad99350c70d1d"
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
    "revision": "cfa85edf063738eb4b770a239aad0aa7"
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
    "revision": "6c908e5844ab1427a58133385edff45e"
  },
  {
    "url": "index.html",
    "revision": "a0fd810c2ae097dab36eda6851bf8afc"
  },
  {
    "url": "letter/index.html",
    "revision": "7de2579c32032ef2551d46aef013b152"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "5fceed4b736852a32ff6c56a02e701b0"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "f7b741b71b90a140c05e95e32023da08"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "d70e58ff9e22ab14af424c6d52714dce"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "8fc33be6330402159dc3639f9f3a6bdf"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "bab0c445e7c8954043599bbdccb82667"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "6e22663bacaf5f2941e4a3c8b2e24406"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "5dc6b5257f28cbc66f97779c90bdf257"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "56d338a4f9f7f69269194480226cef70"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "87b56215b17fee9b73423c36ee684e9d"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "1ad4ae04c98a873d913f67e4109fd0fa"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "7b26783bc7775d41a719eebcc1b85dee"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "e5becee618cc2cec67ba8e48e9a1c905"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "cf76685a1366265a3450b293fd31d204"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "a88a12f050c2d7c41393f3cc50873482"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "07392e531fb86449fc34cf9e764ebd77"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "7a8e6494a1e131b203b0101205e82ddf"
  },
  {
    "url": "records/index.html",
    "revision": "6077b35429a7440e0f20636c06eb660c"
  },
  {
    "url": "resume/index.html",
    "revision": "40af140994c1bcd7ef2addd43e132fda"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "dd01884b93abd43fa2bb3789157fe743"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "382c488d0310b6a9acd335e599456b68"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "386a44b77cd3be96c4d4b08daedb50f0"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "699542e1b2fc66ba15187af1cae03b9c"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "a9b5e386cd7cfd74697b1cdaf80f5b3c"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "ab3d8b27a2743135d155282bd07fe9ae"
  },
  {
    "url": "tag/index.html",
    "revision": "6c6a77712ba500797af0696cdf644265"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "1cb226d10b731c62705ec7dafcebacb2"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "2facefbfbcb3ba0049d0f196c3b5dfc8"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "88c67339550e69e3c9387764d46cc631"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "2b911365daee49decd4c27e878b9d3f9"
  },
  {
    "url": "tag/List/index.html",
    "revision": "99ecc44c7df311fd15d1504b3d6247bf"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "d0010c7e4b3dc28c38b40feecb595727"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "ab08d10c33ba3ecf6d05e7b5428169b1"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "647108b277a754383bf9407d67917e08"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "12adc419717132ff42a9f8fd2900e1b1"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "680fdc2e8052a11fb9d3ccb84b7838ae"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "5bfcc551ae1c871485991ccc28f3d197"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "1c837596c61a42f6e885dcc96ca99ce5"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "accafff7d2fa1e14a6d0f08cb54eea25"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "8148cfee019d9a2cd52e034919787c5e"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "f9b8e7cbc889cf01ac6dde07edb407c9"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "1c6da3482e51556305d07d03cab24bf3"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "54dd1e6b0cdb46018e69f6a69610c31f"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "526b58d54f81c212cad3061b062ebd9a"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "b36484dcb74af246e0dc8b7a5dade9ee"
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
