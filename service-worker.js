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
    "revision": "dc4ffd40b1601044ecf707b3717ec5f8"
  },
  {
    "url": "about/index.html",
    "revision": "3bd7c0f4b4ebc1aee6c8c9c9ca471e37"
  },
  {
    "url": "archive/index.html",
    "revision": "20e67199ea62ac18e379649ba081a9d2"
  },
  {
    "url": "assets/css/0.styles.7fbf3592.css",
    "revision": "e6de772c2b447cf73030707d89670a62"
  },
  {
    "url": "assets/fonts/fa-brands-400.8300bd7f.ttf",
    "revision": "8300bd7f30e0a313c1d772b49d96cb8e"
  },
  {
    "url": "assets/fonts/fa-brands-400.ad527cc5.woff",
    "revision": "ad527cc5ec23d6da66e8a1d6772ea6d3"
  },
  {
    "url": "assets/fonts/fa-brands-400.e2ca6541.eot",
    "revision": "e2ca6541bff3a3e9f4799ee327b28c58"
  },
  {
    "url": "assets/fonts/fa-brands-400.f075c50f.woff2",
    "revision": "f075c50f89795e4cdb4d45b51f1a6800"
  },
  {
    "url": "assets/fonts/fa-regular-400.3c6879c4.woff",
    "revision": "3c6879c4f342203d099bdd66dce6d396"
  },
  {
    "url": "assets/fonts/fa-regular-400.49f00693.ttf",
    "revision": "49f00693b0e5d45097832ef5ea1bc541"
  },
  {
    "url": "assets/fonts/fa-regular-400.4a74738e.woff2",
    "revision": "4a74738e7728e93c4394b8604081da62"
  },
  {
    "url": "assets/fonts/fa-regular-400.b01516c1.eot",
    "revision": "b01516c1808be557667befec76cd6318"
  },
  {
    "url": "assets/fonts/fa-solid-900.205f07b3.ttf",
    "revision": "205f07b3883c484f27f40d21a92950d4"
  },
  {
    "url": "assets/fonts/fa-solid-900.4451e1d8.woff",
    "revision": "4451e1d86df7491dd874f2c41eee1053"
  },
  {
    "url": "assets/fonts/fa-solid-900.8ac31674.eot",
    "revision": "8ac3167427b1d5d2967646bd8f7a0587"
  },
  {
    "url": "assets/fonts/fa-solid-900.8e1ed89b.woff2",
    "revision": "8e1ed89b6ccb8ce41faf5cb672677105"
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
    "url": "assets/img/fa-brands-400.2f122423.svg",
    "revision": "2f12242375edd68e9013ecfb59c672e9"
  },
  {
    "url": "assets/img/fa-regular-400.3602b7e8.svg",
    "revision": "3602b7e8b2cb1462b0bef9738757ef8a"
  },
  {
    "url": "assets/img/fa-solid-900.664de393.svg",
    "revision": "664de3932dd6291b4b8a8c0ddbcb4c61"
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
    "url": "assets/js/13.e197e95c.js",
    "revision": "fe06bf3c389e93fad5cb23417490948c"
  },
  {
    "url": "assets/js/14.07299b0e.js",
    "revision": "863b7e652f16933eb6df994d0beec3c9"
  },
  {
    "url": "assets/js/15.edfc728d.js",
    "revision": "fbefc8ab0e38435707178d0b18ed713d"
  },
  {
    "url": "assets/js/16.af41cb64.js",
    "revision": "9837c8c50757c31f16fad3b0f200b50a"
  },
  {
    "url": "assets/js/17.68f40267.js",
    "revision": "f5c9a83d79a49fd11484e1aa9be0a9d3"
  },
  {
    "url": "assets/js/18.10c7d68a.js",
    "revision": "f8c2e8f9558e906249daf0beafb757a9"
  },
  {
    "url": "assets/js/19.9495b072.js",
    "revision": "ab1ec0d6306376039364aa74d18394c1"
  },
  {
    "url": "assets/js/20.e70eff30.js",
    "revision": "04169130ce797dbdcc35008553bc421d"
  },
  {
    "url": "assets/js/21.413c31fe.js",
    "revision": "3ff9b64adf30a104eb79e5584a5984a8"
  },
  {
    "url": "assets/js/22.bc2c4071.js",
    "revision": "92547805aa939cf5b196651d0ea7216b"
  },
  {
    "url": "assets/js/23.b6ee7489.js",
    "revision": "7180da489e49e0661727f056f001179e"
  },
  {
    "url": "assets/js/24.dda1115a.js",
    "revision": "fc85b9db724c19faf09df07aa61b9dbe"
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
    "url": "assets/js/28.050f44d9.js",
    "revision": "7b0faadf8d7186371ec5f1f415863084"
  },
  {
    "url": "assets/js/29.af2e78f4.js",
    "revision": "be882cf060decf3d096b1b5411651929"
  },
  {
    "url": "assets/js/30.612b2a19.js",
    "revision": "fe76ae41486d5a3db933891be60a7dc2"
  },
  {
    "url": "assets/js/31.19b2f4ff.js",
    "revision": "a60e3bc3499d8ac562e2fe495b634b8b"
  },
  {
    "url": "assets/js/32.1ee9baae.js",
    "revision": "509b6b61248799bea722408ca4654e36"
  },
  {
    "url": "assets/js/33.42c66abd.js",
    "revision": "d25fe72aaf512fb3548c3226296be63c"
  },
  {
    "url": "assets/js/34.0e1882f7.js",
    "revision": "3a37ab7beb9bb726c032cb377d121de0"
  },
  {
    "url": "assets/js/35.95578c51.js",
    "revision": "7f0966c18c2b0e587a92b123282087de"
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
    "url": "assets/js/6.ed22e716.js",
    "revision": "30ae78fd804c0a97866a1604a6dba2ac"
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
    "url": "assets/js/app.6cee56e0.js",
    "revision": "83e3279061b43987459f2003a65da2c9"
  },
  {
    "url": "assets/js/vuejs-paginate.e464217d.js",
    "revision": "f6124c4d00ea453132257903ec878832"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "6b54ca62cb69593ac474a4737d53329b"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "008707f4230fd1d668749b3deb952e48"
  },
  {
    "url": "category/index.html",
    "revision": "44c8d3a0fac086b80a2f7439c35e85af"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "57554f1264f7929592ca8952f94a6312"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "d6f366e6df8fb89fd3950caca95fef16"
  },
  {
    "url": "category/Note/index.html",
    "revision": "f268620f909da1cc3362885d837c0d4a"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "d16e516f50232a186498222a214acc25"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "c55930b11c354b571bee3c6f3f707a97"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "f0be2d1694be5e9aad629ca3633e052a"
  },
  {
    "url": "category/网络/index.html",
    "revision": "c3f08b0a6d94537669d195160f0a031d"
  },
  {
    "url": "codes/index.html",
    "revision": "6561709f0aff50427b82a9e87f202202"
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
    "revision": "f12fd5444f7aba2a2153b5898b00066c"
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
    "revision": "44592bddb4efe3aac0b7ab48f828d2a2"
  },
  {
    "url": "index.html",
    "revision": "d86168d1c652b949791dd08325beff68"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "e41d606ab72a4d1071dbdf3a0a4fd11a"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "4f4c61b18041571d01268ff3d4a25670"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "965492ee33d198a875ab06407c6bc6d9"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "acae114e6c5c8ba20287c91588d5b765"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "eaf2ffcb0ecc13d3929e5456a332cf8f"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "3465260d4f9b596aa7db353014ae1cf5"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "d77d18b96bb677c1de1c44d6928be122"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "d8757f58140597e2ddcb88b91ada6733"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "8ff86129402e0169e9adcc3ca4a780be"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "9bdb22431858420a3e6d88482c8eb86a"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "0908dd85b629d9bf6344f48697dccab3"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "5fe0767e49e9b32784dbdfa6cd17debf"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "18a47a997a9cda2ee4c50ec7cbe4056f"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "908c0ab1786490ac920542dcbb654bf8"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "cfc31315c4a3845da855794f888ddf59"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "a7ece4636e7d8b2e3ebb544c252aba4f"
  },
  {
    "url": "records/index.html",
    "revision": "12e72463d6039a40c3f2c0aa9e9e2ad2"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "67ce50e9b0acfe11f8494d52efc5b196"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "19ac8b7d4df4e8b82af445e1a412fb5f"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "da74b8c073c969e3e9ba05af972df6b3"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "1a525d620fd63a328258e910efb508e8"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "e00aebd5276a24e6f5308427c9d5d0f3"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "1a3a71122a256c7c043a92586239788d"
  },
  {
    "url": "tag/index.html",
    "revision": "cfbdb441a112303d6dcfde98c887b67f"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "d40cfcf98889ecdc3a3c54197f4327a4"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "8301b1acbe6c8d14698b98ab90d2c926"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "24377a489ca3c502ca4f1dbcb491286d"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "b9a43fe60e4c1f1f8298aaab10af30c1"
  },
  {
    "url": "tag/List/index.html",
    "revision": "4ecd719d7784647a9ce1dd102431d957"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "18427e3deea57a3240d38aa8e0d366ae"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "82f236a92d7d80e19bc9baee1be17231"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "1e89b75538ea3082f97fa00f05dc5cf4"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "79b582bd9deb245cbc6c8969e03fa149"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "564b7bbc7b60210b19f2ea9dc42eb22d"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "739c05f3e944a43e1047e9f865912ebc"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "2e8d32f3985ae54caf7a60b119628f7b"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "555661756f17e6a8e83015a973d1f0d3"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "d0b9e205dd221d7e43fe69d8ccf019a5"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "90c80331c1ca9be0662111ad286deed8"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "9636a217890ee896734adfd5c6e663dc"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "843c2c2250f5a3362e03f86446d22791"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "353e3e5d341741a5c71fff9726274e03"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "7be4ef257cef7bf240a186ac7a3e22fb"
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
