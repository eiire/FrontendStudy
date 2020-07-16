// where is the class method?
class Accumulator {
    constructor(startVal) {
        this.value = startVal
    }

    read(val){
        this['value'] += ++val
    }
}

// in prototype class or __proto__ created obj with enumerable: false
Accumulator.prototype['read'] = function(val) {
    this['value'] += val
}

let accumulator = new Accumulator(1);

accumulator.read(1);
accumulator.read(2);

console.log(accumulator);
