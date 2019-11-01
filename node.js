1.流的概念
流是node.js中处理流式数据的抽象接口

1.1可读流
let fs = reuqire("fs");
let fs = fs.createReadStream('1.txt');
//监听他的data事件，当你一旦开始监听data事件的时候，流就可以读取文件的内容并且发射data
//流的两种模式  流动模式（无缓存区）暂停模式（有缓存区）
//


