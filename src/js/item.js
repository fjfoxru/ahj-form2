import { nanoid } from 'nanoid';

export default class Item {
    constructor(name, price, parentArray, editForm) {
        this.id = nanoid();
        this.name = name;
        this.price = price;
        this.elementInDOM = null;
        this.parentArray = parentArray;
        this.parentEl = null;
        this.editForm = editForm;
    }

    get selectorDelete() {
        return '[data-id=button-delete]';
    }
    get selectorEdit() {
        return '[data-id=button-edit]';
    }

    get markup() {
        return `
        <div>${this.name}</div>
        <div>${this.price}</div>
        <div><button data-id="button-edit">Редактировать</button><button data-id="button-delete">Удалить</button></div>
        
        `;
    }
    bindToDOM(parent) {
        this.parentEl = parent;
        const elementInDOM = document.createElement('div');
        elementInDOM.innerHTML = this.markup;
        this.elementInDOM = elementInDOM;
        parent.appendChild(this.elementInDOM);
        const selectorDelete = this.elementInDOM.querySelector(this.selectorDelete);
        selectorDelete.addEventListener('click', () => this.deleteItem());
        const selectorEdit = this.elementInDOM.querySelector(this.selectorEdit);
        selectorEdit.addEventListener('click', () => this.editItem());
    }
    updateDOM() {
        this.elementInDOM.innerHTML = this.markup;
    }
    deleteItem() {
        this.parentArray.splice(this.id, 1);
        this.parentEl.removeChild(this.elementInDOM);
    }
    editItem() {
        this.editForm.onEdit(this);
    }
}