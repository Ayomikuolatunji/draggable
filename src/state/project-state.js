define(["require", "exports", "../models/project"], function (require, exports, project_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.projectState = exports.ProjectState = void 0;
    class State {
        constructor() {
            this.listeners = [];
        }
        addListener(listenerFn) {
            this.listeners.push(listenerFn);
        }
    }
    class ProjectState extends State {
        constructor() {
            super();
            this.projects = [];
        }
        static getInstance() {
            if (this.instance) {
                return this.instance;
            }
            this.instance = new ProjectState();
            return this.instance;
        }
        addProject(title, description, numOfPeople) {
            const newProject = new project_1.Project(Math.random().toString(), title, description, numOfPeople, project_1.ProjectStatus.Active);
            this.projects.push(newProject);
            this.updateListeners();
        }
        moveProject(projectId, newStatus) {
            const project = this.projects.find(prj => prj.id === projectId);
            if (project && project.status !== newStatus) {
                project.status = newStatus;
                this.updateListeners();
            }
        }
        updateListeners() {
            for (const listenerFn of this.listeners) {
                listenerFn(this.projects.slice());
            }
        }
    }
    exports.ProjectState = ProjectState;
    exports.projectState = ProjectState.getInstance();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2plY3Qtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQUtBLE1BQU0sS0FBSztRQUFYO1lBQ1ksY0FBUyxHQUFrQixFQUFFLENBQUM7UUFLMUMsQ0FBQztRQUhDLFdBQVcsQ0FBQyxVQUF1QjtZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxDQUFDO0tBQ0Y7SUFFRCxNQUFhLFlBQWEsU0FBUSxLQUFjO1FBSTlDO1lBQ0UsS0FBSyxFQUFFLENBQUM7WUFKRixhQUFRLEdBQWMsRUFBRSxDQUFDO1FBS2pDLENBQUM7UUFFRCxNQUFNLENBQUMsV0FBVztZQUNoQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0QjtZQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQztRQUVELFVBQVUsQ0FBQyxLQUFhLEVBQUUsV0FBbUIsRUFBRSxXQUFtQjtZQUNoRSxNQUFNLFVBQVUsR0FBRyxJQUFJLGlCQUFPLENBQzVCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDeEIsS0FBSyxFQUNMLFdBQVcsRUFDWCxXQUFXLEVBQ1gsdUJBQWEsQ0FBQyxNQUFNLENBQ3JCLENBQUM7WUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUVELFdBQVcsQ0FBQyxTQUFpQixFQUFFLFNBQXdCO1lBQ3JELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxTQUFTLENBQUMsQ0FBQztZQUNoRSxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtRQUNILENBQUM7UUFFTyxlQUFlO1lBQ3JCLEtBQUssTUFBTSxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDdkMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUNuQztRQUNILENBQUM7S0FDRjtJQXpDRCxvQ0F5Q0M7SUFFWSxRQUFBLFlBQVksR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMifQ==