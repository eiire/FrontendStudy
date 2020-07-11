var arr = [1,2,3];

function displayNums(a,b,c){
    console.log(a+", "+b+", "+c);
}

displayNums(...arr);//1, 2, 3

function proc(func, ...args) {
    let sum = 0
    for (let numb of args) {
        sum += numb
    }
    func(sum)
}