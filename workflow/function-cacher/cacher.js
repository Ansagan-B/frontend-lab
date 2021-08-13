const input = document.getElementById('input');
const calc = document.getElementById('calc');
const result = document.getElementById('result');

class Cacher {
    withCache(cachedFunction) {
        let cache = {};
        return function (...args) {
            const key = args.join()
            if (cache[key]) {
                return cache[key];
            } else {
                cache[key] = cachedFunction(...args);
                return cache[key];
            }
        }
    }
}

function factorial(number) {
    return math.factorial(number);
}

const cacher = new Cacher();
const cachedFactorial = cacher.withCache(factorial)

calc.addEventListener('click', () => {
    result.textContent = cachedFactorial(input.value);
});
