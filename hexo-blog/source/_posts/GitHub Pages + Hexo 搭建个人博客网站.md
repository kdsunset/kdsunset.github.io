---
title: Hexo + GitHub Pages 搭建个人博客网站
categories: 技术
tags:
  - Hexo
abbrlink: 'hxpghblog'
---
# Hexo + GitHub Pages 搭建个人博客网站
## 前言 
&emsp;&emsp;Hexo [/hækso/]是一个基于 Node.js 构建的静态博客框架。它能够根据 Markdown 文件生成静态的 HTML 网页，方便快速搭建静态网站。GitHub Pages 是 GitHub 提供的一项上免费托管和发布静态网站的服务，有了它可以省去自己购买和维护服务器的成本。  
&emsp;&emsp;如果你想搭建一个个人网站或者博客，GitHub Pages + Hexo是一个不错且主流的方案。你只需要掌握一点markdown语法和git使用配合教程就可以快速上手，同时这也是本站的搭建过程~

#### 本文环境 
* Win 10
* NodeJS v21.4.0
* git

## 1 安装软件
### 1.1 安装git
如果还没有安装git，在[官网](https://git-scm.com/)下载并安装git，安装过程全部选软件推荐的选项就好
### 1.2 安装NodeJS
* 在[NodeJS官网](https://nodejs.org/zh-cn/download/)下载安装包并安装
* 配置环境变量，如果选择的是msi格式的安装包会自动添加环境变量

### 1.3 安装 Hexo
新建一个文件夹作为你网站的根目录，打开命令提示符（或者git bash）并cd到当前目录，使用以下命令安装Hexo
ps：在地址栏输入"cmd"即可打开一个定位到当前目录的命令提示符
```
# 使用 npm 安装 Hexo
npm install -g hexo-cli

# 查看版本
hexo -v
```
### 1.3 创建一个hexo项目并初始化
```
# 初始化一个名为"hexo-blog"的 Hexo 项目
hexo init hexo-blog

cd hexo-blog

# 安装 Hexo 项目所需的依赖包
npm install

```
Hexo 初始化完成后，会生成一个包含基本文件和目录的项目结构
``` 
hexo-blog/         # 项目根目录
|-- _config.yml    # 主配置文件
|-- node_modules/  # Node.js 模块目录，通过 npm install 安装
|-- public/        # 自动生成的静态文件，部署时上传到服务器
|-- scaffolds/     # 模版文件
|-- source/        # 存放源文件的目录，包括文章、图片等
|   |-- _drafts/   # 草稿目录，未发布的文章
|   |-- _posts/    # 存放正式发布的文章
|-- themes/        # 存放主题的目录
|-- .gitignore     # Git 版本控制的忽略文件列表
|-- package.json   # 项目的 Node.js 包配置文件

```
## 2 Hexo配置
hexo-blog/_config.yml是heox的主配置文件，用来定义博客的各种设置和选项，包括站点设置、目录设置、部署设置等等，下面是一些重要的配置选项：
ps：yaml是一个方便人类阅读的数据序列化格式，通常用来做配置文件，主要用缩进来表示层次结构，另外注意"key: value"的value前面有一个空格
### 2.1 网站Site信息
* 打开_config.yml主配置文件，找到site字段，修改网站基本信息
```yaml
# Site
title: # 网站标题
subtitle: 
description: # 网站副标题
keywords:
author: # 网站作者
language: zh-CN  # 指定语言，会影响主题显示的语言，按需修改
timezone: ''
```
### 2.2 开启文章资源文件夹（可选/推荐）

```yaml
# 通过 hexo new [layout] <title> 命令创建新文章时自动创建同名文件夹
post_asset_folder: true
```
### 2.3 配置永久链接（可选/推荐）
Hexo 默认的链接格式是permalink: :year/:month/:day/:title/，配置永久链接有助于优化网站的 SEO：

```
# 安装插件
npm install hexo-abbrlink --save
```
修改主配置

```yaml
permalink: :abbrlink/ #文章的永久链接 
abbrlink:
  alg: crc32  #算法: crc16(default) and crc32
  rep: hex    #进制: dec(default) and hex
```

* 更多配置字段参考[Hexo配置](https://hexo.io/zh-cn/docs/configuration)

### 2.4 预览效果
打开命令提示符，输入以下命令启动hexo本地服务器
```
hexo g
hexo server
```
待终端输出类似以下字样说明启动成功
```
INFO  Hexo is running at http://localhost:4000/ . Press Ctrl+C to stop.
```
在浏览器访问 http://localhost:4000，即可看到默认的主题风格，同时可以看到hexo默认生成了一篇名为“Hello World”的文章。

![默认主题的预览效果](/images/article01/70321.png)

### 3 Hexo 使用

### 3.1 写作
#### 3.1.1 编辑文章
source/_posts 目录是用于存放博客文章的地方，每篇博客文章对应一个 Markdown 文件。可以通过在创建和编辑文章也可以使用命令
```
hexo new post <title>
```
* 打开使用命令创建好的文章，在文件最上方有一块以 --- 分隔的区域，称为[Front-matter ](https://hexo.io/zh-cn/docs/front-matter)，作用是配置文章标题、日期、分类、标签等属性。
#### 3.1.2 草稿箱
在编辑过程中如果需要将文件作为草稿而不是直接发布，可以使用drafts。source/_drafts 文件夹用于存放草稿，等到完成并决定发布时再将其移动到 source/_posts 文件夹或者使用命令进行发布
```
# 创建一个新的草稿
hexo new draft <title>

# 将草稿发布为正式文章
hexo publish draft <title>
```

#### 3.1.3 文章中插入图片
* 方式1：使用markdown标签
```
# 外链
![图片描述](url)

# 相对于博客的根目录：source/imgs/a.jpg
![图片描述](/imgs/a.jpg)

# Hexo 配置文件 _config.yaml 将 post_asset_folder 选项设为 true,hexo new xxx 新建文章时，Hexo 便会在 source/_posts 目录下新建与文章同名的文件夹
# 相对于某篇文章的目，例如./article_1/a.jpg的目录
![图片描述](a.jpg)
```

* 方式2：使用 Hexo asset_img 标签
```
{% asset_img example.jpg This is an example image %}
```
缺点：无法在 Markdown 编辑器中正常显示图片
改进：插件hexo-renderer-marked解决了这个问题
可以只用npm install hexo-renderer-marked命令直接安装，之后在config.yaml中更改配置如下：
```yaml
post_asset_folder: true
marked:
  prependRoot: true
  postAsset: true
```

### 3.2 启动预览服务器
博客文章表写好就可以进行发布了，hexo提供了本地预览服务器，上一步预览效果的时候已经启动过服务器，以下是相关的命令解释：
```
# 清除缓存文件，在某些情况（尤其是更换主题后），如果对站点的更改无论如何也不生效可能用到
# hexo clean

# 将md和配置等源文件生成网页静态文件，存储到public目录，简写成hexo g
hexo generate 

# 启动服务器 默认访问地址： http://localhost:4000/
hexo server

```
* 可以将指令编写到批处理文件，省去每次输入命令:
在项目根目录创建start_server.bat文件，添加以下内容并保存，之后通过双击运行来启动服务器。
```bat
@echo off
echo Stopping Hexo server...
taskkill /IM "node.exe" /F
echo Hexo server stopped.

echo Starting Hexo server...
hexo clean && hexo g && hexo server 
echo Hexo server started.
```

### 3.3 部署到服务器
以上只是本地预览，想要别人访问得到这个博客，还需要部署到服务器上自己的服务器上或者GitHub Pages等托管服务。
以下以发布到Github Pages为例：
1. 创建github仓库

填写仓库名，名称为"username.github.io"，username是你的Github用户名，仓库属性为public  

如果你的 GitHub 仓库命名为 username.github.io，GitHub Pages 将会默认将站点托管在 username.github.io 这个域名下，否则会托管在username.github.io/仓库名 这个路径下

2. Hexo 提供了一键部署功能，首先使用以下命令安装插件
```
# 安装插件用于将生成的静态网站文件（通常位于 public 目录）部署到 GitHub
npm install hexo-deployer-git --save
```
3. 修改网站配置文件
```yaml
deploy:
  type: git  
  repo: git@github.com:xxxx/xxxx.github.io.git # 仓库地址
  branch: main  # 分支
```
4. 运行部署命令
```
# 一键部署
hexo deploy 

# 生成静态文件并部署
hexo g -d
```
为了方便发布，我们将上面的启动服务器脚本修改一下，移除本地预览并在生成后同时部署，新建deploy.bat文件（如果使用git bash则将文件后缀改成.sh，运行时执行"./deploy.sh"），使用文本编辑器增加以下内容:
```bat
echo Starting Hexo deploy...
hexo clean && hexo g -d
echo Hexo deploy success !
```
，
双击运行deploy.bat，待终端输出“INFO  Deploy done: git”字样说明网页已经提到到Github，在浏览器访问 `https://username.github.io/`，部署成功，这就是你的个人博客了，Congratulations！


## 4 更换主题
以上我们通过Hexo和Github搭建了一个简单的博客，但是这个博客页面样式还很简陋，很多功能如访问统计、评论功能也没有，下面就开始我们博客的美（折）化（腾）之旅。

Hexo提供了非常多的主题供选择，可以在github 搜索"hexo theme"可以根据star看到比较受欢迎的主题。

下面以butterfly为例子
### 4.1 下载butterfly
通过git clone 或者直接下载zip包并复制到项目theme目录下
```
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly

```
### 4.2 应用主题
* 修改 Hexo 根目录下的 _config.yml，把主題改为 butterfly
```yaml
theme: butterfly
```
### 4.3 安装渲染器插件
 如果你沒有 pug 以及 stylus 的渲染器，可能报错
```
extends includes/layout.pug block content include ./includes/mixins/post-ui.pug #recent-posts.recent-posts +postUI include includes/pagination.pug
```
```
# 安装渲染器插件
npm install hexo-renderer-pug hexo-renderer-stylus --save
```
双击start_server.bat 重新启动服务器，可以看到主题效果生效了


![butterfly主题预览效果](/images/article01/70521.png)

### 4.4 butterfly 主题配置
butterfly的配置文件在butterfly文件夹下的_config.yml，更多配置内容参考[butterfly官方教程](https://butterfly.js.org/)
butterfly升级主题可能会覆盖主题下的_config.yml配置文件，官方建议将butterfly主题下的配置文件重名并复制到项目根目录，在项目根目录进行配置

以下是一些比较常用的配置
#### 4.4.1 配置导航栏
butterfly 提供了默认的导航栏tab，只需要将menu字段下的tab去掉前面的#注释即可，形式是"名称：链接地址 || 图标([Font Awesome](https://fontawesome.com/)
```yaml
menu:
   首页: / || fas fa-home
   归档: /archives/ || fas fa-archive
   标签: /tags/ || fas fa-tags
   分类: /categories/ || fas fa-folder-open
  # List||fas fa-list:
  #   Music: /music/ || fas fa-music
  #   Movie: /movies/ || fas fa-video
  # Link: /link/ || fas fa-link
   关于: /about/ || fas fa-heart
```
#### 4.4.2 添加子页面
刷新页面，发现导航栏已经展示出来了，但是点击其中tab，发现报错了，这是因为还没添加页面
```
Cannot GET /about/
```
##### 关于页
在项目根目录使用cmd命令
```
hexo new page about
```
使用该命令后会生成/source/about/index.md文件，打开并添加layout: about属性以及更多正文信息
```yaml
---
title: about
date: 2020-02-23 19:20:33
layout: about
---

这里写关于页的正文我是xxx，支持 Markdown, HTML

```
##### 分类页
其他子页面同理，分类页创建：
```
hexo new page categories
```
同样在source/categories/index.md 这个文件添加属性type: "categories"

##### 标签页
```
hexo new page tags
```
在 source/tags/index.md 中添加标签属性type: "tags"
##### 使用标签
在文章的开头的Front-matter区域，添加以下字段即可新增分类或者标签：
```yaml
categories: 技术
tags:
  - Hexo
```
#### 4.4.3 头像
```yaml
avatar:
  img: /img/avatar.png # 头像图片
  effect: true # 头像动效
```
#### 4.4.4 顶部图
* 如果不需要显示顶部图，可直接配置 disable_top_img: true
* 显示优先级：文章的front-matter的top_img属性 >ront-matter的 cover属性 > 配置文件的 default_top_img属性
* 主页顶部图高度：index_top_img_height:  # 例如 300px/300em/300rem  


#### 4.4.5 评论功能
一般的主题都支持多个评论插件，如disqus、gitalk、valine、 waline、twikoo等
##### 以Valine为例
1. Valine需要LeanCloud支持，登录或注册 LeanCloud，如果是国内版需要实名，国际版不需要实名认证，然而国际版共享域名不再向中国大陆提供服务（国区IP用户无法评论），需要使用自定义域名。进入控制台后点击左下角创建应用
2. 应用创建好以后，进入刚刚创建的应用，选择左下角的设置>应用Key，复制APP ID、APP Key和serverURLs，由于国际版通用域名失效了，所以现在serverUrl也是要填的
3. 在主题配置文件的comments字段下的user设置为Valine,valine填写以下内容，重新部署刷新页面即可看到评论区
```yaml
comments:
  # Up to two comments system, the first will be shown as default
  use: Valine
  ...
  valine:
  appId: # your appId
  appKey: # your appKey
  serverURLs:          
```

4. LeanCloud 使用自定义域名（可选）
这里请配合下文的绑定域名使用，可以先跳过。如果自己申请了域名，可以为LeanCloud绑定api域名。
* 在应用控制台 > 设置 > 域名绑定 > API 访问域名 绑定 API 域名，填入自定义的二级域名例如`api.kdsunset.top
`，勾选ssl和强制https，点击绑定后会生成一条推荐 DNS 配置
* 在域名管理后台新增一条CNAME记录，将刚才生成推荐 DNS 配置填入

| HOSTNAME | TYPE | ADDRESS |
| --- | --- | --- |
| api | CNAME | username.github.io |
* 最后将serverURLs的值修改成自定义域名。


 butterfly 支持双评论系统，我们再配置一个Gitalk：
##### Gitalk
1. 创建 Github 应用：登录Github，打开Settings->Developer Settings->OAuth Apps->New OAuth Apps，填写以下信息，创建成功后会生成Client ID和Client Secret
```
Application name：应用名，方便起见直接填github用户名
Homepage URL：网站地址
Application description：应用描述
Authorization callback URL：网站地址
```
2. 修改butterfly的主题配置
```
comments:
  #开启双评论
  use: Valine,Gitalk

# https://github.com/gitalk/gitalk
gitalk:
  client_id: # 上一步创建的Github 应用的Client ID
  client_secret: # 上一步创建的Github 应用的Client Secret
  repo: # 关联的Github Pages的仓库名（本文3.3小节部署服务器）
  owner: # 你的Github 用户名
  admin: # 你的Github 用户名
  option:
```
3. 重新部署，在文章下的评论区即可看到gitalk评论功能。如果提示“未找到相关Issue进行评论”，则点击下方的“使用GitHub登录”，然后刷新一下页面即可，缺点就是每篇文章发布后都需要手动初始化以下，或者使用自动初始化脚本

#### 4.4.6 访问人数和阅读统计
butterfly的默认调用busuanzi的进行统计，设置以下字段，刷新页面后在侧边栏的网站资讯看到本站访客数和本站总访问量。文章标题后面带有阅读量次数
```yaml
busuanzi:
  site_uv: true
  site_pv: true
  page_pv: true
```
#### 4.4.7 字数统计
安装插件
```
# wordcount字数统计插件
npm install hexo-wordcount --save
```
配置以下字段
```yaml
wordcount:
  enable: true
  post_wordcount: true
  min2read: true
  total_wordcount: true
```

#### 4.4.8 分析统计
* 以百度统计为例
* 登录百度统计官网管理后台，使用设置->账户设置->网站列表->新增网站
* 复制应用的统计代码中的key到配置中的baidu_analytics字段
```yaml
# 填写百度统计代码的key（形如“  hm.src = "https://hm.baidu.com/hm.js?28e4ea7748d7403e4bf35f897a5e67e0";）
baidu_analytics: 

```
#### 4.4.9 中文字和半形的英文、数字、符号之间插入空白
```
# https://github.com/vinta/pangu.js
# Insert a space between Chinese character and English character (中英文之間添加空格)
pangu:
  enable: false
  field: post # site/post
```

#### 4.4.10 图片压缩
Butterfly主题需要使用到很多图片。如果图片太大，会严重拖慢网站的加载速度，以下是常用压缩工具
* [tinypng](https://tinypng.com/)
* caesium

## 5 其他优化
一通操作下来，相信你的博客样式已经变得称心如意了，但是优化还远不止如此，如果觉得username.github.io格调不够高可以绑定自己的域名；如果想在搜索引擎更容易搜索到自己的博客需要做SEO优化；如果图片越来越多需要优化加载速度就需要使用图床来管理图片。

### 5.1 绑定域名

域名注册商国内有阿里云、腾讯等，国外有GoDaddy、namesilo等，我选的是namesilo，国外的服务不需要备案，namesilo也支持支付宝，下面以namesilo为例  

1. 注册namesilo或者其他服务商，购买一个你钟意的域名。注册和购买域名不是本文重点就不展开了，网站有很多教程。
2. 配置DNS，在namesilo点击个人头像进入Domain Manager页面,点击你的刚注册的域名，找到DNS Records，点击update，
* 添加以下A记录，A记录是将域名解析到ip地址，即将域名指向你的username.github.io的ip地址，注意这里**不要用ping** 的方式获取username.github.io的ip，因为这个ip是动态的，而是使用Github 官方文档[管理 GitHub Pages 站点的自定义域](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)提供的ip。

* 添加CNAME记录，将你的域名解析到另一个域名，即username.github.io域名

| HOSTNAME | TYPE | ADDRESS |
| --- | --- | --- |
|  | A | 185.199.108.153 |
|  | A | 185.199.109.153 |
|  | A | 185.199.110.153 |
|  | A | 185.199.111.153 |
| www | CNAME | username.github.io |

4. 设置的CNAME文件
在source文件夹中下创名为"CNAME"的文件（删除后缀名），使用文本编辑器该文件，内容就是你的域名,例如
```
xxxx.com
```
5. 设置Github仓库
Github支持自定义域的HTTPS，打开Github 仓库，点击Settings->Pages->GitHub Pages，你会发现已经指向你的自定义域名了，勾选Enforce HTTPS ，使用Github Page自带的证书，稍等片刻（DNS生效需要时间），就可以使用HTTPS协议访问你的域名了。

### 5.2 CDN加速
由于Github在国内的访问速度是比较慢的，为了优化访问网站的速度，可以使用Github pages+国内托管平台，如gitee、coding，双线部署的方式，这两个都需要实名备案，另一种方式是使用cdn加速，目前cloudfare有免费的服务，对国内用户来说访问速度应该好于直接访问Github （吧）。

1 登录（注册）[cloudflare]("https://cloudflare.com/")，
2. 添加站点。进入控制台，点击"添加站点"填写你的域名（不需要www），下一步选择个人免费版，等待系统扫描DNS记录，然后会分配 Cloudflare 名称服务器，根据提示将原来dns服务器替换成Cloudflare 名称服务器
3. 更改DNS服务器
登录注册博客的域名的服务商管理后台，本例是namesilo，打开namesilo管理后台，点击NameServer Manager，备份一下原来的dns服务器，以免cloudfare免费版不可用了时方便还原回去。
```
NS1.DNSOWL.COM
NS2.DNSOWL.COM
NS3.DNSOWL.COM
```
然后全部删除，替换成Cloudflare提供的 名称服务器
```
kristina.ns.cloudflare.com
mario.ns.cloudflare.com
```
4.等待激活
修改DNS的解析后，需要一个生效时间，回到Cloudflare平台查看更新状态，激活后会发送电子邮件到注册Cloudflare的邮箱。
如果激活以后访问博客首页出现“重定向次数过多的”错误，则需要将cloudflare管理后台的SSL/TLS设置成“完全”模式。

## 总结
以上就是使用hexo + GitHub Pages 的搭建博客网站的教程，
seo优化的内容和图床的配置篇幅比较多，将在新文章中展开。

## 参考资料
[1]. Hexo : https://hexo.io/zh-cn/docs/
[2]. Butterfly : https://butterfly.js.org/
[3]. Valine : https://valine.js.org/quickstart.html