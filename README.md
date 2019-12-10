## 新建cordova项目步骤
> 1.打开cmd，使用npm install cordova -g全局安装cordova依赖；
> 2.D盘新建Mine本地文件夹，定位到当前文件夹下，使用cordova create tesco-app命令创建cordova项目；
> 3.定位到tesco-app项目根目录下，添加响应的平台：(使用cordova platform命令查看平台是否添加成功)
    安卓：cordova platform add android --save
    iOS：cordova platform add ios --save
    浏览器端：cordova platform add browser --save
> 4.使用cordova run browser命令查看项目是否正常启动
> 5.使用cordova run android命令可使用模拟器方式查看app
> 6.使用cordova build android命令可生产apk文件(文件存放地址：platforms/android/app/build/outputs/apk/debug)



## 开发环境
> java运行环境和配置jdk变量
> 安装android studio和配置sdk变量(http://www.android-studio.org/)
> 安装android sdk tools管理工具(http://tools.android-studio.org/index.php/sdk)
> 下载gradle和配置gradle变量(https://services.gradle.org/distributions/)
> 下载Genymotion模拟器和Oracle VM VirtualBox
> 下载Visual Studio Code代码编辑器



## 配置环境变量
> JAVA_HOME：C:\Program Files\Java\jdk1.8.0_181
> CLASSPATH：.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar
> ANDROID_HOME：D:\Mine\android-sdk
> ANDROID_SDK_ROOT：D:\Mine\android-sdk
> GRADLE_HOME：D:\Mine\gradle-6.0
> Path：C:\windows\system32;%JAVA_HOME%\bin;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;%GRADLE_HOME%\bin


## cordova插件安装
> 插件安装命令：cordova plugin add 插件名


## 注意事项
1.android studio设置的sdk地址为android sdk tools安装地址
2.执行cordova run android找不到模拟器时，设置Genymotion模拟器的adb地址为android sdk tools安装地址
3.Genymotion模拟器环境的sdk版本最好与项目sdk版本一致



## vue+cordova生成app
1.将vue项目生成的dist文件夹下的内容拷贝到tesco-app项目的www文件夹下，使用cordova run android命令可使用模拟器方式查看app