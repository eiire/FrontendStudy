let dictionary = Object.create(null, {
    toString: {
        value: function () {
            return Object.keys(this).join(',')
        },
        enumerable: false
    }
});

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// only apple and __proto__
for(let key in dictionary) {
    console.log(key); // "apple", "__proto__"
}

// result
console.log(dictionary.toString(), '- result'); // "apple,__proto__"
