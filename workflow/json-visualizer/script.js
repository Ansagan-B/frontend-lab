const textarea = document.getElementById('text-area');
const result = document.getElementById('result');
const button = document.getElementById('button');
const clearButton = document.getElementById('clear-button');

button.addEventListener('click', showResult);
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

function showResult() {
    let val = textarea.value;
    let parsedJSON = parseJSONString(val)
    let resultArray = [];

    if (parsedJSON === null) {
        result.textContent = 'Wrong format';
        result.innerHTML;
    } else {

        for (let [key, value] of Object.entries(parsedJSON)) {

            if (typeof value === 'object') {
                resultArray.push(
                    `<span">${key}{${Object.keys(value).length}}:</span>`
                );
                resultArray.push(jsonToHtml(value));
            } else if (Array.isArray(value)) {
                resultArray.push(`<span>${key} [${value.length}]:`);
                resultArray.push(jsonToHtml(value));
            } else {
                let content = value;

                if (typeof content === 'number') {
                    resultArray.push(
                        `<p>${key}: 
                        <span class='blue'>${content}</span>
                    </p>`
                    );
                } else if (typeof content === 'string') {
                    resultArray.push(
                        `<p>${key}: 
                        <span class='red'>${content}</span>
                    </p>`
                    );
                } else {
                    resultArray.push(
                        `<p>${key}: 
                        <span class='green'>${content}</span>
                    </p>`
                    );
                }
            }
        }
        return result.innerHTML = resultArray.join('');
    }
}


