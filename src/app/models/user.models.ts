

export interface UserModel {

    name    : string,
    surname : string,
    email   : string,
    img     : string,
    birthDay: string,
    id      : string
};

export class User implements UserModel {

    surname : string = '';
    birthDay: string = '';
    img     : string = '';

    constructor(
        public email: string, public name: string, public id: string
    ){}
};