function debounce(func, ms) {
    let prev_call = 'First call'

    return function f(...args) {
        let last_call = new Date()
        if (prev_call === 'First call' || last_call - prev_call > ms) {
            prev_call = new Date()
            return func.call(this, ...arguments)
        }
    }
}

let f = debounce(console.log, 1000);

f(1, 2); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
setTimeout( () => f(6), 3000); // выполняется
setTimeout( () => f(7), 3100); // проигнорирован (прошло только 100 мс)
