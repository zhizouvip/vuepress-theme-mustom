import smoothscroll from 'smoothscroll-polyfill';
import { jsonp, ajax } from "../utils";

export default (_, Vuex) => {
  return {
    data() {
      return {
        mustom$Busuanzi: {
          pv: '∞',
          uv: '∞'
        },
        mustom$Hitokoto: {
          word: 'Loading...',
          from: 'Loading...'
        }
      };
    },
    mounted() {
      // smoothscroll
      smoothscroll.polyfill()
    },
    methods: {
      ...Vuex.mapActions({
        mustom$SwapLang: 'swapLang',
        mustom$SetSkin: 'setSkin',
        mustom$Nightshift: 'nightshift',
        mustom$SetExt: 'setExt',
        mustom$ToggleCanvas: 'toggleCanvas',
        mustom$TriggerResizeIncrement: 'triggerResizeIncrement',
        mustom$SetSpin: 'setSpin',
        mustom$ToggleReadmode: 'toggleReadmode',
        mustom$CloseReadmode: 'closeReadmode',
        mustom$SetAddin: 'setAddin'
      }),
      mustom$Scroll2Top() {
        if (typeof window === 'undefined') return;
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
      mustom$Scroll2Bottom() {
        if (typeof window === 'undefined' || typeof document === 'undefined') return;
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      },
      mustom$InitBusuanzi() {
        jsonp(
          "//busuanzi.ibruce.info/busuanzi",
          {
            jsonpCallback:
              "BusuanziCallback_" + Math.floor(1099511627776 * Math.random())
          },
          result => {
            this.mustom$Busuanzi.pv = result.site_pv;
            this.mustom$Busuanzi.uv = result.site_uv;
          },
          true
        );
      },
      mustom$InitHitokoto() {
        let that = this;
        if (that.$themeConfig.hitokoto.customs && that.$themeConfig.hitokoto.customs.length) {
          const rand = Math.floor(Math.random() * that.$themeConfig.hitokoto.customs.length);
          that.mustom$Hitokoto.word = customs[rand].word;
          that.mustom$Hitokoto.from = customs[rand].from;
        } else {
          ajax({
            url: that.$themeConfig.hitokoto.api,
            data: {
              c: that.$themeConfig.hitokoto.type
            },
            dataType: 'json',
            success(result) {
              if (typeof result.hitokoto === "string" && result.hitokoto.trim().length > 0) {
                that.mustom$Hitokoto.word = result.hitokoto.trim();
              }
              if (typeof result.from_who === "string" && result.from_who.trim().length > 0) {
                that.mustom$Hitokoto.from = result.from_who.trim();
              } else if (typeof result.from === "string" && result.from.trim().length > 0) {
                that.mustom$Hitokoto.from = result.from.trim();
              }
            }
          });
        }
      },
      mustom$ToggleMinimize(e) {
        if (typeof window === 'undefined') return;
        const path = event.path || (event.composedPath && event.composedPath());
        const parent = path[1]; // .card
        if (parent.classList.contains('mini')) {
          parent.classList.remove('mini');
          window.setTimeout(o => {
            parent.style.height = 'auto';
          }, 200);
        } else {
          parent.style.height = parent.offsetHeight + 'px';
          window.setTimeout(o => {
            parent.classList.add('mini');
          }, 0);
        }
        window.setTimeout(o => {
          this.mustom$TriggerResizeIncrement();
        }, 200);
      }
    },
    computed: {
      ...Vuex.mapGetters({
        mustom$Lang: 'lang',
        mustom$Locale: 'locale',
        mustom$Skin: 'skin',
        mustom$IsNight: 'isNight',
        mustom$Ext: 'ext',
        mustom$NoCanvas: 'noCanvas',
        mustom$TriggerResize: 'triggerResize',
        mustom$IsSpinning: 'isSpinning',
        mustom$Readmode: 'readmode',
        mustom$Addin: 'addin',
        mustom$FirstTimeAddin: 'firstTimeAddin'
      }),
      mustom$LangIndex() {
        return /^zh-/i.test(this.mustom$Lang) ? 0 : 1;
      },
      mustom$IsMobile() {
        if (typeof window === 'undefined') return;
        return /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(window.navigator.userAgent);
      },
      mustom$IsChinese() {
        if (typeof window === 'undefined') return;
        return /^(zh)/i.test(window.navigator.browserLanguage || window.navigator.language || 'zh');
      },
      mustom$SiteTotalWords() {
        let result = 0;
        this.$site.pages
          .filter(p => p.id === "post")
          .forEach(page => {
            result += page.frontmatter.wordcount;
          });
        if (result >= 1000) {
          result = Math.round(result / 100) / 10 + "k";
        }
        return result;
      },
      mustom$SiteTotalPosts() {
        return this.$site.pages.filter(p => p.id === "post").length;
      },
      mustom$SiteTotalCategoriess() {
        return this.$categories.length;
      },
      mustom$SiteTotalTags() {
        return this.$tags.length;
      },
      mustom$MaxNumberOfCategories() {
        let result = 0;
        this.$categories.list.forEach(cate => {
          if (cate.pages.length > result) {
            result = cate.pages.length;
          }
        });
        return result;
      },
      mustom$MaxNumberOfTags() {
        let result = 0;
        this.$tags.list.forEach(tag => {
          if (tag.pages.length > result) {
            result = tag.pages.length;
          }
        });
        return result;
      },
      mustom$SitePosts() {
        return this.$site.pages
          .filter(p => p.id === "post")
          .sort((a, b) => {
            if (a.frontmatter.date < b.frontmatter.date) {
              return 1;
            } else if (a.frontmatter.date > b.frontmatter.date) {
              return -1;
            }
            return 0;
          });
      }
    }
  }
};