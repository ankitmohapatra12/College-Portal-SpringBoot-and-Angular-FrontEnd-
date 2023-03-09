import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit{

  qid:any;
  userid:any;
  quizResults:any;
  

  constructor(private router:ActivatedRoute,private questionService:QuestionService){}

  ngOnInit(): void {
    this.qid=this.router.snapshot.params['qid'];
    this.userid=this.router.snapshot.params['userid'];
    
    this.questionService.getQuizResultsOfUser(this.qid,this.userid).subscribe((data:any) =>{
      this.quizResults =  data;
      this.quizResults.forEach((r:any) =>{
        r.marksGot>40 ? r['status']='passed' :r['status']='failed';
        r['percentile']=(r.marksGot*100)/r.quizes.maxMarks;
      })
    },
    (error) =>{ 
      Swal.fire("error","Unable to fetch quiz results",'error')
    }
    )

  }

}
