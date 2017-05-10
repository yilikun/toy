var fs = require("fs")
var shell = require("shelljs");
var schedule = require('node-schedule');
var eventproxy = require('eventproxy');

var doJobTime = 0;

ggSay('Hello, I am Github Girl! ');
ggSay('GG will do a job after 10s. The default job is do one commit to github. ');

//first do
setTimeout(function(){
    ggJob();
},10*1000);

//schedule
//每天23点
var j = schedule.scheduleJob('30 23 * * *', function(){
    ggJob();
});

function ggJob(){
    ggSay('GG start do a job. ');

    /**/
    var inputText = new Date();
        inputText = 'GG signed on, '+inputText +'\n\n';

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
       ggSay("GG done a job, had do "+doJobTime+" time. ");
       ggSay('GG wil do a job as schedule...');
    });
}

function ggSay(str){
    console.log("[GG:"+str+"]\n");
}
