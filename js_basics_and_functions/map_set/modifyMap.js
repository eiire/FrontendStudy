/* repalce object array on set */
let _map = new Map([['log14', [1,2,3,3,2,1]], ['log15', 'none data'], ["log16", ['s','S']]])

console.log(function swapKeyValue(map = _map){
    for(let entry of map)
        Array.isArray(entry[1]) ? map.set(entry[0], new Set(entry[1])): map.delete(entry[0])

    let res_str = ''
    for (let entry of map)
        res_str = res_str.concat(entry[0], ':', [...entry[1]].join(''), ';')

    return res_str  // log14:123;log16:sS;
}())
