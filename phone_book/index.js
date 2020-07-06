// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    // command [ (command) optional: [(name) (number1,number2)] ]
    let split_command;
    if (command.split(' ')[0] === 'ADD') {
        split_command = command.split(' ').slice(0, 2)
        command.split(' ').slice(2)[0].split(',').forEach(number => split_command.push(number))
    } else {
        split_command = command.split(' ')
    }

    switch (split_command[0]) {
        case 'ADD':
            phoneBook[split_command[1]] = new Set(phoneBook[split_command[1]])  // unique number
            split_command.slice(2).forEach(number => phoneBook[split_command[1]].add(number))
            break
        case 'REMOVE_PHONE':
            let fl_delete = false;
            for (let person in phoneBook) {
                split_command.slice(1).forEach(number => fl_delete = phoneBook[person].delete(number))
            }

            return fl_delete
        case 'SHOW':
            let phone_book = []
            Object.keys(phoneBook).sort().forEach(person => {
                if (phoneBook[person].size !== 0)
                    phone_book.push(person + ': ' + Array.from(phoneBook[person]).join(', '))
            })

            return phone_book
    }
};