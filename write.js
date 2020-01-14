let fs = require('fs');
//let ws = fs.createWriteStream('./day.txt');
fs.appendFile('./day.txt','2020/01/06 年终总结失败 fail 深思 \n',function(err){if(err){console.log(err)}else console.log("输入完成")})

