import React, {Component} from 'react';
import JsonTreeBuilder from '../Json-tree-builder/JsonTreeBuilder';

import './Build-button-style.css';

class BuildButton extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render() {
        return (
            <>
            <div className="built-json">
                <button type="button" id="button">Build JSON Tree</button>
            </div>
            <div id="json-tree">
                {/*<JsonTreeBuilder/>*/}
            </div>
            </>
    )
    }
}

export default BuildButton;