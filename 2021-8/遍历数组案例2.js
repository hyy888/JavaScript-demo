function Per(name, age) {
    this.name = name;
    this.age = age;
}
var Per1 = new Per("张三", 18);
var Per2 = new Per("李四", 16);
var Per3 = new Per("王五", 8);
var Per4 = new Per("李逵", 28);
var Per5 = new Per("张飞", 32);

var arrs = [Per1, Per2, Per3, Per4, Per5];

function newArrs(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var p = arr[i];
        if (p.age >= 18) {
            newArr.push(p);
        }
    }
    return newArr;
}
var arres = newArrs(arrs);
console.log(arres);