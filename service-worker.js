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
    "revision": "e1e92c53e2a1102fba5a8d12c5c221c3"
  },
  {
    "url": "about/index.html",
    "revision": "298520bc9b3578d582ebe37bf3beeeae"
  },
  {
    "url": "archive/index.html",
    "revision": "9d1ae742495bfc8e9765bc3ff47900db"
  },
  {
    "url": "assets/css/0.styles.b21f37ae.css",
    "revision": "37fc7f3203ba8ab0408a7d4d39d57946"
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
    "url": "assets/js/1.515cd288.js",
    "revision": "71104bc8a3fef4cfbd1f9724d9734254"
  },
  {
    "url": "assets/js/10.0aae44d3.js",
    "revision": "34e0e2ba865cb520dacac195a4c73c6b"
  },
  {
    "url": "assets/js/11.2155af2b.js",
    "revision": "15748371275127e266dd04446258d731"
  },
  {
    "url": "assets/js/12.f43b769b.js",
    "revision": "7ce96b471b325fd7f7b1094425251b98"
  },
  {
    "url": "assets/js/13.1259b9b4.js",
    "revision": "6e7319c15a94b98f1dff7d8141544d50"
  },
  {
    "url": "assets/js/14.da8eefe2.js",
    "revision": "6ccf4622a7969cf14de6cf3b4efa626b"
  },
  {
    "url": "assets/js/15.e70e4195.js",
    "revision": "307d7acf25a64106f61fd2a7f4098674"
  },
  {
    "url": "assets/js/16.f5813877.js",
    "revision": "f45b3f47f78739b566ba62dcc9f0b7bc"
  },
  {
    "url": "assets/js/17.9aaa9e9f.js",
    "revision": "53847653e55734a7f78975ceaf850cbc"
  },
  {
    "url": "assets/js/18.9412f3cd.js",
    "revision": "86946ee3169f03ceb496a6055fbb44e0"
  },
  {
    "url": "assets/js/19.00019287.js",
    "revision": "da1bdfba6bd0a7628e0088567356cdaa"
  },
  {
    "url": "assets/js/20.0555b695.js",
    "revision": "25f14aaa4bf629f230e6e41fb4b6a162"
  },
  {
    "url": "assets/js/21.082e7676.js",
    "revision": "e64a55b9eea3d860873aa6548073a166"
  },
  {
    "url": "assets/js/22.6e926ff9.js",
    "revision": "5775f109f1684892ee2f1a74da5846e5"
  },
  {
    "url": "assets/js/23.df99469b.js",
    "revision": "0da196b6ac692e0bc9223119a89dc15d"
  },
  {
    "url": "assets/js/24.f82ba756.js",
    "revision": "2388ba8f890637fde4a824e88c55af83"
  },
  {
    "url": "assets/js/25.f9431b25.js",
    "revision": "daf9b401ec26e27be371cf233bf37f2c"
  },
  {
    "url": "assets/js/26.e6031d4e.js",
    "revision": "ac38160a5c49baefc1a4fd9041bba065"
  },
  {
    "url": "assets/js/27.428767b8.js",
    "revision": "ea508efa11e81e199f30b0facd0721d7"
  },
  {
    "url": "assets/js/28.b416b37c.js",
    "revision": "ffbcd1e4d8ecc8538abce90b97a98340"
  },
  {
    "url": "assets/js/29.226d6973.js",
    "revision": "ac3c03636d9f6767b16593d518b60798"
  },
  {
    "url": "assets/js/30.25db406b.js",
    "revision": "c8ab2d88124d61df738270538567a29a"
  },
  {
    "url": "assets/js/31.ec989ebb.js",
    "revision": "9bbf1ceae21697d01832b8dfaca524a7"
  },
  {
    "url": "assets/js/32.6a002af9.js",
    "revision": "7bd9e7c16df5c9ee61256d7ee209709a"
  },
  {
    "url": "assets/js/33.8327a511.js",
    "revision": "f8436091d8326924e2294d352273cdfd"
  },
  {
    "url": "assets/js/34.b24d44f8.js",
    "revision": "d012f48529024b5d599fef1aade9c81b"
  },
  {
    "url": "assets/js/35.a3a99f95.js",
    "revision": "3f193f6a6b389beb7f03b186c36fab98"
  },
  {
    "url": "assets/js/36.7740f0f6.js",
    "revision": "08464dd440100e6015c6b6384d5e9e9e"
  },
  {
    "url": "assets/js/37.d10bc4ae.js",
    "revision": "3c421492474b3f64b6c1a8d81b18dd52"
  },
  {
    "url": "assets/js/4.be4ab401.js",
    "revision": "0af747dfe60b73998391223d72a34ab9"
  },
  {
    "url": "assets/js/5.62bebeec.js",
    "revision": "fa796561f1d65aba08f04d32a694ad14"
  },
  {
    "url": "assets/js/6.0dbe8d33.js",
    "revision": "ec07c64584beab680aec80f435e0d10e"
  },
  {
    "url": "assets/js/7.63e1b3b8.js",
    "revision": "a6464ee3d07c08e517846d22f4aeeb4c"
  },
  {
    "url": "assets/js/8.3b8d5b77.js",
    "revision": "f5a58d1381050b40606d96754932da92"
  },
  {
    "url": "assets/js/9.3ba174a0.js",
    "revision": "d654eb031dcc7a7e6d47cfe2987821b4"
  },
  {
    "url": "assets/js/app.197c7cd9.js",
    "revision": "a4a613ea926bef50e57a88ae68f401f8"
  },
  {
    "url": "assets/js/vuejs-paginate.89b993a3.js",
    "revision": "88204b768aa25be73521e160405c0d22"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "bc2054df269b33d7e4f93eb7e594baa1"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "120fe68d3acafa1e53cef3aea8377564"
  },
  {
    "url": "category/index.html",
    "revision": "0301825463721ff50d0ab46e60cafd59"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "5669bb126c08f1ecf8cd4b01f65ed920"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "c7ec31fc08a76665e4fcc2ea44e906d6"
  },
  {
    "url": "category/Note/index.html",
    "revision": "da04cb7d79d55102153337241f26b73e"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "261b4c7bb8a9d67f514f7e8ff4a588e6"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "d44767917fd0c1272ee8bc03e43b1bcf"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "9c8afd716aa827bb50570dadbfc114ee"
  },
  {
    "url": "category/网络/index.html",
    "revision": "db0afc0ad035cb1882191863c9be5de7"
  },
  {
    "url": "codes/index.html",
    "revision": "37c2124eff2fc6203206f9bac853781f"
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
    "revision": "4003000268d74b511bbec5649e7cc0b5"
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
    "revision": "27c6099f283bbaecd06b2785c1eaec4c"
  },
  {
    "url": "index.html",
    "revision": "283bd0eff6d892dd52b760cba241e2f1"
  },
  {
    "url": "letter/index.html",
    "revision": "2f3dcad109ed4b0fefcc861ab1de6486"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "4bf308c6fcc25eca0a8653ae3d730dee"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "e4ab045d17bd0f90d0b0ae494240b9ed"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "110c18c4b331e894d548ced9feb023bf"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "3916e0d95ac234ca6b90ff33017a653a"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "7250e1b406631491165c8dbae223d74e"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "c3fa712f3fb760887fa099ca13c344a9"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "ed5b7c0b4a0fb269cc48ebdb3c72f058"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "80c9ba77c0d02caee2e1a4a796e9ae13"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "dff19256706c7fd9a52e09dbe0c68ac5"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "0be2c8d034d2754bd6b25c9b7b2260dd"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "f16e6ae732ced2a98da8ff1990327632"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "bbae99339eb7d670a69a621295bc8856"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "e465ff990306ed1857c305e82ddeaea7"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "e4cc8ec301b4cee18665cca51718d505"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "5bba9845b36a34e728cb02ad4fc9dcfb"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "ec0049dcf1f3cc062b36c6e81cb801c0"
  },
  {
    "url": "records/index.html",
    "revision": "e55d3e0808219a0f718e9840ae11e2f8"
  },
  {
    "url": "resume/index.html",
    "revision": "59e966015a0d69dfd5b38117fe7b9021"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "4c79cfe43239c1f144839f39359fadda"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "61c70608cf24f565c1bf3e4abdf522b1"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "5db801d95ec2ed094730d4a3ed22ca7b"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "bd55c36830fa8df95e030ab8c322baa0"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "c2156d1a57022cbb691d656cf4ac5632"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "4f34712dfcc491b54838db54ac958c51"
  },
  {
    "url": "tag/index.html",
    "revision": "b6007fc4167694824ad795a5ddf6f13a"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "3569a782530047d0e0b4aab04d988865"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "1a9c63a15417971075233abf386de3a4"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "6f2e27cae8fb4bee8567db7ff170e1e0"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "60a9694a49d8aa9f4f18265fb38510c1"
  },
  {
    "url": "tag/List/index.html",
    "revision": "4d5b8d6748420d842324da9a8de11b61"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "1e351a00e5c7b4cf58cb2a1d4a0c0fed"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "65a0a8a9c963a49bcc27e7417c6ec18c"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "45709312063211a96d065fb8269b355b"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "8d077fcbb1227aefb33187ed04fb7520"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "5c292329c367a1e5beef8e802ff4606b"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "6d87e87b0b6d61b2391cf9b493ea2aa5"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "6b4eade44d2309281adaf51e84703da6"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "bdbb54a76ced2611bc162306d94404c4"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "263469a30c0cc11769c091568f95ad3b"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "c99378c3a3d900f09fab35814dc8e3c5"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "3180028ac7d199bac485ec773b3b63ef"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "b1315cff48519329a01a20f2588e63b4"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "4ff661916312b9214e5f079c1100da18"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "a0f937bcacf45716b096945ce7324952"
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
