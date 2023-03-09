import { Component,OnInit } from '@angular/core';
import { AcademicService } from 'src/app/Services/academic.service';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-academic-details',
  templateUrl: './academic-details.component.html',
  styleUrls: ['./academic-details.component.css']
})
export class AcademicDetailsComponent implements OnInit {

  academicData={
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

  academicDataUpdate={
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

  

  isclicked=false;
  user:any

  constructor(private academicService:AcademicService,private login:LoginService){

  }
  ngOnInit(): void {
    
    this.isclicked=false;

  }

  loadPreviousAcademicData(){
    this.isclicked=true;
    this.user = this.login.getUser();
    this.academicData.userid = this.user.id;
    this.academicService.getUserAcademicData(this.academicData.userid).subscribe((data:any)=>{

      this.academicData  = data;
      var datef = this.academicData.admissionDate.split(" ");
      this.academicData.admissionDate = datef[0];
      
    },(error)=>{
      Swal.fire("Academic data not added please Academic Data !!",'error')
      return;
    }
    )

    
  }

  academicDataSubmit(){

    this.user = this.login.getUser();
    this.academicData.userid = this.user.id;

    this.academicService.addUserAcademicData(this.academicData).subscribe((data:any) => {
      Swal.fire("Success","Academic Data Added !!",'success')

    },(error) => { 
      Swal.fire("Failed","You have already submitted your data !!",'error')
    })
  }


  updateData(){

    this.academicDataUpdate.academicId =  this.academicData.academicId;
    this.academicDataUpdate.course =  this.academicData.course;
    this.academicDataUpdate.dept =  this.academicData.dept;
    this.academicDataUpdate.section =  this.academicData.section;
    this.academicDataUpdate.academicId =  this.academicData.academicId;
    this.academicDataUpdate.registrationNumber =  this.academicData.registrationNumber;
    this.academicDataUpdate.startBatch =  this.academicData.startBatch;
    this.academicDataUpdate.endBatch =  this.academicData.endBatch;
    this.academicDataUpdate.hodname =  this.academicData.hodname;
    this.academicDataUpdate.blockNumber =  this.academicData.blockNumber;
    this.academicDataUpdate.roomNumber =  this.academicData.roomNumber;
    this.academicDataUpdate.admissionDate =  this.academicData.admissionDate;
    this.academicDataUpdate.userid =  this.academicData.userid;

    
    this.user = this.login.getUser();
    this.academicDataUpdate.userid = this.user.id;
    
    
    this.academicService.updateUserAcademicData(this.academicDataUpdate).subscribe((data:any) => {
      Swal.fire("Success","Academic Data updated !!",'success')

    },(error) => { 
      Swal.fire("Failed","Error updating data !!",'error')
    })
  }


  
}
