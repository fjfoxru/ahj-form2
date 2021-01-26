import Item from './item';

export default class Items {
    constructor() {
        this.items = [];
        this.elementInDOM = null;
    }
    addItem(name, price, editForm) {
        this.items.push(new Item(name, price, this.items, editForm));
        this.updateDOM();
    }
    bindToDOM(parent) {
        const elementInDOM = document.createElement('div');
        parent.appendChild(elementInDOM);
        this.elementInDOM = elementInDOM;
    }
    bindItemsToDOM(list = this.elementInDOM) {
        this.items.forEach(el => {
            el.bindToDOM(list);
        });
    }
    updateDOM() {
        this.elementInDOM.innerHTML = ``;
        this.bindItemsToDOM();
    }
}