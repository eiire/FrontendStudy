/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    let time = new Date(date)

    // new <object> property with string value
    time['value'] = time.getFullYear() + '-'
        + (time.getMonth() < 10 ? '0' + (time.getMonth() + 1): (time.getMonth()) + 1) + '-'
        + (time.getDate() < 10 ? '0' + time.getDate(): time.getDate()) + ' '
        + (time.getHours() < 10 ? '0' + time.getHours(): time.getHours()) + ':'
        + (time.getMinutes() < 10 ? '0' + time.getMinutes(): time.getMinutes())

    let year = time.getFullYear();
    let month = time.getMonth();
    let day = time.getDate();
    let hours = time.getHours();
    let minutes = time.getMinutes();

    // create new method in object <time>
    time.add = function (numb, name) {
        if (numb < 0)
            throw new TypeError()

        switch (name) {
            case 'hours':
                hours += numb
                break
            case 'minutes':
                minutes += numb
                break
            case  'days':
                day += numb
                break
            case 'months':
                month += numb
                break
            case 'years':
                year += numb
                break
            default:
                throw new TypeError()
        }

        return update_time(this, year, month, day, hours, minutes) // return <object> time
    }

    time.subtract = function (numb, name) {
        if (numb < 0)
            throw new TypeError()

        switch (name) {
            case 'hours':
                hours -= numb
                break;
            case 'minutes':
                minutes -= numb
                break;
            case  'days':
                day -= numb
                break;
            case 'months':
                month -= numb
                break;
            case 'years':
                year -= numb
                break
            default:
                throw new TypeError()
        }

        return update_time(this, year, month, day, hours, minutes)
    }

    return time
}

function update_time(self, year, month, day, hours, minutes) {
    // date calculating
    let new_time = new Date(
        year, month, day, hours, minutes
    )
    // update old date <object> self (time)
    self.setFullYear(new_time.getFullYear())
    self.setMonth(new_time.getMonth())
    self.setDate(new_time.getDate())
    self.setHours(new_time.getHours())
    self.setMinutes(new_time.getMinutes())

    self.value = self.getFullYear() + '-'
        + (self.getMonth() < 10 ? '0' + (self.getMonth() + 1): (self.getMonth()) + 1) + '-'
        + (self.getDate() < 10 ? '0' + self.getDate(): self.getDate()) + ' '
        + (self.getHours() < 10 ? '0' + self.getHours(): self.getHours()) + ':'
        + (self.getMinutes() < 10 ? '0' + self.getMinutes(): self.getMinutes())

    return self
}
