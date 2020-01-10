// 桌面端浏览器不能使用document.body.scrollTop
// 移动端不能使用document.documentElement.scrollTop
// 但都支持window.pageYOffset，但需要IE9+

/**
 * 获取浏览器窗体滚动高度
 */
var winScrollTop = window.pageXOffset || document.documentElement.scrollTop

// window.innerHeight需要IE8+

/**
 * 获取浏览器窗体高度
 */
var winHeight = window.innerHeight || document.documentElement.clientHeight