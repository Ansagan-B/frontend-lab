const textarea = document.getElementById('text-area');
const result = document.getElementById('result');
const button = document.getElementById('button');
const clearButton = document.getElementById('clear-button');

button.addEventListener('click', handleButtonClick);
clearButton.addEventListener('click', clearTextarea);

function clearTextarea() {
    textarea.value = '';
    result.textContent = '';
    result.innerHTML;
}

function parseJSONString(str) {
    try {
        return JSON.parse(str);
    } catch (err) {
        result.textContent = `Wrong format`;
        result.innerHTML;
        return null;
    }
}

function addClassByType(content) {
    const colorByTypeVariants = {
        number: 'blue',
        string: 'red',
        boolean: 'purple',
        default: 'green'
    }
    const type = typeof content;

    return colorByTypeVariants[type] || colorByTypeVariants.default;
}

function buildResultString(val) {
    let resultArray = [];

    for (let [key, value] of Object.entries(val)) {
        if (typeof value === 'object' && value !== null) {
            const lengthStr = Array.isArray(value) ? `[${value.length}]` : `{${Object.keys(value).length}}`;
            resultArray.push(`<div>
                                   <span class='clickable'>${key} ${lengthStr}: </span>
                                   <span style='display: block' class='attached-elements'>${buildResultString(value)}</span>
                                 </div>
                                  `);
        } else {
            const color = addClassByType(value);
            resultArray.push(
                `<div>
                     <span>${key}: </span>
                     <span class=${color}>${value}</span>
                  </div>`
            );
        }
    }
    return resultArray.join('');
}

function renderResult(resultString) {
    result.innerHTML = resultString;
}

function changeDisplay(eventObj) {
    const item = eventObj.target;
    const nextEl = item.nextElementSibling;

    if (nextEl.style && nextEl.style.display === 'block') {
        nextEl.style.display = 'none';
        item.classList.toggle('rotated');
    } else {
        nextEl.style.display = 'block';
        item.classList.toggle('rotated');
    }
}

function openAttached() {
    let items = document.getElementsByClassName('clickable');
    Array.from(items).forEach(item => {
        item.addEventListener('click', changeDisplay);
    })
}

function handleButtonClick() {
    const parsedJSON = parseJSONString(textarea.value);
    const treeToShow = buildResultString(parsedJSON);

    renderResult(treeToShow);
    openAttached();
}