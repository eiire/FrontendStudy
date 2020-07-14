let json = '{"name":"valuesObj", "value":[1,2,3]}'
let obj = {"name":"valuesObj", "id":7}

console.log(function (json,obj){
    let new_obj = JSON.parse(json)
    for (let prop in obj) {
        console.log(typeof prop)
        if (!new_obj.hasOwnProperty(prop))
            new_obj[prop] = obj[prop]
    }
    return JSON.stringify(new_obj)

}(json, obj))