import { Component, OnInit } from '@angular/core';
import { AthService } from '../../services/ath.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   public email: string = '';
   public password: string = '';


  constructor( private athservice: AthService) { }

  ngOnInit(): void {
  }

  login(){

    this.athservice.login( this.email, this.password)
  };
};
