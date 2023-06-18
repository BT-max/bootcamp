const math = (limit = '100') => {
    if (isNaN(parseInt(limit))) {
        return {
            "error": "Hello World! You are stupid."
        }
    }
    let sum = 0;
    for (let number = 1; number <= limit; number++) {
        sum += number;
    }
    let mul = 1;
    for (let number = 1; number <= limit; number++) {
        mul *= number;
    }
    return {
        input: limit,
        sum: sum,
        mul: mul,
    }
}

module.exports = math;