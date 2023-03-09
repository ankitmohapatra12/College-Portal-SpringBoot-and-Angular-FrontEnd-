import { Component,Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AcademicService } from 'src/app/Services/academic.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-dialog-academic-details',
  templateUrl: './user-dialog-academic-details.component.html',
  styleUrls: ['./user-dialog-academic-details.component.css']
})
export class UserDialogAcademicDetailsComponent implements OnInit{

  user:any;
  academicsadd={
    academicId:0,
    course:'',
    dept:'',
    section:'',
    registrationNumber:'',
    startBatch:'',
    endBatch:'',
    hodname:'',
    blockNumber:'',
    roomNumber:'',
    admissionDate:'',
    userid:0
  }
  academics={
    academicId:0,
    course:'',
    dept:'',
    section:'',
    registrationNumber:'',
    startBatch:'',
    endBatch:'',
    hodname:'',
    blockNumber:'',
    roomNumber:'',
    admissionDate:'',
    userid:0
  }


  
  constructor(public dialogRef: MatDialogRef <UserDialogAcademicDetailsComponent>,@Inject(MAT_DIALOG_DATA) public data: any,public academicService:AcademicService){

  }
  ngOnInit(): void {
    this.user = this.data
    this.academics = this.user.academicDetail
  }

  updateAcademics(){
    this.academics.userid = this.user.id;
   // console.log(this.academics.userid)
    this.academicService.updateUserAcademicData(this.academics).subscribe((data) =>{
      Swal.fire(`${this.user.username}'s Academic Data Updated Successfully !!`,'success')
      window.location.reload();
    },(error) => {
      Swal.fire("Error","Failed to update data !!",'error')
    })
  }

  addAcademics(){
    this.academicsadd.userid = this.user.id;
    this.academicService.addUserAcademicData(this.academicsadd).subscribe((data:any) => {
      Swal.fire("Success","Academic Data Added !!",'success')
      window.location.reload();

    },(error) => { 
      Swal.fire("Failed","Failed to add data !!",'error')
    })
  }
}
