function obj(time) {
    var num1 = +new Date();
    var num2 = +new Date(time);
    //这里注意要将num2 - num1写进括号里，再除以1000
    var time1 = (num2 - num1) / 1000;//毫秒除以1000等于秒
    var d = parseInt(time1 / 60 / 60 / 24);//换算天数
    d = d < 10 ? '0' + d : d;
    var h = parseInt(time1 / 60 / 60 % 24);//换算成小时
    h = h < 10 ? '0' + h : h;
    var m = parseInt(time1 / 60 % 60);//换算成分钟
    m = m < 10 ? '0' + m : m;
    var s = parseInt(time1 % 60);//换算成秒
    s = s < 10 ? '0' + s : s;
    //这里用return返回结果，不是用console.log
    return d + '天' + h + '时' + m + '分' + s + '秒';
}
//用户输入时间格式'年-月-日 小时：分钟：秒'
console.log(obj('2021-5-13 00:00:00'));

//标准时间
var date = new Date();
console.log(date);

//  d = parseInt(总秒数/ 60/60 /24);    //  计算天数
//  h = parseInt(总秒数/ 60/60 %24)   //   计算小时
//  m = parseInt(总秒数 /60 %60 );     //   计算分数
//  s = parseInt(总秒数%60);               //   计算当前秒数


// var num1 = new Date();
// var num2 = +new Date();
// var num3 = +new Date(time);

