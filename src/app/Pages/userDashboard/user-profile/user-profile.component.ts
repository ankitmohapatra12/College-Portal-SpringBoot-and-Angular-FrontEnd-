import { Component,OnInit} from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    image:any;
    imageDisplay:any;
    userimage:any;
  uploaded:boolean=false;

  imageUrl:any;
  user:any

  constructor(public login:LoginService,public userService:UserService,private sanitizer:DomSanitizer){}

  ngOnInit(): void {
    this.user = this.login.getUser()
    
    this.userService.getUploadImage(this.user.id).subscribe((data:any) => {
      console.log(data)
      if(data.imageName === null){
        Swal.fire("Please upload an image !!")
      }
      else{
        
        this.uploaded = true
        this.userimage=data
        this.imageUrl = this.sanitizeImageUrl(this.userimage.imageName);
        console.log(this.imageUrl)
        
      }
    },
    (error) => {
      console.log(error)
      Swal.fire("Failed","Unable to fetch image !!",'error')
    })
  }
  sanitizeImageUrl(imageUrl:any): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
   }

  public logout(){
    this.login.logout();
    console.log(localStorage);
    window.location.reload();
  }

  upload(event:any){
    //console.log(event.target.files[0])
    this.image = event.target.files[0]
    this.userService.imageUpload(this.image).subscribe((data:any) => {
      this.imageDisplay = data;
      
      console.log(data)
      Swal.fire({
        title:"Image uploaded Successfully!",
        timer:5000
      })
      window.location.reload()
    },(error) => {

      Swal.fire("Error","Error uploading image",'error')
      window.location.reload()
    })
  }


}
