import { Component, OnInit } from '@angular/core';
import { AttachSession } from 'protractor/built/driverProviders';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  //   if (this.authService.isTokenExpired()){
  //     this.authService.logout();
  //   }
 }

}
