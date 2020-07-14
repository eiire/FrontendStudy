console.log(function isIsogram(str, list = str.split('')){
    let res = true
    list.forEach((ch, index) => {
        res = res === true ? list.indexOf(ch.toLowerCase(), index+1) === -1 : false
    })

    return res
}('abvv'))