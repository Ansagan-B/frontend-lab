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
        return 'gray';
    } else {
        return 'green';
    }
}

function showResult(val) {
    let parsedJSON = parseJSONString(val)
    let resultArray = [];

    if (parsedJSON === null) {
        result.textContent = 'Wrong format';
        result.innerHTML;
    } else {

        for (let [key, value] of Object.entries(parsedJSON)) {

            if (typeof value === 'object') {
                const lengthStr = Array.isArray(value) ? `[${value.length}]` : `{${Object.keys(value).length}}`;
                resultArray.push(`<span>${key} ${lengthStr}: </span>
                                    <span class='open'>${value}</span>`);
                resultArray.push(showResult(value));
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
    result.innerHTML = showResult(value);
    openAttached();
}

function openAttached() {
    let items = document.getElementsByClassName('open')

    for (let item of items) {
        item.addEventListener('click', () => (
        item.classList.add('show')))
    }
}