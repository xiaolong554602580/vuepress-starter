import{_ as d,o as s,c as a,a as e,e as l,b as n,d as c,r}from"./app.7374fbb4.js";const t={},o=e("h1",{id:"\u4E91\u5F00\u53D1-\u4E91\u6570\u636E-\u4E91\u51FD\u6570-\u90E8\u7F72\u8868\u6001\u6258\u7BA1-\u5FEB\u901F\u5F00\u53D1\u5B66\u4E60\u603B\u7ED3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E91\u5F00\u53D1-\u4E91\u6570\u636E-\u4E91\u51FD\u6570-\u90E8\u7F72\u8868\u6001\u6258\u7BA1-\u5FEB\u901F\u5F00\u53D1\u5B66\u4E60\u603B\u7ED3","aria-hidden":"true"},"#"),n(" \u4E91\u5F00\u53D1\uFF08\u4E91\u6570\u636E&\u4E91\u51FD\u6570&\u90E8\u7F72\u8868\u6001\u6258\u7BA1\uFF09"),e("br"),n("\u5FEB\u901F\u5F00\u53D1\u5B66\u4E60\u603B\u7ED3")],-1),v=n("\u8BFE\u7A0B\u6765\u6E90\uFF1A"),u={href:"https://cloud.tencent.com/edu/learning/course-2830-53856",target:"_blank",rel:"noopener noreferrer"},m=n("\u817E\u8BAF\u5927\u5B66"),b=c(`<h2 id="\u914D\u7F6E\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> \u914D\u7F6E\u5F00\u53D1\u73AF\u5883</h2><ol><li>\u672C\u5730\u914D\u7F6Enode.js\u5F00\u53D1\u73AF\u5883</li><li>vue2\u5B89\u88C5 <code>npm install vue</code></li><li>vue cli \u5B89\u88C5<code>npm install -g @vue/cli</code> ps:vue\u547D\u4EE4\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u4E0A\u7981\u6B62\u8FD0\u884C\u811A\u672C\uFF0C\u9700\u7BA1\u7406\u5458\u6253\u5F00window powershell\u8FD0\u884C\u547D\u4EE4<code>set-ExecutionPolicy RemoteSigned</code></li><li>CloudBase CLI\u5B89\u88C5<code>npm i -g @cloudbase/cli</code></li><li>Vscode\u914D\u7F6E\u4E91\u5F00\u53D1\u63D2\u4EF6 <img src="https://files.mdnice.com/user/25817/08c370a1-cf8b-46bd-9251-13c0d6c59296.png" alt=""></li></ol><h2 id="\u521B\u5EFA\u521D\u59CB\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u521D\u59CB\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u521D\u59CB\u9879\u76EE</h2><ol><li>\u4F7F\u7528VUE CLI\u6765\u521B\u5EFA\u65B0\u7684VUE\u9879\u76EE<code>vue create cloudbase</code></li><li>\u914D\u7F6E\u53BB\u5F00\u53D1SDK</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install --save tcb-js-sdk@latest

//main.js
const tcb = require(&#39;tcb-js-sdk&#39;);
const app = tcb.init({
  env:&#39;your cloud id&#39;
})
//cmd\u547D\u4EE4
code .
npm run serve

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C1\u3001 <img src="https://files.mdnice.com/user/25817/e93dcad9-5977-424f-bd87-146aa6733e9b.png" alt=""></p><h2 id="\u6DFB\u52A0\u5B89\u5168\u57DF\u540D" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5B89\u5168\u57DF\u540D" aria-hidden="true">#</a> \u6DFB\u52A0\u5B89\u5168\u57DF\u540D</h2><p><img src="https://files.mdnice.com/user/25817/6a7a30e3-0ebe-49b3-a52e-e62ad0063167.png" alt=""></p><h2 id="\u5F00\u542F\u533F\u540D\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u533F\u540D\u767B\u5F55" aria-hidden="true">#</a> \u5F00\u542F\u533F\u540D\u767B\u5F55</h2><p><img src="https://files.mdnice.com/user/25817/2e5bed69-d801-4da4-888d-8e8a9412758e.png" alt=""></p><h2 id="\u5728\u9875\u9762\u4E2D\u8C03\u7528\u4E91\u5F00\u53D1\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5728\u9875\u9762\u4E2D\u8C03\u7528\u4E91\u5F00\u53D1\u8D44\u6E90" aria-hidden="true">#</a> \u5728\u9875\u9762\u4E2D\u8C03\u7528\u4E91\u5F00\u53D1\u8D44\u6E90</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//main.js

var auth = app.auth();

async function login(){
  await auth.signInAnonymously();
  // \u533F\u540D\u767B\u5F55\u6210\u529F\u68C0\u6D4B\u767B\u5F55\u72B6\u6001isAnonymous\u5B57\u6BB5\u4E3Atrue
  const loginState = await auth.getLoginState();
  console.log(loginState.isAnonymous); // true
}
login();
//\u4E91\u6570\u636E\u8C03\u7528\u4EE3\u7801
const db = app.database();
const collection = db.collection(&#39;your database name&#39;);
collection.get().then(r=&gt;{
    console.log(r.data)
})
//\u4E91\u51FD\u6570\u8C03\u7528\u4EE3\u7801
app.callFunction({
    name:&#39;your function name&#39;,
}).then(r=&gt;{
    console.log(r)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u90E8\u7F72\u9759\u6001\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u9759\u6001\u9875\u9762" aria-hidden="true">#</a> \u90E8\u7F72\u9759\u6001\u9875\u9762</h2><p><img src="https://files.mdnice.com/user/25817/64ff153c-4f66-445e-951c-506897e034b7.png" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u5B8C\u6210HTML\u8BBE\u8BA1\u540E\uFF0C\u8FDB\u5165\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u6267\u884C
npm run bulid

cd dist

\u4E0A\u4F20\u90E8\u7F72\u5230\u4E91\u7AEFtcb hosting deploy -e \u4F60\u7684\u73AF\u5883ID

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function h(p,g){const i=r("ExternalLinkIcon");return s(),a("div",null,[o,e("p",null,[v,e("a",u,[m,l(i)])]),b])}var f=d(t,[["render",h],["__file","2022_3_11.html.vue"]]);export{f as default};
