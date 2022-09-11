import{_ as n,o as s,c as a,d as t}from"./app.7374fbb4.js";const p={},e=t(`<h1 id="python\u5B9E\u8DF5-douying\u89C6\u9891\u53BB\u6C34\u5370" tabindex="-1"><a class="header-anchor" href="#python\u5B9E\u8DF5-douying\u89C6\u9891\u53BB\u6C34\u5370" aria-hidden="true">#</a> Python\u5B9E\u8DF5\uFF1Adouying\u89C6\u9891\u53BB\u6C34\u5370</h1><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> json


<span class="token comment"># https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=7111635119240121631</span>
<span class="token comment"># application/json; charset=utf-8</span>
<span class="token comment">#  Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/103.0.5060.53</span>

headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;user-agent&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/103.0.5060.53&quot;</span>
<span class="token punctuation">}</span>


<span class="token keyword">def</span> <span class="token function">get_share_url</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span> allow_redirects<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> r<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;location&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u89E3\u6790\u5931\u8D25&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">get_video_url</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> url<span class="token punctuation">:</span>
        <span class="token keyword">return</span>

    <span class="token keyword">try</span><span class="token punctuation">:</span>
        vid <span class="token operator">=</span> url<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;/?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;video/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        xhr_url <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=</span><span class="token interpolation"><span class="token punctuation">{</span>vid<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>

        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>xhr_url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
        video_url <span class="token operator">=</span> r<span class="token punctuation">[</span><span class="token string">&#39;item_list&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;video&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;play_addr&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;url_list&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> video_url

    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u89E3\u6790\u5931\u8D25&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">download_video</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> url<span class="token punctuation">:</span>
        <span class="token keyword">return</span>
    video_url <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>url<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;playwm/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">play/</span><span class="token interpolation"><span class="token punctuation">{</span>url<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;playwm/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>video_url<span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>video_url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
        <span class="token comment"># print(f&quot;download text is:{r}&quot;)</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>name<span class="token operator">+</span><span class="token string">&#39;.mp4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>r<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0B\u8F7D\u5B8C\u6210&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E0B\u8F7D\u5931\u8D25&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    url <span class="token operator">=</span> <span class="token string">&quot;https://v.douyin.com/YQLddEu/&quot;</span>
    name <span class="token operator">=</span> <span class="token string">&quot;video2&quot;</span>

    share_url <span class="token operator">=</span> get_share_url<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token comment"># print(share_url)</span>
    video_url <span class="token operator">=</span> get_video_url<span class="token punctuation">(</span>share_url<span class="token punctuation">)</span>
    <span class="token comment"># print(video_url)</span>
    download_video<span class="token punctuation">(</span>video_url<span class="token punctuation">,</span> name<span class="token punctuation">)</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function i(c,l){return s(),a("div",null,o)}var r=n(p,[["render",i],["__file","2022_5_20.html.vue"]]);export{r as default};
