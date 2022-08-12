# AUTOJS自动化互阅公众号


>声明：以下代码仅供学习目的，请勿商业使用，否则后果自负


## 软件普及
什么是Autojs，请参阅下图
[点击主页](https://pro.autojs.org/)进行初步的学习理解，内容适合学者有初级JS语法的认识

## 核心简介（废话不多说，请看完整代码和注释）
```
//引入必要模块，以下模块可以在百度搜索到，身为学者要积极搜集资料
require('./去限制.js');
//初始化设定
setScreenMetrics(1080, 1920);
console.show();
console.setSize(500,600);
console.log("Hello Aaron");
​
// 申请截图权限
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}
//初始化数据
//1.要寻找的图片的路径
var ImgA = "./images/screen1.jpg"; //阅TA
var ImgB = "./images/screen2.jpg"; //阅读
var ImgC = "./images/si3.jpg"; //收藏
var ImgD = "./images/si4.jpg"; //请输入阅读量
var ImgE = "./images/si5.jpg"; //确定

//2.代码执行
for (let i = 0; i < 3; i++) {
    main();
    sleep(3000);
}

//3.核心部分
function main() {
    /*
    主体
    */
    clickImage(ImgA, 0.9);//找到第一张图片
    var starTime = new Date().getTime();//记录开始时间
    var enen = true;
    while (enen) {
        var b = getImage(ImgB, 0.5);
        var c = getImage(ImgC, 0.5);//判断“阅读和收藏”两张图片减少错误
        if (b && c != null) {
            let bxn = b.x + 125;//判断“阅读”图片并返回坐标，通过附加的坐标值获取需要的阅读数量
            let byn = b.y + 31;
            press(bxn, byn, 1000);
            sleep(500);
            click("复制");//复制阅读数量
            var endTime = new Date().getTime();
            let allTime = endTime - starTime;
            console.log(allTime);//判断脚本的开始时间距离结束时间是否够12秒
            if (allTime < 12000) {
                console.log("不足10秒");                
            } else {
                back();
                sleep(3000);
                pressImage(ImgD, 0.5);
                click("粘贴");
                sleep(500);
                clickImage(ImgE, 0.5);
                console.log("完成了");            
                // exit();
                var enen = false;                
            }
        } else {
            swipe(393, 1800, 393, 200, 200);
            sleep(500);
        }
    }
}

//以下模块只是优化了代码的复用率
// 截图并匹配后”点击“模块
function clickImage(screenIma, imgNb) {
    try {
        var needClickIma = getImage(screenIma, imgNb);
        click(needClickIma.x, needClickIma.y);
        sleep(500);
    } catch (error) {
        console.log("请检查图片来源" + error)
        exit();
    }
}
// 截图并匹配后”长按“模块
function pressImage(screenIma, imgNb) {
    try {
        var needClickIma = getImage(screenIma, imgNb);
        press(needClickIma.x, needClickIma.y, 1000);
        sleep(500);
    } catch (error) {
        console.log("请检查图片来源" + error)
        exit();
    }
}
// 截图并匹配模块，返回坐标值object
function getImage(screenIma, imgNb) {
    /*
    screenIma要寻找的图片路径
    imgNb匹配度0~0.9
    */
    var imgMAX = captureScreen();
    var imgMIX = images.read(screenIma);
    var imgAB = findImage(imgMAX, imgMIX, {
        threshold: imgNb
    });
    //console.log("找到" + screenIma + "图片在坐标" + imgAB)
    imgMIX.recycle(); //回收内存，避免内存泄漏。会卡死机的
    return imgAB
}
```
## 总结
本脚本还处于物理化操作的基础，下一步会使用内容OCR识别方式优化，使其更智能化，降低失误率

![img](https://files.mdnice.com/logo.svg)