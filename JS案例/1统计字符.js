// 判断一个字符串 'abcoefoxyozzopp' 中出现次数最多的字符，并统计其次数。
// 1、核心算法：利用 charAt(） 遍历这个字符串
// 2、把每个字符都存储给对象， 如果对象没有该属性，就为1，如果存在了就 +1
// 3、遍历对象，得到最大值和该字符 
// 判断一个字符串 'abcoefoxyozzopp' 中出现次数最多的字符，并统计其次数。
// 对象 o {  }


// var str = 'abcoefoxyozzopp';
// var temp = {};
// for (var i =0; i < str.length; i++) {
//     var chars = str.charAt(i);
//     if (temp[chars]) {
//         temp[chars]++;
//     }else {
//         temp[chars] = 1;
//     }
// }
// console.log(temp);

var str = 'abcoefoxyozzopp';
var tamp = {};
for (var i = 0; i < str.length; i++) {
    var chars = str.charAt(i);
    if (tamp[chars]) {
        tamp[chars]++;
    } else {
        tamp[chars] = 1;
    }
}
console.log(tamp)

var max = 0;
var ch = '';
for (var k in tamp) {
    if (tamp[k] > max) {
        max = tamp[k];
        ch = k;
    }
}
console.log(max, ch)