define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.autobind = void 0;
    // autobind decorator
    function autobind(_, _2, descriptor) {
        const originalMethod = descriptor.value;
        const adjDescriptor = {
            configurable: true,
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            }
        };
        return adjDescriptor;
    }
    exports.autobind = autobind;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2JpbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRvYmluZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBQUEscUJBQXFCO0lBQ3JCLFNBQWdCLFFBQVEsQ0FBQyxDQUFNLEVBQUUsRUFBVSxFQUFFLFVBQThCO1FBQ3pFLE1BQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDeEMsTUFBTSxhQUFhLEdBQXVCO1lBQ3hDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLEdBQUc7Z0JBQ0QsTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQztTQUNGLENBQUM7UUFDRixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBVkQsNEJBVUMifQ==