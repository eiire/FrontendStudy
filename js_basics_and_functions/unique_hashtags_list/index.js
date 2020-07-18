/**
 * @param {String[]} hashtags
 * @returns {String}
 */

module.exports = function(hashtags) {
    let res = [];
    hashtags.forEach(hashtag => res.push(hashtag.toLowerCase()));

    return res.filter((v, i, a) => a.indexOf(v) === i).join(', ')
};
