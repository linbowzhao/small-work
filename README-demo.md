# readme demo

链接[demo](https://baidu.com)

# 一级标题
## 二级标题
### 三级标题
```
code area
```
预览图
![](http://img.zcool.cn/community/0194ba572b35d36ac7253812a38ed6.jpg@900w_1l_2o_100sh.jpg)

- [x] 说明

## 目录结构
```
|
|—— build
|—— config
|—— server 服务端
| |—— index.js 服务端启动入口文件
| |—— static 打包后的资源文件
| |__ index.html 网页入口
|
|——src 资源文件
| |—— assets 组件静态资源库
| |—— components/
| |    |____ Common/ 可复用的组件
| |    |____ ... 其它不可复用的单独组件
| |
| |—— router/
| |    |____ index.js 路由入口
| |    |____ server.js 封装`Ajax`函数
| |    |____ serverConfig.js 服务端接口配置
| |    |____ routes/ 每个页面的路由, 我们在其生命周期钩子函数中改变`vuex`中的状态
| |
| |—— store vuex状态管理
| |—— App.vue douban-movieSPA
| |__ main.js douban-movieSPA入口
|
|__ static 静态资源目录

```
标重点 `重点`！标重点
