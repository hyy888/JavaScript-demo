function Person(name, age, gender) {
    this.name = name;
    this.age = age;
}
Person.prototype.toString = function () {
    return "Person[name=" + this.name + ",age=" + this.age + "]"
};
var per = new Person("孙悟空", 18);
var per2 = new Person("猪八戒", 28);
var per3 = new Person("红孩儿", 8);
var per4 = new Person("蜘蛛精", 16);
var per5 = new Person("二郎神", 38);

var perArr = [per, per2, per3, per4, per5];

function getAdult(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var p = arr[i];
        if (p.age >= 18) {
            newArr.push(p);
        }
    }
    return newArr;
}
var newArrs = getAdult(perArr);
console.log(newArrs);