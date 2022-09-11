import{_ as e,o as i,c as n,d as t}from"./app.7374fbb4.js";const s={},d=t(`<p>\u7B80\u6613\u7684\u547D\u4EE4\u884C\u5165\u95E8\u6559\u7A0B: Git \u5168\u5C40\u8BBE\u7F6E:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config --global user.name &quot;XXXXXXXX&quot;
git config --global user.email &quot;XXXXXXXX@XX.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA git \u4ED3\u5E93:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir anyway-script
cd anyway-script
git init 
touch README.md
git add README.md
git commit -m &quot;first commit&quot;
git remote add origin https://gitee.com/aaronmo/anyway-script.git
git push -u origin &quot;master&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5DF2\u6709\u4ED3\u5E93?</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd existing_git_repo
git remote add origin https://gitee.com/aaronmo/vuepress-blog-demo.git
git push -u origin &quot;master&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>20220809</p>`,7),a=[d];function r(l,c){return i(),n("div",null,a)}var u=e(s,[["render",r],["__file","2022-08-11.html.vue"]]);export{u as default};
