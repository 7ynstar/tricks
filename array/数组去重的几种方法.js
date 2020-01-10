var array = [1, 2, 3, 4, 5, 4, 3, 2, 1]

// 方法一：Set 去重
var uniqueArr = [...new Set(array)]

// 方法二：Array.from()
// 本质和 Set 类似，不过通过 Array...from 方法将 Set 转为 Array
// 替代了 ... 展开运算符
var uniqueArr = Array.from(new Set(array))

// 方法三：Array.prototype.filter()
// filter 方法回调中有三个参数('当前元素', '当前元素索引', '当前数组对象')
var uniqueArr = array.filter((ele, index, arr) => arr.indexOf(ele) === index)

// 方法四：indexOf()
var uniqueArr = []
for (var i = 0; i < array.length; i++) {
  if (uniqueArr.indexOf(arr[i]) === -1) {
    uniqueArr.push(arr[i])
  }
}