import { Component } from '@angular/core';
import { User } from 'src/app/Models/user.module';
import { LoginService } from 'src/app/Services/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  constructor(public login:LoginService){}

  public logout(){
    this.login.logout();
    console.log(localStorage);
    window.location.reload();
  }

}
