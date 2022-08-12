# 小程序图片瀑布流

WXML
```
<view class="wallContainer">
  <view class="item">
    <view class="picture" wx:for="{{picture}}" wx:key="index" wx:if="{{(index%2)==0}}">
      <image src="{{item.img}}" mode="widthFix"></image>
    </view>
  </view>
  <view class="item">
    <view class="picture" wx:for="{{picture}}" wx:key="index" wx:if="{{(index%2)!=0}}">
      <image src="{{item.img}}" mode="widthFix"></image>
    </view>
  </view>
</view>
```
WXSS
```
page{
  background: white;
}

.wallContainer{
  margin: 0 auto;
  height: auto;
}

.item{
  width: 350rpx;
  height: auto;
  padding: 10rpx;
  float: left;
}
.item .picture{
  padding: 10rpx;
}

.item .picture image{
  width: 100%;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #a5a3a3;
}
```

JS
```
picture: [
      {img:'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'},
      {img:'https://tse3-mm.cn.bing.net/th/id/OIP-C.KTKyK4oPAzVHmj3ZUP90qAHaNK?pid=ImgDet&rs=1'},
      {img:'https://pic4.zhimg.com/v2-ff6ebead95dc49984fe0af77fed18bfa_r.jpg?source=1940ef5c'},
      {img:'https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/00/03/ChMkJlfJVaqIXeBPAARjDy6BmfoAAU95AOqUbIABGMn835.jpg'},
      {img:'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'},
      {img:'https://tse1-mm.cn.bing.net/th/id/R-C.9190f03528ea1a77d6b5da2cbc7e56eb?rik=x5wngLUlX48tIg&riu=http%3a%2f%2fwww.shijuepi.com%2fuploads%2fallimg%2f200924%2f1-200924110P5.jpg&ehk=gNZ01QBvm%2bjzaj0i3Dp3HHf%2bXtWueP2Fa3kAMp%2f1aGw%3d&risl=&pid=ImgRaw&r=0'},
      {img:'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'},
    ],
```