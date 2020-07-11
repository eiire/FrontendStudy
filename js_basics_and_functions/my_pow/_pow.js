function pow (x, n) {
    return n <= 0 ? n < 0 ? neg_pow(x, n) : 1 : pos_pow(x, n)
}

function neg_pow (x, n) {
    let result = x;
    for (let i = 0; i < -(n - 1); i++) {
        result *= 1/x
    }
    return result
}

function pos_pow (x, n) {
    let result = x;
    for (let i = 0; i < n - 1; i++) {
        result *= x
    }
    return result
}