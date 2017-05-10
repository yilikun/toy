var schedule = require('node-schedule');
var j = schedule.scheduleJob('* * 23 * * *', function(){
  console.log('The answer to life, the universe, and everything!',new Date());
});
