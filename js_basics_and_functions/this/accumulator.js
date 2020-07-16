function Accumulator(startingValue) {
    this['value'] = startingValue
}
Accumulator.prototype['read'] = function(val) {
    this['value'] += val
}

let accumulator = new Accumulator(1);

accumulator.read(1);
accumulator.read(2);

console.log(accumulator.value);