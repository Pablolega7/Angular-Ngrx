import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from 'src/app/main.reducer';
import { Credentials } from 'src/app/models/credentials.models';
import { login } from 'src/app/store/user/user.actions';
// import { AthService } from '../../services/ath.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   public email: string = '';
   public password: string = '';


  constructor( 
    // private athservice: AthService,
    private store     : Store<MainState>) { }

  ngOnInit(): void {
  }

  login(){

    // this.athservice.login( this.email, this.password);
    this.store.dispatch(login({ credentials: new Credentials( this.email, this.password ) }))
  };
};
