import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-profiledetailsadmin',
  templateUrl: './profiledetailsadmin.component.html',
  styleUrls: ['./profiledetailsadmin.component.css']
})
export class ProfiledetailsadminComponent {

  constructor(public login:LoginService){}
}
