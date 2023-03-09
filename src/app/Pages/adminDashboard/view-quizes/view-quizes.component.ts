import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit{
 

  quizess =[ {
    
      qid:0,
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestions:'',
      active:false,
      category:{
        cid:0,
        title:'',
        description:''
      }
    }
  ]
  

  constructor(private quiz:QuizService){}

  ngOnInit(): void {
    this.quiz.quizes().subscribe(
      (data:any) =>{
        this.quizess = data;
        console.log(data);
      },

      (error) => {
        Swal.fire('Error !',"Error fetching data",'error')
      }
    )
  }

  deleteQuiz(qid:any){

    Swal.fire({
      icon: 'info',
      title:'Are you sure ?',
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((result) => {

      if(result.isConfirmed){
        this.quiz.deleteQuiz(qid).subscribe(
          (data:any)=>{
            this.quizess = this.quizess.filter((data) => data.qid!=qid);
            Swal.fire("Success","Successfully deleted quiz",'success')
          },
          (error) =>{
            Swal.fire("","Unable to delete !!",'error')
          }
          
        )
      }
    })
  }

}
