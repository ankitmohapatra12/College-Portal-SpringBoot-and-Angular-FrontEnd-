import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user.service';
import { User } from '../../Models/user.module'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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

  isSubmit=false;

  constructor(private userService:UserService,private snackbar:MatSnackBar){

  }

  ngOnInit(): void {

    if(this.isSubmit==true){
      window.location.reload();
    }
  }

  formSubmit(){

    if(this.user.username=='' || this.user.username==null){
      this.snackbar.open('Username cant be blank !','Close',{
        verticalPosition:'bottom',
        horizontalPosition:'center',
      });
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data);
        this.isSubmit=true;
        this.doReset();
        Swal.fire(data.username+' Registered Successfully !','Success').then((data:any) => {

          if(this.isSubmit==true){
            
            window.location.reload();
          }
        })

        //this.doReset();
        
      },
      (error) => {
        console.log(error);
        Swal.fire('Something went wrong !','Error');
        this.doReset();
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
    this.user.address='',
    this.user.pincode='',
    this.user.secretQuestion='',
    this.user.secretAnswer=''
    
  }
  

  }


