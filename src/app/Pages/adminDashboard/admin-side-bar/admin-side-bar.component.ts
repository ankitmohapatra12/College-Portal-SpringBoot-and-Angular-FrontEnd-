import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent implements OnInit {


  constructor(private login:LoginService){}

  ngOnInit(): void {
    
  }

  logout(){
    this.login.logout();
    window.location.reload();
  }

}
