define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Project = exports.ProjectStatus = void 0;
    var ProjectStatus;
    (function (ProjectStatus) {
        ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
        ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
    })(ProjectStatus = exports.ProjectStatus || (exports.ProjectStatus = {}));
    class Project {
        constructor(id, title, description, people, status) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.people = people;
            this.status = status;
        }
    }
    exports.Project = Project;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQUFBLElBQVksYUFHWDtJQUhELFdBQVksYUFBYTtRQUN2QixxREFBTSxDQUFBO1FBQ04seURBQVEsQ0FBQTtJQUNWLENBQUMsRUFIVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUd4QjtJQUVELE1BQWEsT0FBTztRQUNsQixZQUNTLEVBQVUsRUFDVixLQUFhLEVBQ2IsV0FBbUIsRUFDbkIsTUFBYyxFQUNkLE1BQXFCO1lBSnJCLE9BQUUsR0FBRixFQUFFLENBQVE7WUFDVixVQUFLLEdBQUwsS0FBSyxDQUFRO1lBQ2IsZ0JBQVcsR0FBWCxXQUFXLENBQVE7WUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUNkLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDM0IsQ0FBQztLQUNMO0lBUkQsMEJBUUMifQ==