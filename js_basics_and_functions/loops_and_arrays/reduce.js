console.log(function modify(arr=[100, 3, 2, 7, 7, 7]){
    let res = []
    arr.filter(numb => numb % 2).reduce((acc, number) => {
        acc*=number
        res.push(acc)
        return acc
    }, 1);

    return res
}())