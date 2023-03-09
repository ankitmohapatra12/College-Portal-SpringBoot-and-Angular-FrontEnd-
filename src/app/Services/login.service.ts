import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../Models/user.module';
import baseUrl from './help.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatus = new Subject<boolean>();

  constructor(private http : HttpClient) { }


  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`)
  }


  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  //login user : set token in local storage
  public loginUser(token:any){
    //console.log(localStorage.getItem('user'))
    localStorage.setItem('token',token);
    return true;
  }

  //checks if user is logged in
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined  || tokenStr == '' || tokenStr == null){
      return false;
    }
    else{
      return true;
    }
  }


  //logout functionality but removing token from local storage
  public logout(){
    
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    localStorage.removeItem('id')
    
    console.log("loggedout")
   // window.location.href='/login';
    return true;
  }


  //get token from local storage
  public getToken(){
    return localStorage.getItem('token');
  }


  //set user detail
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public setProfileData(user:any){
  //  user:user = JSON.parse(localStorage.getItem('user'));
    localStorage.setItem('user',JSON.stringify(user));
    var arr = localStorage.getItem('user')
  }


  //get user
  public getUser(){
    let userstr = localStorage.getItem("user");
    if(userstr!=null){
      //console.log(userstr);
      return JSON.parse(userstr);
      
    }
    else{
      this.logout();
      return null;
    }
  }

  public getUserRole(){
    let user = this.getUser()
    return user.authorities[0].authority ;
  }


  public getUserEnabled(){
    let user = this.getUser()
    return user.authorities[0].authority ;
  }



}
