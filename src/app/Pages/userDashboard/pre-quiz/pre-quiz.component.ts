import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pre-quiz',
  templateUrl: './pre-quiz.component.html',
  styleUrls: ['./pre-quiz.component.css']
})
export class PreQuizComponent implements OnInit{

  qid:any;
  quiz:any;

  constructor(private route:ActivatedRoute,private quizService:QuizService,private router:Router){}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.quizService.singleQuiz(this.qid).subscribe(
      (data:any) => {
        this.quiz  =  data;
      },
      (error) => {
        Swal.fire("error","Error in fetching Quiz !!",'error');
      }
    )

  }

  startQuiz(){
    Swal.fire({
      title:'Do you want to start the Quiz ?',
      showCancelButton:true,
      confirmButtonText:'Start',
      icon:'warning'
    }).then((result) => {
      if(result.isConfirmed){
        localStorage.setItem("Text","exam")
        this.router.navigate(['/quiz/start/'+this.qid])
      }
    })
  }

}
