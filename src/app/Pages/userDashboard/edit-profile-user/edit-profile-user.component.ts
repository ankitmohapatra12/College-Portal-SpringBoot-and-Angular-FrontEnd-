import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.module';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile-user',
  templateUrl: './edit-profile-user.component.html',
  styleUrls: ['./edit-profile-user.component.css']
})
export class EditProfileUserComponent {
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
   this.user.address = this.login.getUser().address;
   this.user.pincode = this.login.getUser().pincode;
   this.user.secretQuestion = this.login.getUser().secretQuestion;
   this.user.secretAnswer = this.login.getUser().secretAnswer;
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
