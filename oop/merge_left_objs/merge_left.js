Object.prototype.mergeLeft = mergeLeft
Object.prototype.mergedProperties = Array()
console.log(
    'Object -', Object.__proto__.__proto__,
    'object function -', mergeLeft.__proto__ ,
    'Object -', mergeLeft.__proto__.__proto__
)  // checks


let target = {
    a:1
}
// console.log(target.__proto__, '- proto from obj [target]')

let source = {
    a:100,
    b:200,
    c:300
}

let source_2 = {
    d:400
}

function mergeLeft(obj) {
    for (let prop in obj) {
        if (!this.hasOwnProperty(prop) && prop !== 'mergeLeft') {
            this[prop] = obj[prop]
            if (prop !== 'mergedProperties') {
                this.mergedProperties.push(prop)
            }
        }
    }

    return this
}

console.log(target.mergeLeft(source).mergeLeft(source_2), 'RESULT')  // result