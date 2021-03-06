// var str = 'Abcabcacdawd';
// 构造函数创建正则表达式
// var reg = new RegExp("a","i");
// 字面量创建正则表达式
// var reg = /[A-z]/;
// var reg = /a[bcw]d/
// console.log(reg.test(str));

// 字符串正则相关方法
var str = 'abcabcabc';
// split可以将一个字符串拆分，当正则表达式作为参数时，没有设置全局也会全部拆分
console.log(str.split(/bc/));

// search()可以搜索字符串中有没指定内容，搜索到后结束搜索，并将索引号输出，如果没有搜索到就输出-1
console.log(str.search(/bc/));

// match()从字符串中搜索符合条件的内容提取出来，默认找到一个就结束，可以将匹配模式设置为全局匹配
// match会将匹配的内容封装到数组中
console.log(str.match(/b/g));

// replace()可以将字符串中指定的内容替换成新内容，默认只替换第一个，用正则表达式可以改变匹配模式设为全局
console.log(str.replace(/abc/g, ","))