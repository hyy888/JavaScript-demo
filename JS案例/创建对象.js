// 练习： 请按照要求写出对象
// 请用new Object 形式创建一个鸣人对象。 
// 具体信息如下： 
// 姓名：鸣人 
// 性别：男 
// 年龄：19岁 
// 技能（skill）：影分身术

var obj = new Object()
obj.usename = '鸣人',
    obj.sex = '男',
    obj.age = '19岁',
    obj.skill = function () {
        console.log('影分身术')
    }
console.log(obj.usename);
console.log(obj['sex']);
obj.skill()