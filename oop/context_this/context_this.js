let obj = {
    'func': function (param) {
        return this.name + ' ' + param + ':' + this.id
    }
}

function func(utilObj,targetObj,param){
    for (let prop in utilObj) {
        if (typeof utilObj[prop] === 'function')
            console.log(utilObj[prop].call(targetObj, param))
    }
}

func(obj, {'name':'Tom', 'id':'3'}, 'ID')