console.log( '\n' +
    'In the example below, \'this\' from function A is a global object, because when the \'new\' operator is called, ' + '\n' +
    'the constructor of the function object is called on the newly ' + '\n' +
    'created object (x, it was created by the \'new\' operator), ' + '\n' +
    'as if x.constructor(), which was inherited from the object\'s \'prototype\' in function User. ' + '\n' +
    'Thus, the function \'function <User>\' takes as its \'this\' object the property of ' + '\n' +
    'which it is now (the object up to the point), and the function inside it \'function\' ' + '\n' +
    'is not nobody\'s property and by default \'this\' is set to <Object> (\'undefined\' in strict mode).' + '\n\n\n'
)

console.log('Version with NEW (stages work): ')
function User(name) {
    console.log(this, '<new Object>!', '\n')
    this.name = name;

    // this === Object, without use strict mode
    ( function A(){console.log('<this> (from function in function) ===', this)} )()
}

console.log('Version with NEW result -', new User('new Object (with operator)'), '\n')

/* Example of work 'new' */
console.log('Version without NEW (stages work and IMITATION WORK): ')
let new_obj = {}
new_obj.__proto__ = User.prototype
new_obj.constructor('new Object (without operator)') // 'function A()()' is not a property of an object
console.log('Version without NEW result -', new_obj, '\n\n\n')
console.log((new User('')).__proto__ === new_obj.__proto__, '- proof (their prototypes are the same)', '\n')

console.log('Simulating the work of taking context for arrow functions')
function _User(name) {
    console.log(this, '<new Object>!')
    this.name = name;

    // <this> is taken from outside, bc => isn`t own context <this> (read above)
    ( ()=>{console.log('<this> (from function in =>) this ===', this)} )()
}
new _User('<new Object>!')

let _new_obj = {}
_new_obj.__proto__ = User.prototype
_new_obj.constructor('<new Object>!') // '=>' is taken <this> from _new_object
console.log(_new_obj)
