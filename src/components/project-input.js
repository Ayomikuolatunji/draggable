var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./base-component", "../util/validation", "../decorators/autobind", "../state/project-state"], function (require, exports, base_component_1, Validation, autobind_1, project_state_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProjectInput = void 0;
    base_component_1 = __importDefault(base_component_1);
    Validation = __importStar(Validation);
    // ProjectInput Class
    class ProjectInput extends base_component_1.default {
        constructor() {
            super('project-input', 'app', true, 'user-input');
            this.titleInputElement = this.element.querySelector('#title');
            this.descriptionInputElement = this.element.querySelector('#description');
            this.peopleInputElement = this.element.querySelector('#people');
            this.configure();
        }
        configure() {
            this.element.addEventListener('submit', this.submitHandler);
        }
        renderContent() { }
        gatherUserInput() {
            const enteredTitle = this.titleInputElement.value;
            const enteredDescription = this.descriptionInputElement.value;
            const enteredPeople = this.peopleInputElement.value;
            const titleValidatable = {
                value: enteredTitle,
                required: true
            };
            const descriptionValidatable = {
                value: enteredDescription,
                required: true,
                minLength: 5
            };
            const peopleValidatable = {
                value: +enteredPeople,
                required: true,
                min: 1,
                max: 5
            };
            if (!Validation.validate(titleValidatable) ||
                !Validation.validate(descriptionValidatable) ||
                !Validation.validate(peopleValidatable)) {
                alert('Invalid input, please try again!');
                return;
            }
            else {
                return [enteredTitle, enteredDescription, +enteredPeople];
            }
        }
        clearInputs() {
            this.titleInputElement.value = '';
            this.descriptionInputElement.value = '';
            this.peopleInputElement.value = '';
        }
        submitHandler(event) {
            event.preventDefault();
            const userInput = this.gatherUserInput();
            if (Array.isArray(userInput)) {
                const [title, desc, people] = userInput;
                project_state_1.projectState.addProject(title, desc, people);
                this.clearInputs();
            }
        }
    }
    __decorate([
        autobind_1.autobind
    ], ProjectInput.prototype, "submitHandler", null);
    exports.ProjectInput = ProjectInput;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2plY3QtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLQSxxQkFBcUI7SUFDckIsTUFBYSxZQUFhLFNBQVEsd0JBQW9DO1FBS3BFO1lBQ0UsS0FBSyxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDakQsUUFBUSxDQUNXLENBQUM7WUFDdEIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUN2RCxjQUFjLENBQ0ssQ0FBQztZQUN0QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ2xELFNBQVMsQ0FDVSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBRUQsU0FBUztZQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBRUQsYUFBYSxLQUFJLENBQUM7UUFFVixlQUFlO1lBQ3JCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFDbEQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDO1lBQzlELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFFcEQsTUFBTSxnQkFBZ0IsR0FBMkI7Z0JBQy9DLEtBQUssRUFBRSxZQUFZO2dCQUNuQixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUM7WUFDRixNQUFNLHNCQUFzQixHQUEyQjtnQkFDckQsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDO1lBQ0YsTUFBTSxpQkFBaUIsR0FBMkI7Z0JBQ2hELEtBQUssRUFBRSxDQUFDLGFBQWE7Z0JBQ3JCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxDQUFDO2FBQ1AsQ0FBQztZQUVGLElBQ0UsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO2dCQUN0QyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7Z0JBQzVDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUN2QztnQkFDQSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztnQkFDMUMsT0FBTzthQUNSO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMzRDtRQUNILENBQUM7UUFFTyxXQUFXO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLENBQUM7UUFHTyxhQUFhLENBQUMsS0FBWTtZQUNoQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDNUIsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUN4Qyw0QkFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDcEI7UUFDSCxDQUFDO0tBQ0Y7SUFUQztRQURDLG1CQUFRO3FEQVNSO0lBekVILG9DQTBFQyJ9