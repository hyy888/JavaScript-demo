var arr = [1, 64, 9, 6];
arr.sort(function (a, b) {
    return b - a;      // 降a序
    // return a - b;   // 升序
});
console.log(arr);