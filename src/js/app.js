import Items from './items';
import Form from './form';
import Modal from './modal';

const itemListContainer = document.querySelector('[data-section=item-list]');
const itemForm = document.querySelector('[data-section=item-form]');
const modalContainer = document.querySelector('[data-section=modal]');
const button = document.querySelector('[data-section=item-button]');
const items = new Items();
const form = new Form('', '', items);
const modal = new Modal();
modal.bindToDOM(modalContainer);
form.bindToDOM(itemForm);
items.bindToDOM(itemListContainer);
items.bindItemsToDOM();
button.addEventListener('click', evt => {
    evt.preventDefault();
    modal.open();
});
// Тестовые данные
items.addItem('Товар 1', '10 000', form);
items.addItem('Товар 2', '2 000', form);
items.addItem('Товар 3', '500', form);
items.addItem('Товар 4', '12 000', form);
items.addItem('Товар 5', '7 500', form);
// Тестовые данные