/**
 * підключення функцій з пакету react:
 * React - обробка JSX
 * Component - базовий класс для побудови компонента
 * createRef - функція для створення посилання.
 *          Це react-підхід для того, щоб мати можливість з коду якогось методу компонента звернутись до
 *          HTML елементу, який створений в функції render
 * 
 * */ 
import React, { Component, createRef } from 'react';

/**
 * пвдключаємо таблицю стилів
 */
import './List.css';

class List extends Component {

    /**
     * конструктор компонента. Викликається лише один, перший раз, перед тим як компонент мє зʼявитись на сторінці.
     * @param {Object} props - пропси, що передаються ззовні
     */
    constructor(props){
        super(props);

        /**
         * ініціалізація стану компоненту. Якщо ви плануєте зберігати (та змінювати) щось в стані компоненту, маєте тут описати
         * складові частини стану та надати їм початкове значення
         */
        this.state = {
            items: this.props.items,
            active: null,
        };

        /**
         * створюємо посилання, та записуємо його в поле класу нашого компонента
         */
        this.inputField = createRef();

        /**
         * особливістю JS є втрата контексту методами класу, якщо вони є callback'ами - обробникаи подій, промісів, тощо.
         * Тут ми привʼязуємо контекст явним чином.
         */
        this.addItem = this.addItem.bind(this);
        this.delItem = this.delItem.bind(this);
    }

    /**
     * Метод, де ми додаємо новий елемент до списку
     */
    addItem() {
        const inputField = this.inputField.current;

        if (!inputField || !inputField.value) {
            return;
        }

        /**
         * 1. Копіюємо зі стану змінну, яку хочему змінити.
         */
        const { items } = this.state;
        /** вираховуємо максимальне наявне значення id */
        const maxId = items.reduce((max, item) => { return item.id > max ? item.id : max; }, 0);

        /**
         * 2. Змінюємо змінну, яку хочемо перезаписати в стані
         */
        items.push({ label: inputField.value, id: (maxId + 1) });

        /**
         * 3. Записуємо змінену змінну в стан поверх старої
         */
        this.setState({ items });
        inputField.value = null;
    }

    /**
     * Метод для видалення елементу зі списку по його id
     * 
     * @param {Integer} id 
     */
    delItem(id) {
        /**
         * Ті самі 3 стадії роботи зі станом, що і в фцнкції addItem()
         */
        const { items } = this.state;
        const indexToDel = items.findIndex(item => item.id === id);

        if (indexToDel >= 0) {
            items.splice(indexToDel, 1);
        }

        this.setState({ items });
    }

    /**
     * головна функція відмальовки компоненту
     */
    render() {
        const { items, active } = this.state;

        return (
            <div className="editable-list">
                <div className="input-group">
                    <input type="text" className="form-control" ref={this.inputField} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.addItem}>Add</button>
                    </div>
                </div>
                <ul className="list-group">
                {
                    items.map(item => (
                        <li
                            className={`list-group-item${active === item.id ? ' active' : ''}`}
                            key={item.id}
                            onClick={e => this.setState({ active: item.id })}
                        >
                            <span>
                                {item.label}
                                <button onClick={e => this.delItem(item.id)}>&#x2715;</button>
                            </span>
                        </li>)
                    )
                }
                </ul>
            </div>
        );
    }
}

export default List;
