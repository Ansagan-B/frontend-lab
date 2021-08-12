const input = document.getElementById('input');
const calc = document.getElementById('calc');
const result = document.getElementById('result');


class Cacher {
    constructor() {
        this.cache = new Map();
    }

    process(obj) {
        if (!this.cache.has(obj)) {
            let result = this.factorial(obj)
            this.cache.set(obj, result);
        }
        return this.cache.get(obj);
    }

    factorial(number) {
        return math.factorial(number);
    }
}

const cacher = new Cacher();

calc.addEventListener('click', () => {
    result.textContent = cacher.process(input.value);
});