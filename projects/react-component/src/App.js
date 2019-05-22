import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { output: 'no output' }

    }

    async componentDidMount() {
    }

    async componentWillUpdate(nextProps, nextState, nextContext) {
        Object.assign(nextState, nextProps); // sync web component property change
    }

    handleKeyup = ({ target: { value } }) => {
        if (this.state.validator) {
            this.setState({ isValid: this.state.validator.validate(value) });
            if (this.state.isValid) {
                const detail = `${value}, Date.now: ${Date.now()}`;
                this.props.root.dispatchEvent(new CustomEvent('inputChange', { detail }));
            }
        }
    };

    render() {
        return (
            <div className="App">
                <div>
                    <label>{this.state.label}</label>
                    <input type="text" onKeyUp={this.handleKeyup}/>

                    <div className="line"></div>
                    <i className={this.state.isValid ? 'fas fa-check' : 'fas fa-times'}></i>
                </div>
            </div>
        );
    }
}

