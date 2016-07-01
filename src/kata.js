function multiply1(a, b) {
    return a / (1 / b);
}

function multiply2(a, b) {
    let acc = 0;
    for (let i = 0; i < b; i++) {
        acc += a;
    }
    return acc;
}

function multiply3(a, b) {
    function inner(a, b, acc) {
        return (b === 0) ? acc : inner(a, b - 1, acc + a);
    }
    return inner(a, b, 0);
}

module.exports = {
    multiply1: multiply1,
    multiply2: multiply2,
    multiply3: multiply3
}
