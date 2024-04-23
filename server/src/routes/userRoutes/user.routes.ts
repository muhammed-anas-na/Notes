import express from 'express'
import userController from '../../libs/controller/userController';


export default (dependencies: any)=>{
    const router = express.Router();

    const {
        createPost_controller,
        createAccount_controller,
        getUserNotes_controller,
        getNoteData_controller,
        updateNote_controller,
    } = userController(dependencies);

    router.get('/get-user-notes' , getUserNotes_controller)
    router.get('/get-note-data/:noteId' , getNoteData_controller)
    
    router.post('/create-post' , createPost_controller)
    router.post('/create-account' , createAccount_controller)

    router.put('/update-note' , updateNote_controller)
    

    return router;
}