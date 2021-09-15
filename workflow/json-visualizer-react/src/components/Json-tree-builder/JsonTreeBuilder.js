import React, {Component} from 'react';

class JsonTreeBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultArray: []
        };
    }

    buildResultString(val) {
        if (val !== undefined) {
            for (let [key, value] of Object.entries(val)) {
                if (typeof value === 'object' && value !== null) {
                    const lengthStr = Array.isArray(value) ? `[${value.length}]` : `{${Object.keys(value).length}}`;
                    this.state.resultArray.push(<div>
                        <span className='clickable'>{key} {lengthStr}: </span>
                        <span style='display: block'
                              className='attached-elements'>{this.buildResultString(value)}</span>
                    </div>)
                } else {
                    const color = this.addClassByType(value);
                    this.state.resultArray.push(<div>
                        <span>{key}: </span>
                        <span className={color}>{value}</span>
                    </div>)
                }
            }
            return this.state.resultArray.join('');
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

    render() {
        return (
            <>
                {this.buildResultString(this.props)}
            </>
        )
    }
}

export default JsonTreeBuilder;