// 查找字符串['red','blue','red','green','pink','red']red出现的位置和次数

var str = ['red', 'blue', 'red', 'green', 'pink', 'red'];
var index = str.indexOf('red');
var num = 0;
while (index !== -1) {
    console.log(index);
    num++;
    index = str.indexOf('red', index + 1);
}
console.log('red出现的次数为：' + num);