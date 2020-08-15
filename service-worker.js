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
    "revision": "eb5d30ede9f54f12733a404c734a66d3"
  },
  {
    "url": "about/index.html",
    "revision": "6716ad0b2f25d0df14ba4aac8e6ddc42"
  },
  {
    "url": "archive/index.html",
    "revision": "6fc5bc46f83b12ce1df7ad260ef978dd"
  },
  {
    "url": "assets/css/0.styles.9d0ae221.css",
    "revision": "9121e1d0a2aa6b3af9020ef5c0e20e9e"
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
    "url": "assets/js/13.88ab2cd4.js",
    "revision": "518dcfa478a42523c89fde27b03fc868"
  },
  {
    "url": "assets/js/14.57d48b65.js",
    "revision": "1fe5bd9a620f2c33ec8d69d9972c1e77"
  },
  {
    "url": "assets/js/15.49e83323.js",
    "revision": "885d29a8f5b956d02545df92de7b4b48"
  },
  {
    "url": "assets/js/16.d3be88e0.js",
    "revision": "92c3bbfd0f68c2860fb270ce2b6b9f81"
  },
  {
    "url": "assets/js/17.a1945e62.js",
    "revision": "cd423aaa30c422ccfb549ab04f83afd8"
  },
  {
    "url": "assets/js/18.ab2531ae.js",
    "revision": "9789020cbafdd75eab051a28e6791b28"
  },
  {
    "url": "assets/js/19.01476ca1.js",
    "revision": "40fd37b4190e399726a7f04fd826ba22"
  },
  {
    "url": "assets/js/20.eaf50e2c.js",
    "revision": "ba05736d3d25360846dc4d5598cdcb97"
  },
  {
    "url": "assets/js/21.57f0fe0a.js",
    "revision": "782e97262b830b17ddeee0cd2c002f9b"
  },
  {
    "url": "assets/js/22.d69058e3.js",
    "revision": "48dd024897669ae0baddca3af139ccfa"
  },
  {
    "url": "assets/js/23.75a65d40.js",
    "revision": "9877f61ed45b4159f1b24d7a5af8546b"
  },
  {
    "url": "assets/js/24.42e8ed46.js",
    "revision": "c25125e48efd948e1ea85e07c881c8ef"
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
    "url": "assets/js/3.63cfe4f8.js",
    "revision": "96b9b47382d776246683ac59042a597c"
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
    "url": "assets/js/5.ca1bf003.js",
    "revision": "3925e22efcc1aa1b65cab5d1bc04706c"
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
    "url": "assets/js/app.85a9524a.js",
    "revision": "62cd5a87d9e1ce6c651acc0593637fbb"
  },
  {
    "url": "assets/js/vuejs-paginate.b61c3606.js",
    "revision": "e01e89995696176eb92f84fd965fbf8d"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "022cd6ec26dc8e32dc4cad84ef37e221"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "d2f261f64497a104618121597a7b178f"
  },
  {
    "url": "category/index.html",
    "revision": "5a4ea20a4a8018b5411189f07ba45011"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "3e9134ec98b966280d326339c96e85ab"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "7052ac7cb56e4d877eaaebbffdadb3cf"
  },
  {
    "url": "category/Note/index.html",
    "revision": "c1fc8519aa7d54cda563dc204614dda2"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "411ed6113a0c755e2c20755fc483e6e4"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "3f16e4c72b608382c44da3733e701ba3"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "f85d67a56b087fea81631afe86d7970a"
  },
  {
    "url": "category/网络/index.html",
    "revision": "399058ce0c915d696bf6555ce00b2bcd"
  },
  {
    "url": "codes/index.html",
    "revision": "d4ae2be7e343dbc2fbea863e0d727696"
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
    "revision": "57d3a94d1264895ccf38b7ec11f4138f"
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
    "revision": "42322cdebaf9f3858cc2901217753566"
  },
  {
    "url": "index.html",
    "revision": "cdbc204876af0f55a74766e9af1fd787"
  },
  {
    "url": "letter/index.html",
    "revision": "7c9da478caf6f45e6a4ec5a6310ee848"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "349ac72c22f091d798bef32b8347475b"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "211d5baae9d76e79c55fcbdad2695997"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "1cab705cff05ae5d759e7b009d19568c"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "546faeb886162230051125763b8446db"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "e1addbbfe2ee2e518316e75d37429551"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "16bdbbb8b38d77ee8dcb8e63dbbbae60"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "7a26b05b14a2676e75da38725d359651"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "662fa57cfa0b9b25504d6b948325cb1d"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "dd80e9fc046640f3f66ced574d7a16ea"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "175dc2e741abd07ebac253a01a495613"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "02988a3d3daaf02cad7d13a2c17c77df"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "7b138b276212ecaab31bb00b9642a297"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "e66765d0aed9dd4d85d61626c1d9f93f"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "a1270ebef2b091b74596591e43a3f46e"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "0ff9bf5c595079378b724399edfc1529"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "5d619e9b63a49b61cbcec2704c2f02cd"
  },
  {
    "url": "records/index.html",
    "revision": "fd1452a11b7befbc46f4ea5b5c39ef34"
  },
  {
    "url": "resume/index.html",
    "revision": "becd1a290504e837ece490d578b68ffe"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "12cfb041c02283d477ea240bd8f3286e"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "421b59b013f2a51d8feb48d133a1d351"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "80957cd44366764a20e445a732f92307"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "c399815ce34ada4405979deb976ef88b"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "b256cac9054dc504bf31e9535b017cb3"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "04f33db9b7510a5dbb900709c06584bc"
  },
  {
    "url": "tag/index.html",
    "revision": "0789b10d7b1e4ccb7524f40973aa07a9"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "ea2dad8ae8f99ace5e8a75475e17dd30"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "ab2e7b9632acb1eb96f80d640e013192"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "f1a559917ce7fe448d4cd25e3ddd979e"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "40c64461b68e27d5ad13c50fb067786f"
  },
  {
    "url": "tag/List/index.html",
    "revision": "2fc92cddd0faf7e1a0773d642ca0f35b"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "7c0072335ab865976e34698911874114"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "5e8d057c9c4a6a520f3c12a4cce0eacc"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "5b715c446661813b0e51a8cc810aaee7"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "5b6d2c105d6cf2e4938c58bfc5927683"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "2195c75269d657f2cf94b76d886b09f1"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "1ed755f9d0c72bb3cdbba80f87656275"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "52affadeac4d3a977cfeace178f386c2"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "c50ada8127ef0cd9f223773100589c61"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "34633f6f78cf02dec07fee9a7532d49c"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "88e3ef8f24e745c33128dc0a9990d115"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "d9f2998bb6b898cf39c9c6cf1636c90c"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "9d6f0227650bad8ddd3e44e0596b85e3"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "af8141858b7843a66979e8510adc56c8"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "780330af9bb001dd4fb4434b1ce9fc5b"
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
