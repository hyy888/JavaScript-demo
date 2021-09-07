function fun(name, age, gender) {
    // 创建一个新的对象
    // 使用工厂方法创建的对象，使用的构造函数都是Object
    // 创建的对象都是Object类型
    // 导致我们无法区分出多种不同类型的对象
    var obj = new Object();
    // 向对象中添加属性
    obj.name = name;
    obj.age = age;
    obj.gender = gender;
    obj.sayName = function () {
        console.log(this.name);
    };
    return obj;
}
var obj1 = fun("张三", 18, "男");
obj1.sayName();
console.log(obj1);