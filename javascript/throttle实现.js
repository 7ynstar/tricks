/**
 * @param {*} func 
 * @param {*} wait
 * 在固定的时间内只执行一次，减少性能损耗
 * resize, 避免短时间内多次触发引发的性能损耗问题
 */
const throttle = function(func, wait = 50) {
  let valid = true
  return function(...args) {
    if (!valid) return
    valid = false
    setTimeout(() => {
      func.apply(this, args)
      valid = true
    }, wait)
  }
}