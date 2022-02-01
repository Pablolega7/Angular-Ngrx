import { UserModel } from '../../models/user.models';


export interface UserState {

    user   : UserModel| null,
    loading: boolean,
    error  : any
};

export const InitialState: UserState = {

    user   : null,
    loading: false,
    error  : null
};