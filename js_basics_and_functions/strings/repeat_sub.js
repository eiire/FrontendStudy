String.prototype['reduce'] = Array.prototype.reduce

console.log(function repeatSub(str, lows_str = str.toLowerCase()) {
    return lows_str.length !== 0 ? Object.values(lows_str.reduce(function (acc, item) {
        acc[item] !== undefined ? acc[item] += 1 : acc[item] = 1
        return acc
    }, {})).sort().slice(-1)[0] : 0
}('qWwerty'))
