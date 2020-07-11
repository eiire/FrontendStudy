console.log(function (arr = ["ivan","Igor","ingvar"]){
    arr.forEach((e, i) => {
        console.log(++i + ': ' + e[0].toUpperCase() + e.slice(1))
    })
    return ''
}())