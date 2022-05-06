class projectInput {
    templateElement:HTMLTemplateElement
    hostElement:HTMLDivElement
    element:HTMLFormElement
    titleInputElement:HTMLInputElement
    descInputElement:HTMLInputElement
    poepleInputElement:HTMLInputElement



    constructor(){
        this.templateElement=document.querySelector("#project-input")! as HTMLTemplateElement
        this.hostElement=document.querySelector("#app")! as HTMLDivElement

        const importNode=document.importNode(this.templateElement.content,true)
        this.element=importNode.firstElementChild as HTMLFormElement
        this.element.id="user_input"
        //  input element
        this.titleInputElement=document.querySelector("#title")! 
        this.descInputElement=document.querySelector("#description")!
        this.poepleInputElement=document.querySelector("people")!
 
        this.configure()
        this.attach()
    }
    private submitHandler(event:Event){
          event.preventDefault()
          console.log("first")
    }
    private configure(){
        this.element.addEventListener("submit", this.submitHandler)
    }

    private attach(){
        this.hostElement.insertAdjacentElement("afterbegin",this.element)
    }
}

const project=new projectInput()