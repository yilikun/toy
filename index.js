var fs = require("fs")
var shell = require("shelljs");
var schedule = require('node-schedule');
var eventproxy = require('eventproxy');
var moment = require('moment');
var doJobTime = 0;

ggSay('你好，我是你的guthub助手~~');
ggSay('我会在3s后工作. 默认向github提交一个commit. ');

//first do
setTimeout(function(){
    for(var i = 0;i<10;i++){
        ggJob();
    }
},3*1000);

//schedule
//每天23点
var j = schedule.scheduleJob('30 23 * * *', function(){
    ggJob();
});

function ggJob(){
    ggSay('开始执行');
    /**/
    var inputText = new Date();
    var inputText = moment(inputText).format('YYYY-MM-DD hh:mm:ss');
    var inputText = '本次提交时间：'+inputText +'\n\n';
    console.log(inputText);
    fs.appendFile('README.md', inputText,  function(err) {
       if (err) {
          return console.error(err);
       }else{
          ep.emit('jobp1');
       }
    });
    /**/

    var ep = eventproxy.create('jobp1', function () {
       shell.exec('git add --all');
       shell.exec('git commit -m "README.md update"');
       shell.exec('git push origin master');
       doJobTime++;
       ggSay("助手已经成功提交了"+doJobTime+" 次");
       ggSay('请不要关闭，助手即将按计划执行');
    });
}

function ggSay(str){
    console.log("[git助手:"+str+"]\n");
}
