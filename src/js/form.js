export default class Form {
    constructor(name = '', price = '', array) {
        this.name = name;
        this.price = price;
        this.elementInDOM = null;
        this.id = null;
        this.parent = null;
        this.forArray = array;
        this.editItem = null;
    }
    get markup() {
        return `
        <label>
            <input data-id="name" name="filter-text" class="input" value="${this.name}">
        </label>
        <label>
            <input data-id="price" name="filter-text" class="input" value="${this.price}">
        </label>
        <button data-id="button" class="btn">Ok</button>
        `;
    }
    bindToDOM(parent = this.parent) {
        this.parent = parent;
        let element;
        if (!this.elementInDOM) {
            element = document.createElement('div');
            element.innerHTML = this.markup;
            parent.appendChild(element);
            this.elementInDOM = element;
        }
        this.elementInDOM.innerHTML = this.markup;
        const nameInput = this.elementInDOM.querySelector('[data-id="name"]');
        nameInput.addEventListener('input', (evt) => this.onInputName(evt));
        const priceInput = this.elementInDOM.querySelector('[data-id="price"]');
        priceInput.addEventListener('input', (evt) => this.onInputPrice(evt));
        const buttonInput = this.elementInDOM.querySelector('[data-id="button"]');
        buttonInput.addEventListener('click', (evt) => this.onButton(evt));
    }
    onInputName(evt) {
        this.name = evt.target.value;
    }
    onInputPrice(evt) {
        this.price = evt.target.value;
    }
    onButton(evt) {
        evt.preventDefault();
        if (this.editItem) {
            this.editItem.name = this.name;
            this.editItem.price = this.price;
            this.editItem.updateDOM();
            this.editItem = null;
            this.name = '';
            this.price = '';
            this.bindToDOM();
        } else {
            this.forArray.addItem(this.name, this.price, this);
            
        }
    }
    onEdit(item) {
        this.editItem = item;
        this.name = item.name;
        this.price = item.price;
        this.bindToDOM();
    }

}