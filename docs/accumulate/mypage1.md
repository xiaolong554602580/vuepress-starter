# 小程序开发参考资料

## 开发必备

### 1. 小程序官方开发文档

**官方**
[https://developers.weixin.qq.com/miniprogram/dev/api/](https://developers.weixin.qq.com/miniprogram/dev/api/)
[W3C比官方更清楚][https://www.w3cschool.cn/weixinapp](https://www.w3cschool.cn/weixinapp)

### 2. HTML/CSS/JS---菜鸟教程

**HTML**
[https://www.runoob.com/html/html-tutorial.html](https://www.runoob.com/html/html-tutorial.html)

**JavaScript**
[https://www.runoob.com/js/js-tutorial.html](https://www.runoob.com/js/js-tutorial.html)

**CSS**
[https://www.runoob.com/css/css-tutorial.html](https://www.runoob.com/css/css-tutorial.html)

### 3. 相关框架
**VANT 基于组件库**
[https://vant-contrib.gitee.io/vant-weapp](https://vant-contrib.gitee.io/vant-weapp)

**COLOURUI 基于 CSS 类**

**TOWXML 编辑模块用于 Markdown的宣染**

### 小程序背景图铺满整个屏幕 
wxml
```
<view class="test-bg">
    <image src="" class="bg-image" mode="scaleToFill"></image>
  </view>
```
wxcss
```
page{
    width: 100%;
    height: 100%;
  }
  .test-bg{
    width: 100%;
    height: 100%;
    background-color: #70c7da;
  }
  .bg-image{
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.2);
  }
```
