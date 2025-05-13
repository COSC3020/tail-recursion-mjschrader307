const { fibTR } = require("./code.js");

function fib_normal(n) {
    if (n <= 1) return 1;

    return fib_normal(n - 2) + fib_normal(n - 1);
}

for (let i = 0; i < 10; i++) {
    if (fib_normal(i) !== fibTR(i)) {
        throw new Error("Mismatching fib calculations");
    }
}