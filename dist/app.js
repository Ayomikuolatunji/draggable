"use strict";
class projectInput {
    constructor() {
        this.templateElement = document.querySelector("#project-input");
        this.hostElement = document.querySelector("#app");
        const importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild;
        //  input element
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}
const project = new projectInput();
