console.log(function swapKeyValue(map = new Map([["user","Tom"], ["confirm","isConfirmed"]]), key = 'confirm') {
    if (map.has(key)) {
        for(let entry of map) {
            if (entry[0] === key) {
                map.set(entry[1], entry[0])
                map.delete(key)
            }
        }
        return map
    } else {
        return false
    }
}())