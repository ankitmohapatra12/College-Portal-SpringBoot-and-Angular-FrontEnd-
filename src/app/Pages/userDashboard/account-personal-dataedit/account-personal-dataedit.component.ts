import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.module';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-personal-dataedit',
  templateUrl: './account-personal-dataedit.component.html',
  styleUrls: ['./account-personal-dataedit.component.css']
})
export class AccountPersonalDataeditComponent implements OnInit{
 
  ngOnInit(): void {
    this.isVerified=false;
    this.user.id = this.login.getUser().id;
    if(this.login.getUser==null){
      Swal.fire("Please login again !!")
      
      window.location.reload();
    }
  }


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
  isVerified:boolean=false


  constructor(public login:LoginService,public userService:UserService,private snackbar:MatSnackBar,private router:Router){}

  verifySecretData(){
    this.user.id = this.login.getUser().id;
    this.userService.verifySecretKey(this.user).subscribe((data:any) => {
      this.isVerified = data;
      if(this.isVerified == false){
        Swal.fire("Please enter right secret key !!");
      }
    },(error)=>{Swal.fire('error',"Server didn't respond.Please try again!",'error')}
    )
    
  }

  updateData(){

    this.userService.updateUser(this.user).subscribe(
      
      (data:any)=>{
        console.log(data);
        Swal.fire(data.username+' Updated Successfully !','Success').then((data) => {
          if(data.isConfirmed){
            localStorage.removeItem("user")
            localStorage.removeItem("id")
            localStorage.removeItem("token")
            Swal.fire({
              title:"User loggedout !! Please login again !!",
              showLoaderOnConfirm:true
            })
            setTimeout(function(){
              window.location.reload();
           }, 3000);
          }

        })
      
        
        
      },
      (error) => {
        console.log(error);
        Swal.fire('Something went wrong !','Error');
      }
    )
  }

  doReset(this: any){
    this.user.username='';
    this.user.password='';
    this.user.secretQuestion='';
    this.user.secretAnswer='';
  }

}
