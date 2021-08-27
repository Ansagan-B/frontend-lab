const textarea = document.getElementById('text-area');
const result = document.getElementById('result');
const button = document.getElementById('button');
const clearButton = document.getElementById('clear-button');

button.addEventListener('click', () => renderResult(textarea.value));
clearButton.addEventListener('click', clearTextarea);

function clearTextarea() {
    textarea.value = '';
    result.textContent = '';
    result.innerHTML;
}

function parseJSONString(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return null;
    }
}

function addClassByType(content) {
    if (typeof content === 'number') {
        return 'blue';
    } else if (typeof content === 'string') {
        return 'red';
    } else if (typeof content === 'boolean') {
        return 'purple';
    } else {
        return 'green';
    }
}

function showResult(val) {
    let resultArray = [];

    if (val === null) {
        result.textContent = 'Wrong format';
        result.innerHTML;
    } else {

        for (let [key, value] of Object.entries(val)) {

            if (typeof value === 'object') {
                const lengthStr = Array.isArray(value) ? `[${value.length}]` : `{${Object.keys(value).length}}`;
                resultArray.push(`<span class='clickable'>${key} ${lengthStr}: </span>
                                    <span style='display: none'>${showResult(value)}</span>`);
            } else {
                let content = value;
                const color = addClassByType(content);
                resultArray.push(
                    `<p>${key}: 
                        <span class=${color}>${content}</span>
                    </p>`
                );
            }
        }
        return resultArray.join('');
    }
}

function renderResult(value) {
    const parsedJSON = parseJSONString(value);
    result.innerHTML = showResult(parsedJSON);
    openAttached();
}

function openAttached() {
    let items = document.getElementsByClassName('clickable');

    Array.from(items).forEach(el => {
        el.onclick = () => {
            const nextEl = el.nextElementSibling;

            if (nextEl.style && nextEl.style.display === 'none') {
                nextEl.style.display = 'block';
            } else if (nextEl.style && nextEl.style.display === 'block') {
                nextEl.style.display = 'none';
            }
        };
    })

}