var data = [
  {id: 1, name: 'asdqwe'},
  {id: 2, name: 'qweas'},
  {id: 3, name: 'tyutyu'},
  {id: 4, name: 'qxfsgsd'},
  {id: 5, name: 'asdadqwe'},
  {id: 2, name: 'uioui'},
  {id: 3, name: 'ayyyy'},
  {id: 4, name: 'yfiashdq'},
]

var removeDup = function(arr) {
  const hash = {}
  return arr.reduce((pre, cur) => {
    hash[cur.id] ? '' : hash[cur.id] = true && pre.push(cur)
    return pre
  }, [])
}

removeDup(data)