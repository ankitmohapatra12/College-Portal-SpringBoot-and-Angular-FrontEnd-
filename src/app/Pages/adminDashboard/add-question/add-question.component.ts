import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit{


  
  public Editor = ClassicEditor;
  
  
  

  quesid:any;
  question={
    quiz:{
      qid:0
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }

  constructor(private route:ActivatedRoute,private questionService:QuestionService,private router:Router){}
  ngOnInit(): void {
    this.quesid = this.route.snapshot.params['qid'];
    this.question.quiz['qid'] = this.quesid;
  }

  formSubmit(){
    if(this.question.content.trim() == '' || this.question.content.trim() == null){
      Swal.fire("Required !","Question cant be blank !",'error')
      this.router.navigate(['/admin/quizes'])
    }
    this.questionService.addQuestionOfQuiz(this.question).subscribe(
      (data:any) =>{
        Swal.fire('Success',"Successfully added Question !!",'success');
          this.question.content = '',
          this.question.answer = '',
          this.question.option1='',
          this.question.option2='',
          this.question.option3='',
          this.question.option4=''
      },
      (error) => {
        Swal.fire("Error","Unable to save question !!",'error')
      }
      )
    
  }
}
