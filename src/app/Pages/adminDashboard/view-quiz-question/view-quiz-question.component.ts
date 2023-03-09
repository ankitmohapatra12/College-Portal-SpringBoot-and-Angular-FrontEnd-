import { Component } from '@angular/core';
import {OnInit} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-question',
  templateUrl: './view-quiz-question.component.html',
  styleUrls: ['./view-quiz-question.component.css']
})
export class ViewQuizQuestionComponent implements OnInit{
  qid:any;
  qtitle:any;
  questions=null;
  
  constructor(private route:ActivatedRoute,private question:QuestionService,private router:Router){}
  
  ngOnInit(): void {
    this.qid = this.route.snapshot.params['id'];
    this.qtitle = this.route.snapshot.params['title'];
    this.question.getQuestionsOfQuiz(this.qid).subscribe(
      (data:any) =>{
        this.questions = data;
        console.log(this.questions);
      },
      (error:any) =>{
        Swal.fire("Error!","Error loading data !",'error')
        console.log(this.questions);
      }
    )
  }


  deleteQuestion(quesid:any){

    Swal.fire({
      icon: 'info',
      title:'Are you sure ?',
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((result) => {

      if(result.isConfirmed){
        this.question.deleteQuestion(quesid).subscribe(
          (data:any)=>{
              //(data:any) => ques !=quesid);
            Swal.fire("Success","Successfully deleted quiz",'success').then((e) => {
              window.location.reload();
            })
            
          },
          (error) =>{
            Swal.fire("","Unable to delete !!",'error')
          }
          
        )
      }
    })
  }


  

}
