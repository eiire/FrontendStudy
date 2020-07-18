console.log(function fillTemplate(template, values) {
    return template.split(' ').map(word => {
        for (let t of values) {
            if (word.match(new RegExp('_' + t.name + '_'))) {
                return t.value
            }
        }
        return word
    }).join(' ')
}('Hello _user_ , you are _who_ in _where_',
    [{"name":"user","value":"Neo"},
        {"name":"who","value":"chosen"},
        {"name":"where","value": "matrix"}]))