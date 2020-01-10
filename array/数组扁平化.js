var givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

// 方法一: lodash 的 flatten
_.flatten()

// 方法二：for 循环递归实现
var flatten = function(arr) {
  let res = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}

// 方法三：reduce 递归实现
var flatten = function(arr) {
  return arr.reduce((pre, acc) => {
    return pre.conact(Array.isArray(acc) ? flatten(acc) : acc)
  }, [])
}

// 方法四：非递归方法实现
var flatten = function(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

// 方法五：toString() 抹平
var flatten = function(arr) {
  return arr.toString().split(',').map(item => +item)
}