// function fun() {
//   alert(this.name);
// }

function fun(a, b) {
    console.log("a = " + a);
    console.log("b = " + b);
}
var obj = {
    name: 'yyy',
    sayName: function () {
        alert(this.name);
    },
}
var obj2 = {
    name: 'zzz',
}

// fun();
// fun.call(obj);
// fun.apply(obj);

// 参数是谁，this就指向谁
// obj.sayName.apply(obj2);

// call与apply的唯一区别是call传递参数时是一个一个传递
// 而apply是封装到一个数组中统一传递
// fun.call(obj,2,3);
fun.apply(obj, [2, 3])