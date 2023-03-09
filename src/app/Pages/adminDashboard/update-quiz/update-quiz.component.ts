import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit{

  constructor(private route:ActivatedRoute,private quizService:QuizService,private category:CategoryService,private router:Router){}


  qid=0;
  quiz:any;
  categories:any;

  ngOnInit(): void {
     
    this.qid = this.route.snapshot.params['qid'];
    this.quizService.singleQuiz(this.qid).subscribe(
      (data) => {
        this.quiz = data;
        console.log(this.quiz)
      },
      (error) => {
        Swal.fire("Error fetching details !",'error')
      }
     )

     this.category.categories().subscribe(
      (data:any) =>{ this.categories = data },
      (error:any) => { 
        Swal.fire("Error","Error loading Categories !",'error') 
      });
  }

  updateData(){
    this.quizService.updateQuiz(this.quiz).subscribe(
      (data) => {
        Swal.fire("Success","Successfully updated quiz !",'success').then((e) =>{
          this.router.navigate(['/admin/quizes'])
        })
        
      },
      (error) =>{
        Swal.fire("Failed to update quiz !!",'error')
        
      }
      )
    
  }

  

}
