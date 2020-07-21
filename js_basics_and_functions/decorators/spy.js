function spy(func) {
    f['calls'] = Array()

    function f() {
        f.calls.push([...arguments])
        return func.call(this, ...arguments)
    }
    return f
}

function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
}

work = spy(work);
// console.log(work.name)
work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
