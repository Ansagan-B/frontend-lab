import JsonVisualizer from './visualizer';
import "./style.scss";

const clearButton = document.getElementById('clear-button');
const textarea = document.getElementById('text-area');
const result = document.getElementById('result');
const button = document.getElementById('button');

clearButton.addEventListener('click', clearTextarea);
button.addEventListener('click', handleButtonClick);

let jsonVisualizer = new JsonVisualizer();

function handleButtonClick() {
    const parsedJSON = jsonVisualizer.parseJSONString(textarea.value);
    const treeToShow = jsonVisualizer.buildResultString(parsedJSON);

    treeToShow && jsonVisualizer.renderResult(treeToShow);
    jsonVisualizer.openAttached();
}

function clearTextarea() {
    textarea.value = '';
    result.textContent = '';
    result.innerHTML;
}

