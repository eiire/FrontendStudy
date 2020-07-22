function throttle(func, ms) {
    let prev_call = 'First call'
    let timer

    return function f(...args) {
        clearTimeout(timer)
        f.last_call = new Date()
        let time_passed = f.last_call - prev_call + 1

        if (prev_call === 'First call' || time_passed > ms) {
            prev_call = new Date()
            return func.call(this, ...arguments)
        } else {  // calling last call func()
            timer = setTimeout(() => f.call(this, ...arguments), ms - (time_passed))
        }
    }
}

function f(a) {
    console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
// console.log(f1000.delay())

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано