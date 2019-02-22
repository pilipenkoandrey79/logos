import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props);

        console.log(props);
    }

    render() {
       return (<ul>
           {
               this.props.items.map(item => <li key={Math.round(Math.random() * 100)}>{item.label}</li>)
           }
       </ul>);
    }
}

export default List;
