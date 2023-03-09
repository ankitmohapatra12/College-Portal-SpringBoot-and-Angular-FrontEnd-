import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.module';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-admin-profile',
  templateUrl: './edit-admin-profile.component.html',
  styleUrls: ['./edit-admin-profile.component.css']
})
export class EditAdminProfileComponent implements OnInit{

  user:User = {
    id:0,
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    address:'',
    pincode:'',
    secretQuestion:'',
    secretAnswer:'',
    enabled:true
  }

  constructor(public login:LoginService,public userService:UserService,private snackbar:MatSnackBar,private router:Router){}
  ngOnInit(): void {
    this.user.id = this.login.getUser().id;
   this.user.username = this.login.getUser().username;
   this.user.firstName = this.login.getUser().firstName;
   this.user.lastName = this.login.getUser().lastName;
   this.user.email = this.login.getUser().email;
   this.user.phone = this.login.getUser().phone;
  }
  

  updateUserData(){
    
    this.userService.updateUser(this.user).subscribe(
      
      (data:any)=>{
        console.log(data);
        Swal.fire(data.username+' Updated Successfully !','Success');
        this.login.getCurrentUser().subscribe(
          (user:any) => { 
            this.login.setUser(user); 
            console.log(JSON.stringify(user));
            window.location.reload();
          })
        this.doReset();
      },
      (error) => {
        console.log(error);
        Swal.fire('Something went wrong !','Error');
      }
    )
  }

  doReset(this: any){
    this.user.email='',
    this.user.firstName='',
    this.user.lastName='';
    this.user.password='';
    this.user.phone='';
    this.user.username='';
  }
  


}
