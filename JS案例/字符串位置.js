// 查找字符串"abcoefoxyozzopp"中所有o出现的位置以及次数

// var arr = 'abcoefoxyozzopp';
// console.log(arr.indexOf('o'));

var str = "abcoefoxyozzopp";
var index = str.indexOf('o');
var num = 0;
while (index !== -1) {
    console.log(index);
    num++;
    index = str.indexOf('o', index + 1);
}
console.log('o出现的次数为：' + num);