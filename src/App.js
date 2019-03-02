import React, { Component } from 'react';

import List from './List';

const items = [
    { label: 'item1', id: 7 },
    { label: 'item2', id: 9 },
    { label: 'item3', id: 12 },
    { label: 'item4', id: 78 },
    { label: 'item5', id: 2 },
    { label: 'item6', id: 33 },
];

class App extends Component {
    render() {
        return <List items={items} />
    }
}

export default App;
