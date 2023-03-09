import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit{

  cid:any;
  quizes =[ {
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

  user:any;
  userid:any;
  constructor(private route: ActivatedRoute,private quizService:QuizService,private login:LoginService){}

  ngOnInit(): void {
    //this.cid = this.route.snapshot.params['cid'];
    this.user = this.login.getUser();
    this.userid = this.user.id;
    console.log("userid   :"+this.userid)
    this.route.params.subscribe((params:any) =>{
      this.cid = params.cid;
      if(this.cid == 0){
       
        this.quizService.getActiveQuizes().subscribe(
          (data:any) => {
            this.quizes =  data;
            console.log(this.quizes)
          },
          (error) => {
            Swal.fire('error','Failed to load Quizes !!','error')
          }    
        )
      }
      else{
        
        this.quizService.getActiveQuizesOfCategory(this.cid).subscribe(
          (data:any) => {
            this.quizes = data;
            console.log(this.quizes)
          },
          (error) => {
            Swal.fire('error','Failed to load Quizes !!','error')
          }    
        )
        
      }
    })
    

  }


}
