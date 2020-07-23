// task 1
function sum(a) {
    return function (b) {
        return a + b
    }
}

console.log(sum(5)(-1))

// task 2
function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            console.log(i);
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();

//task 3
Function.prototype['defer'] = function (ms) {
    let func = this
    // Decorator
    return function (a, b) {
        setTimeout(func, ms, a, b)
    }
}

function f(a, b) {
    console.log(a + b)
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

//task 4
function _sum(a) {
    f.toString = function () {
        return a
    }

    function f (b) {
        a += b
        return f
    }

    return f
}
console.log(_sum(3)(4)(4).toString())

//task 5
function makeCounter() {
    let count = 0;

    function f() {
        return count++
    }

    f.set = (a) => count = a
    f.decrease = () => --count
    return f
}

let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

counter.set(10); // установить новое значение счётчика

console.log( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log( counter() ); // 10 (вместо 11)
