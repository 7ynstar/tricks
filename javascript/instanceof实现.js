function instance_of(L, R) {
  var O = R.prototype
  L = L.__proto__
  while (true) {
    if (L === null)
      return false
    if (L === O)
      return true
    L = L.__proto__
  }
}

// 较完整版
function create() {
  // 创建一个空的对象（准确的来说是克隆了Object.prototype对象）
  let obj = new Object()
  // 获得构造函数，赋值给变量Con
  let Con = [].shift.call(arguments)
  // 链接到原型
  obj.__proto__ = Con.prototype
  // 绑定this，执行构造函数
  let result = Con.apply(obj, arguments)
  // 确保new出来的是一个对象
  return typeof result === 'object' ? result : obj
}

// 简易版
var o = new Object()
o.__proto__ = Foo.prototype
Foo.call(o)

function Person(name) {
  this.name = name
}

var p = new Person('Tom')