import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit{

  categories = [
    {
      cid:23,
      title:"programming"
    },
    {
      cid:24,
      title:"programminga"
    }
  ]

  quizData = {
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    maxTime:0,
    active:true,
    category:{
      cid:'',
    },
  }

  constructor(private category : CategoryService,private quizService:QuizService){

  }


  ngOnInit(): void {
    this.category.categories().subscribe(
      (data:any) => {
        this.categories = data;
        console.log(this.categories)
      },
      (error) => {
        Swal.fire('Error',"Error in loading categories",'error')
      }
    )
  }


  addQuiz(){
    if(this.quizData.title.trim()=='' || this.quizData.title==null){
      Swal.fire("","Title is required ",'error')
      return;
    }
    if(this.quizData.description.trim()=='' || this.quizData.description==null){
      Swal.fire("","Description is required ",'error')
      return;
    }
    if(this.quizData.maxMarks.trim()=='' || this.quizData.maxMarks==null){
      Swal.fire("","maxMarks is required ",'error')
      return;
    }

    if(this.quizData.numberOfQuestions.trim()=='' || this.quizData.numberOfQuestions==null){
      Swal.fire("","Number of questions is required ",'error')
      return;
    }
    if(this.quizData.category.cid=='' || this.quizData.category.cid==null){
      Swal.fire("","Category is required ",'error')
      return;
    }
    


    this.quizService.addQuiz(this.quizData).subscribe(
      (data:any) => {
        Swal.fire("Success","Quiz saved successfully !",'success');
        this.doReset();
      },
      (error) => {
        Swal.fire("Error","Error Saving data !",'error')
      }
    )
    
  }

  doReset(){
    this.quizData.title=''
    this.quizData.description=''
    this.quizData.numberOfQuestions=''
    this.quizData.maxMarks=''
    this.quizData.active=false
    this.quizData.category.cid=''
    this.quizData.maxTime = 0
  }

}
