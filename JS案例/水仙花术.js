var num = 654;
var baiwei = parseInt(num / 100);   //6.54取整 得到百位6
var shiwei = parseInt((num % 100) / 10);  //num%10  得到的是54，然后/10取整 得到的是十位5
var gewei = parseInt(num % 10);  //num%10  得到的是4，模10取余;
console.log("百位数"+baiwei +"十位数"+shiwei +"个位"+ gewei);