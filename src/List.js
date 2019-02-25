import React, { Component, createRef } from 'react';

class List extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: this.props.items
        };

        this.inputRef = createRef();

        this.addItem = this.addItem.bind(this);
    }

    addItem() {
        const {items} = this.state;
        items.push({ label: this.inputRef.current.value })

        this.setState({ items });
    }

    render() {
       const { items } = this.state;

       return (
        <div className="list">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    ref={this.inputRef}
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={this.addItem}
                >
                    Add Item
                </button>
            </div>
            
            <ul className="list-group">
            {
                items.map((item, i) => (
                <li
                    key={i}
                    className="list-group-item"
                >
                    {item.label}
                </li>
                ))
            }
            </ul>
        </div>
       );
    }
}

export default List;
