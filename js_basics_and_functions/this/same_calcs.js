//v3
let calc = {
    a: 0,
    b: 0,

    read(a, b) {
        this.a = a
        this.b = b
        return this
    },
    mul() {
        return this.a * this.b;
    },
    sum() {
        return this.a + this.b;
    }
}
function ___calculator() {
    return calc
}

let __new_calc = new ___calculator()  // __calculator { a: 0, b: 0 }
console.log(__new_calc.read(3,4).mul(), __new_calc.sum())

// v1
let calculator = {
    ['read'](a, b) {
        this.a = a !== undefined ? a : 0
        this.b = b !== undefined ? b : 0
    },

    ['sum']() {
        return this.a + this.b
    },

    ['mul']() {
        return this.a * this.b
    }
};

calculator.read(3, 4);
console.log( calculator.sum() );
console.log( calculator.mul() );

// v2 The advantages of the implementation are that the functions of all new objects can be instantly overwritten
function _Calculator() {
    this.a = 0
    this.b = 0
}

_Calculator.prototype['read'] = function (a, b) {
    this.a = a
    this.b = b
    return this
}

_Calculator.prototype['sum'] = function () {
    return this.a + this.b
}

_Calculator.prototype['mul'] = function () {
    return this.a * this.b
}

let new_calc = new _Calculator()  // _calculator { a: 0, b: 0 }
console.log(new_calc.read(3,4).mul(), new_calc.sum())

// v3 Functions will have to be rewritten in all created objects separately
function __Calculator() {
    this.a = 0
    this.b = 0

    this['read'] = function(a, b) {
        this.a = a
        this.b = b
        return this
    }

    this['mul'] = function () {
        return this.a * this.b
    }

    this['sum'] = function () {
        return this.a + this.b
    }
}

let _new_calc = new __Calculator()  // _calculator { a: 0, b: 0 }
console.log(_new_calc.read(3,4).mul(), _new_calc.sum())
