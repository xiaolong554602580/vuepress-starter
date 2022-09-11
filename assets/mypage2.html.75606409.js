import{_ as s,o as l,c as d,a as e,e as a,b as n,d as v,r}from"./app.7374fbb4.js";const c={},m=e("h1",{id:"autojs\u81EA\u52A8\u5316\u4E92\u9605\u516C\u4F17\u53F7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#autojs\u81EA\u52A8\u5316\u4E92\u9605\u516C\u4F17\u53F7","aria-hidden":"true"},"#"),n(" AUTOJS\u81EA\u52A8\u5316\u4E92\u9605\u516C\u4F17\u53F7")],-1),u=e("blockquote",null,[e("p",null,"\u58F0\u660E\uFF1A\u4EE5\u4E0B\u4EE3\u7801\u4EC5\u4F9B\u5B66\u4E60\u76EE\u7684\uFF0C\u8BF7\u52FF\u5546\u4E1A\u4F7F\u7528\uFF0C\u5426\u5219\u540E\u679C\u81EA\u8D1F")],-1),t=e("h2",{id:"\u8F6F\u4EF6\u666E\u53CA",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8F6F\u4EF6\u666E\u53CA","aria-hidden":"true"},"#"),n(" \u8F6F\u4EF6\u666E\u53CA")],-1),b=n("\u4EC0\u4E48\u662FAutojs\uFF0C\u8BF7\u53C2\u9605\u4E0B\u56FE "),o={href:"https://pro.autojs.org/",target:"_blank",rel:"noopener noreferrer"},g=n("\u70B9\u51FB\u4E3B\u9875"),h=n("\u8FDB\u884C\u521D\u6B65\u7684\u5B66\u4E60\u7406\u89E3\uFF0C\u5185\u5BB9\u9002\u5408\u5B66\u8005\u6709\u521D\u7EA7JS\u8BED\u6CD5\u7684\u8BA4\u8BC6"),p=v(`<h2 id="\u6838\u5FC3\u7B80\u4ECB-\u5E9F\u8BDD\u4E0D\u591A\u8BF4-\u8BF7\u770B\u5B8C\u6574\u4EE3\u7801\u548C\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3\u7B80\u4ECB-\u5E9F\u8BDD\u4E0D\u591A\u8BF4-\u8BF7\u770B\u5B8C\u6574\u4EE3\u7801\u548C\u6CE8\u91CA" aria-hidden="true">#</a> \u6838\u5FC3\u7B80\u4ECB\uFF08\u5E9F\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u8BF7\u770B\u5B8C\u6574\u4EE3\u7801\u548C\u6CE8\u91CA\uFF09</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5F15\u5165\u5FC5\u8981\u6A21\u5757\uFF0C\u4EE5\u4E0B\u6A21\u5757\u53EF\u4EE5\u5728\u767E\u5EA6\u641C\u7D22\u5230\uFF0C\u8EAB\u4E3A\u5B66\u8005\u8981\u79EF\u6781\u641C\u96C6\u8D44\u6599
require(&#39;./\u53BB\u9650\u5236.js&#39;);
//\u521D\u59CB\u5316\u8BBE\u5B9A
setScreenMetrics(1080, 1920);
console.show();
console.setSize(500,600);
console.log(&quot;Hello Aaron&quot;);
\u200B
// \u7533\u8BF7\u622A\u56FE\u6743\u9650
if (!requestScreenCapture()) {
    toast(&quot;\u8BF7\u6C42\u622A\u56FE\u5931\u8D25&quot;);
    exit();
}
//\u521D\u59CB\u5316\u6570\u636E
//1.\u8981\u5BFB\u627E\u7684\u56FE\u7247\u7684\u8DEF\u5F84
var ImgA = &quot;./images/screen1.jpg&quot;; //\u9605TA
var ImgB = &quot;./images/screen2.jpg&quot;; //\u9605\u8BFB
var ImgC = &quot;./images/si3.jpg&quot;; //\u6536\u85CF
var ImgD = &quot;./images/si4.jpg&quot;; //\u8BF7\u8F93\u5165\u9605\u8BFB\u91CF
var ImgE = &quot;./images/si5.jpg&quot;; //\u786E\u5B9A

//2.\u4EE3\u7801\u6267\u884C
for (let i = 0; i &lt; 3; i++) {
    main();
    sleep(3000);
}

//3.\u6838\u5FC3\u90E8\u5206
function main() {
    /*
    \u4E3B\u4F53
    */
    clickImage(ImgA, 0.9);//\u627E\u5230\u7B2C\u4E00\u5F20\u56FE\u7247
    var starTime = new Date().getTime();//\u8BB0\u5F55\u5F00\u59CB\u65F6\u95F4
    var enen = true;
    while (enen) {
        var b = getImage(ImgB, 0.5);
        var c = getImage(ImgC, 0.5);//\u5224\u65AD\u201C\u9605\u8BFB\u548C\u6536\u85CF\u201D\u4E24\u5F20\u56FE\u7247\u51CF\u5C11\u9519\u8BEF
        if (b &amp;&amp; c != null) {
            let bxn = b.x + 125;//\u5224\u65AD\u201C\u9605\u8BFB\u201D\u56FE\u7247\u5E76\u8FD4\u56DE\u5750\u6807\uFF0C\u901A\u8FC7\u9644\u52A0\u7684\u5750\u6807\u503C\u83B7\u53D6\u9700\u8981\u7684\u9605\u8BFB\u6570\u91CF
            let byn = b.y + 31;
            press(bxn, byn, 1000);
            sleep(500);
            click(&quot;\u590D\u5236&quot;);//\u590D\u5236\u9605\u8BFB\u6570\u91CF
            var endTime = new Date().getTime();
            let allTime = endTime - starTime;
            console.log(allTime);//\u5224\u65AD\u811A\u672C\u7684\u5F00\u59CB\u65F6\u95F4\u8DDD\u79BB\u7ED3\u675F\u65F6\u95F4\u662F\u5426\u591F12\u79D2
            if (allTime &lt; 12000) {
                console.log(&quot;\u4E0D\u8DB310\u79D2&quot;);                
            } else {
                back();
                sleep(3000);
                pressImage(ImgD, 0.5);
                click(&quot;\u7C98\u8D34&quot;);
                sleep(500);
                clickImage(ImgE, 0.5);
                console.log(&quot;\u5B8C\u6210\u4E86&quot;);            
                // exit();
                var enen = false;                
            }
        } else {
            swipe(393, 1800, 393, 200, 200);
            sleep(500);
        }
    }
}

//\u4EE5\u4E0B\u6A21\u5757\u53EA\u662F\u4F18\u5316\u4E86\u4EE3\u7801\u7684\u590D\u7528\u7387
// \u622A\u56FE\u5E76\u5339\u914D\u540E\u201D\u70B9\u51FB\u201C\u6A21\u5757
function clickImage(screenIma, imgNb) {
    try {
        var needClickIma = getImage(screenIma, imgNb);
        click(needClickIma.x, needClickIma.y);
        sleep(500);
    } catch (error) {
        console.log(&quot;\u8BF7\u68C0\u67E5\u56FE\u7247\u6765\u6E90&quot; + error)
        exit();
    }
}
// \u622A\u56FE\u5E76\u5339\u914D\u540E\u201D\u957F\u6309\u201C\u6A21\u5757
function pressImage(screenIma, imgNb) {
    try {
        var needClickIma = getImage(screenIma, imgNb);
        press(needClickIma.x, needClickIma.y, 1000);
        sleep(500);
    } catch (error) {
        console.log(&quot;\u8BF7\u68C0\u67E5\u56FE\u7247\u6765\u6E90&quot; + error)
        exit();
    }
}
// \u622A\u56FE\u5E76\u5339\u914D\u6A21\u5757\uFF0C\u8FD4\u56DE\u5750\u6807\u503Cobject
function getImage(screenIma, imgNb) {
    /*
    screenIma\u8981\u5BFB\u627E\u7684\u56FE\u7247\u8DEF\u5F84
    imgNb\u5339\u914D\u5EA60~0.9
    */
    var imgMAX = captureScreen();
    var imgMIX = images.read(screenIma);
    var imgAB = findImage(imgMAX, imgMIX, {
        threshold: imgNb
    });
    //console.log(&quot;\u627E\u5230&quot; + screenIma + &quot;\u56FE\u7247\u5728\u5750\u6807&quot; + imgAB)
    imgMIX.recycle(); //\u56DE\u6536\u5185\u5B58\uFF0C\u907F\u514D\u5185\u5B58\u6CC4\u6F0F\u3002\u4F1A\u5361\u6B7B\u673A\u7684
    return imgAB
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u672C\u811A\u672C\u8FD8\u5904\u4E8E\u7269\u7406\u5316\u64CD\u4F5C\u7684\u57FA\u7840\uFF0C\u4E0B\u4E00\u6B65\u4F1A\u4F7F\u7528\u5185\u5BB9OCR\u8BC6\u522B\u65B9\u5F0F\u4F18\u5316\uFF0C\u4F7F\u5176\u66F4\u667A\u80FD\u5316\uFF0C\u964D\u4F4E\u5931\u8BEF\u7387</p><p><img src="https://files.mdnice.com/logo.svg" alt="img"></p>`,5);function I(q,_){const i=r("ExternalLinkIcon");return l(),d("div",null,[m,u,t,e("p",null,[b,e("a",o,[g,a(i)]),h]),p])}var x=s(c,[["render",I],["__file","mypage2.html.vue"]]);export{x as default};
