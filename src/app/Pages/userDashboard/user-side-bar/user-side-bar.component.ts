import { Component,OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.css']
})
export class UserSideBarComponent implements OnInit {

  categories:any;

  constructor(private cat:CategoryService,private login:LoginService){}

  ngOnInit(): void {
    
    this.cat.categories().subscribe(
      (data:any) =>{
        this.categories = data;
        console.log(this.categories)
      },
      (error) => {
        Swal.fire('Error','Failed to load Categories !!','error')
      }
    )
  }
  logout(){
    this.login.logout();
    window.location.reload();
  }

}
