import{_ as n,o as e,c as i,d as s}from"./app.7374fbb4.js";const a={},l=s(`<h1 id="\u57FA\u4E8Ecentos\u5FEB\u901F\u642D\u5EFAlnmp\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8Ecentos\u5FEB\u901F\u642D\u5EFAlnmp\u73AF\u5883" aria-hidden="true">#</a> \u57FA\u4E8ECentOS\u5FEB\u901F\u642D\u5EFALNMP\u73AF\u5883</h1><h2 id="\u4E00\u3001\u6267\u884C\u4EE5\u4E0Bsh\u547D\u4EE4-\u4E0B\u8F7D\u5E76\u5B89\u88C5mysql-nginx-php\u5B98\u65B9\u7684yum-repository" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u6267\u884C\u4EE5\u4E0Bsh\u547D\u4EE4-\u4E0B\u8F7D\u5E76\u5B89\u88C5mysql-nginx-php\u5B98\u65B9\u7684yum-repository" aria-hidden="true">#</a> \u4E00\u3001\u6267\u884C\u4EE5\u4E0Bsh\u547D\u4EE4\uFF0C\u4E0B\u8F7D\u5E76\u5B89\u88C5MySQL/Nginx/PHP\u5B98\u65B9\u7684Yum Repository</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#vi LNMP_setup.sh//shell\u6587\u4EF6</span>

<span class="token comment">#1.\u5B89\u88C5MySQL\u6570\u636E\u5E93</span>
<span class="token function">wget</span> http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
yum -y <span class="token function">install</span> mysql57-community-release-el7-10.noarch.rpm
yum -y <span class="token function">install</span> mysql-community-server

<span class="token comment">#2.\u5B89\u88C5Nginx\u670D\u52A1</span>
<span class="token comment">#\u5B89\u88C5Nginx\u8FD0\u884C\u6240\u9700\u8981\u7684\u63D2\u4EF6\u3002gcc\u662FLinux\u4E0B\u7684\u7F16\u8BD1\u5668\uFF0C\u5B83\u53EF\u4EE5\u7F16\u8BD1C\u3001C++\u3001Ada\u3001Object C\u548CJava\u7B49\u8BED\u8A00\u3002pcre\u662F\u4E00\u4E2Aperl\u5E93\uFF0CNginx\u7684HTTP\u6A21\u5757\u4F7F\u7528pcre\u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u3002zlib\u662F\u4E00\u4E2A\u6587\u4EF6\u538B\u7F29\u548C\u89E3\u538B\u7F29\u7684\u5E93\uFF0CNginx\u4F7F\u7528zlib\u5BF9HTTP\u6570\u636E\u5305\u8FDB\u884Cgzip\u538B\u7F29\u548C\u89E3\u538B\u3002</span>

yum -y <span class="token function">install</span> gcc pcre pcre-devel zlib zlib-devel

<span class="token comment">#\u4E0B\u8F7DNginx\u5B89\u88C5\u5305\u3002</span>
<span class="token function">wget</span> http://nginx.org/download/nginx-1.17.10.tar.gz 

<span class="token comment">#\u89E3\u538BNginx\u5B89\u88C5\u5305\u3002</span>
<span class="token function">tar</span> -zxvf nginx-1.17.10.tar.gz

<span class="token comment">#\u7F16\u8BD1\u5B89\u88C5Nginx\u3002</span>
<span class="token builtin class-name">cd</span> nginx-1.17.10
./configure
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment">#2.\u5B89\u88C5Php</span>
yum -y <span class="token function">install</span> php php-mysql php-fpm

<span class="token comment">#chmox -x LNMP_setup.sh</span>
<span class="token comment">#sh LNMP_setup.sh</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001\u6267\u884C\u4EE5\u4E0B\u4EE3\u7801\u521D\u59CB\u5316mysql\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6267\u884C\u4EE5\u4E0B\u4EE3\u7801\u521D\u59CB\u5316mysql\u6570\u636E\u5E93" aria-hidden="true">#</a> \u4E8C\u3001\u6267\u884C\u4EE5\u4E0B\u4EE3\u7801\u521D\u59CB\u5316MySQL\u6570\u636E\u5E93</h2><p>1.\u542F\u52A8MySQL</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5F85\u8865\u5145
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.\u67E5\u770BMySQL\u521D\u59CB\u5BC6\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grep &quot;password&quot; /var/log/mysqld.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.\u767B\u5F55\u6570\u636E\u5E93</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql -uroot -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.\u4FEE\u6539MySQL\u9ED8\u8BA4\u5BC6\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>set global validate_password_policy=0; #\u4E0D\u4FEE\u6539\u5BC6\u7801\u5B89\u5168\u7B56\u7565\u4F4E\uFF08\u81F3\u5C118\u4F4D\uFF09\u3002
ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;12345678&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5.\u6388\u4E88root\u7528\u6237\u8FC7\u7A0B\u7BA1\u7406\u6743\u9650</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GRANT ALL PRIVILEGES ON *.* TO &#39;root&#39;@&#39;%&#39; IDENTIFIED BY &#39;12345678&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6.\u8F93\u5165exit\u9000\u51FA\u6570\u636E\u5E93</p><h2 id="\u4E09\u3001\u542F\u52A8nginx\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u542F\u52A8nginx\u670D\u52A1" aria-hidden="true">#</a> \u4E09\u3001\u542F\u52A8Nginx\u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/nginx/
sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5Nginx\u542F\u52A8\u3002\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u8F93\u5165ECS\u670D\u52A1\u5668\u7684\u5F39\u6027\u516C\u7F51IP\uFF0C\u4F8B\u5982123.123.123.123\uFF0C\u51FA\u73B0\u5982\u4E0B\u754C\u9762\u8868\u793A\u5B89\u88C5\u542F\u52A8\u6210\u529F\u3002</p><h2 id="\u56DB\u3001\u542F\u52A8php\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u542F\u52A8php\u73AF\u5883" aria-hidden="true">#</a> \u56DB\u3001\u542F\u52A8PHP\u73AF\u5883</h2><h3 id="\u5728nginx-conf\u6587\u4EF6\u4E2D\u589E\u52A0\u5BF9php\u7684\u652F\u6301\u3002" tabindex="-1"><a class="header-anchor" href="#\u5728nginx-conf\u6587\u4EF6\u4E2D\u589E\u52A0\u5BF9php\u7684\u652F\u6301\u3002" aria-hidden="true">#</a> \u5728nginx.conf\u6587\u4EF6\u4E2D\u589E\u52A0\u5BF9PHP\u7684\u652F\u6301\u3002</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /usr/local/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FDB\u5165Vim\u7F16\u8F91\u5668\u540E\uFF0C\u6309\u4E0Bi\u952E\u5165\u7F16\u8F91\u6A21\u5F0F\uFF0C\u5728server\u7684\u6839\u8DEF\u7531\u914D\u7F6E\u4E2D\u65B0\u589Eindex.php\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location / {
   root html;
   index index.html index.htm index.php;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E76\u5728\u6839\u8DEF\u7531\u4E0B\u9762\u65B0\u589E\u4EE5\u4E0B\u914D\u7F6E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if (!-e $request_filename) {
   rewrite ^/(.*)$ /index.php/$1 last;
}

location ~ .*\\.php(\\/.*)*$ {
   fastcgi_pass 127.0.0.1:9000;
   include fastcgi.conf;
   fastcgi_index index.php;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u540E\u7684nginx.conf\u6587\u4EF6\u5982\u4E0B\u56FE\u6240\u793A\u3002 <img src="" alt=""></p><p>\u6309\u4E0BESC\uFF0C\u8F93\u5165:wq\u4FDD\u5B58\u5E76\u9000\u51FAVim\u7F16\u8F91\u5668\u3002</p><h2 id="\u4E94\u3001\u91CD\u542F\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u91CD\u542F\u73AF\u5883" aria-hidden="true">#</a> \u4E94\u3001\u91CD\u542F\u73AF\u5883</h2><ol><li>\u91CD\u542Fphp-fpm\u670D\u52A1\u3002</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart php-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u91CD\u542FNginx\u670D\u52A1\u3002</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/usr/local/nginx/sbin/nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u68C0\u67E5PHP\u5B89\u88C5\u3002</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a. \u5728Nginx\u7684\u7F51\u7AD9\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFAPHP\u6587\u4EF6phpinfo.php\u3002

echo &quot;&lt;?php phpinfo(); ?&gt;&quot; &gt; /usr/local/nginx/html/phpinfo.php

b. \u5728\u670D\u52A1\u5668\u5730\u5740\u5740\u8F93\u5165xx.xx.xx.xx/phpinfo.php\uFF08xx.xx.xx.xx\u66FF\u6362ECS\u670D\u52A1\u5668\u7684\u516C\u7F51IP\u5730\u5740\uFF09\uFF0C\u51FA\u73B0\u5982\u4E0B\u9762\u8868\u793APHP\u73AF\u5883\u914D\u7F6E\u6210\u529F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),d=[l];function c(t,r){return e(),i("div",null,d)}var p=n(a,[["render",c],["__file","2022-08-12.html.vue"]]);export{p as default};
