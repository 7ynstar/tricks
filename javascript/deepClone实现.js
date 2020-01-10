function forEach(array, iteratee) {
  let index = -1
  while (++index < array.length) {
    iteratee(array[index], index)
  }
  return array
}

function clone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    const isArray = Array.isArray(target)
    let cloneTarget = isArray ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)
    // 如果是对象，keys就是对象的键数组
    const keys = isArray ? undefined : Object.keys(target)
    forEach(keys || target, (value, key) => {
      if (keys) {
        key = value
      }
      cloneTarget[key] = clone(target[key], map)
    })
    return cloneTarget
  } else {
    return target
  }
}

function clone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    const isArray = Array.isArray(target)
    let cloneTarget = isArray ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)
    const keys = isArray ? undefined : Object.keys(target)
    forEach(keys || target, (value, key) => {
      if (keys) {
        key = value
      }
      cloneTarget[key] = clone(target[key], map)
    })
    return cloneTarget
  } else {
    return target
  }
}