import createPost_controller from "./createPost_controller";
import createAccount_controller from "./createAccount_controller";
import getUserNotes_controller from "./getUserNotes_controller";
import getNoteData_controller from "./getNoteData_controller";
import updateNote_controller from "./updateNote_controller";

export default (dependencies: any)=>{
    return {
        createPost_controller: createPost_controller(dependencies),
        createAccount_controller:createAccount_controller(dependencies),
        getUserNotes_controller:getUserNotes_controller(dependencies),
        getNoteData_controller:getNoteData_controller(dependencies),
        updateNote_controller:updateNote_controller(dependencies),
    }
}