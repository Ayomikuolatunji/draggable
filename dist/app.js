"use strict";
class projectInput {
    constructor() {
        this.templateElement = document.querySelector("#project-input");
        this.hostElement = document.querySelector("#app");
        const importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild;
        this.element.id = "user_input";
        //  input element
        this.titleInputElement = document.querySelector("#title");
        this.descInputElement = document.querySelector("#description");
        this.poepleInputElement = document.querySelector("people");
        this.configure();
        this.attach();
    }
    submitHandler(event) {
        event.preventDefault();
        console.log("first");
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}
const project = new projectInput();
