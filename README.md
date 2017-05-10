# github-girl
每天定时帮您在github上打卡签到的妹子

## 使用方法
1. star本项目后下载本项目，然后自己新建一个项目，将本项目的代码提交进去（不能是fork的项目，一定要自己建的）
2. 使用ssh的方式clone自己建的那个项目，具体可参考这个<http://blog.csdn.net/binyao02123202/article/details/20130891>，注意要设置免密码提交
3. 安装好node后，在项目根目录npm install，安装本项目的依赖
4. 在项目根目录运行,node ./index.js，查看是否能够正常提交内容到github，并纪录贡献，成功纪录贡献即成功了
5. 运行npm install forever -g，全局安装forever
6. 在项目根目录运行，forever start index.js，这样index.js就会交给forever去后台运行，建议丢到服务器上运行

## 其他
1. 最好要了解下github贡献纪录的规则，<https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/>
2. 在index.js中，使用node-schedule来定时运行，默认每天23点运行一次任务
3. 任务的内容是，向README.md中追加一个时间字符串，然后提交到github上

## 签到纪录
GG signed on, Sun Apr 17 2016 23:30:00 GMT+0800 (CST)

GG signed on, Mon Apr 18 2016 23:30:00 GMT+0800 (CST)

GG signed on, Tue Apr 19 2016 23:30:01 GMT+0800 (CST)

GG signed on, Wed Apr 20 2016 23:30:00 GMT+0800 (CST)

GG signed on, Thu Apr 21 2016 23:30:00 GMT+0800 (CST)

GG signed on, Fri Apr 22 2016 23:30:00 GMT+0800 (CST)

GG signed on, Mon Apr 25 2016 14:03:26 GMT+0800 (CST)

GG signed on, Mon Apr 25 2016 23:30:00 GMT+0800 (CST)

GG signed on, Tue Apr 26 2016 23:30:00 GMT+0800 (CST)

GG signed on, Wed Apr 27 2016 23:30:00 GMT+0800 (CST)

GG signed on, Thu Apr 28 2016 23:30:00 GMT+0800 (CST)

GG signed on, Fri Apr 29 2016 23:30:00 GMT+0800 (CST)

GG signed on, Sat Apr 30 2016 23:30:00 GMT+0800 (CST)

GG signed on, Sun May 01 2016 23:30:00 GMT+0800 (CST)

GG signed on, Mon May 02 2016 23:30:00 GMT+0800 (CST)

GG signed on, Wed May 10 2017 13:48:07 GMT+0800 (中国标准时间)

GG signed on, Wed May 10 2017 13:55:24 GMT+0800 (中国标准时间)

