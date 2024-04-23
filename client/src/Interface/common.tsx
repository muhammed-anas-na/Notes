export interface Note {
    _id: string;
    heading: string;
    value: string;
    email: string;
}

export interface responseInterface {
    data: Note;
}

export interface EventInterface{
    target:{
        value: string   
    }
}