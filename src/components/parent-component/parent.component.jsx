import React, { Component } from 'react';
import FunctionalComponent from '../functional-component/functional.component';
import MemoComponent from './../memo-component/memo.component';

class ParentComponent extends Component {
    state = { name: 'Devvrat' };
    intervalID = null;

    componentDidMount = () => {
        this.intervalID = setInterval(() => {
            this.setState({ name: 'Devvrat' });
            console.log('-----');
        }, 2000);
    };

    componentWillUnmount = () => {
        clearInterval(this.intervalID);
    };

    render() {
        console.log('ParentComponent rendered.');
        const { name } = this.state;

        return (
            <div>
                <span>Hi {name}, I am a stateful Parent Component.</span>
                <FunctionalComponent name={name} />
                <MemoComponent name={name} />
            </div>
        );
    }
}

export default ParentComponent;
