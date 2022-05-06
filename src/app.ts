function autobind(
    _: any,
    _2: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      }
    };
    return adjDescriptor;
  }
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;
  

    constructor() {
      this.templateElement = document.getElementById(
        'project-input'
      )! as HTMLTemplateElement;
      this.hostElement = document.getElementById('app')! as HTMLDivElement;
  
      const importedNode = document.importNode(
        this.templateElement.content,
        true
      );
      this.element = importedNode.firstElementChild as HTMLFormElement;
      this.element.id = 'user-input';
  
      this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
      this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
      this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
  
      this.configure();
      this.attach();
    }
    @autobind
    private submitHandler(event: Event) {
      event.preventDefault();
      console.log(this.titleInputElement.value);
    }
    private gatherUserInput():[string,string,number] | undefined{
        const title=this.titleInputElement.value
        const description=this.descriptionInputElement.value
        const people=this.peopleInputElement.value
        if(title.trim().length===0 
        || description.trim.length===0 
        || people.trim().length===0){
          console.log("no input")
          return
        }else{
            return [title,description,+people]
        }
    }
    private configure() {
      this.element.addEventListener('submit', this.submitHandler);
      const userInput=this.gatherUserInput()
      if(Array.isArray(userInput)){
        [title,description,people]=userInput
      }
    }
  
    private attach() {
      this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
  }
  
  const prjInput = new ProjectInput();
  