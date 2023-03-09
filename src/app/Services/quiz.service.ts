import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './help.module';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public quizes(){
    return this.http.get(`${baseUrl}/quiz/`);
  }


  public singleQuiz(qid:any){
    return this.http.get(`${baseUrl}/quiz/${qid}`)
  }

  public addQuiz(quiz:any){
    return this.http.post(`${baseUrl}/quiz/add`,quiz)
  }

  public updateQuiz(quiz:any){
    return this.http.put(`${baseUrl}/quiz/update`,quiz)
  }


  public deleteQuiz(qid:any){
    return this.http.delete(`${baseUrl}/quiz/${qid}`)
  }


  public getQuizesOfCategory(cid:any){
    return this.http.get(`${baseUrl}/quiz/category/${cid}`);
  }


  public getActiveQuizes(){
    return this.http.get(`${baseUrl}/quiz/active`);
  }

  public getActiveQuizesOfCategory(cid:any){
    return this.http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }
}
