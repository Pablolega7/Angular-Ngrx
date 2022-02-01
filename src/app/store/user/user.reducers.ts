import { createReducer, on } from "@ngrx/store";
import { login, loginError, loginSuccess, logout, register, registerSuccess, registerError, getUserdata, getUserDataSucces, getUserDataError, setUserdata, setUserDataSucces, setUserDataError } from './user.actions';
import { InitialState, UserState } from './user.state';


export const UserStateReducer = createReducer(
    
    InitialState,

    //LOGIN//
    on( login, (state: UserState, { credentials }) => ({

        ...state,
        loading: true
    })),

    on( loginSuccess, (state: UserState, { user }) => ({

        ...state,
        loading: false,
        user
    })),

    on(loginError, ( state: UserState, { error }) => ({

        ...state,
        loading: false,
        error
    })),

    //LOGOUT//
    on( logout, (state:UserState) => ({
        ...state,
        user   : null,
        loading: false
    })),

    //REGISTER//
    on( register, ( state: UserState, { credentials}) => ({

        ...state,
        loading: true
    })),

    on(registerSuccess, ( state: UserState ) => ({

        ...state,
        loading: false,
    })),

    on( registerError, ( state: UserState, { error}) => ({

        ...state,
        loading:false,
        error
    })),

    //GET USER DATA//
    on( getUserdata, ( state: UserState, { id }) => ({

        ...state,
        loading: true,
        id
    })),

    on( getUserDataSucces, ( state: UserState, { user } ) => ({

        ...state,
        loading: false,
        user
    })),

    on( getUserDataError, ( state: UserState, { error}) => ({

        ...state,
        loading:false,
        error
    })),

    //SET USER DATA//
    on( setUserdata, ( state: UserState, { user }) => ({

        ...state,
        loading: true
    })),

    on( setUserDataSucces, ( state: UserState ) => ({

        ...state,
        loading: false
    })),

    on( setUserDataError, ( state: UserState, { error}) => ({

        ...state,
        loading:false,
        error
    })),


)