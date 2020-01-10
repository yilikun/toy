var fs = require("fs")
var shell = require("shelljs");
var schedule = require('node-schedule');
var eventproxy = require('eventproxy');
var moment = require('moment');
var doJobTime = 0;

ggSay('hello, Im your github assistant');

//first do
// for (var i = 0; i < 10; i++) {
//   setTimeout(ggJob, 1000 * i);
// }
ggJob()

//schedule
//每天23点
// var j = schedule.scheduleJob('30 23 * * *', function(){
//     ggJob();
// });

function ggJob() {
  ggSay('begin!!!!!!!!!!!!!!!!!');
  /**/
  var inputText = new Date();
  var inputText = moment(inputText).format('YYYY-MM-DD HH:mm:ss');
  var inputText = 'commit time:' + inputText + '\n\n';
  console.log(inputText);
  fs.appendFile('README.md', inputText, function (err) {
    if (err) {
      return console.error(err);
    } else {
      ep.emit('jobp1');
    }
  });
  /**/

  var ep = eventproxy.create('jobp1', function () {
    shell.cd('/root/host/toy');
    const gitPullResult = shell.exec('git pull origin master');
    if (gitPullResult.code !== 0) {
      console.log(JSON.stringify(gitPullResult));
      shell.exit(1);
    }
    if (shell.exec('git add --all').code !== 0) {
      shell.echo('Error: git add --all');
      shell.exit(1);
    }
    if (shell.exec('git commit -m "README.md update"').code !== 0) {
      shell.echo('Error: git commit -m "README.md update"');
      shell.exit(1);
    }
    if (shell.exec('git push origin master').code !== 0) {
      shell.echo('Error: git push origin master');
      shell.exit(1);
    }
    doJobTime++;
    ggSay("i have finished" + doJobTime + " times");
    // ggSay('请不要关闭，助手即将按计划执行');
  });
}

function ggSay(str) {
  console.log(`[git助手：${str}]\n`);
}
