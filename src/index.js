module.exports = function reverse (n) {
    n = Math.abs(n);
    let arr = Array.from('' + n);
    return arr.reverse().join('');
}
