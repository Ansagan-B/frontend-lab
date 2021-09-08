import _isNull from 'lodash/isNull';
import _isObject from 'lodash/isObject';
import _isArray from 'lodash/isArray';

const result = document.getElementById('result');

export default class JsonVisualizer {

    parseJSONString(str) {
        try {
            if (str === 'null') {
                throw new Error();
            }
            return JSON.parse(str);
        } catch (err) {
            this.renderResult(`<span>Wrong format</span>`);
        }
    }

    addClassByType(content) {
        const colorByTypeVariants = {
            number: 'blue',
            string: 'red',
            boolean: 'purple',
            default: 'green'
        }
        const type = typeof content;

        return colorByTypeVariants[type] || colorByTypeVariants.default;
    }

    buildResultString(val) {
        let resultArray = [];

        if (val !== undefined) {
            for (let [key, value] of Object.entries(val)) {
                if (_isObject(value) && !_isNull(value)) {
                    const lengthStr = _isArray(value) ? `[${value.length}]` : `{${Object.keys(value).length}}`;
                    resultArray.push(`<div>
                                   <span class='clickable'>${key} ${lengthStr}: </span>
                                   <span style='display: block' class='attached-elements'>${this.buildResultString(value)}</span>
                                 </div>
                                  `);
                } else {
                    const color = this.addClassByType(value);
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
    }

    renderResult(resultString) {
        result.innerHTML = resultString;
    }

    changeDisplay(eventObj) {
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

    openAttached() {
        let items = document.getElementsByClassName('clickable');
        Array.from(items).forEach(item => {
            item.addEventListener('click', this.changeDisplay);
        })
    }
}