console.log(function numPrettier(num, splitter) {
    let res = []
    num = Number(num)

    while (num !== 0) {
        if (Math.floor(num / 1000) !== 0) {
            if (String(Math.floor(num % 1000)).length === 2) {
                res.unshift('0' + Math.floor(num % 1000))
            } else if (String(Math.floor(num % 1000)).length === 1){
                res.unshift('00' + Math.floor(num % 1000))
            } else {
                res.unshift(Math.floor(num % 1000))
            }
        } else {
            res.unshift(Math.floor(num % 1000))
        }

        num = Math.floor(num / 1000)
    }

    return res.join(splitter)
}(12211033103, '.'))
