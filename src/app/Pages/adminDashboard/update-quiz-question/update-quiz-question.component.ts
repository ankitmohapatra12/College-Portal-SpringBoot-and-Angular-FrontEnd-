import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-quiz-question',
  templateUrl: './update-quiz-question.component.html',
  styleUrls: ['./update-quiz-question.component.css']
})
export class UpdateQuizQuestionComponent implements OnInit{


  public Editor = ClassicEditor;

  qid:any;
  question:any;


  constructor(private route:ActivatedRoute,private questionService:QuestionService,private router:Router){}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid']
    console.log(this.qid)
    this.questionService.getSingleQuestionOfQuiz(this.qid).subscribe(
      (data:any) => {
        this.question = data;
        console.log(this.question)
      },
      (error) => {
        Swal.fire("Error","Error loading data !!",'error')
      }
    )
  }


  updateData(){
    this.questionService.updateQuestion(this.question).subscribe(
      (data:any) => {
        Swal.fire("Success","Question updated Successfully !!",'success').then(() => {
          this.router.navigate(['/admin/view-questions/'+this.question.quiz.qid+'/'+this.question.quiz.title]);
        })
        
      },
      (error) => {
        Swal.fire("Error","Error updating question !!",'error')
      }
    )
  }

}
