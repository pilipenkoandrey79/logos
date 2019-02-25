import React, { Component, createRef } from 'react';

class List extends Component {
    constructor(props){
        super(props);

        this.state = { items: this.props.items };

        this.inputField = createRef();

        this.addItem = this.addItem.bind(this);
    }

    addItem() {
        const inputField = this.inputField.current;

        if (!inputField || !inputField.value) {
            return;
        }

        const { items } = this.state;

        items.push({ label: inputField.value });

        this.setState({ items });
        inputField.value = null;
    }

    render() {
        const { items } = this.state;

       return (
        <div>
            <ul>
                {
                    items.map((item, index) => <li key={index}>{item.label}</li>)
                }
            </ul>

            <input type="text" ref={this.inputField} />
            <button type="button" onClick={this.addItem}>Add</button>
        </div>
       );
    }
}

export default List;
