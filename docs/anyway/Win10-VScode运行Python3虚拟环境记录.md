## 一、基础参数
1. 运行系统：Win10
2. 环境：python3.8.5--32bit
3. python包的安装：
```sh
pip install virtualenv                    #首先安装
pip install virtualenvwrapper-win         #接续安装，因virtualenvwrapper-win依赖于virtualenv
```

## 二、virtualenvwrapper常用命令
1. 创建虚拟环境 `mkvirtualenv VenvName`(虚拟环境名称)
![在这里插入图片描述](https://img-blog.csdnimg.cn/63eef1932d27416cbaedfa0d75ab7e76.png)

2. 有安装多个环境的可指定Python解释器：`mkvirtualenv env --python=python3.8`
3. 查看虚拟环境 `lsvirtualenv`或者`workon`4. ![在这里插入图片描述](https://img-blog.csdnimg.cn/ee2a48cd77b34d7e971fc1b93a964ca2.png)

4. 进入虚拟环境` workon VenvName`(虚拟环境名称)`& pip list`![在这里插入图片描述](https://img-blog.csdnimg.cn/5519f2fbed934a11a3c993a3af74c77d.png)
5. 退出虚拟环境 `deactivate`
![在这里插入图片描述](https://img-blog.csdnimg.cn/7813e064cd8f4885a02f7bc1a567a3da.png)
6. 删除虚拟环境`rmvirtualenv VenvName`(虚拟环境名称)，因为虚拟环境在独立的文件里，不像原装的Venv可以直接删除![在这里插入图片描述](https://img-blog.csdnimg.cn/b29d3f85d94f45e59d4ad6588bd85407.png)
7. 测试安装`numpy`包，完美安装 ![在这里插入图片描述](https://img-blog.csdnimg.cn/3771bb4662584e78a332edb7a7f1d609.png)
 
## 三、如何在VScode上使用虚拟环境
创建好虚拟环境之后，在vscode中配置使用python的虚拟环境
![在这里插入图片描述](https://img-blog.csdnimg.cn/aee75dfd45e54b2ab2c0475d51f46263.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/d0ce2df7278742f49413f7e824a9b8b9.png)
在`python: Venv Path`中设置为`~/venv`，指定当前目录的venv虚拟环境`VenvName`。

使用`ctrl+shift+p`，输入`Python: Select Interprreter`选择刚才添加的虚拟环境
![在这里插入图片描述](https://img-blog.csdnimg.cn/d3391a02d3a44ed48639f4d926c7102b.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/36a3c3cfb035408b8f637b2d82c07805.png)
## 四、结果
可以看到，VScode的集成终端是可以自动访问到venv虚拟环境的，后续的操作如同正常的使用python、pip命令，但像jupyterlab的服务端还是安装在系统的全局环境下方便使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/3dbf5fc04a614dc8ba3acc8c508866b4.png)


参考文件：
1. [Win10环境下搭建virtualenvwrapper-win](https://blog.csdn.net/lovedingd/article/details/106723714#:~:text=virtualenvwrapper%20%E5%9F%BA%E4%BA%8Evirtualenv%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%9B%B4%E6%96%B9%E4%BE%BF%E7%9A%84%E7%AE%A1%E7%90%86%20Python%20%E8%99%9A%E6%8B%9F%E7%8E%AF%E5%A2%83%EF%BC%8Cvirtualenvwrapper-win%E4%BE%9D%E8%B5%96%E4%BA%8Evirtualenv%EF%BC%8C%E6%89%80%E4%BB%A5%E4%B9%9F%E8%A6%81%E5%AE%89%E8%A3%85virtualenv%E3%80%82%20%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E7%9A%84%E6%98%AF%EF%BC%8C%20virtualenvwrapper,%E5%9C%A8%20Windows%20%E7%B3%BB%E7%BB%9F%E4%B8%AD%20%E5%8F%AA%E8%83%BD%E9%80%9A%E8%BF%87%20cmd%20%E6%89%8D%E8%83%BD%E6%AD%A3%E5%B8%B8%E4%BD%BF%E7%94%A8)
2. [vscode使用python虚拟环境](https://www.cnblogs.com/gpl2/p/15973192.html#:~:text=%E5%88%9B%E5%BB%BA%E5%A5%BD%E8%99%9A%E6%8B%9F%E7%8E%AF%E5%A2%83%E4%B9%8B%E5%90%8E%EF%BC%8C%E5%9C%A8vscode%E4%B8%AD%E9%85%8D%E7%BD%AE%E4%BD%BF%E7%94%A8python%E7%9A%84%E8%99%9A%E6%8B%9F%E7%8E%AF%E5%A2%83%E3%80%82%20%E9%A6%96%E5%85%88%E6%89%93%E5%BC%80%20%E8%AE%BE%E7%BD%AE%20%EF%BC%8C%E7%84%B6%E5%90%8E%E6%90%9C%E7%B4%A2%20python%20venv%20%EF%BC%8C%20%E5%9C%A8,python%3A%20Venv%20Path%20%E4%B8%AD%E8%AE%BE%E7%BD%AE%E4%B8%BA%20~%2Fvenv%20%EF%BC%8C%E8%BF%99%E4%B8%AA%E7%9A%84%E6%84%8F%E6%80%9D%E6%98%AF%E6%8C%87%E5%AE%9A%E5%BD%93%E5%89%8D%E7%9B%AE%E5%BD%95%E7%9A%84%20venv%20%E6%96%87%E4%BB%B6%E5%A4%B9%E3%80%82)



