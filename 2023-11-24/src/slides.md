---
highlighter: shiki
fonts:
  mono: Input Mono
lineNumbers: false
favicon: 'https://filecdn.hgj.com/yunlsp/ico/yunlsp.ico'
background: #fff;
titleTemplate: '%s - 货车组'
download: 'https://github.com/wingsheep/talks/raw/master/2022-07-10/2023-11-24-rank-promotion.pdf'
info: |
  ## 陶翔 - 货车定位前端开发

  职级晋升述职

---

# 陶翔 - 职级晋升述职 

货车组-前端开发 P4 升 P5

<div class="abs-tr !mx-8 !my-8 flex flex-col bg-blue-500 dark:bg-transparent px-2 py-2 rounded">
  <img src="//filecdn.hgj.com/public-header/hgj-logo.png" class="w-18 m-auto">
</div>

<div class="abs-bl !mx-14 my-12 flex flex-col">
  <div class="mb-3 uppercase tracking-widest font-500">
      <a class="mr-4" target="_blank" title="项目源码" href="https://github.com/wingsheep/talks">
      <ri-github-line class="opacity-50"/>
      Source
    </a>
     <a  target="_blank" title="项目源码" href="https://github.com/wingsheep/talks/raw/master/2022-07-10/2023-11-24-rank-promotion.pdf">
      <ri-download-line class="opacity-50"/>
      Download
    </a>
  </div>
  <div class="text-md opacity-50">Suzhou, China 2023</div>

</div>

<style>
p {
  @apply text-xl;
}
</style>

---

# 内容概览

```mermaid {theme: 'default', scale: 0.5}
graph LR
A(自我介绍) --> |"2021-5"| B{海管家工作经历}
B -->|"2021-5~2022-8"| C(跨境组)
B -->|"2022-8~至今"| D(货车组)
C --> E(跨境物流系统)
D --> F(货车定位)
E --> G(主要工作成果)
E --> H(关键行为&能力)
E --> K(内容输出)
K --> X(Dynamic Table)
K --> Y("@hgj/hnp-shop-site")
K --> R(Talks)
F --> I(主要工作成果)
F --> J(关键行为&能力)
F --> M(内容输出)
M --> N(Swagger Doc)
M --> L(Cosbrowser)
M --> P(Code Var)
M --> Q(AI语音识别&词义解析)
M --> S(推送脚本)
B --> |"2023-11 ~ ?"| Z(未来规划&思考)
Z --> O(现有问题)
Z --> T(解决方案)
click B "/4"
click C "/5"
click D "/8"
click E "/6"
click F "/9"
click G "/7?clicks=3"
click H "/7?clicks=3"
click K "/7?clicks=3"
click X "/7?clicks=3"
click Y "/7?clicks=3"
click R "/7?clicks=3"
click I "/10?clicks=3"
click J "/10?clicks=3"
click M "/10?clicks=3"
click N "/11"
click L "/12"
click P "/13"
click Q "/13"
click S "/15"
click Z "/16"
click O "/17"
click T "/17"


```

<style>
  :deep(.mermaid) foreignObject div {
    line-height: 24px;
  }
</style>

---
layout: intro
---
<h1 text="!5xl">陶翔</h1>

<div class="leading-8 opacity-80">
从事前端开发行业五年，工作内容涉及领域包括交通，教育，金融，物流等。<br /> 
主要技术栈vue，react，熟悉产品开发中的各个流程。<br /> 
其他对于如Nodejs脚本开发，Vscode插件，Raycast插件开发等也积累一定的开发经验。
</div>

<div class="my-10 grid grid-cols-[40px,1fr] w-min gap-y-4">
  <ri-gitlab-line class="opacity-50"/>
  <div><a href="https://github.com/wingsheep" target="_blank">taoxiang.tao</a></div>
  <ri-github-line class="opacity-50"/>
  <div><a href="https://github.com/wingsheep" target="_blank">wingsheep</a></div>
</div>
<img src="https://cdn.jsdelivr.net/gh/wingsheep/FigureBed@master/img/avatar.png" class="hover-image rounded-full w-40 abs-tr mt-30 mr-20"/>

<style>
.hover-image {
  transition: transform 0.5s ease;
}

.hover-image:hover {
  transform: rotateY(180deg);
}
</style>

---
layout: center
class: text-center
---

# 海管家工作经历
2021-5-24 入职海管家，职位前端开发

---
layout: center
class: text-center
---

#  跨境组-跨境物流系统
2021-5 ~ 2022-8 期间，主要负责跨境物流系统的相关开发工作

---

# 跨境物流系统
<div  class="flex items-center justify-between">
    <div class="leading-8 opacity-80">一个基于vue3开发的多端项目<br/>包括后台管理端、后台员工端<br/>二级客户端（PC、 H5、小程序、公众号）</div>
  <img src="https://filecdn.hgj.com/hnp-shop-admin/official/home/banner/core-feature@2x.png" class="rounded-xl w-110 bottom-10 right-0 mt-16 mr-12"/>
</div>

---

<div class="grid grid-cols-2 gap-x-4 gap-y-4">
<div>

# 主要工作成果 

> 承担当时重要紧急的多端建站模块的开发任务

<div class="h-2" />

> 重构升级后台管理系统，提高后台稳定性，提升团队开发体验
</div>
<div v-click class="mb-10">

# 关键行为&能力

> 重新开发建站npm包，解决建站多端行为不统一的问题

<div class="h-2" />

> 抽离重复的业务，开发动态表格，提高了团队开发效率

<div class="h-2" />


> 开发后台开发环境自动登录部署脚本，提升了团队开发体验

<div class="h-2" />

> 参与组内技术分享，提高组内开发技术氛围
</div>
<div v-click>

# 未来规划&思考

> 公司人事调整，调离到货车组，待续。。。

</div>


<div v-click>

# 内容输出

> <ri-link class="opacity-50 mr-4"/><a href="https://wingsheep.github.io/zh-CN/component/dynamic-table.html" target="_blank">Dynamic Table</a>


<div class="h-2" />

> <ri-link class="opacity-50 mr-4"/><a href="http://nexus.hgj.net/#browse/browse:npm-internal:%40hgj%2Fhnp-shop-site" target="_blank">@hgj/hnp-shop-site</a>

<div class="h-2" />

> <ri-link class="opacity-50 mr-4"/><a href="https://www.talks.happyfly.top/2022/vue3-ecosystem/1" target="_blank">技术分享</a>
</div>
</div>


---
layout: center
class: text-center
---

#  货车组-货车定位
2022-8 ~ 至今，主要负责货车定位小程序的相关开发工作

---

# 货车定位

<div  class="flex items-center justify-between">
  <div class="leading-8 opacity-80">一个C端产品，具有多个入口<br/>包括微信小程序，抖音小程序<br/>其他复制小程序，神北小程序<br/>后台管理端，PC，h5端，公众号等</div>
  <div class="w-120 h-100 relative">
  <img src="https://cdn.jsdelivr.net/gh/wingsheep/FigureBed@master/img/WechatIMG293.jpg" class="rounded-xl w-30 absolute top-0 left-0 mt-0 mr-0"/>
  <img src="https://cdn.jsdelivr.net/gh/wingsheep/FigureBed@master/img/hcdw_admin.png" class="rounded-xl w-90 absolute top-10 right-0 mt-0 mr-10"/>
  <img src="https://cdn.jsdelivr.net/gh/wingsheep/FigureBed@master/img/hcdw_pc.png" class="rounded-xl w-90 absolute top-20 right-0 mt-0 mr-0"/>
  </div>
</div>

---

<div class="grid grid-cols-2 gap-x-4 gap-y-4">
<div>

# 主要工作成果 

> 小程序历史遗留问题优化(代码冗余，文档缺失，部署繁复)

<div class="h-2" />

> 小程序打包体积持续优化

<div class="h-2" />

> 重构升级后台管理系统，提高后台稳定性，可维护性

</div>
<div class="mb-10" v-click>

# 关键行为&能力

> 小程序打包优化&上传&推送消息，提升部署效率，减少沟通成本

<div class="h-2" />

> 开发Vscode, Raycast效率插件，减少重复性工作，提升开发效率

<div class="h-2" />

> 应用Nuxt3技术方案，即能提升系统稳定性，又能沉淀技术经验

<div class="h-2" />

> 调研技术可行性，如Flutter, React Native跨平台框架，AI应用等

</div>


<div v-click>

# 内容输出

> <ri-link class="opacity-50 mr-4"/><Link to="11">Swagger Doc 文档管理插件</Link>


<div class="h-2" />

> <ri-link class="opacity-50 mr-4"/><Link to="12">Cosbrowser CDN管理插件</Link>

<div class="h-2" />

> <ri-link class="opacity-50 mr-4"/><Link to="13">Code Var 变量命名插件</Link>

</div>
<div v-click>

# 其他

> <ri-link class="opacity-50 mr-4"/><Link to="14">AI 语音识别&词义解析</Link>

<div class="h-2" />

> <ri-link class="opacity-50 mr-4"/><Link to="15">企业微信群消息推送</Link>

</div>
</div>

---

# Swagger Doc
Vscode 插件，用于管理Swagger 文档，支持生成ts，js代码段


<img class="w-150 rounded-xl" src="https://cdn.jsdelivr.net/gh/wingsheep/FigureBed@master/img/swagger-doc.png">

<br />

<div class="abs-br !mx-14 my-12 !mt-20 flex flex-col">
  <div class="mb-3 uppercase tracking-widest font-500">
      <a  target="_blank" title="项目源码" href="https://github.com/wingsheep/swagger-doc">
      <ri-github-line class="opacity-50"/>
      GitHub
    </a>
  </div>
</div>

---

# Cosbrowser
RayCast插件， 支持上传下载文件，图片预览&压缩，复制路径&自定义代码段


<div class="grid grid-cols-2 gap-x-2 gap-y-2 w-160">
  <img class="w-80" src="https://cdn.jsdelivr.net/gh/wingsheep/FigureBed@master/img/view-cosbrowser.png">
  <img class="w-80" src="https://cdn.jsdelivr.net/gh/wingsheep/FigureBed@master/img/cosbrowser_actions.png">
  <img class="w-80" src="https://cdn.jsdelivr.net/gh/wingsheep/FigureBed@master/img/compress_panel.png">
  <img class="w-80" src="https://cdn.jsdelivr.net/gh/wingsheep/FigureBed@master/img/cosbrowser_upload_history.png">
</div>


<div class="abs-br !mx-14 my-12 !mt-20 flex flex-col">
  <div class="mb-3 uppercase tracking-widest font-500">
      <a  target="_blank" title="项目源码" href="https://github.com/wingsheep/cosbrowser">
      <ri-github-line class="opacity-50"/>
      GitHub
    </a>
  </div>
</div>
---

# Code Var
RayCast插件， 基于有道翻译开发的变量命名插件，支持全类型的变量命名


<img class="w-140 rounded-xl" src="https://cdn.jsdelivr.net/gh/wingsheep/FigureBed@master/img/codevar.png">


<div class="abs-br !mx-14 my-12 !mt-20 flex flex-col">
  <div class="mb-3 uppercase tracking-widest font-500">
      <a  target="_blank" title="项目源码" href="https://github.com/wingsheep/code-var">
      <ri-github-line class="opacity-50"/>
      GitHub
    </a>
  </div>
</div>
---

# AI 语音识别&词义解析

基于openAi 提供的GPT whisper-1 模型和text-davinci-003模型的实现语音识别和词义解析

<CustomVideo />


---

# 企业微信群消息推送

用于推送小程序重新部署信息，以便于测试 & 每日资讯推送

<div class="grid grid-cols-3 gap-x-2 gap-y-2 w-200">

<img v-click class="w-60 rounded-xl" src="https://cdn.jsdelivr.net/gh/wingsheep/FigureBed@master/img/news_bot.png">
<img v-click class="w-60 rounded-xl" src="https://cdn.jsdelivr.net/gh/wingsheep/FigureBed@master/img/wechat_bot.png">
<img v-click class="w-100 rounded-xl" src="https://cdn.jsdelivr.net/gh/wingsheep/FigureBed@master/img/deploy_3.png">


<div class="abs-br !mx-14 my-12 !mt-20 flex flex-col">
  <div class="mb-3 uppercase tracking-widest font-500">
      <a  target="_blank" title="项目源码" href="https://github.com/wingsheep/newsBot">
      <ri-github-line class="opacity-50"/>
      GitHub
    </a>
  </div>
</div>
</div>


---
layout: center
class: text-center
---

# 未来规划&思考
思考现有工作的一些问题与解决方案

---

# 现有问题

<v-clicks :every='2'>


> 由于历史遗留问题，UI组件难以升级，且与业务相耦合，导致小程序主包体积难以继续优化，对于后续功能开发有风险

<br />

> 四个复制小程序多分支管理混乱，开发部署效率极低

<br />

> 小程序发布缺乏规范的CI/CD流程

</v-clicks>

<br />
<br />
<br />

<v-clicks :every='2'>


# 未来规划

> 深入理解业务逻辑，将UI组件移除，预计将减少主包10%的体积，后续尝试升级框架，彻底解决打包问题

<br />

> 四个复制小程序大同小异，可梳理差异点做配置化管理，脚本一键部署

<br />

> 可尝试在后台管理系统加入小程序发布管理

<br />

</v-clicks>

---
layout: center
class: 'text-center pb-5 :'
---

# 谢谢！Q & A
