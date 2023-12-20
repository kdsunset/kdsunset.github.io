---
title: Ubuntu 22.04安装教程及使用技巧
categories: 技术
abbrlink: ac99d9f6
---
# Ubuntu 22.04安装教程及使用技巧

## 前言
&emsp;&emsp;通常所说的 Linux 其是指Linux内核，Linux 系统是指基于 Linux 内核的操作系统的泛称，而不是一个具体的操作系统。Ubuntu 则是 Linux 其中一个发行版，其他比较知名的还有 Debian、Fedora、CentOS等。<br/>
&emsp;&emsp;作为程序员，我们可以用使用 Ubuntu 系统来体验 Linux、 熟悉命令行操作、部署服务器、搭建梯子和交叉编译，如编译 Android 项目所需的so库，编译 Android 系统源码等等。本文将面向新手介绍在 VMware 中安装和配置 Ubuntu 的过程，以及一些常用的技巧和命令。

本文所用环境
*   VMware Workstation 17 Pro
*   Ubuntu 22.04.3 LTS Desktop 64-bit

## 1 下载镜像
```
# Ubuntu官方网站
https://cn.ubuntu.com/download/desktop
```
在Ubuntu官网下iso镜像文件，同时也可看到官方推荐的Ubuntu配置要求
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7ff944fe4d14327b69e05f19b442e53~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=553\&h=189\&s=419018\&e=png\&b=f6f5f5)

## 2 安装
### 2.1 VMware虚拟机安装
如果对性能要求不是很严格，通常选择在虚拟机环境中使用Ubuntu即可。如果有一台电脑专门用来安装Ubuntu，则跟Windows重装系统的前置步骤是一样的：制作Ubuntu的U盘启动盘->bios设置U盘启动->进入菜单开始安装，这里主要讲虚拟机的安装方式。  
ps：VMware Workstation 有Player和pro两款，pro功能更多，带有快照功能。
1. 打开VMware，选择新建虚拟机->自定义，方便我们进行详细配置

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/327abb2bc1324ac8885814beb99f82f8~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=513\&h=440\&s=904864\&e=png\&b=fbfbfb)

2. 点击下一步，虚拟机兼容性保持默认

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/deecba778054403582011c776448583a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=513&h=440&s=904864&e=png&b=f1f1f1)

3. 安装来源区别就是，选择Ubuntu镜像文件会自动开启简易安装，默认开启英文的Ubuntu安装引导，这里选择“稍后安装操作系统”

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6cb1a7e60ec345fdb37cfcffd05213f2~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=513&h=440&s=904864&e=png&b=f0f0f0)

4. 根据下载的镜像文件选择操作系统类型Linux，默认下载的是64位镜像

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c6ed3c13ffa4a5eb9eaf2257bafb2a8~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=513&h=440&s=904864&e=png&b=f0f0f0)

5. 选择安装位置，如果是需要进行编译等需要频繁读写磁盘的操作，强烈建议安装到SSD硬盘。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8037f487f01c462a93f476c7ede2cc46~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=513&h=440&s=904864&e=png&b=f3f3f3)

6. 选择CPU配置
*   处理器数量 ：想要虚拟的CPU颗数。对应物理主机的cpu插槽数，除了多路服务器，家用机一般一个U，
*   每个处理器的内核数量：想要虚拟的CPU内核数。对应物理主机的超线程支持的线程数
*   处理器内核总数：处理器数量x每个处理器的内核数量

总的原则是：虚拟机处理器内核总数：< 物理主机CPU实际的线程数，例如对于6核12线程的cpu能使用的最大处理器内核总数为12个

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc948e1ec94748eab5d5ed503f975a70~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=513&h=440&s=904864&e=png&b=f2f2f2)

7. 内存选择。根据需求选择，没什么需求就按默认推荐的4GB

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e1d8a2758aec4aa995c52575aff1df68~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=513&h=440&s=904864&e=png&b=f2f2f2)

8. 网络选择，这里选择NAT模式或者桥接都可以。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e3128ab236be4f2d96a4589a618fbf5e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=513&h=440&s=904864&e=png&b=f2f2f2)

模式区别如下：
* 桥接模式：虚拟机加入宿主机所在的网络，允许访问Internet互联网（当然宿主机必须可以访问互联网才行）。可以将虚拟机看做一台新电脑，主机、虚拟机和其他电脑三者通过所在局域网，互联互通。
* NAT模式：虚拟机和宿主机组成小局域网，互联互通。虚拟机通过宿主机访问外部网络（此时宿主机起到路由器作用），但外部网络不能访问虚拟机。
* 仅主机模式：宿主机与虚拟机组成一个封闭的局域网，虚拟机不能访问外部网络、互联网，外部网络也不能访问虚拟机。

9. 磁盘选择，IO控制器和虚拟磁盘类型选择软件推荐即可，影响不大，主要是选择磁盘大小，装Ubuntu建议20G以上，后期也可扩容。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aabb363e547845338dc46bf692cfd709~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=513&h=440&s=904864&e=png&b=f1f1f1)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b1b1d08b910468baf7ca9b446afd674~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=513&h=440&s=904864&e=png&b=f2f2f2)

10. 添加Ubuntu系统镜像文件
点击自定义硬件->添加，在添加硬件向导窗口选择“CD/DVD驱动器”并按确认。点击CD/DVD驱动器，在“使用ISO影像文件”选择前面下载的iso文件

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/90ed3831a1734cfb849c0d378e430138~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=513&h=440&s=904864&e=png&b=f6f6f6)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ec64c2071624c29a8ae8fb93d1cded3~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=554&h=234&s=519698&e=png&b=fbfbfb)

至此，VMware Ubuntu虚拟机配置部分已经完成，下面开始安装Ubuntu。
<br/>

### 2.2 安装Ubuntu系统
从VMware中选择刚才新建的虚拟机，点击“开启此虚拟机”。虚拟机运行后选择（按回车）“Try or Install Ubuntu”

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8eb37f981da44efa836345c8b38458a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=554&h=306&s=679575&e=png&b=020202)

1. 选择系统语言，这里为了方便演示安装过程选择中文，安装好之后系统就是中文的了，不过主文件下的目录也是中文命名（强迫症震怒），然后点击“安装Ubuntu”

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84223b5fd073413a87783263aebf4f9c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=553&h=346&s=767018&e=png&b=f8f7f7)

2. 选择键盘布局

如果这里这里没有显示“继续”按钮，可能是Ubuntu的分辨率不对导致显示不全，可以关闭安装引导窗口，右键选择“Display Setting”->Resolution重新选择分辨率即可

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d16b9f66535440d48bbcd5c233e0dfc3~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=553&h=346&s=767018&e=png&b=faf9f9)

3. 软件更新选择，按需或随意

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd1309f47e354276afd9fa1705223bae~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=553&h=346&s=767018&e=png&b=f9f9f9)

4. 安装类型，可以选择自动分区，清除整个磁盘并安装Ubuntu，由于前面在VMware选择的是虚拟磁盘，可以大胆继续，不会对物理磁盘有影响。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c19020789a9e43ff90ad23f260e1b714~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=554&h=501&s=1112591&e=png&b=abaaaa)

5. 选择时区，点击地图选择上海就是**UTC+8**。（为什么没有Asia/Beijing？这个大概是中国时区划分的历史原因了，一直没有更新）

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa853c4d979e4de4a7e1205006edb4ec~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=554&h=497&s=1103711&e=png&b=fafafa)

6. 设置信息和密码

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7687c58d4f94446bb4c6d5343616461e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=554&h=501&s=1112591&e=png&b=f9f9f9)

7. 等待安装并重启

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c54c7cfbee141fc9312d7b0b243650b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=554&h=421&s=934942&e=png&b=5f1a3f)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/933a2c1e878f4b53b7e2a92545eb8026~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=554&h=415&s=921623&e=png&b=6b1d4c)

8. 完成~

![1702280297691.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48f458c8eb9e49ec8f71f330c2547293~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=816&h=545&s=434735&e=png&b=822855)

## 3 使用技巧

#### 3.1 切换系统语言为中文
如果安装过程选择的是英文，可以通过以下方式切换到中文：
右键选择"Display Settings"->左侧菜单栏切换到"Region&Language"->在"Language"选项中选择"Chinese",重启完成
如果没有中文选择，则选择Manage Installed Languages 安装中文语言包

![6b5198bad92d57352d2af16f7b0208b.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ceb2b0c3e5ef43339a243867b71c4a0f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=806&h=481&s=43203&e=png&b=fafafa)

#### 3.2 换源
系统默认的软件源服务器位于国外，如果出现下载软件包很慢或者无法下载的问题，可以将官方源替换成国内镜像源或者设置科学上网以提高软件下载和安装的速度。

打开系统设置->关于->软件更新->Ubuntu软件，点击“下载自:”->其他，选择国内的源或者通过“测试最佳服务器”选择网络连接更稳定的源

![1702281722636.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56e1d9e1fdd54836baf7584305771a6e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=706&h=664&s=74817&e=png&b=d0d0d0)

#### 3.3 虚拟机使用主机的网络代理
如果主机配置了科学上网，可以通过如下方式使虚拟机也连接上代理，这里以v2ray为例：

1. v2ray参数设置勾选“允许来自局域网的连接”
2. Ubuntu设置-网络-网络代理，填写Http、Https、Socks设置，

其中IP地址是主机的IP地址（“以太网适配器-以太网”），端口号是v2ray窗口底部导航栏“局域网[socks:xxxx][http:xxxy]”中的端口号，虚拟机网卡选桥接还是NAT都可以，v2ray也不用选全局路由。

![1702282703329.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5600d45ebe024c87a7972706f0b63d3b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=980&h=579&s=59461&e=png&b=cdcdcd)

#### 3.4 Ubuntu与宿主机互相复制文本或文件
如果是Ubuntu server 可以使用lrzsz或其他ftp工具进行文件的上传或下载，在VMware中有更方便的插件
：VMware Tools，不过兼容性不好，更推荐使用open-vm-tools，如果是桌面版使用open-vm-tools-desktop功能更多
```
# 检查是否安装open-vm-tools有则卸载
sudo apt remove open-vm-tools
# 安装open-vm-tools-desktop
sudo apt install open-vm-tools-desktop
```

#### 3.5 配置环境变量
.bashrc文件是用于储存用户的终端配置，包括环境变量等，以配置java环境变量为例：
```
# 检查是否安装jdk
java -version

# 安装openjdk-11
sudo apt-get install openjdk-11-jdk

# 打开bashrc文件
sudo gedit ~/.bashrc

#在最后一行加上:
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

# 使环境变量马上生效
source ~/.bashrc
```

#### 3.6 快照功能
快照功能是一个非常实用的功能，类似系统的还原点，不管如何瞎折腾都可以将操作系统快速还原到某个时刻，一般在搭好环境后就可以打个快照。VMware也提供了快照管理功能，位置在菜单栏“虚拟机”->快照。

![3f064fcf1a767f77f100639ff75c48a.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2f1c9b80fc274118a0ba2b7b22ce85f1~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=935&h=442&s=219302&e=png&b=f1f0f0)

#### 3.7 磁盘扩容
当Ubuntu的磁盘空间不足时，可以通过扩容的方式（当然物理硬盘还有剩余空间）增加磁盘大小。可以通过**df -h**查看当前磁盘状态。我们使用的是Ubuntu desktop，可以直接通过软件界面进行调整。
例如当初分配给Ubuntu的硬盘大小只有25G，现在扩容到30G：
* 点击“编辑虚拟机设置”->硬件->硬盘->扩展，设置新容量大小
* Ubuntu侧边栏的显示应用程序->工具文件夹->“磁盘”应用，点击Hard Disk，可以发现多了一块未分配空间，
在需要扩容的分区点击齿轮图标选择调整大小，输入调整的大小并确认。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/103aebe81b11419392b91b437b9769b2~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=896&h=516&s=121387&e=png&b=f8f7f7)
![338dee9d28573dee0f979f6979469fd.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3526b065ca6e4f89897133ca0d7747f2~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=902&h=601&s=93392&e=png&b=d6d6d6)

## 4 常用命令
#### 4.1 软件管理
apt是一个Shell 前端软件包管理器，提供软件包的安装、更新和卸载等功能，使用apt命令需要root权限。
```
# 以git为例
# 检查可用的软件包更新
sudo apt update

# 安装
sudo apt install git

# 卸载
sudo apt remove git 
```

#### 4.2 文件处理
```
# 新建文件
touch filename.suffix

# 创建目录，-p：确保目录名称存在，不存在的就建一个，可以用来创建多层目录
mkdir -p app/src/main

# 移动文件
mv [options] sourcefile directory

# 重命名
mv [options] oldname newname

# 复制文件
cp [options] sourcefile directory

# 删除文件，-r：删除包括所有子文件，-f：直接删除，谨慎使用rm -rf
rm filename
```

#### 4.3 解压文件 
```
# ​.tar.gz 和 .tgz​格式
$ tar zxvf FileName.tar.gz

#.zip格式
unzip FileName.zip

```

#### 4.4 创建root用户
```
# 创建root用户，依照提示输入密码
sudo passwd root

#进入root用户
su root
```

#### 4.5 同步时间
```
# 查看时间
date

# 使用ntpdate同步网络时间
sudo apt install ntpdate

# 从cn.pool.ntp.org服务器同步网络时间
ntpdate -u cn.pool.ntp.org
```

#### 4.6 查找文件里符合条件的字符串
在当前文件夹下搜索文件里面的字符内容，-r表示递归查找子目录中的文件，-w表示只显示全字符合的列
```
grep -rw "search" 
```

#### 4.7 vim 简单使用

```
# 打开文件
vim filename.txt

# 编辑文件
# 1.打开文件后默认命令模式，按“i”进入编辑模式
# 2.编辑完成，按“esc”返回命令模式，此时可以进行保存等操作

# 退出文件
# 1.保存并退出
:wq

# 2.放弃修改并退出
:q!
```

#### 4.8 其他
```
# 修改所有用户组对文件的权限为最高权限(可读可写可执行）
chmod -R 777 filename 

# 查看文件的内容，输出到终端
cat filename

# 将终端内容输出到文件，免去手动复制终端内容
script -f -a /path/log.txt
```

## 总结
&emsp;&emsp;以上便是Ubuntu从虚拟机配置参数讲解到Ubuntu安装的全过程，以及一些个人认为比较实用的使用技巧。至于命令，如果是体验Linux记不住也没关系，当你有实际需求时，例如交叉编译源码，你会记住的。