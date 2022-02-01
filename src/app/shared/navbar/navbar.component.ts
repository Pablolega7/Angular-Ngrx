import { Component, OnInit } from '@angular/core';
import { AthService } from '../../services/ath.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private athservice:AthService) { }

  ngOnInit(): void {
  }

  logout(){

    this.athservice.logout();
  };

}
