console.log(function beginWith(str='JavaScript', subs='java'){
    return str.toLowerCase().startsWith(subs.toLowerCase()) // ignoring registry
}())

console.log(function beginWith(str='Java Script'){
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('-') // Java-Script
}())