function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
  var text = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  //由于p元素中只有一个子元素，获取nodeValue时用fristChild和用lastChild一样
  description.firstChild.nodeValue = text;
}
// function countBodyChildren() {
//   var body_element = document.getElementsByTagName("body")[0];
//childNodes显示元素节点的所有子节点，子节点比实际节点多是因为childNodes属性返回的数组包含所有类型的节点，而不仅仅是元素节点
//   alert(body_element.childNodes.length);
// }
//onload的作用是页面加载时执行函数
// window.onload = countBodyChildren;