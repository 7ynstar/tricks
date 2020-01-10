/**
 * @param {*} func 需要防抖的函数
 * @param {*} wait 毫秒，防抖的期限值
 * 只执行最后触发的一次
 */
const debounce = function(func, wait = 50) {
  let timer = null
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
