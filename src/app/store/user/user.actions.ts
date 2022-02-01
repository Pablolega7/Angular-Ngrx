import { createAction, props } from "@ngrx/store";
import { CredentialsModel } from '../../models/credentials.models';
import { UserModel } from '../../models/user.models';


export enum Types {

    //LOGIN//
    LOGIN         = '[User State], login',
    LOGIN_SUCCESS = '[User State], login: Success',
    LOGIN_ERROR   = '[User State], login: Error',

    //LOGOUT//
    LOGOUT         = '[User State], logout',
    LOGOUT_SUCCESS = '[User State], logout: Success',
    LOGOUT_ERROR   = '[User State], logout: Error',

    //REGISTER//
    REGISTER         = '[User State], regiser',
    REGISTER_SUCCESS = '[User State], regiser: Success',
    REGISTER_ERROR   = '[User State], regiser: Error',

    //SET USER DATA//

    SETUSER_DATA         = '[User State], setUserData',
    SETUSER_DATA_SUCCESS = '[User State], setUserData: Success',
    SETUSER_DATA_ERROR   = '[User State], setUserData: Error'
};

//LOGIN//
export const login       = createAction( Types.LOGIN, props<{credentials:CredentialsModel}>());
export const loginSuccess = createAction( Types.LOGIN_SUCCESS, props<{ user:UserModel }>());
export const loginError  = createAction( Types.LOGIN_ERROR, props<{ error:any }>());

//LOGOUT//
export const logout       = createAction( Types.LOGOUT);
export const logoutSuccess = createAction( Types.LOGOUT_SUCCESS,);
export const logoutError  = createAction( Types.LOGOUT_ERROR, props<{ error:any }>());

//REGISTER//
export const register       = createAction( Types.REGISTER, props<{ credentials: CredentialsModel }>());
export const registerSuccess = createAction( Types.REGISTER_SUCCESS);
export const registerError  = createAction( Types.REGISTER_ERROR, props<{ error:any }>());

//SET USER DATA//
export const setUserdata       = createAction( Types.SETUSER_DATA, props<{ user:UserModel }>());
export const setUserDataSucces = createAction( Types.SETUSER_DATA_SUCCESS);
export const setUserDataError  = createAction( Types.SETUSER_DATA_ERROR, props<{ error:any }>());