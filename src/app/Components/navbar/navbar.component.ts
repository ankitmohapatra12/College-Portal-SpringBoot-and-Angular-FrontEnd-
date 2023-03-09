import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { SidenavComponent } from '../sidenav/sidenav.component'
import { OnInit } from '@angular/core';
import { Token } from '@angular/compiler';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn= false;
  user=null;
  firstName='';
  lastName='';
  examStart:any

  
  

  constructor(public login : LoginService){
  }
  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.examStart  = localStorage.getItem('test');
    this.user = this.login.getUser();
    this.firstName = this.login.getUser().firstName;
    this.lastName = this.login.getUser().lastName;
    console.log(this.isLoggedIn+"\n"+this.user+"\n"+this.firstName)
    
  }

  public logout(){
    this.login.logout();
    console.log(localStorage);
    window.location.reload();
  }
}
