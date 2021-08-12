const input = document.getElementById('input');
const calc = document.getElementById('calc');
const result = document.getElementById('result');


class Cacher {
    constructor() {
        this.cache = new WeakMap();
    }

    withCache(obj) {
        if (!this.cache.has(obj)) {
            this.cache.set(obj, obj);
        }
        return this.cache.get(obj);
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