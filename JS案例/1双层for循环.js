// 很多情况下，单层 for 循环并不能满足我们的需求，比如我们要打印一个 5 行 5 列的图形、打印一个倒
// 直角三角形等，此时就可以通过循环嵌套来实现。
var num = '';
for (var i = 5; i >= 1; i--) {
    for(var t = 1; t <= i; t++){  
     num += '☆';   
    }
    num = num + '\n'
}
console.log(num);


// 打印倒三角形案例
// var str = '';
// for (var i = 1; i <= 10; i++) { // 外层循环控制行数
//     for (var j = i; j <= 10; j++) { // 里层循环打印的个数不一样  j = i
//         str = str + '★';
//     }
//     str += '\n';
// }
// console.log(str);


    // 五行我心
// var str = '';
// for(var i = 1;i <= 5;i++){
//     for(var j = 1;j <= 5;j++){
//         str= str + '★';
//     }
//     str = str + '\n';
// }
// console.log(str);