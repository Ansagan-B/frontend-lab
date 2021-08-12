const input = document.getElementById('input');
const calc = document.getElementById('calc');
const result = document.getElementById('result');

class Cacher {
    withCache(fn) {
        let cache = {};
        return function (...args) {
            const key = args.join()
            if (cache[key]) {
                return cache[key];
            } else {
                cache[key] = fn(key);
                return cache[key];
            }
        }
    }
}

function factorial(number) {
    console.log(`Number: ${number}`);
    return math.factorial(number);
}

const cacher = new Cacher();
const cachedFactorial = cacher.withCache(factorial)

calc.addEventListener('click', () => {
    console.log(cachedFactorial(input.value))
    result.textContent = cachedFactorial(input.value);
});
