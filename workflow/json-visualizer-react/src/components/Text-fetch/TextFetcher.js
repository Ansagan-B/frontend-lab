import React, {Component} from 'react';
import './Text-fetch-style.css';
// import BuildButton from '../Build-button/BuildButton';
import JsonTreeBuilder from '../Json-tree-builder/JsonTreeBuilder';
import WrongFormat from '../Wrong-format/WrongFormat';

class TextFetcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        function parseJSONString(str) {
            try {
                if (str === null) {
                    return <WrongFormat />
                }
                return <JsonTreeBuilder value={JSON.parse(str)}/>;
            } catch (err) {
                return <WrongFormat />
            }
        }
        return parseJSONString(this.state.value);
    }
    
    render() {
        return (
            <>
                <div id="input">
                    <h3>JSON String</h3>
                    <label htmlFor="text-area"></label>
                    <textarea id="text-area" value={this.state.value} onChange={this.handleChange}></textarea>
                </div>
                <div className="built-json">
                    <button type="button" id="button" onClick={this.handleSubmit}>Build JSON Tree</button>
                </div>
                <div id="json-tree">
                    <h3>JSON Tree</h3>
                    {/*{this.parseJSONString(this.state.value)}*/}
                </div>
            </>
        )
    }


};

export default TextFetcher;