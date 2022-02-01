

export interface UserModel {

    name    : string,
    surname : string,
    email   : string,
    img     : string,
    birthDay: string,
    id      : string
};

export class User implements UserModel {

    constructor(
        public email   : string, 
        public name    : string, 
        public id      : string, 
        public surname : string, 
        public birthDay: string, 
        public img     : string
    ){}
};