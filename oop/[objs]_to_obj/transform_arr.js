var arr = [
    {name: 'width', value: 10},
    {name: 'height', value: 20}
];

function transform(arr) {
    console.log(arr.reduce((res_obj, html_obj) => {
        res_obj[html_obj.name] = html_obj.value
        return res_obj
    }, {}))
}

transform(arr)