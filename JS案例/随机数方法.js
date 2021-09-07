function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var arr = ['李二狗', '峰子刚', '同人文', '冻豆腐', '薄荷叶'];
console.log(arr[getRandom(0, 4)])