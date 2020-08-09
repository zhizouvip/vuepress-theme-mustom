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
    "revision": "ce7cd42c89a438a68a76cba12b333501"
  },
  {
    "url": "about/index.html",
    "revision": "bd71a67ae243f69b6e6c0437dcb2a62f"
  },
  {
    "url": "archive/index.html",
    "revision": "64c29ce2fc5aaf6f6f55ce2552cb2e9e"
  },
  {
    "url": "assets/css/0.styles.06cc0abb.css",
    "revision": "d64ac07d6d0c60cfaac535ffce1bf6fc"
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
    "url": "assets/js/12.98abf4ed.js",
    "revision": "c525213a5eb05e39427492d81b594950"
  },
  {
    "url": "assets/js/13.2ebe250d.js",
    "revision": "13ceba19b470ffebd0e7f9676a8dcacc"
  },
  {
    "url": "assets/js/14.c6c5585c.js",
    "revision": "a576832ee79817ab30cabe068a9fa982"
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
    "url": "assets/js/26.beae3aae.js",
    "revision": "2a0f1801c8d3d5b6c7dd198382b7c447"
  },
  {
    "url": "assets/js/27.c6f5d704.js",
    "revision": "a99e82d1ddb4387e305114539ed8804e"
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
    "url": "assets/js/3.28ebaa30.js",
    "revision": "66e3c820f9779a45e0df81f27173abe3"
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
    "url": "assets/js/4.c35927bd.js",
    "revision": "a02b711e5cd95e6eaa9003c26d8555e7"
  },
  {
    "url": "assets/js/5.1210db7d.js",
    "revision": "a5fc43e636e3ee5e5c6a8da9948e48e7"
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
    "url": "assets/js/app.c015aaee.js",
    "revision": "0fd7e01d1afc4661cf97823e6d9cef11"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "89cc9069b2cc24e873e2ea00032a83fe"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "731fda221b85526acd9dcddfa7942906"
  },
  {
    "url": "category/index.html",
    "revision": "df012cb25261498c2ac06d2ba990529f"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "3006c87c5072e9f3b42341738671f702"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "7be3f976dc2ad0e06e47d13ab8d5d67d"
  },
  {
    "url": "category/Note/index.html",
    "revision": "ffaca6f462dceebd8cf41c8f06dcc70a"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "c83eb54b76a3afc87d7c99f8c5bc709b"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "17bed47414f6281b78f15833949801b1"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "13e465a71264642499972631710f34e8"
  },
  {
    "url": "category/网络/index.html",
    "revision": "27e7b01306710dd98452407d79093db3"
  },
  {
    "url": "codes/index.html",
    "revision": "0e7669ca053489f35bd17bf4fea19ac1"
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
    "revision": "0e87b828691194a5695d4f077d502059"
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
    "revision": "793030f9a7efd6101212d403168daa1b"
  },
  {
    "url": "index.html",
    "revision": "cfc13233ab8090502ddb89a5e043ff56"
  },
  {
    "url": "letter/index.html",
    "revision": "0dcb78a4cbd06f0dcb7b9eab510eb9b1"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "8674ee80f49cb6179abf4468e5775864"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "f4bc4ed2ea4236d41f0fa79189999913"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "321909ccbc1b17121ab87cd6c20966d5"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "40c9ab7613d6063842f3c0a7e61ad14d"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "c795a3326c0466f7f84f582b77b6f49e"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "7a4cdd4309a18aaaf7665432ae0a8ece"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "4d0b12fb6ba1f544c77d479c8005d3c6"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "e19a006b5eff1fbc36fea53c95801169"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "f01b1bc7e01b60681a0499596480321f"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "a4d75b6e199680a05f8202c965c04394"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "0edfc7f40fffb98e3a0c7e7c58281910"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "8cec61c47c7fc69d4fd5e955fb96d77b"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "1abf4e475313c89f9edd9304a7296c62"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "68c7354f831b916d537711935d5da71c"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "8881beebd0952826d31d0661a5246af7"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "96797e0cd19a8c3b87a6644c36cb6fca"
  },
  {
    "url": "records/index.html",
    "revision": "e8b8f27be6e89412a29892861b8e2593"
  },
  {
    "url": "resume/index.html",
    "revision": "8944fbd82c482bab3503c4ae5e334bf8"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "057fe3123fd5c95263af8119427a3200"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "127257aef054d0b72e106f8ed3a63548"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "368c263e34405095d0b1fc8a0187d6a5"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "ab5dd14e50a32d135d6d2786accd59e7"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "42480c3eee0047b1391527d4a2fe2a04"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "42cdef7f5eb150f2dad6e4cd31f81ad7"
  },
  {
    "url": "tag/index.html",
    "revision": "d4c023016fd00de60b280b7f96869f5e"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "b659649bf8b9e34c90e15404fe6bff4a"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "54fce7ee0a9de9b5485e73e994dfa95b"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "24147a968fc4fc36df67773d57377388"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "75b4faf75f155263a84054b99c67ec56"
  },
  {
    "url": "tag/List/index.html",
    "revision": "58a1ef5dd75cc7fdd06c4dee94bad2da"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "55faaa44c8c9e6c0e64e3e4c8594190c"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "6d48b6c08a2169c0fedba2221e5718dc"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "d7f47bca64c6db410ada3e50a1510c00"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "8abb8e7b7556fb377141afa389d0ab08"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "9032bdb49cb46e6da0f92f6c9397ed0d"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "27c532d7c37307d0723fc75916f58090"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "a477c4877f9f4d3a95fb29e5e8b6f6ec"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "4b751179cb99fb748240d571f00bc587"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "f7ce96dfc029f0d9fffa730052c2a862"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "8db98156f1eb9e9a19c0dd34d66fb553"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "1190bcaec1b60a3652527f622b62d3c6"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "210c1cf85e61b6627a8bf5802457fc51"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "4c857e802303888d163f39974ad9141c"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "0c68bac7f92c92def8b88c8ed241c8b0"
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
