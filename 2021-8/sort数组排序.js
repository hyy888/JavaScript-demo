var arr = [1, 10, 15, 5, 12, 25];

// reverse()可以将数组反向排列
// let str = arr.reverse();
// console.log(str);

// 正向排序，如果要降序，可以将return值反转,-1表示不移动，1表示移动
function compare(value, value2) {
    if (value < value2) {
        // 如果要降序，这里return 1
        return -1;
    } else if (value > value2) {
        // 如果要降序，这里return -1
        return 1;
    } else {
        return 0;
    }
}
let str = arr.sort(compare);
console.log(str);

// 也可以使用箭头函数
//升序
let str1 = arr.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

// 利用reverse()可以反向排列
// let str2 = str1.reverse();

//降序
// let str1 = arr.sort((a,b) => a < b ? 1 : a > b ? -1 : 0 );
console.log(str1);