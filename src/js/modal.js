export default class Modal {
    constructor() {
        this.show = 'none';
        this.elementIdDOM = null;
    }
    bindToDOM(element) {
        if (!this.elementIdDOM) {
            this.elementIdDOM = element;
            const button = document.createElement('div');
            button.innerHTML = `<button data-id="close">Закрыть модалку</button>`
            button.addEventListener('click', () => {
                this.close();
            });
            this.elementIdDOM.append(button);
        }
    }
    open() {
        this.elementIdDOM.classList.remove('modal_close');
        this.elementIdDOM.classList.add('modal_open');
        this.bindToDOM();
    }
    close() {
        this.elementIdDOM.classList.remove('modal_open');
        this.elementIdDOM.classList.add('modal_close');
        this.bindToDOM();
    }
}