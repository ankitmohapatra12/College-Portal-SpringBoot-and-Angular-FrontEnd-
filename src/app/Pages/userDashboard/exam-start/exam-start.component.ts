import { LocationStrategy } from '@angular/common';
import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exam-start',
  templateUrl: './exam-start.component.html',
  styleUrls: ['./exam-start.component.css']
})
export class ExamStartComponent implements OnInit {


  qid:any;
  questions:any;

  width="200px";
  height="200px"
  color:string='accent'

  marksGot=0;
  correctAnswers = 0;
  attempted=0;

  timer:any;
  totTime:any;

  startTime:any;
  endTime:any;
  totalTime:any;

  result:any

  isSubmit=false;
  
  

  constructor(private locationSt:LocationStrategy,private route:ActivatedRoute,private questionService:QuestionService){}


  ngOnInit(): void {
    this.preventBackButton();
    this.qid  =  this.route.snapshot.params['qid']
    this.loadQuestions();
    
  }

  loadQuestions(){
    this.questionService.getQuestionsOfQuizForTest(this.qid).subscribe((data :any) => {
      this.questions = data;
      data.forEach((item:any) => {
        this.totTime = item.quiz.maxTime;
      })
      this.timer = this.totTime*60;
      this.questions.forEach((q:any) =>{
        q['givenAns']='';
        q['startTime']=new Date().toLocaleString();
        this.startTime = new Date().toLocaleString()
      })
      this.startTimer()
      console.log(this.questions)
      
      
    },
    (error) => {
     Swal.fire("Error","Error in loading Quiz !!",'error');
    })
   
  }

  startTimer(){
    let t:any = window.setInterval(() =>{
      if(this.timer<=0){
        this.evalQuiz();
        clearInterval(t);
      }
      else{
        this.timer--;
      }
    },1000)
  }

  preventBackButton(){
    history.pushState(null,'',location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null,'',location.href)
    })
  }


  submitQuiz(){
    Swal.fire({
      title:'Do you want to submit Quiz ?',
      showCancelButton:true,
      confirmButtonText:'Submit',
      icon: 'warning',
    }).then((e) => {
      if(e.isConfirmed){
        this.evalQuiz()
      }
    })
  }

  evalQuiz(){
    if(!this.isSubmit){

   
    this.questions.forEach((q:any) => {
      q['endTime']=new Date().toLocaleString();
      q['user']=localStorage.getItem('user')
    })
    
    this.questionService.evalQuiz(this.questions).subscribe((data:any) => {
      this.result = data;
      this.isSubmit=true;
    },
    (error) => {
      console.log(error)
    }
    )
  }
  }

  getFormattedTime(){
    

    if(this.timer>900){
      this.color = 'primary'
    }
    
    if(this.timer<=900){
      this.color = 'accent'
    }
    
    if(this.timer<=300){
      this.color = 'warn'
    }
    
    let d = Number(this.timer);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    
    return `${h} hr : ${m} mn : ${s} sec`; 
    
  }
}



