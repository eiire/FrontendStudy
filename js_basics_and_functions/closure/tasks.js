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
