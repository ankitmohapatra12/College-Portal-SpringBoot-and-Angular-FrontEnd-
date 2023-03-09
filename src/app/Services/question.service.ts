import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './help.module';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getQuestionsOfQuiz(qid:any){
    return this.http.get(`${baseUrl}/question/quiz/all/${qid}`)
  }

  public getQuestionsOfQuizForTest(qid:any){
    return this.http.get(`${baseUrl}/question/quiz/${qid}`)
  }
  

  public addQuestionOfQuiz(question:any){

    return this.http.post(`${baseUrl}/question/add`,question)
  }


  public getSingleQuestionOfQuiz(quesid:any){

    return this.http.get(`${baseUrl}/question/${quesid}`)
  }

  public updateQuestion(question:any){

    return this.http.put(`${baseUrl}/question/update`,question)
  }

  public deleteQuestion(questionId:any){
    return this.http.delete(`${baseUrl}/question/${questionId}`)
  }

  public evalQuiz(questions:any){
    return this.http.post(`${baseUrl}/question/eval-quiz`,questions)
  }

  public getQuizResultsOfUser(qid:any,userid:any){
    return this.http.get(`${baseUrl}/question/view-result/${qid}/${userid}`)
  }

}
