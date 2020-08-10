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
    "revision": "6f8fa0bd0441584c187414cef3deb8d9"
  },
  {
    "url": "about/index.html",
    "revision": "93b0021d9a6d4b91f96774a4ad3f4668"
  },
  {
    "url": "archive/index.html",
    "revision": "f4587c8dee8c0bf7aecaac3205bba8e7"
  },
  {
    "url": "assets/css/0.styles.d451a8be.css",
    "revision": "13f6e218198b9502e0fd1bb0a60b3fc4"
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
    "url": "assets/js/17.ff6ebb67.js",
    "revision": "a05d916ed3e44e0e0775d8781ebbac73"
  },
  {
    "url": "assets/js/18.e5aee7e5.js",
    "revision": "ebfa3926639a40457fdf2e3aee31b8d2"
  },
  {
    "url": "assets/js/19.29bd601f.js",
    "revision": "5942e1b7ad92af1e5742d1bd59d03596"
  },
  {
    "url": "assets/js/20.abcfe450.js",
    "revision": "e85033405f74fbc19ebd135d3b58c855"
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
    "url": "assets/js/23.b1a849e4.js",
    "revision": "c49507685303193579c289f1dd8a7f2d"
  },
  {
    "url": "assets/js/24.6747fcc1.js",
    "revision": "d5dbe88ae21ff443f72207f85364e05b"
  },
  {
    "url": "assets/js/25.a4fdf6f1.js",
    "revision": "9f9617b8894dc2c75520622509a4ef5f"
  },
  {
    "url": "assets/js/26.d40dc3f3.js",
    "revision": "e37731e40dbefc01dc99c88449f749cb"
  },
  {
    "url": "assets/js/27.c6f5d704.js",
    "revision": "a99e82d1ddb4387e305114539ed8804e"
  },
  {
    "url": "assets/js/28.044551ef.js",
    "revision": "dd6090bec4d9d2ed85abae30860dd1fe"
  },
  {
    "url": "assets/js/29.4abf2f19.js",
    "revision": "46c4617572b4a1919a0335bc8483a6dd"
  },
  {
    "url": "assets/js/3.28ebaa30.js",
    "revision": "66e3c820f9779a45e0df81f27173abe3"
  },
  {
    "url": "assets/js/30.76b3a638.js",
    "revision": "016701a5f003e2656ca3e2999dcff741"
  },
  {
    "url": "assets/js/31.b239ef51.js",
    "revision": "945e7e06007950f464bafc47fc7a54f5"
  },
  {
    "url": "assets/js/32.5dc399c9.js",
    "revision": "e7f9265310ca38e1788aeec14815c1b9"
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
    "url": "assets/js/8.a346728c.js",
    "revision": "6210edd60a05026f54fb2d910640e845"
  },
  {
    "url": "assets/js/9.5aafa7d5.js",
    "revision": "25dc580fb2ec68d82c8387c460eeb000"
  },
  {
    "url": "assets/js/app.12bd0343.js",
    "revision": "1b2aa92345f4d585c44485561b2c3388"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "44ab30c57539484bee610ea6897561dc"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "3546e0848cf8344705793ce24bb0f86b"
  },
  {
    "url": "category/index.html",
    "revision": "fdcaf48240dc922d760afc64fd25620b"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "0e093abe2732e3979c6a4cf3d6fef38e"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "143c00ae9141c5d2d5eb2dcf9e4009d1"
  },
  {
    "url": "category/Note/index.html",
    "revision": "96c54d0490537bab65a094113dfa56c6"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "f44b97708330f9491476a3ace7be98b4"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "bc806726a802345b4b0a5ab74de31012"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "8335bb8305a8af07c55f7c1b6ed80923"
  },
  {
    "url": "category/网络/index.html",
    "revision": "567ea36a0ea200d03834f2deb232a653"
  },
  {
    "url": "codes/index.html",
    "revision": "22bef4cc33b0f2b61e53423c8b98ab40"
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
    "revision": "39548716b72fe16814a6ea3db247eb7a"
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
    "revision": "10b8b91028e77f4e24948a2045e7ab72"
  },
  {
    "url": "index.html",
    "revision": "44525ee035b71f6c66985d1c9a8d3190"
  },
  {
    "url": "letter/index.html",
    "revision": "96e26c8f62fbe6d6051eb4f468094fb7"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "fad5c43baae158184f7d5ed664424828"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "308db0c341e6cdbbd101ca648ed2abbf"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "cfa2ad156200101b00851e5156fb4fd1"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "349891ea0b4ed66f37c3b8be07fb55d7"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "7e53183367f3b5bdd892910f99555f18"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "354326b9ea4f2e2054635d2b38c30951"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "cfa3b996a89f50a098f290c5f7a4fec1"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "ea1925ec5836304b02f165ec635c57ba"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "12157efd7334bb6a3c37d61f073624ed"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "8dec748f248a2b9a2cf22b5cbf2581bc"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "0737e7ecf68895378da5b754c7181451"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "6042267d32d64594fad947446793f97f"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "f3bfafee0c0abe28eb1ba42556cecb00"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "4b45c3330613d98f55877e2a1164f135"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "8fa484575d3050d16e3af294e6bb3986"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "5fdb1a81c9d355dd72ea039940942d7f"
  },
  {
    "url": "records/index.html",
    "revision": "2bd654bccd0f3dae898cbbc032db723c"
  },
  {
    "url": "resume/index.html",
    "revision": "11cb576b2ee7a543e234fb70b4c8ce1d"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "40efec4f6606f88c9500790679010d22"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "3e8e624194815092fc0afafcddea3f1e"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "e5a09c2e3aa25afa3029a51a4f76c70e"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "551470ba3f64f9226ec4d1752491eb86"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "63b359f9ad8a2209c8bc23f75abd98f9"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "eb84bd2080b28c823a1d11e8d11fcca1"
  },
  {
    "url": "tag/index.html",
    "revision": "016af5d5ef2a32e764bf60d9806f762d"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "13e9c3c299a19aae276eb8f1869dbf58"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "e19a52af3815e08300790b5678a64ead"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a4934e3c0fd2d966470028483769c5cc"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "c993cfa6b72dc35ba595506c57d21a02"
  },
  {
    "url": "tag/List/index.html",
    "revision": "cd11e7c985b7eeee9cbdd4bef5d2c245"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "6e37c0743633f498ae96de5d1a3911ba"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "3083d615979a1ee4e1c7378674ee2b7c"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "e265cfd67afd49a89856f4dfcebab1d4"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "4d406c964615a542953bf7ea9b3fa8c4"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "4855a04278b743467d2825f18856625a"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "0412161c9e8b7acb7a926b58b7d6dcfc"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "a9eba9cc317b282d01d862c31a2e04a7"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "358f4bcc70ca723aea881b5cb2b98a62"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "483d45ba8e14a975b19393cb6b885141"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "93f2fadf9282ac3ad853025ec5eeee01"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "043f9aed2470bef4bea91aa9a7a92a60"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "73ccaee7039e5c6924a7de75f627532f"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "147148669940977654c656371e6c5332"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "c58c8032dff39aaab551a910a477d14c"
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
