import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user.module';
import baseUrl from './help.module';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private login:LoginService) { }

  user:any;
  //add User
  public addUser(user:User){
    return this.http.post(`${baseUrl}/user/`,user);
  }

  public updateUser(user:User){
    return this.http.put(`${baseUrl}/user/update/${user.id}`,user);
  }

  public toggleActiveUser(active:any,userid:any){
    let formData = new FormData();
    formData.append("active",active)
    formData.append("userid",userid)
    return this.http.put(`${baseUrl}/user/toggle-enabled`,formData);
  }

  public getAllUsersAdmin(){
    return this.http.get(`${baseUrl}/user/all-users`);
  }

  public verifySecretKey(user:User){
    return this.http.post(`${baseUrl}/user/verify-secret-key`,user);
  }

  public imageUpload(image:any){
    //return this.http.post(`${baseUrl}/user/verify-secret-key`,user);
    let formData = new FormData();
    formData.append("file",image)
    this.user = this.login.getUser()
    //console.log(this.user.id)
    formData.append("user",this.user.id)
    return this.http.put(`${baseUrl}/user/upload-image`,formData)
  }

  public getUploadImage(userid:any){
    
    //return this.http.post(`${baseUrl}/user/verify-secret-key`,user)
    return this.http.get(`${baseUrl}/user/get-profile-image/${userid}`)
  }

}
