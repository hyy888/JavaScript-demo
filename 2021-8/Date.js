// 封装为当前代码执行的时间
var d = new Date();
// console.log(d);

// 时间戳，输出的是1970年1月1日0时0分0秒到现在的毫秒数
console.log(d.getTime());

// 传递一个表示时间的字符串作为参数
// 日期格式 月份/日/年份 时:分:秒
var d2 = new Date("12/03/2016 11:10:30");
var time = d2.getTime();
// 通过时间戳算出年数
console.log(time / 1000 / 60 / 60 / 24 / 365);