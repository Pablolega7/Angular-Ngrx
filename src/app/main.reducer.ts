import { ActionReducerMap } from '@ngrx/store';
import { UserStateReducer } from './store/user/user.reducers';
import { UserState } from './store/user/user.state';


export interface MainState {

    userState: UserState
};

export const MAIN_REDUCER: ActionReducerMap<MainState> = {

    userState: UserStateReducer
};