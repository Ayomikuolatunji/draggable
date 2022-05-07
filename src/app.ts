/// <reference path="./model/drop-drap-interfaces.ts"/>
/// <reference path="./model/project-model.ts"/>
/// <reference path="./state/global-state.ts"/>
/// <reference path="./util/validate.ts"/>
/// <reference path="./model/autobind-decorator.ts"/>
/// <reference path="./components/base.ts"/>
/// <reference path="./components/project-item.ts"/>
/// <reference path="./components/Input.ts"/>
/// <reference path="./components/project-list.ts"/>




namespace App {


  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
      this.clearInputs();
    }
  }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');

}
