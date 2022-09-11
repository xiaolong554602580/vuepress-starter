import{_ as i,o as e,c as n,d as s}from"./app.7374fbb4.js";const d={},t=s(`<h1 id="\u5C0F\u7A0B\u5E8F\u56FE\u7247\u7011\u5E03\u6D41" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u56FE\u7247\u7011\u5E03\u6D41" aria-hidden="true">#</a> \u5C0F\u7A0B\u5E8F\u56FE\u7247\u7011\u5E03\u6D41</h1><p>WXML</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;view class=&quot;wallContainer&quot;&gt;
  &lt;view class=&quot;item&quot;&gt;
    &lt;view class=&quot;picture&quot; wx:for=&quot;{{picture}}&quot; wx:key=&quot;index&quot; wx:if=&quot;{{(index%2)==0}}&quot;&gt;
      &lt;image src=&quot;{{item.img}}&quot; mode=&quot;widthFix&quot;&gt;&lt;/image&gt;
    &lt;/view&gt;
  &lt;/view&gt;
  &lt;view class=&quot;item&quot;&gt;
    &lt;view class=&quot;picture&quot; wx:for=&quot;{{picture}}&quot; wx:key=&quot;index&quot; wx:if=&quot;{{(index%2)!=0}}&quot;&gt;
      &lt;image src=&quot;{{item.img}}&quot; mode=&quot;widthFix&quot;&gt;&lt;/image&gt;
    &lt;/view&gt;
  &lt;/view&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>WXSS</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>page{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JS</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>picture: [
      {img:&#39;https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg&#39;},
      {img:&#39;https://tse3-mm.cn.bing.net/th/id/OIP-C.KTKyK4oPAzVHmj3ZUP90qAHaNK?pid=ImgDet&amp;rs=1&#39;},
      {img:&#39;https://pic4.zhimg.com/v2-ff6ebead95dc49984fe0af77fed18bfa_r.jpg?source=1940ef5c&#39;},
      {img:&#39;https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/00/03/ChMkJlfJVaqIXeBPAARjDy6BmfoAAU95AOqUbIABGMn835.jpg&#39;},
      {img:&#39;https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg&#39;},
      {img:&#39;https://tse1-mm.cn.bing.net/th/id/R-C.9190f03528ea1a77d6b5da2cbc7e56eb?rik=x5wngLUlX48tIg&amp;riu=http%3a%2f%2fwww.shijuepi.com%2fuploads%2fallimg%2f200924%2f1-200924110P5.jpg&amp;ehk=gNZ01QBvm%2bjzaj0i3Dp3HHf%2bXtWueP2Fa3kAMp%2f1aGw%3d&amp;risl=&amp;pid=ImgRaw&amp;r=0&#39;},
      {img:&#39;https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg&#39;},
    ],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[t];function a(v,c){return e(),n("div",null,l)}var u=i(d,[["render",a],["__file","mypage0.html.vue"]]);export{u as default};
