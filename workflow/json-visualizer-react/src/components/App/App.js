import React, {Component} from 'react';
import TextFetcher from '../Text-fetch/TextFetcher';
import './App.css';

class App extends Component {
    render() {
        return (
            <>
                <header>JSON visualizer</header>
                <div id="wrapper">
                    <TextFetcher/>
                </div>
               
                <div className="additional-info">
                    <h3>Coloring value by type</h3>
                    <ul>
                        <li>Type of <span className="blue">"number": blue</span> color;</li>
                        <li>Type of <span className="red">"string": red</span> color;</li>
                        <li>Type of <span className="purple">"boolean": purple</span> color;</li>
                        <li>Other types: <span className="green">green</span> color.</li>
                    </ul>
                </div>
            </>
        );
    }
}

export default App;