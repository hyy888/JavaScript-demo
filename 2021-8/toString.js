function Person(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  Person.prototype.toString =  function() {
    return "Person[name="+this.name+",age="+this.age+",gender="+this.gender+"]"
  };
  const fun = new Person("张三",18,"男");
  console.log(fun)

 //两个运行结果相同

//   function Person(name,age,gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     return "Person[name="+this.name+",age="+this.age+",gender="+this.gender+"]"
//   };
//   const fun = new Person("张三",18,"男");
//   console.log(fun)