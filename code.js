function fibTR(n, current=1, next=2) {
    if (n <= 1) return current;

    return fibTR(n - 1, next, next + current);
}

module.exports = { fibTR };