# github-boy
一个可爱的小男孩

## 使用方法
1. star本项目后下载本项目，然后自己新建一个项目，将本项目的代码提交进去（不能是fork的项目，一定要自己建的）
2. 使用ssh的方式clone自己建的那个项目，具体可参考这个<http://blog.csdn.net/binyao02123202/article/details/20130891>，注意要设置免密码提交
3. 安装好node后，在项目根目录npm install，安装本项目的依赖
4. 在项目根目录运行,node ./index.js，查看是否能够正常提交内容到github，并纪录贡献，成功纪录贡献即成功了
5. 运行npm install forever -g，全局安装forever
6. 在项目根目录运行，forever start index.js，这样index.js就会交给forever去后台运行，建议丢到服务器上运行
7，时间格式可以根据自己的需要更改，这里使用了moment进行格式化更改。
## 其他
1. 最好要了解下github贡献纪录的规则，<https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/>
2. 在index.js中，使用node-schedule来定时运行，默认每天23点运行一次任务
3. 任务的内容是，向README.md中追加一个时间字符串，然后提交到github上
4. 定时任务有时不是很健壮,可以使用crontab来代替
在服务器执行`crontab -e`,可以增加定时任务,用vi编辑器就好
```
23 11 * * * /root/host/toy/start_commit.sh > /dev/null 2>&1 &
35 18 * * * /root/host/toy/start_commit.sh > /dev/null 2>&1 &
00 23 * * * /root/host/toy/start_commit.sh > /dev/null 2>&1 &
```
## 签到纪录


本次提交时间：2017-05-21 05:40:46
本次提交时间：2020-01-10 10:55:01

本次提交时间：2020-01-10 10:55:09

