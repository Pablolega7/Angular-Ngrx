import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { from, of } from "rxjs";
import { switchMap, take, map, catchError } from "rxjs/operators";
import { MainState } from "src/app/main.reducer";
import { User } from "src/app/models/user.models";
import { AthService } from '../../services/ath.service';
import { getUserdata, getUserDataError, getUserDataSucces, login, loginError } from './user.actions';


@Injectable()

export class UserEffects{


    constructor(
        private athservice: AthService,
        private actions$  : Actions,
        private router    : Router,
        private store     : Store<MainState>
    ){}


    userLogin$ = createEffect(()=>
    this.actions$.pipe(
      ofType( login ),
      switchMap( ({credentials}) =>  from(this.athservice.login(credentials.email, credentials.password)).pipe(
        take(1),
        map(
          ({user}) => {
            this.router.navigate(['/home']);
            return getUserdata({id:user.uid})
          }),
        catchError(error => of(loginError({ error })))
    ))
    ));

    getUserData$ = createEffect(()=>
     this.actions$.pipe(
       ofType( getUserdata ),
       switchMap( ({ id }) =>  from(this.athservice.getUserData( id )).pipe(
        take(1),
        map( ({name, surname, email, img, birthDay, id}) => getUserDataSucces({user: new User( email, name, surname, img, birthDay, id )}) ),
         catchError(error => of(getUserDataError({ error })))
      )
     )
    )
 );
 
}


