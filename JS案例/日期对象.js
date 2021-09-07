var obj = new Date();
var num1 = obj.getFullYear();
var num2 = obj.getMonth() + 1;
var num3 = obj.getDate();
var num4 = obj.getDay();
var num5 = obj.getHours();
var num6 = obj.getMinutes();
var num7 = obj.getSeconds();
var arr = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
console.log(num1 + "年" + num2 + "月" + num3 + "日"+ arr[num4] + num5 + "时" + num6 + "分" + num7 + "秒")