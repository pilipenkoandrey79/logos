import React, { Component } from 'react';

import './App.css';
import List from './List';

const items = [
    { label: 'item1', },
    { label: 'item2', },
    { label: 'item3', },
    { label: 'item4', },
    { label: 'item5', },
    { label: 'item6', },
];

// const App = () => <p>Hello, world! {
//     moment().format('LLL')
// }</p>;


// Functional component
//
// const App = function() {
//     return (<p>Hello, world! {
//         moment().format('LLL')
//     }</p>);
// };


class App extends Component {
    render() {
        return (
            <div>
                <List items={items} ordered={false} />
            </div>
        );
    }
}

export default App;
