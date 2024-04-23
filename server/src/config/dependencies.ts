import {
    createPost_usecase,
    createAccount_usecase,
    getUserNotes_usecase,
    updateNotes_usecase,
} from './../libs/useCases';


import postRepository from '../app/Database/mongodb/repositories/postRepository';
import userRepository from '../app/Database/mongodb/repositories/userRepository';

const useCases: any = {
    createPost_usecase,
    createAccount_usecase,
    getUserNotes_usecase,
    updateNotes_usecase,
}

const repositories: any = {
    postRepository,
    userRepository,
}

export default {useCases , repositories};