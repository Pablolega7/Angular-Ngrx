import { Component, OnInit } from '@angular/core';
import { AthService } from '../../services/ath.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor( private athservice: AthService) { }

  ngOnInit(): void {
  }

  register( email: string, password: string){

    this.athservice.register( { email,password })
  };

};
