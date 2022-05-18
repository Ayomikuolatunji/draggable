define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validate = void 0;
    function validate(validatableInput) {
        let isValid = true;
        if (validatableInput.required) {
            isValid = isValid && validatableInput.value.toString().trim().length !== 0;
        }
        if (validatableInput.minLength != null &&
            typeof validatableInput.value === 'string') {
            isValid =
                isValid && validatableInput.value.length >= validatableInput.minLength;
        }
        if (validatableInput.maxLength != null &&
            typeof validatableInput.value === 'string') {
            isValid =
                isValid && validatableInput.value.length <= validatableInput.maxLength;
        }
        if (validatableInput.min != null &&
            typeof validatableInput.value === 'number') {
            isValid = isValid && validatableInput.value >= validatableInput.min;
        }
        if (validatableInput.max != null &&
            typeof validatableInput.value === 'number') {
            isValid = isValid && validatableInput.value <= validatableInput.max;
        }
        return isValid;
    }
    exports.validate = validate;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQVVBLFNBQWdCLFFBQVEsQ0FBQyxnQkFBNkI7UUFDcEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1lBQzdCLE9BQU8sR0FBRyxPQUFPLElBQUksZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7U0FDNUU7UUFDRCxJQUNFLGdCQUFnQixDQUFDLFNBQVMsSUFBSSxJQUFJO1lBQ2xDLE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFDMUM7WUFDQSxPQUFPO2dCQUNMLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztTQUMxRTtRQUNELElBQ0UsZ0JBQWdCLENBQUMsU0FBUyxJQUFJLElBQUk7WUFDbEMsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUMxQztZQUNBLE9BQU87Z0JBQ0wsT0FBTyxJQUFJLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1NBQzFFO1FBQ0QsSUFDRSxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksSUFBSTtZQUM1QixPQUFPLGdCQUFnQixDQUFDLEtBQUssS0FBSyxRQUFRLEVBQzFDO1lBQ0EsT0FBTyxHQUFHLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLElBQUksZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1NBQ3JFO1FBQ0QsSUFDRSxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksSUFBSTtZQUM1QixPQUFPLGdCQUFnQixDQUFDLEtBQUssS0FBSyxRQUFRLEVBQzFDO1lBQ0EsT0FBTyxHQUFHLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLElBQUksZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1NBQ3JFO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQWhDRCw0QkFnQ0MifQ==