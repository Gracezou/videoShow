写在前面：目前只在开发ios版本，andriod项目后续跟进
                    所以以下说明只有对ios版本并且开发平台是苹果电脑 即 mac os 操作系统有效

环境搭建以及运行
# Step 1 : 安装[python2.7](https://www.python.org/)
# Step 2 : 安装最新稳定版[node](https://nodejs.org)

#####确认node以及npm安装完成，可以在系统控制台中查看版本

	node --version
	npm --version

# Step 3 : 安装[bower](https://bower.io)

	npm install -g bower


#####确认bower安装完成，可以在系统控制台中查看版本

	bower --version

# Step 4 : 在项目根目录，即当前攻略文档所在目录执行项目运行时环境安装

	npm install

*注意事项:在Linux环境下,bower默认不支持以root身份执行安装命令,若以root身份执行安装,需添加命令参数 --allow-root*

    npm install --allow-root

or

    bower install --allow-root

# Step 5 : 安装xcode 组件

    xcode-select —install

# Step 6 : 安装第三方开发组件

    brew install watchman      React修改source文件的一个工具,用来监视文件并且记录文件改动（facebook）
    brew install  flow              一个JavaScript 的静态类型检查器


# Step 7 : 安装React Native CLI : React Native的命令行工具

     npm install react-native-cli -g

     *权限问题 :permission denied  :  sudo chown -R `whoami` /usr/local


# Step 8 : 组件库关联

    优先install "package.json"

    rnpm link    项目关联 ex:react-native-vector-icons

# Step 9 : 启动项目

    ios版本
    当前根目录执行以下语句： react-native run-ios

    或是双击ios/******.xcodeproj文件然后在Xcode中点击Run按钮。


项目默认运行于本地8081端口，如果端口被占用，自动递增端口号启动，可以在启动日志打印中查看当前启动端口号


注意事项：
1、local环境测试fetch-api catch type-error-network-request
    Solution: info.plist -> App Transport Security Settings ->  addConfigName : "Allow Arbitrary Loads" & value : yes
