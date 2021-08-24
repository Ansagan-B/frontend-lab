const textarea = document.getElementById('text-area').value;
const result = document.getElementById('result');
const button = document.getElementById('button');

button.addEventListener('click', showResult);

function parseJSONString(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return null;
    }
}

function showResult() {
    let parsedJSON = parseJSONString(textarea)

    if (parsedJSON === null) {
        result.textContent = 'Wrong format';
    } else {

        for (let key in parsedJSON){
            JSON.stringify(key);
            result.textContent += `${key}, `;
        }

    }
    result.innerHTML;
}


