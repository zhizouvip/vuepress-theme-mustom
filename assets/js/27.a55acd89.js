(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{351:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("算法基础，了解算法的基础知识，算法的种类，知道什么是好算法。")]),t._v(" "),a("h1",{attrs:{id:"算法特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法特性"}},[t._v("#")]),t._v(" 算法特性")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("输入")]),t._v("：可以有零个或多个参数")]),t._v(" "),a("li",[a("strong",[t._v("输出")]),t._v("：必须有一个或多个结果")]),t._v(" "),a("li",[a("strong",[t._v("有穷性")]),t._v("：算法必须会结束，没有无限循环")]),t._v(" "),a("li",[a("strong",[t._v("确定性")]),t._v("：有唯一结果")]),t._v(" "),a("li",[a("strong",[t._v("可行性")]),t._v("：算法每一步都能通过执行有限次数完成")])]),t._v(" "),a("h1",{attrs:{id:"算法设计要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法设计要求"}},[t._v("#")]),t._v(" 算法设计要求")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("正确性")]),t._v("：算法至少具有输入、输出和过程明确的加工处理，正确反映问题的需求，最后得到期望的答案\n"),a("ul",[a("li",[t._v("算法程序没有语法错误")]),t._v(" "),a("li",[t._v("算法程序对于合法输入能产生期望的答案")]),t._v(" "),a("li",[t._v("算法程序对于非法输入能产生警告和提示")]),t._v(" "),a("li",[t._v("算法程序对于故意掉难得测试输入都能产生期望的结果")])])]),t._v(" "),a("li",[a("strong",[t._v("可读性")]),t._v("：算法便于阅读、理解和交流")]),t._v(" "),a("li",[a("strong",[t._v("健壮性")]),t._v("：能够处理异常、崩溃或莫名其妙的结果")]),t._v(" "),a("li",[a("strong",[t._v("高时间效率和低存储量")]),t._v("：算法要考虑处理速度和内存用量")])]),t._v(" "),a("h1",{attrs:{id:"算法效率度量方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法效率度量方法"}},[t._v("#")]),t._v(" 算法效率度量方法")]),t._v(" "),a("ul",[a("li",[t._v("事后统计方法：通过执行多个输入测试，记录执行时间平均值")]),t._v(" "),a("li",[t._v("事前估算方法：通过统计方法对算法进行估算，涉及以下因素\n"),a("ol",[a("li",[t._v("算法策略，"),a("strong",[t._v("例子使用公式或者循环等")])]),t._v(" "),a("li",[t._v("编译后的代码质量，"),a("strong",[t._v("基础操作的次数统计")])]),t._v(" "),a("li",[t._v("问题的输入规模，"),a("strong",[t._v("例子数值大小或元素数量等")])]),t._v(" "),a("li",[t._v("机器执行指令的速度，"),a("strong",[t._v("硬件性能")])])])])]),t._v(" "),a("p",[a("strong",[t._v("算法基础种类分别有： "),a("code",[t._v("1")]),t._v(" 、 "),a("code",[t._v("n")]),t._v(" 、 "),a("code",[t._v("n*n")]),t._v(" 。")])]),t._v(" "),a("p",[t._v("一般使用公式或瀑布式条件判断的算法策略属于 "),a("code",[t._v("1")]),t._v(" ；使用单个循环的属于 "),a("code",[t._v("n")]),t._v(" ；使用嵌套循环的属于 "),a("code",[t._v("n*n")]),t._v(" 。3 种算法中往往常数算法 "),a("code",[t._v("1")]),t._v("  要优于 "),a("code",[t._v("n")]),t._v("  和 "),a("code",[t._v("n*n")]),t._v(" 。给以下基础操作次数公式分类：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("1")]),t._v(" ： "),a("code",[t._v("3")]),t._v(" 、 "),a("code",[t._v("5")]),t._v(" 、 "),a("code",[t._v("9")]),t._v("  等")]),t._v(" "),a("li",[a("code",[t._v("n")]),t._v(" ： "),a("code",[t._v("n")]),t._v(" 、 "),a("code",[t._v("n+1")]),t._v(" 、 "),a("code",[t._v("2n+3")]),t._v("  等")]),t._v(" "),a("li",[a("code",[t._v("n*n")]),t._v(" ： "),a("code",[t._v("n^2")]),t._v(" 、 "),a("code",[t._v("n^2+5")]),t._v(" 、 "),a("code",[t._v("2n^3+1")]),t._v("  等")])]),t._v(" "),a("p",[a("strong",[t._v("一般判断算法好坏，更应该关注函数公式的主项：指数最高项。")]),t._v("\n比如算法 "),a("code",[t._v("2n^2+n+3")]),t._v("  对比算法 "),a("code",[t._v("n^3+2n+1")]),t._v(" ，因为 "),a("code",[t._v("2n^2")]),t._v("  指数低于 "),a("code",[t._v("n^3")]),t._v(" ，所以算法 "),a("code",[t._v("2n^2+n+3")]),t._v("  优于算法 "),a("code",[t._v("n^3+2n+1")]),t._v(" 。")]),t._v(" "),a("h2",{attrs:{id:"怎么分析一个算法的输入时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么分析一个算法的输入时间"}},[t._v("#")]),t._v(" 怎么分析一个算法的输入时间？")]),t._v(" "),a("ul",[a("li",[t._v("抽象算法：去除算法中循环的外包装、条件的判断、变量的声明、打印输出等操作")]),t._v(" "),a("li",[t._v("指令计数：统计关联的输入模式下基础操作的数量")])]),t._v(" "),a("h2",{attrs:{id:"求和1-100的算法例子分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#求和1-100的算法例子分析"}},[t._v("#")]),t._v(" 求和 1-100 的算法例子分析")]),t._v(" "),a("p",[t._v("以下"),a("em",[t._v("算法一")]),t._v("，算法策略使用 "),a("code",[t._v("循环")]),t._v(" ，编译后的代码质量为 "),a("code",[t._v("n")]),t._v("  次，问题的输入规模 "),a("code",[t._v("100")]),t._v(" ，机器执行指令的速度取决于算法运行所在计算机。")]),t._v(" "),a("div",{staticClass:"language-js JavaScript 算法一 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行 n 次")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("以下"),a("em",[t._v("算法二")]),t._v("，算法策略使用 "),a("code",[t._v("公式")]),t._v(" ，编译后的代码质量为 "),a("code",[t._v("1")]),t._v("  次，问题的输入规模 "),a("code",[t._v("100")]),t._v(" ，机器执行指令的速度取决于算法运行所在计算机。")]),t._v(" "),a("div",{staticClass:"language-js JavaScript 算法二 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行 1 次")]),t._v("\n")])])]),a("p",[t._v("对比以上算法，它们的输入规模都是 "),a("code",[t._v("100")]),t._v(" ，在同一计算机运行的情况下，"),a("strong",[t._v("算法一")]),t._v("的基础操作次数受输入规模的影响，造成工作量超出"),a("strong",[t._v("算法二")]),t._v("，"),a("strong",[t._v("所以算法二效率更高")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"求和3x3表格内数值的例子分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#求和3x3表格内数值的例子分析"}},[t._v("#")]),t._v(" 求和 3x3 表格内数值的例子分析")]),t._v(" "),a("p",[t._v("以下"),a("em",[t._v("表格遍历例子")]),t._v("，算法策略使用 "),a("code",[t._v("嵌套的循环")]),t._v(" ，编译后的代码质量为 "),a("code",[t._v("n^2")]),t._v("  次，问题的输入规模 "),a("code",[t._v("3x3")]),t._v(" ，机器执行指令的速度取决于算法运行所在计算机。")]),t._v(" "),a("div",{staticClass:"language-js JavaScript 表格遍历求和例子 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    table "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行 n^2 次")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("以上算法，它根据表格的大小，基础操作的数量是以指数上升的，"),a("strong",[t._v("所以 "),a("code",[t._v("3x3")]),t._v("  的表格内数值总和计算一共有基础操作 "),a("code",[t._v("3^2")]),t._v("  等于 9 次")]),t._v("。")]),t._v(" "),a("h1",{attrs:{id:"用大o记法表示算法时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用大o记法表示算法时间复杂度"}},[t._v("#")]),t._v(" 用大 O 记法表示算法时间复杂度")]),t._v(" "),a("p",[t._v("复杂度分为："),a("strong",[t._v("时间复杂度")]),t._v("或"),a("strong",[t._v("空间复杂度")]),t._v(" "),a("strong",[t._v("一般计算 “复杂度” 是指 “时间复杂度”，而不是空间复杂度，目前主流还是时间复杂度，不求用内存换取时间。")])]),t._v(" "),a("p",[a("strong",[t._v("T(n) = O(f(n))")]),t._v("， "),a("code",[t._v("f(n)")]),t._v("  为算法的函数或入口，随着输入规模 "),a("code",[t._v("n")]),t._v("  的增长， "),a("code",[t._v("T(n)")]),t._v("  增长最慢的算法为最优算法。因为以下原因：")]),t._v(" "),a("p",[a("strong",[t._v("基础操作数量 = 时间")])]),t._v(" "),a("p",[t._v("所以当 "),a("code",[t._v("n")]),t._v("  翻倍时，"),a("em",[t._v("基础操作数量")]),t._v("增长越少，花费的"),a("em",[t._v("时间")]),t._v("越少。")]),t._v(" "),a("p",[t._v("上面用到的三个求和算法例子，如果用大 O 表示算法的时间复杂度分别为 "),a("code",[t._v("O(1)")]),t._v(" 、 "),a("code",[t._v("O(n)")]),t._v(" 、 "),a("code",[t._v("O(n^2)")]),t._v(" 。")]),t._v(" "),a("p",[a("strong",[t._v("大 O 记法表示时间的增长率")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("O(1)")]),t._v(" ：增长率不变")]),t._v(" "),a("li",[a("code",[t._v("O(n)")]),t._v(" ：增长率倍数增长")]),t._v(" "),a("li",[a("code",[t._v("O(n^2)")]),t._v(" ：增长率指数增长")])]),t._v(" "),a("h2",{attrs:{id:"推导大o阶方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推导大o阶方法"}},[t._v("#")]),t._v(" 推导大 O 阶方法")]),t._v(" "),a("p",[t._v("用一下方法来推导 "),a("code",[t._v("5")]),t._v(" 、 "),a("code",[t._v("2n+3")]),t._v(" 、 "),a("code",[t._v("n(n+1)/2")]),t._v("  和 "),a("code",[t._v("O(logn)")]),t._v("  的大 O 阶：")]),t._v(" "),a("ol",[a("li",[t._v("用常数 1 取代所有加法常数")]),t._v(" "),a("li",[t._v("只保留最高阶项")]),t._v(" "),a("li",[t._v("最高阶项不是 1 的话，去除这个项相乘的常数")])]),t._v(" "),a("p",[a("code",[t._v("5")]),t._v("  =>  "),a("code",[t._v("O(1)")]),t._v(" ，\n "),a("code",[t._v("2n+3")]),t._v("  =>  "),a("code",[t._v("O(n)")]),t._v(" ，\n "),a("code",[t._v("n(n+1)/2")]),t._v("  =>  "),a("code",[t._v("O(n^2)")])]),t._v(" "),a("p",[t._v("一面这个例子的话就是 "),a("code",[t._v("O(logn)")]),t._v(" ：")]),t._v(" "),a("div",{staticClass:"language-js JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2^x = n，那么 x = log(2)n，x为循环次数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"常见的时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的时间复杂度"}},[t._v("#")]),t._v(" 常见的时间复杂度")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("时间复杂度")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("术语")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("O(1)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("常数阶")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3n+4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("O(n)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("线性阶")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3n^2+4n+5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("O(n^2)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("平方阶")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3log(2)n+4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("O(logn)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("对数阶")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2n+3nlog(2)n+14")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("O(nlogn)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("nlogn 阶")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("n^3+2n^2+4n+6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("O(n^3)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("立方阶")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2^n")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("O(2^n)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("指数阶")])])])]),t._v(" "),a("p",[t._v("时间复杂度对比：\n"),a("strong",[a("code",[t._v("O(1)")]),t._v("  <  "),a("code",[t._v("O(logn)")]),t._v("  <  "),a("code",[t._v("O(n)")]),t._v("  <  "),a("code",[t._v("O(nlogn)")]),t._v("  <  "),a("code",[t._v("O(n^2)")]),t._v("  <  "),a("code",[t._v("O(n^3)")]),t._v("  <  "),a("code",[t._v("O(2^n)")]),t._v("  <  "),a("code",[t._v("O(n!)")]),t._v("  <  "),a("code",[t._v("O(n^n)")])])]),t._v(" "),a("blockquote",[a("p",[t._v("本文参考：\n"),a("a",{attrs:{href:"https://www.bilibili.com/video/BV1jW411K7yg",target:"_blank",rel:"noopener noreferrer"}},[t._v("【C 语言描述】《数据结构和算法》（小甲鱼）"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);