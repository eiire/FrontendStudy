/**
 * @params {String[]}
 */
function select() {
    return ['select', arguments]
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filterIn', arguments]
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};

/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

function query(collection) {
    let new_collection = [];
    let complex_filter = {}
    let new_filter = {}
    let complete_select
    let new_complete_select

    if (arguments.length <= 1)
        return collection

    // query preparation
    Array.from(arguments).forEach(function (arg) {
        if (arg[0] === 'filterIn') {
            let property = arg[1][0]
            if (complex_filter[property] === undefined && (complex_filter !== new_filter)) {
                complex_filter[property] = arg[1][1]
                new_filter[property] = []
            } else {
                let filter = arg[1][1]
                filter.forEach(value => {
                    if ((new Set(complex_filter[property])).has(value))
                        new_filter[property].push(value)
                })
                complex_filter[property] = new_filter[property]
                new_filter[property] = []
            }
        }

        if (arg[0] === 'select') {
            let fields = Array.from(arg[1])

            if (complete_select === undefined) {
                complete_select = fields
            } else {
                new_complete_select = []
                fields.forEach(field => {
                    if ((new Set(complete_select).has(field))) {
                        new_complete_select.push(field)
                    }
                })
                complete_select = new_complete_select
            }
        }
    })


    let filter_keys = Object.keys(complex_filter)

    // dirty hack
    if (complete_select === undefined)
        complete_select = Object.keys(collection[0])

    // update new collection
    collection.forEach(function (friend) {
        let is_push = true
        filter_keys.forEach(filter_key => is_push = is_push === true ?
            complex_filter[filter_key].includes(friend[filter_key]) : false
        )

        if (is_push && complete_select.length !== 0) {
            new_collection.push(function () {
                let _friend = {}

                complete_select.forEach(function (property) {
                    if (property in friend)
                        _friend[property] = friend[property]
                })
                return _friend
            }() )
        }
    })

    return new_collection
}