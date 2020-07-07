// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var date = require('./index.js');

var time = date('2017-05-16 13:45')
    .add(24, 'hours')
    .subtract(1, 'months')
    .add(3, 'days')
    .add(15, 'minutes');


assert.deepEqual(
    time.value,
    '2017-04-20 14:00',
);

// assert.throws принимает функцию и
// проверяет, что она выбрасывает исключение определенного типа

assert.throws(
    function () {
        date('2017-05-16 13:45').add(2, 'light-years');
    },
    TypeError,

    'Если попытаться прибавить к дате световой год, ' +
    'то выбросится исключение TypeError'
);

assert.throws(
    function () {
        date('2017-05-16 13:45').add(-1, 'years');
    },
    TypeError,

    'Если попытаться передать в функцию add отрицательное число – выбросится исключение TypeError'
);

// date('2017-05-16 13:45').add(-1, 'years');

console.info('OK!');


// console.log(
//     time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), time.getMinutes()
// )