var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../models/project", "./base-component", "../decorators/autobind", "../state/project-state", "./project-item"], function (require, exports, project_1, base_component_1, autobind_1, project_state_1, project_item_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProjectList = void 0;
    base_component_1 = __importDefault(base_component_1);
    // ProjectList Class
    class ProjectList extends base_component_1.default {
        constructor(type) {
            super('project-list', 'app', false, `${type}-projects`);
            this.type = type;
            this.assignedProjects = [];
            this.configure();
            this.renderContent();
        }
        dragOverHandler(event) {
            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                event.preventDefault();
                const listEl = this.element.querySelector('ul');
                listEl.classList.add('droppable');
            }
        }
        dropHandler(event) {
            const prjId = event.dataTransfer.getData('text/plain');
            project_state_1.projectState.moveProject(prjId, this.type === 'active' ? project_1.ProjectStatus.Active : project_1.ProjectStatus.Finished);
        }
        dragLeaveHandler(_) {
            const listEl = this.element.querySelector('ul');
            listEl.classList.remove('droppable');
        }
        configure() {
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('dragleave', this.dragLeaveHandler);
            this.element.addEventListener('drop', this.dropHandler);
            project_state_1.projectState.addListener((projects) => {
                const relevantProjects = projects.filter(prj => {
                    if (this.type === 'active') {
                        return prj.status === project_1.ProjectStatus.Active;
                    }
                    return prj.status === project_1.ProjectStatus.Finished;
                });
                this.assignedProjects = relevantProjects;
                this.renderProjects();
            });
        }
        renderContent() {
            const listId = `${this.type}-projects-list`;
            this.element.querySelector('ul').id = listId;
            this.element.querySelector('h2').textContent =
                this.type.toUpperCase() + ' PROJECTS';
        }
        renderProjects() {
            const listEl = document.getElementById(`${this.type}-projects-list`);
            listEl.innerHTML = '';
            for (const prjItem of this.assignedProjects) {
                new project_item_1.ProjectItem(this.element.querySelector('ul').id, prjItem);
            }
        }
    }
    __decorate([
        autobind_1.autobind
    ], ProjectList.prototype, "dragOverHandler", null);
    __decorate([
        autobind_1.autobind
    ], ProjectList.prototype, "dropHandler", null);
    __decorate([
        autobind_1.autobind
    ], ProjectList.prototype, "dragLeaveHandler", null);
    exports.ProjectList = ProjectList;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdC1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBT0Esb0JBQW9CO0lBQ3BCLE1BQWEsV0FBWSxTQUFRLHdCQUFzQztRQUlyRSxZQUFvQixJQUEyQjtZQUM3QyxLQUFLLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDO1lBRHRDLFNBQUksR0FBSixJQUFJLENBQXVCO1lBRTdDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFFM0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBR0QsZUFBZSxDQUFDLEtBQWdCO1lBQzlCLElBQUksS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxZQUFZLEVBQUU7Z0JBQ3RFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLENBQUM7Z0JBQ2pELE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQztRQUdELFdBQVcsQ0FBQyxLQUFnQjtZQUMxQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsWUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4RCw0QkFBWSxDQUFDLFdBQVcsQ0FDdEIsS0FBSyxFQUNMLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyx1QkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsdUJBQWEsQ0FBQyxRQUFRLENBQ3ZFLENBQUM7UUFDSixDQUFDO1FBR0QsZ0JBQWdCLENBQUMsQ0FBWTtZQUMzQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUUsQ0FBQztZQUNqRCxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsU0FBUztZQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFeEQsNEJBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFtQixFQUFFLEVBQUU7Z0JBQy9DLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDN0MsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTt3QkFDMUIsT0FBTyxHQUFHLENBQUMsTUFBTSxLQUFLLHVCQUFhLENBQUMsTUFBTSxDQUFDO3FCQUM1QztvQkFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLEtBQUssdUJBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDekMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELGFBQWE7WUFDWCxNQUFNLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLENBQUMsV0FBVztnQkFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxXQUFXLENBQUM7UUFDMUMsQ0FBQztRQUVPLGNBQWM7WUFDcEIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDcEMsR0FBRyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FDUixDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMzQyxJQUFJLDBCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2hFO1FBQ0gsQ0FBQztLQUNGO0lBeERDO1FBREMsbUJBQVE7c0RBT1I7SUFHRDtRQURDLG1CQUFRO2tEQU9SO0lBR0Q7UUFEQyxtQkFBUTt1REFJUjtJQWxDSCxrQ0FxRUMifQ==