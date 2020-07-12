console.log(function findMidlle(arr = ["a","b","c",null, null], res = arr.filter(e => e !== null)) {
    return res.length === 0 ? null : res[Math.floor(res.length % 2 === 0 ? res.length / 2 - 1 : res.length / 2)]
}())