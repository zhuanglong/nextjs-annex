<p align="center">
  <a href="#" target="blank">
    <img src="https://gitee.com/zloooong/image_store/raw/master/img/logo.svg" alt="Logo" width="156">
  </a>

<p align="center">
    基于 Next.js + TailwindCSS 开发的响应式网页
  <br />
  </p>
</p>

## 运行

```
# clone
git clone https://github.com/zhuanglong/nextjs-annex.git

# 切换到项目
cd nextjs-annex.git

安装依赖
# pnpm install

# 运行
pnpm dev
```

## 预览

https://nextjs-annex.vercel.app/

https://nextjs-annex.zeabur.app/

## 截图

**Mobile**

![](https://gitee.com/zloooong/image_store/raw/master/img/2023-04-28-09-46-05-image.png)

**Pad**

![](https://gitee.com/zloooong/image_store/raw/master/img/2023-04-28-09-46-32-image.png)

**PC**

![](https://gitee.com/zloooong/image_store/raw/master/img/2023-04-28-09-47-03-image.png)

## 设计稿

https://js.design/community?category=detail&type=resource&id=6296c6971b43ae8250770a41

## 遇到的坑

- [x] [热加载导致页面闪烁](https://github.com/vercel/next.js/issues/46510)
  
  解决：[升级到 v13.3.1](https://github.com/vercel/next.js/issues/46510#issuecomment-1518480811)。
  

## Todo

- [ ] 滚动到顶部
- [ ] 优化移动端的菜单栏