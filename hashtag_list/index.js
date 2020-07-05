/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let result = [];
    tweet.split(' ').filter(word => word.startsWith('#')).forEach(hashtag => result.push(hashtag.slice(1)));

    return result;
};
