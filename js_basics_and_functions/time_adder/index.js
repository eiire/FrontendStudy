/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */

module.exports = function (hours, minutes, interval) {
    let remainder = interval;

    while (Math.floor(remainder / 60) > 0) {
        hours++;
        remainder -= 60;

        if (hours === 24)
            hours = 0;
    }

    if ((remainder + minutes) >= 60) {
        hours++;
        minutes = remainder + minutes - 60;

        if (hours >= 24)
            hours = 0;
    } else {
        minutes = minutes + remainder;
    }

    return (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);
};
