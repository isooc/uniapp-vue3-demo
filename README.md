# vue3-mobile-uniapp


> vue3-mobile-uniapp提供企业级的开发demo

本架构使用的技术为：vue3(setup-script)+vite2+uniapp 的新一代的移动端框架，It's easy and fast!

使用 eslint+prettier+gitHooks 格式和校验代码,提高代码规范性和开发效率

使用最先进的包管理工具pnpm


## 提示
现在uniapp cli 方式已经可以用vue3+vite2构建了, 

我这边测试了三端：h5, 小程序， 和app

基础构建没有问题，

目前已测试的功能：vuex，发送req，跳转，接收跳转的参数，svg-icon(h5中可以用)

然后就是：
uview-ui": "2.0.20", 目前还不支持vue3


> 开发和使用感受：两个字 真香！！！！！

vue3和vue2在性能上的对比

- 打包大小减少41%

- 初次渲染快55%, 更新渲染快133%

- 内存减少54%

- **使用Proxy代替defineProperty实现数据响应式**

- **重写虚拟DOM的实现和Tree-Shaking**


## 构建步骤

```bash
# 克隆项目
git clone https://github.com/jzfai/vue3-mobile-uniapp.git

# 进入项目目录
cd  vue3-mobile-uniapp

# pnpm address https://pnpm.io/zh/motivation
# 安装依赖(建议用pnpm)
# 你可以使用 "npm -g i pnpm" 去安装pnpm
pnpm i

# 启动h5
pnpm run dev:h5

# 启动 微信
pnpm run dev:mp-weixin
```


## 其它

```bash
# 代码格式检查并自动修复
pnpm run lint
```
## 浏览器支持

注意：vue3不在支持IE浏览器

## 版本

[MIT](https://github.com/jzfai/vue3-mobile-uniapp/blob/master/LICENSE) license.

Copyright (c) 2021-present  kuanghua


