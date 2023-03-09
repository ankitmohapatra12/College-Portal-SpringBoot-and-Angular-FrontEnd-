import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    username:'',
    password:'',
  };
constructor(private snackbar :MatSnackBar,private login : LoginService,private router:Router){}

  formSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == ''){
      this.snackbar.open("Username is required !!","Close");
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == ''){
      this.snackbar.open("Password is required !!","Close");
    }


    //requesting to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data:any) => {
        
        
        
        //login
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any) => { 
            console.log(user)
            
            if(user.enabled == true){
              this.login.setUser(user); 
              //console.log(user)
              this.snackbar.open("Successfully Logged in !!","Close");
              if(this.login.getUserRole() == 'ADMIN'){
                this.router.navigate(['admin'])
                this.login.loginStatus.next(true);
                //window.location.href = 'admin'
              }
              else if(this.login.getUserRole() == 'USER'){
                this.router.navigate(['user'])
                this.login.loginStatus.next(true);
                //window.location.href = 'user'
              }
              else{
                this.login.logout();
              }
            }
            else{
              Swal.fire("User is not enabled !! Wait for admin's response")
            }
            
          },
          (error)=>{
            Swal.fire("User is not enabled !! Wait for admin's response")
          }

        )

      },
      (error) =>{
        console.log(error);
        this.snackbar.open("Login Failed","Close");
      }
    )
      

  }
}
