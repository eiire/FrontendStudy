// v1
console.log(function allNumsToString(obj = {"init":0,"nums":[111,222,333],"a":1,"b":11}){
    return Object.values(obj).flat(1).sort().join(';')
}())

// v2
console.log(function allNumsToString(obj = {"init":0,"nums":[111,222,333],"a":1,"b":11}){
    return Object.values(obj).reduce((acc, item) => {
        typeof item === 'object'? acc.push(...item): acc.push(item)
        return acc
    }, []).sort().join(';')
}())