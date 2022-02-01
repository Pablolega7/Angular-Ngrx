

export interface CredentialsModel {

    email   : string,
    password: string
};

export class Credentials implements CredentialsModel {

    constructor(
        public email: string, public password: string
    ){}
};